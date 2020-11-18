// API Client Service that makes the GET and the POST requests
import { AxiosResponse } from 'axios';
import api from './AxiosConfig';

// Get /me information

// Makes the API request to the /me endpoint and if the user is authorized, it
export const getInfo = async () => {
  try {
    const response: AxiosResponse = await api().get('/me');
    return response;
  } catch (err) {
    return false;
  }
};

export const getApiQuestions = async () => {
  try {
    const response: AxiosResponse = await api().get('/questions');
    return response;
  } catch (err) {
  }
};

export const postQuestion = async (questionBody: any) => {
  try {
    const response: AxiosResponse = await api().post('/questions', questionBody);
    return response;
  } catch (err) {
  }
};

export const deleteQuestion = async (questionId: string) => {
  try {
    await api().delete(`/questions/${questionId}`);
  } catch (err) {
  }
};

export const getApiQuizzes = async () => {
  try {
    const response: AxiosResponse = await api().get('/exams');
    return response;
  } catch (err) {
  }
};

export const getFullQuiz = async (quizId: string) => {
  try {
    const response: AxiosResponse = await api().get(`/singleExam/${quizId}`);
    return response;
  } catch (err) {
  }
};

export const createExam = async (title: string) => {
  try {
    const response: AxiosResponse = await api().post('/exams', { title });
    return response.data;
  } catch (err) {
  }
};

export const apiAddQuestionToQuiz = async (
  questionId: string,
  quizId: string
) => {
  try {
    const response: AxiosResponse = await api().post('/addQuestion', {
      questionId,
      _id: quizId,
    });
    return questionId;
  } catch (err) {
  }
};

export const apiDeleteAnExam = async (examId: string) => {
  try {
    await api().delete(`/exams/${examId}`);
    return true;
  } catch (err) {
  }
};

export const apiDeleteQuestionFromExam = async (
  examId: string,
  questionId: string,
) => {
  try {
    await api().post('/deleteQuestion', {
      examId,
      questionId,
    });
    return true;
  } catch (err) {
  }
};

export const apiGetFullExamAsAStudent = async (examId: string) => {
  try {
    const response = await api().get(`/startExam/${examId}`);
    return response.data;
  } catch (err) {
  }
};

export const submitAnExamAsAStudent = async (
  examId: string,
  answers: any,
  questions: string[]
) => {
  try {
    const response = await api().post('/finishExam', {
      hashedId: examId,
      questions,
      answers,
    });
    return response;
  } catch (err) {
  }
};

export const submitAnExamAsATeacher = async (examId: string) => {
  try {
    const response = await api().post('/generateExam', {
      examId,
    });
    return response.data;
  } catch (err) {
  }
};
