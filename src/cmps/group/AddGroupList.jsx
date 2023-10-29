import { useState, useEffect, useRef } from "react";
import { ExitBtnSvg } from "../svg/ImgSvg";

export function AddGroupList({ onAddTitle, onCancel }) {

    const [title, setTitle] = useState('')
    const inputRef = useRef(null)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [flag])

    function handleTitleChange(ev) {
        setTitle(ev.target.value)
    }

    function handleAddClick() {
        if (title.trim() !== '') {
            onAddTitle(title)
            setTitle('')
            setFlag(!flag)
        }
    }

    function handleKeyDown(ev) {
        if (ev.key === 'Enter') {
            ev.target.blur()
            handleAddClick()
        }
    }

    
    return (
        <div className={`add-group-list group-card`}>

            <input className="add-group-input"
                type="text"
                placeholder="Add list title..."
                value={title}
                onChange={handleTitleChange}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                autoFocus />

            <div className="button-container">

                <button
                    className='btn-action modal-btn'
                    onClick={handleAddClick}>
                    Add list
                </button>

                <button onClick={onCancel}>
                    <div className="center-svg">
                        <ExitBtnSvg />
                    </div>
                </button>

            </div>

        </div >
    )
}
