import React, { ReactElement } from 'react';
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
  return (
    <div className="student-question-card" key={id}>
      <h3 className="student-question-stem">
        {index + 1}
        .
        {stem}
      </h3>
      {options.map((option: string, mapIndex: number) => (
        <div className="options-container" key={mapIndex}>
          <input
            type="radio"
            onClick={() => handleChoice(id, mapIndex)}
            name={index.toString()}
          />
          {option}
        </div>
      ))}
    </div>
  );
}
