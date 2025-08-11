import { useContext } from "react";
import { timeContext } from "./timeContext";

const Item = (props) => {
  const { timeArr,setTimeArr } = useContext(timeContext);


  const removeTime=(i)=>{
    const newTimeArr= timeArr.filter((f,index)=> index!==i)
    setTimeArr( newTimeArr)
  
  }
  // const removeTime2=(e)=>{
  //   setTimeArr(timeArr.filter(f=>f!=e.target.innerHtml ))
  // }


  return (
    <div className="lap-list">
      <p>{props.c}</p>
      <i className="fi fi-br-cross" onClick={()=>removeTime(props.index)}></i>
    </div>
  );
};
export default Item;
