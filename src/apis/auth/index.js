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
    const response = await axiosInstance.post('/api/logout');
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
