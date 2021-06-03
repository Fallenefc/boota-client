import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postQuestion } from '../../Services/ApiClient';
import { addQuestionToQuestionBank } from '../../Store/actions';
import './styles.css';

export default function AddQuestion(): ReactElement {

  const [options, setOptions] = useState(['', '', '']);
  const [stem, setStem] = useState('');
  const [correct, setCorrect] = useState<number | null>(0);
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e: any, index: number): void => {
    const stateCopy = [...options];
    stateCopy[index] = e.target.value;
    setOptions(stateCopy);
  };

  // This adds an option in the form
  const addAlternative = (e: any) => {
    e.preventDefault();
    if (options.length > 5) {
      alert('Cannot add more alternatives');
      return;
    }
    const newState = [...options];
    newState.push('');
    setOptions(newState);
  };

  // This removes the option in the form
  const deleteOption = (e: any, index: number) => {
    e.preventDefault();
    if (options.length <= 2) {
      alert('Minimum of two choices');
      return;
    }
    const newState = [...options];
    newState.splice(index, 1);
    setOptions(newState);
  };

  // Makes the API call and updates the state, redirect to view questions
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !stem || correct === null) {
      alert(
        'Missing one or more params, or you did not define a correct answer',
      );
      return;
    }

    const response = await postQuestion({
      title,
      stem,
      correct,
      options,
      category: 'Test',
    });
    if (response) dispatch(addQuestionToQuestionBank(response.data));

    setOptions(['', '', '']);
    setStem('');
    setTitle('');
    setCorrect(null);
  };

  return (
    <div className="add-question-container">
      <form className="question-form" onSubmit={(event) => handleSubmit(event)}>
        <p>Question Title</p>
        <input
          type="text"
          placeholder="Question Title"
          id="question-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>Question Stem</p>
        <textarea
          placeholder="Question Stem"
          id="question-stem"
          value={stem}
          onChange={(e) => setStem(e.target.value)}
        />
        {options.map((_: any, index: number) => (
          <div className="options" key={index}>
            <span>
              Option #
              {index + 1}
            </span>
            <span className="option-input">
              <input
                type="text"
                value={options[index]}
                onChange={(event) => {
                  handleChange(event, index);
                }}
              />
            </span>
            <i className="fa fa-check fa-2x" id="correct" />
            <span className="option-input-radio">
              <input
                type="radio"
                name="correct"
                checked={index === correct}
                value={index}
                onChange={() => setCorrect(index)}
              />
            </span>
            <i
              className="fa fa-3x fa-trash"
              onClick={(event) => deleteOption(event, index)}
            />
          </div>
        ))}
        <div className="bottom-buttons">
          <button onClick={addAlternative} type="button">Add Option</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
