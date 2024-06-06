import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://54.160.149.14:9999/',  // API의 기본 URL을 설정합니다.
  timeout: 10000,  // 요청 타임아웃 시간 설정 (밀리초 단위)
  headers: {
    'Content-Type': 'application/json',  // 기본 요청 헤더 설정
  },
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    
    if (config.url === '/api/logout' && refreshToken) {
      config.headers['Authorization'] = `Bearer ${refreshToken}`;
    } else if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });

  failedQueue = [];
};

// 응답 인터셉터 추가
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('refreshToken');

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      if (!refreshToken) {
        // 로그아웃 등의 처리를 위해 refreshToken이 없을 때 추가 로직
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token;
          return axiosInstance(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise(function (resolve, reject) {
        axios.post('http://54.160.149.14:9999/api/access-token', { token: refreshToken })
          .then(({ data }) => {
            localStorage.setItem('accessToken', data.accessToken);
            axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + data.accessToken;
            originalRequest.headers['Authorization'] = 'Bearer ' + data.accessToken;
            processQueue(null, data.accessToken);
            resolve(axiosInstance(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            reject(err);
          })
          .then(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(error);
  }
);


export default axiosInstance;

// axiosInstance.interceptors.response.use(
//   response => {
//     return response;
//   },
// );

// async error => {
 //   const originalRequest = error.config;
 //   if (error.response.status === 401 && !originalRequest._retry) {
 //     originalRequest._retry = true;
 //     try {
 //       const refreshToken = localStorage.getItem('refreshToken');
 //       const response = await axiosInstance.post('/api/access-token', { token: refreshToken });

 //       const newToken = response.refresh_token;
 //       localStorage.setItem('accessToken', newToken);

 //       axiosInstance.headers['Authorization'] = `Bearer ${newToken}`;
        
 //       return axiosInstance(originalRequest);
 //     } catch (err) {
 //       return Promise.reject(err);
 //     }
 //   }
 //   return Promise.reject(error);
 // }