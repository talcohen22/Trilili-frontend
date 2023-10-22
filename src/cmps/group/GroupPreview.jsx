import { useState, useRef, useEffect } from "react";
import { DotsSvg, EyeSvg, GenerateTemplateBtnSvg, PlusBtnAddListSvg } from "../svg/ImgSvg";
import { TaskList } from "../task/TaskList";
import { AddTaskModal } from "../task/AddTaskModal";
import { boardService } from "../../services/board.service.local";
import { updateGroup } from "../../store/board.actions";
import { GroupActionsModal } from "../group/GroupActionsModal"

export function GroupPreview({
    board,
    group,
    onAddTask,
    onSetIsOpenTaskDetails,
    onIsCheckDate,
    onIsExpandedLabels,
    removeGroup,
    removeTasks,
    saveCopiedGroup,
    onSetBoard,
    onMoveBoards,
    provided }) {

    const [isOnAddTask, setIsOnAddTask] = useState(false)
    const [isOnGroupAddTask, setIsOnGroupAddTask] = useState(false)
    const [groupTitle, setGroupTitle] = useState(group.title)
    const [isOnUsingAction, setIsOnUsingAction] = useState(false)
    const [groupActionPostion, setGroupActionPosition] = useState({ left: null, top: null })
    const buttonRef = useRef(null)
    const [isDynamicCmpOpen, setIsDynamicCmpOpen] = useState(false)
    const [dynamicParams, setDynamicParams] = useState({})
    // const [inputActive, setInputActive] = useState(false);
    // const inputRef = useRef(null);

    // const handleClickOutside = (event) => {
    //     if (inputRef.current && !inputRef.current.contains(event.target)) {
    //       setInputActive(false);
    //     }
    //   };

    //   useEffect(() => {
    //     document.addEventListener('click', handleClickOutside);

    //     return () => {
    //       document.removeEventListener('click', handleClickOutside);
    //     };
    //   }, []);

    function handleInputChange({ target }) {

        const { value } = target
        setGroupTitle(value)
    }

    function handleAddTask(position) {
        (position==='START')?setIsOnGroupAddTask(true):setIsOnAddTask(true)
        handleClose()
        updateGroup(board, group, 'title', groupTitle)
    }


    function handleKeyDown(ev) {
        if (ev.key === 'Enter') handleAddTask(ev)
    }

    function onCloseAddTaskModal() {
        setIsOnAddTask(false)
        setIsOnGroupAddTask(false)
    }  

    function handleUsingAction() {
        // const index = board.groups.findIndex(idx => idx.id === group.id)
        const buttonRect = buttonRef.current.getBoundingClientRect()
        const positionX = buttonRect.x
        const positionY = buttonRect.bottom + 7
        setGroupActionPosition({ left: positionX, top: positionY })
        setIsOnUsingAction(true)
    }

    function handleClose() {
        setIsOnUsingAction(false)
    }

    function handleWatchGroup() {
        let updatedGroup = { ...group }
        if (group.isWatch === undefined) updatedGroup = { ...group, isWatch: true }
        else updatedGroup = { ...group, isWatch: !group.isWatch }
        const groupIdx = board.groups.findIndex(item => item.id === group.id)
        board.groups[groupIdx] = updatedGroup
        onSetBoard(board)
        handleClose()
    }

    function handleDynamicCmpOpen(cpmType) {
        setDynamicParams(cpmType)
        setIsDynamicCmpOpen(true)
    }
    function handleIsDynamicCmpOpen(value) {
        setIsDynamicCmpOpen(value)
    }
    const { isExpandedLabels } = board
    const labelsPaletteBoard = board.labels
    return (
        <section className='group-card'>

            <div className="group-header flex justify-space-b align-center " {...provided.dragHandleProps}>
                <input
                    // ref={inputRef}
                    // onFocus={() => setInputActive(true)}
                    // onBlur={() => setInputActive(false)}
                    className="group-title"
                    value={groupTitle}
                    onChange={handleInputChange}
                    // onFocus={(ev) => ev.target.classList.add("focused")}
                    // onBlur={(ev) => ev.target.classList.remove("focused")}
                    onKeyDown={handleKeyDown}

                />
                    {group.isWatch && <span className="watch"><EyeSvg /></span>}
                    <button className="group-btn flex justify-center align-center" ref={buttonRef} onClick={handleUsingAction}>
                        <DotsSvg />
                    </button>
                {isOnUsingAction && <GroupActionsModal groupActionPostion={groupActionPostion}
                    group={group}
                    handleClose={handleClose}
                    removeGroup={removeGroup}
                    handleAddTask={handleAddTask}
                    handleDynamicCmpOpen={handleDynamicCmpOpen}
                    saveCopiedGroup={saveCopiedGroup}
                    board={board}
                    onSetBoard={onSetBoard}
                    onMoveBoards={onMoveBoards}
                    handleWatchGroup={handleWatchGroup}
                    removeTasks={removeTasks}
                />}

            </div>
            {isOnGroupAddTask &&
                <AddTaskModal
                    isOnAddTask={isOnAddTask}
                    group={group}
                    onAddTask={onAddTask}
                    onCloseAddTaskModal={onCloseAddTaskModal}
                />}
            <div className="group-tasks">
                <TaskList
                    group={group}
                    onSetIsOpenTaskDetails={onSetIsOpenTaskDetails}
                    labelsPaletteBoard={labelsPaletteBoard}
                    onIsCheckDate={onIsCheckDate}
                    onIsExpandedLabels={onIsExpandedLabels}
                    isExpandedLabels={isExpandedLabels} />
            </div>
           

            {!isOnAddTask &&
                <div className={(!isOnGroupAddTask)?"group-footer flex justify-center align-center":'hidden'}>
                    <button
                        onClick={()=>{handleAddTask('End')}}
                        className="group-btn add-task-btn flex align-center">
                        <PlusBtnAddListSvg />
                        Add a card
                    </button>


                    <button className="group-btn flex justify-center align-center">
                        <GenerateTemplateBtnSvg />
                    </button>
                </div>
            }
            {isOnAddTask &&
                <AddTaskModal
                    isOnAddTask={isOnAddTask}
                    group={group}
                    onAddTask={onAddTask}
                    onCloseAddTaskModal={onCloseAddTaskModal}
                />}


        </section>
    )
}