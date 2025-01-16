import './CategorySelection.css';

const CategorySelection = ({categories,onCategorySelect}) => {
  return (
    <div className="category-selection">
      <img src="./images/baseball.png" alt="야구공"/>
      <h1>야구 퀴즈를 시작하지. 카테고리를 선택하시게!</h1>
      {/* 1.카테고리를 버튼으로 작성 */}
      {
        categories.map((txt,idx)=>{
          return <button key={idx} onClick={()=>{onCategorySelect(txt)}}>{txt}<img src='./images/arrow-red.svg'/></button>
        })
      }
    </div>
  );
};

export default CategorySelection;