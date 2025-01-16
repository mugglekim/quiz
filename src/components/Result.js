import './Result.css';

const Result = ({totalscore,onRestart}) => {
  return (
    <div className="result">
      <div className='result-check'><img src='./images/check-white.svg'/></div>
      <p>퀴즈종료!</p>
      <h3>최종 점수는<br/>{totalscore}점입니다.<br/>수고하셨습니다!</h3>
      <div className='backHome'><button onClick={onRestart}>처음으로<img src='./images/arrow-red.svg'/></button></div>
    </div>
  );
};

export default Result;