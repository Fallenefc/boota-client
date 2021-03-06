/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import './App.css';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo, getApiQuestions, getApiQuizzes } from './Services/ApiClient';
import Routes from './Pages/Routes';
import {
  addUser, apiCallIsMade, getQuestions, getQuizzes,
} from './Store/actions';
import './Assets/styles/global.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { State } from './Store/reducer';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);
  const isApiCallMade = useSelector((state: State) => state.isApiCallMade);

  useEffect(() => {
    getInfo()
      .then((response): void => {
        if (response === false) {
          // set user info to false
          dispatch(apiCallIsMade());
        }
        if (response) {
          // Sets status as logged in
          // Stores user information in Redux store
          dispatch(addUser(response.data));
          // gets questions and stores the questions in the Redux store
          getApiQuestions().then((res: any) => {
            dispatch(getQuestions(res.data));
          });
          // gets quizzes, stores data in the Redux store
          getApiQuizzes().then((res: any) => {
            dispatch(getQuizzes(res.data));
          });
          dispatch(apiCallIsMade());
        }
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('Please log in first');
      });
  }, [isApiCallMade]);

  return (
    <>
      {user ? (
        <Routes />
      ) : isApiCallMade ? <Routes /> : (
        <div className="loader">
          <Loader
            type="Puff"
            color="#fff"
            height={100}
            width={100}
            timeout={10000}
          />
          <span className="loading-text">Loading...</span>
        </div>
      )}
    </>
  );
}

export default App;
