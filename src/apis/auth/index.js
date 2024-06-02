import axiosInstance from "../config/axiosConfig";

export const signup = async (userData) => {
  try {
    const response = await axiosInstance.post('/api/signup', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post('/api/login', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axiosInstance.post('/api/logout', {},  {
      headers: {
        'Authorization': `Bearer ${refreshToken}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refreshAccessToken = async (tokenData) => {
  try {
    const response = await axiosInstance.post('/api/access-token', tokenData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
