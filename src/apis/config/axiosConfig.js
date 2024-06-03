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

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
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
);

export default axiosInstance;