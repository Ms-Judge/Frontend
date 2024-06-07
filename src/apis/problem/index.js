// 문제 관련 기능 API
// 문제 출제, 정답코드 제출, 정답 코드 체점, 코드 불러오기 정도 아닐까 싶은
import axiosInstance from "../config/axiosConfig";

// 문제 업로드(출제)
export const problemUpload = async (problem) => {
  try {
    const response = await axiosInstance.post('/api/problem_upload', problem);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 
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
