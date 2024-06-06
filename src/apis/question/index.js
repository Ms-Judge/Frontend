// 질문 개시판 API

import axiosInstance from "../config/axiosConfig";

export const questionUpload = async (qusetion) => {
  try {
    const response = await axiosInstance.post('/api/question_upload', qusetion);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const answerUpload = async (answer) => {
  try {
    const response = await axiosInstance.post('/api/answer_upload', answer);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getQuestions = async () => {
  try {
    const response = await axiosInstance.get('/api/questions');
    return response.data;
  } catch (error) {
    throw error;
  }
};
