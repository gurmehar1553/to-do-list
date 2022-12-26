import React from "react";


const ToDoList = (props) => {
    var flag=false;
    const editText = () => {
        flag=true;
        console.log("select");
    }
    return (
    <div style={{width:"300px"}}>
    <li>
        <button onClick={()=>{props.onSelect(props.id)}}>
            <i className="fa-solid fa-circle-minus minus-icon"></i>
        </button> <span contentEditable={flag}>{props.text}</span>
        {/* <button style={{float:"right"}} onClick={editText}>
            <i className="fa-solid fa-pen-to-square edit-icon"></i>
            </button> */}
    </li>
    </div>
    )
}

export default ToDoList;