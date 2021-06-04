import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import AlertModal from "../../Components/AlertModal/AlertModal";
import QuestionCard from "../../Components/QuestionCard/QuestionCard";
import {
  apiDeleteAnExam,
  getFullQuiz,
  submitAnExamAsATeacher,
} from "../../Services/ApiClient";
import { deleteAnExam, makeAQuizSubmittion } from "../../Store/actions";
import "./styles.css";

export default function SingleQuizPage(): ReactElement {
  interface Params {
    quizId: string;
  }

  const dispatch = useDispatch();
  const history = useHistory();

  const [fullQuiz, setFullQuiz] = useState<any>(null);
  const [submittedQuiz, setSubmittedQuiz] = useState<boolean>(false);
  const params: Params = useParams();

  const [alertModal, setAlertModal] = useState(false);
  const handleAlertModal = () => {
    setAlertModal(false);
  };

  useEffect(() => {
    getFullQuiz(params.quizId).then((response: any) => {
      setFullQuiz(response.data);
      if (response.data.submitted === true) setSubmittedQuiz(true);
    });
  }, []);

  const deleteQuiz = () => {
    apiDeleteAnExam(params.quizId).then(() => {
      dispatch(deleteAnExam(params.quizId));
      history.push({ pathname: "/viewQuizzes" });
    });
  };

  const submitQuiz = async () => {
    const response: any = await submitAnExamAsATeacher(fullQuiz._id);
    dispatch(makeAQuizSubmittion(response));
    history.push({ pathname: "/viewQuizzes" });
  };

  const textToClipboard = () => {
    setAlertModal(true);
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = `https://reverent-knuth-ec436c.netlify.app/studentExam/${fullQuiz.hashedId}`;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  };

  return (
    <div className="single-quiz-container">
      {alertModal ? (
        <AlertModal
          text="Copied to Clipboard!"
          handleAlertModal={handleAlertModal}
        />
      ) : null}
      <div className="quiz-questions">
        {fullQuiz ? (
          <div className="quiz-title">
            Title:
            {fullQuiz.title}
          </div>
        ) : (
          <div>Loading</div>
        )}
        {fullQuiz
          ? fullQuiz.questions.map((question: any, index: any) => (
              <div key={question._id}>
                <QuestionCard info={question} index={index} quizWindow />
              </div>
            ))
          : null}
        <button onClick={deleteQuiz} className="delete-btn" type="button">
          Delete Quiz
        </button>
        {submittedQuiz ? (
          <button
            className="submit-btn"
            onClick={textToClipboard}
            type="button"
          >
            Copy Quiz Link
          </button>
        ) : (
          <button className="submit-btn" onClick={submitQuiz} type="button">
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
}
