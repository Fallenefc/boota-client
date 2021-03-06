import React, { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import QuizCard from '../../Components/QuizCard/QuizCard';
import { State } from '../../Store/reducer';
import './styles.css';

export default function ViewQuizzes(): ReactElement {

  const quizzes = useSelector((state: State) => state.quizzes);

  return (
    <div className="quiz-view-container">
      {quizzes.map((quiz: any, index) => (
        <div className="quiz-card" key={quiz._id}>
          <QuizCard quiz={quiz} key={index} />
        </div>
      ))}
    </div>
  );
}
