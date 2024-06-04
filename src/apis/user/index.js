import axiosInstance from '../config/axiosConfig';

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get('/api/mypage');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUserInfo = async (userData) => {
  try {
    const response = await axiosInstance.patch('/api/mypage', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const withdrawUser = async () => {
//   try {
//     const response = await axiosInstance.post('/api/logout');
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
