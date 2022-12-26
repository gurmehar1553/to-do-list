import React, { useState } from "react";
import './index.css';
import ToDoList from "./ToDoList";

const App = ()=>{

  
  const [text,setText] = useState("");
  const [listItem,setListItem] = useState([]);
  const updateValue = (event)=>{
    setText(event.target.value);
  }
  const addValue = ()=>{
    setListItem((prevItem) => {
      if(text === ""){
        return [...prevItem];
      }
      return [...prevItem,text];
    });
    setText("")
  }

  const deleteItem = (id) => {
    setListItem((prevItem)=>{
      return prevItem.filter((arrElem,index)=>{
        return index!==id;
      })
    })
  }
  
  const textBoxdata = text;
// Store textbox current value
localStorage.setItem("firstnameval", textBoxdata);
  return (
    <div className="outer-div">
      <div className="inner-div">
        <h1 className="heading ">TO-DO LIST</h1>
        <div className="main-div">
          <div style={{textAlign:"center"}}>
        <input type="text" placeholder="Add a task" value={text} onChange={updateValue}/>
        <span><button onClick={addValue}><i className="fa-solid fa-circle-plus plus-icon"></i></button></span>
        </div>
        <div className="second-div">
          <ul type="none">
            {/* <li><span><i class="fa-solid fa-circle-minus minus-icon"></i></span>{listItem}</li> */}
            {listItem.map((itemVal,index)=>{
              return <ToDoList key={index} id={index} text={itemVal} onSelect={deleteItem}/>
            })}

          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App;
