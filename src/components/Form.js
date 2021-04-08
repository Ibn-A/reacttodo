
import React from 'react';

const Form = () => {
    return (
        <form>
            <input type="text" className="todo-input"/>
            <button className="todo-button" type="submit">
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
