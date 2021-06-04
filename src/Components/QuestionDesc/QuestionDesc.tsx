import React from 'react';
import './styles.css';

interface Props {
  info: any;
}

const QuestionDesc = ({ info }: Props) => {
  const optionsNameArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  return (
    <div className="question-description">
      <p className="question-category">
        Category:
        {info.category}
      </p>
      <p className="question-stem">{info.stem}</p>
      {info.options.map((option: any, optionIndex: any) => (
        <div key={optionIndex} className={optionIndex === info.correct ? "question-option correct-option-choice" : "question-option"}>
          <span className={optionIndex === info.correct ? "question-choice correct-choice" : "question-choice"}>{optionsNameArray[optionIndex]}</span>
          <span className={optionIndex === info.correct ? "question-text correct-choice-text" : "question-text"}>{option}</span>
        </div>
      ))}
      <div className="correct">
        Correct Answer:
        {' '}
        {optionsNameArray[info.correct]}
      </div>
    </div>
  );
};


export default QuestionDesc;
