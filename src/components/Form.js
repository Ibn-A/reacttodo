
import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos}) => {
// Ici on mettra nos code & functions javascript
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTextHandler = (e) => {
        e.preventDefault(); // stop the refresh page
        // modifier l'objet todos  
        setTodos([
            ...todos, 
            { text:inputText, completed: false, id: Math.random()*1000 }
        ]);
        //reset the state back to zero
        setInputText("");
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitTextHandler} className="todo-button" type="submit">
                <i className="fa fa-plus-square"></i>
            </button>
            <div className="custom-select-wrapper">
                <div className="custom-select">
                    <div className="custom-select__trigger"><span>All</span>
                        <div className="arrow"></div>
                    </div>
                    <div name="todos" className="custom-options">
                        <span className="custom-option selected" data-value="all">All</span>
                        <span className="custom-option" data-value="completed">Completed</span>
                        <span className="custom-option" data-value="uncompleted">Uncompleted</span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form
