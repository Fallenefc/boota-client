import React, { ReactElement, useState } from 'react';
import './styles.css';

interface Props {
  stem: string;
  options: string[];
  index: number;
  handleChoice: any;
  id: string;
}

export default function StudentQuestionCard({
  stem,
  options,
  index,
  handleChoice,
  id,
}: Props): ReactElement {

  const questionOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  const [selected, setSelected] = useState(null);

  const handleClick = (_: any, id: any, mapIndex: any) => {
    handleChoice(id, mapIndex);
    setSelected(mapIndex);
  }

  return (
    <div className="student-question-card" key={id}>
      <h3 className="student-question-stem">
        {index + 1}
        .
        {stem}
      </h3>
      {options.map((option: string, mapIndex: number) => (
        <div className={selected === mapIndex ? 'options-container selected' : 'options-container'} key={mapIndex}>
          <span>{questionOptions[mapIndex]}</span>
          <label onClick={(event) => handleClick(event, id, mapIndex)} htmlFor={index.toString()}>
          <input
            type="radio"
            onClick={(event) => handleClick(event, id, mapIndex)}
            name={index.toString()}
          />
          {option}</label>
        </div>
      ))}
    </div>
  );
}
