import * as React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { removeDate, saveDate, updateBoardGroupTaskType } from '../../store/board.actions'
import { utilService } from '../../services/util.service'

export function FeatureDates() {

    const board = useSelector(storeState => storeState.boardModule.board)
    const group = useSelector(storeState => storeState.boardModule.group)
    const task = useSelector(storeState => storeState.boardModule.task)

    const [isStartDate, setIsStartDate] = useState(false)
    const [isDueDate, setIsDueDate] = useState(true)
    const [startDate, setStartDate] = useState(null)
    const [dueDate, setDueDate] = useState(null)
    const [dueTime, setDueTime] = useState(null)

    const [startDateTimestamp, setStartDateTimestamp] = useState(null)
    const [dueDateTimestamp, setDueDateTimestamp] = useState(null)

    useEffect(() => {
        const dueDatetimestamp = task.dueDate ? task.dueDate.timeStamp : Math.floor(new Date().getTime() / 1000) + 86400 * 2;
        const startDatetimestamp = task.startDate ? task.startDate : dueDatetimestamp - 86400

        setDueDateTimestamp(dueDatetimestamp)
        setStartDateTimestamp(startDatetimestamp)

        const startDate = utilService.getDate(startDatetimestamp)
        const dueDate = utilService.getDate(dueDatetimestamp)
        const dueTime = utilService.getTime(dueDatetimestamp)

        setStartDate(startDate)
        setDueDate(dueDate)
        setDueTime(dueTime)

        setIsStartDate(task.startDate ? true : false)
        setIsDueDate(task.dueDate || (!task.dueDate && !task.startDate) ? true : false)
    }, [])

    function handleCheckboxChange({ target }) {
        if (target.name === "start-date") setIsStartDate(!isStartDate)
        if (target.name === "due-date") setIsDueDate(!isDueDate)

        if (target.name === "start-date" && !isStartDate && isDueDate && dueDateTimestamp < startDateTimestamp) {
            setStartDate(utilService.getDate(dueDateTimestamp - 86400))
            setStartDateTimestamp(dueDateTimestamp - 86400)
        }
        if (target.name === "due-date" && !isDueDate && isStartDate && dueDateTimestamp < startDateTimestamp) {
            setDueDate(utilService.getDate(startDateTimestamp + 86400))
            setDueDateTimestamp(startDateTimestamp + 86400)
        }
    }

    function handleDateChange(date) {
        const year = date.$y;
        const month = date.$M;
        const day = date.$D;
        const pickDate = new Date(year, month, day);
        const timestamp = Math.floor(pickDate.getTime() / 1000);

        if (isStartDate && !isDueDate) {
            setStartDate(utilService.getDate(timestamp))
            setStartDateTimestamp(timestamp)
        }
        if ((!isStartDate && isDueDate) || (isStartDate && isDueDate)) {
            setDueDate(utilService.getDate(timestamp))
            setDueDateTimestamp(timestamp)
        }
        if (!isStartDate && !isDueDate) {
            setIsDueDate(true)
            setDueDate(utilService.getDate(timestamp))
            setDueDateTimestamp(timestamp)
        }
        if (isStartDate && isDueDate) {
            setStartDate(utilService.getDate(timestamp - 86400))
            setStartDateTimestamp(timestamp - 86400)
        }
    }

    async function onSaveDate() {
        try {
            if (!isStartDate && !isDueDate) {
                onRemoveDate()
            }
            else {
                if (isStartDate && !isDueDate) saveDate(board, group, task, startDateTimestamp, null)
                if (!isStartDate && isDueDate) saveDate(board, group, task, null, { timeStamp: dueDateTimestamp, isDone: false })
                if (isStartDate && isDueDate) saveDate(board, group, task, startDateTimestamp, { timeStamp: dueDateTimestamp, isDone: false })
            }
            await updateBoardGroupTaskType(null, null, null, '', null)
        } catch (err) {
            console.log('Cannot save date', err)
        }
    }

    async function onRemoveDate() {
        try {
            await removeDate(board, group, task)
            await updateBoardGroupTaskType(null, null, null, '', null)
        } catch (err) {
            console.log('Cannot remove date', err)
        }
    }

    function handleChange() {

    }

    const dynClassStart = isStartDate ? 'clicked' : 'not-clicked'
    const dynClassDue = isDueDate ? 'clicked' : 'not-clicked'

    if (!startDate || !dueDate || !dueTime) return <div></div>
    return (
        <section className="feature-dates scroll">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker orientation="landscape" onChange={handleDateChange} />
            </LocalizationProvider>
            <p className={dynClassStart}>Start date</p>
            <div className='start-date flex'>
                <input type="checkbox" checked={isStartDate} onChange={handleCheckboxChange} name="start-date" />
                <input type="text" className={dynClassStart} onChange={handleChange} value={isStartDate ? startDate : "M/D/YYYY"}
                />
            </div>
            <p className={dynClassDue}>Due date</p>
            <div className='due-date flex'>
                <input type="checkbox" checked={isDueDate} onChange={handleCheckboxChange} name="due-date" />
                <input type="text" className={dynClassDue} onChange={handleChange} value={isDueDate ? dueDate : "M/D/YYYY"} />
                <input type="text" className={dynClassDue} onChange={handleChange} value={isDueDate ? dueTime : "h:mm A"} />
            </div>
            <button className='save-btn' onClick={onSaveDate}>Save</button>
            <button className='remove-btn' onClick={onRemoveDate}>Remove</button>
        </section>
    )
}