import Display from "../components/Display/Display.jsx"
import quizData from "./data/quiz"
import Button from "../components/Button/Button.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../pages/const.js";

export default function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizData.length

  const handleClick = (clickIndex) => {
    if (clickIndex === quizData[quizIndex].answerIndex) {
      setAnswerLogs(prev => [...prev, true]);
    } else {
      setAnswerLogs(prev => [...prev, false]);
    }
    setQuizIndex(prev => prev + 1);
  };

  useEffect(() => {
    if (answerLogs.length === MAX_QUIZ_LEN && quizIndex === MAX_QUIZ_LEN) {
      const correctNum = answerLogs.filter(answer => answer === true)
      navigation(ROUTES.RESULT, {
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNumLen: correctNum.length
        }
      });
    }
  }, [answerLogs]);

  return (
    <>
      {quizData[quizIndex] && <Display>{`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}</Display>}
      {quizData[quizIndex] && quizData[quizIndex].options.map((option, index) =>
        <Button key={`option-${index}`} onClick={() => handleClick(index)}>
            {option}</Button>
        )
      })
    </>
  )
}