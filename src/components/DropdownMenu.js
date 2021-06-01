import React, {useState,useRef, useEffect} from 'react'
import useDetectOutsideClick from './useDetectOutsideClick';

const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    
    return (
        <div className="custom-select-wrapper">
            <div onClick={onClick} className="custom-select">
                <div className="custom-select__trigger"><span>All</span>
                    <div className="arrow"></div>
                </div>
                <div ref={dropdownRef} name="todos" className={`custom-options ${isActive ? 'active' : 'inactive'}`}>
                    <span className="custom-option selected" data-value="all">All</span>
                    <span className="custom-option" data-value="completed">Completed</span>
                    <span className="custom-option" data-value="uncompleted">Uncompleted</span>
                </div>
            </div>
    </div>
    )
}

export default DropdownMenu