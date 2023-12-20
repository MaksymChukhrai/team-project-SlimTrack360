import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// const authDB = axios.create({
//   baseURL: 'https://healthyhub-emsa.onrender.com/api/',
//   headers: { accept: 'application/json' },
//   // Authorization:
//   //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODBlMzZiMmU5YzlhMjNhMjhjODQ0ZiIsImlhdCI6MTcwMzAzMjEzNCwiZXhwIjoyMDE4NjA4MTM0fQ.Qe0UVaTrIQnVIITruXa7w3cYJ2o6QdIGBGpip_lBalU',
//   // },
// });

axios.defaults.baseURL = 'https://healthyhub-emsa.onrender.com/api/';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signin', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const localStoreToken = state.userAuth.token;

    if (localStoreToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(localStoreToken);
    try {
      const response = await axios.get('/user/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/forgot-password', credentials);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserParams = createAsyncThunk(
  'user/update',
  async (values, thunkAPI) => {
    try {
      if (values.avatarURL.startsWith('blob:')) {
        const file = await fetch(values.avatarURL).then((res) => res.blob());

        const formData = new FormData();
        formData.append('avatarUrl', file);
        formData.append('name', values.name);
        formData.append('age', values.age);
        formData.append('gender', values.gender);
        formData.append('currentWeight', values.weight);
        formData.append('height', values.height);
        formData.append('levelActivity', values.activity);

        const { data } = await axios.put('/user/update', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        return data;
      } else {
        const response = await axios.put('/user/update', values);
        return response.data;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
