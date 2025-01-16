import './App.css';
import { useState } from "react";
import quizData from "./data/quizData";
import CategorySelection from "./components/CategorySelection";
import QuizPage from "./components/QuizPage";
import Result from "./components/Result";

const App = () => {
  const [category,setCategory]=useState(null);
  const [finished,setFinished]=useState(false);
  const [score,setScore]=useState(0);
  const handleCategorySelect=(select)=>{
    setCategory(select);
  }
  const handleFinish=(score)=>{
    setFinished(true);
    setScore(score);
  }
  const handleRestart=()=>{
    setCategory(null);
    setFinished(false);
  }

  return (
    <div className="app">
      {!category && !finished && <CategorySelection categories={quizData.categories} onCategorySelect={handleCategorySelect}/>}
      {category && !finished && <QuizPage category={category} quizdata={quizData.quizzes} onFinished={handleFinish}/>}
      {finished && <Result totalscore={score} onRestart={handleRestart}/>}
    </div>
  );
};

export default App;