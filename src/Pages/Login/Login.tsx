import React, { ReactElement, useState } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import pageImage from '../../Assets/login-hero.svg';
import logoImg from '../../Assets/quizilla.svg';
import { logIn } from '../../Services/ApiClientUser';
import AlertModal from '../../Components/AlertModal/AlertModal';
import { addUser, resetApiCall } from '../../Store/actions';
import Loader from 'react-loader-spinner';

export default function Login(): ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertModal, setAlertModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    if (event.target.name === 'password') setPassword(event.target.value);
    else setEmail(event.target.value);
  };

  const handleRedirect = () => {
    history.push({ pathname: '/signup' });
  };

  const handleAlertModal = () => {
    setAlertModal(false);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    // make the API request for a login, store the token in the local storage
    logIn(email, password)
      .then((response) => {
        localStorage.setItem('token', `Bearer ${response.data.token}`);
        setIsLoading(false);
        history.push({ pathname: '/' });
        dispatch(addUser(response.data.user));       
        dispatch(resetApiCall());
            // reset
        setEmail('');
        setPassword('');
      })
      .catch(() => {
        setIsLoading(false);
        setAlertModal(true);
      });
  };

  const redirectToHome = () => {
    history.push({ pathname: '/' });
  };

  return (
    <div className="login-page">
      {isLoading ? 
      <div className="loader">
      <Loader
        type="Puff"
        color="#fff"
        height={100}
        width={100}
        timeout={10000}
      /> <span className='loading-text'>Loading...</span> </div> : null}
      <div className="login-container">
        <div className="login-form-container">
          <div className="content-top">
            <div className="login-icon" onClick={redirectToHome}>
              <img src={logoImg} width="100px" alt="logo" />
            </div>
          </div>
          <div className="content-middle">
            <div className="login-title">Log In</div>
            <div className="no-account">
              {alertModal ? (
                <AlertModal
                  text="Invalid email/password"
                  handleAlertModal={handleAlertModal}
                />
              ) : null}
              Need a Boota account?
              {' '}
              <span onClick={handleRedirect}>Create an account</span>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <p>Email</p>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={email}
                required
              />
              <p>Password</p>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={password}
                required
              />
              <span className="keep-logged">
                <span>Keep me logged in</span>
                <input type="checkbox" />
              </span>
              <button type="submit">Log In</button>
            </form>
          </div>
          <div className="login-container-footer">
            <span>Forgot username?</span>
            <span>Forgot password?</span>
          </div>
        </div>
        <div className="img-container">
          <img src={pageImage} width="90%" alt="hero" />
        </div>
      </div>
    </div>
  );
}
