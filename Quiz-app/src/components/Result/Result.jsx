import React from 'react'
import styles from './Result.module.css'
import Confetti from 'react-confetti'
import { ROUTES } from '../../pages/const.js'
import { Link, useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const { maxQuizLen, correctNumLen } = location.state || { maxQuizLen: 0, correctNumLen: 0 };

  return (
    <>
      <div className={styles.result}>
        <h1>Result</h1>
        あなたの正解数は...
        <span className={styles.resultHighlight}>
          {`全${maxQuizLen}問中、${correctNumLen}問でした！`}
        </span>
        <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
      </div>
      <Confetti />
    </>
  )
}
