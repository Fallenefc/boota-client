/* eslint-disable no-underscore-dangle */
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../Store/reducer';
import QuestionCard from '../QuestionCard/QuestionCard';
import './styles.css';

export default function QuestionList(): ReactElement {
  const questions = useSelector((state: State) => state.questions);

  return (
    <div className="question-view-container">
      <div className='question-total'>
        Total Questions: {questions.length}
      </div>
      {questions.map((value, index) => (
        <QuestionCard
          info={value}
          key={value._id}
          index={index}
          quizWindow={false}
        />
      ))}
    </div>
  );
}
