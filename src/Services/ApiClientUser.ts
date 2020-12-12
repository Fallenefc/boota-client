import api from './AxiosConfig';

export const logIn = async (username: string, password: string) => {
  try {
    const response: any = await api().post('/login', {
      username: username,
      password: password,
    });
    return response;
  } catch (err) {
    return false;
  }
};

export const signUp = async (user: any) => {
  try {
    await api().post('/signup', user);
    return true;
  } catch (err) {
    return false;
  }
};
