import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { State } from '../../Store/reducer';
import './styles.css';
import logoImg from '../../Assets/logo.svg';
import { addUser } from '../../Store/actions';

export default function Header(): ReactElement<React.FC> {
  const user = useSelector((state: State) => state.user);
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
      setDropdown(!dropdown);
  }

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    history.push({ pathname: '/' });
  };

  const handleLogout = () => {
    dispatch(addUser(null));
    localStorage.removeItem('token');
    history.push('/');
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="website-logo" onClick={handleClick}>
          <img src={logoImg} height="100%" width="150px" alt="header logo" />
        </div>
      </div>
      <div className="user-logout">
        <div className="welcome">
          Welcome, {" "}
          {user?.name}
          !
        </div>
        <div className="logout-button">
          <button onClick={handleLogout} type="button">Logout</button>
        </div>
        <div className="mobile-menu">
          <i className="fa fa-bars" onClick={toggleDropdown}></i>
          {dropdown ?
            <div className="dropdown-content">
              <i className="fa fa-times modal-close" onClick={toggleDropdown}></i>
              <section className='anchors'>
                <a href='/'>Dashboard</a>
                <a href='/viewQuestions'>View Questions</a>
                <a href='/addQuestion'>Add Questions</a>
                <a href='/viewQuizzes'>View Quizzes</a>
                <a href='createQuiz'>Create Quiz</a>
              </section>
              <section className="login" onClick={handleLogout}>
                <a>Logout</a>
              </section>
            </div>
            : null
          }
        </div>
      </div>
    </header>
  );
}
