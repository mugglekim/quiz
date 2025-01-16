import './QuizPage.css';
import { useState } from "react";

const QuizPage = ({category,quizdata,onFinished}) => {

  const [currentIdx,setCurrentIdx]=useState(0);
  const [score,setScore]=useState(0);

  const [answer,setAnswer]=useState(null);
  const quizArr=quizdata.filter((data)=>{
    return data.category===category;
  });
  const currentQuiz=quizArr[currentIdx];
  const handleAnswer=(answer)=>{
    // if(answer===currentQuiz.correct){
    //   setScore(score+10);
    // }
    setAnswer(answer);
  }
  const handleNext=()=>{
    const resultScore=(answer===currentQuiz.correct)? score+20 : score;
    if(currentIdx+1<quizArr.length){
      setScore(resultScore);
      setCurrentIdx(currentIdx+1);
    } else{
      onFinished(resultScore);
    }
    setAnswer(null);
  }
  return (
    <div className="quiz-page">
      <h2>야구 {category} 퀴즈</h2>
      <p className='step'>문제 {currentIdx+1} / {quizArr.length}</p>
      <p className='qTxt'>{currentQuiz.question}</p>
      <div className="choices">
        {
          currentQuiz.choices.map((txt,idx)=>{
            return <button key={idx} onClick={()=>{handleAnswer(txt)}} className={answer===txt? "active":""}><span>{txt}</span>{answer===txt && <img src='./images/check-red.svg'/>}</button>
          })
        }
      </div>
      {answer && <div className='nextBtn'><button onClick={handleNext}><span>다음으로</span><img src='./images/arrow-white.svg'/></button></div>}
    </div>
  );
};

export default QuizPage;