import React, {useRef} from 'react'
import useDetectOutsideClick from './useDetectOutsideClick';

const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => {
        setIsActive(!isActive);
        /** Acceder au DOM en direct n'est pas une bonne pratique, donc a améliorer!! */
        for(const option of document.querySelectorAll(".custom-option")) {
            option.addEventListener('click', function() {
                if (!this.classList.contains('selected')) {
                    this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                    this.classList.add('selected');
                    this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
                }
            })
        }
    }
    
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