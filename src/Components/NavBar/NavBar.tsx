import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  const history = useHistory();

  const handleClick = (event: any) => {
    history.push({ pathname: `/${event.target.name}` });
  };

  return (
    <div className="left-nav-bar">
      <div className="student-teacher-choices">Teacher</div>
      <button onClick={handleClick} name="viewQuestions" type="button">
        View Questions
      </button>
      <button onClick={handleClick} name="addQuestion" type="button">
        Add Question
      </button>
      <button onClick={handleClick} name="viewQuizzes" type="button">
        View Quizzes
      </button>
      <button onClick={handleClick} name="createQuiz" type="button">
        Create a Quiz
      </button>
    </div>
  );
};

export default NavBar;
