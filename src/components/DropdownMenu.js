import React, {useState,useRef, useEffect} from 'react'

const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    useEffect(() => {
        const pageClickEvent = (e) => {
            // If the active element exist and is clicked outside of
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
              }
        };
        // If the item is active(ie open) then listen for clicks
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [isActive]);
    
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