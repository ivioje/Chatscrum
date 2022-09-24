import React, { useState } from 'react';
import taskList from '../../static/tasks';
import './task.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Task = () => {

    const [weeklyTasks, updateWeeklyTasks] = useState(taskList);
    const [dailyTasks, setDailyTasks] = useState([]);

    const handleOnDragEnd = result => {
        if (!result.destination) return;

        if (result.source.droppableId === result.destination.droppableId) {
            if (result.source.droppableId === 'weekly') {
                let tempWeeklyTasks = Array.from(weeklyTasks);
                const [reorderedItems] = tempWeeklyTasks.splice(result.source.index, 1);
                tempWeeklyTasks.splice(result.destination.index, 0, reorderedItems);

                updateWeeklyTasks(tempWeeklyTasks);
            } else {
                let tempDailyTasks = Array.from(dailyTasks);
                const [reorderedItems] = tempDailyTasks.splice(result.source.index, 1);
                tempDailyTasks.splice(result.destination.index, 0, reorderedItems);

                setDailyTasks(tempDailyTasks);
            }
        } else {
            let tempWeeklyTasks = weeklyTasks;
            let tempDailyTasks = dailyTasks;

            if (result.source.droppableId === 'weekly') {
                const [removed] = tempWeeklyTasks.splice(result.source.index, 1);
                tempDailyTasks.splice(result.destination.index, 0, removed);
                updateWeeklyTasks(tempWeeklyTasks);
                setDailyTasks(tempDailyTasks);
            } else {
                const [removed] = tempDailyTasks.splice(result.source.index, 1);
                tempWeeklyTasks.splice(result.destination.index, 0, removed);
                updateWeeklyTasks(tempWeeklyTasks);
                setDailyTasks(tempDailyTasks);
            }
        }
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className='task_container'>
                <div className='scrum_container'>
                    <Droppable droppableId='weekly'>
                        {(provided) => (
                            <div className='weekly box' {...provided.droppableProps} ref={provided.innerRef} >
                                <h3>Weekly tasks</h3>

                                {weeklyTasks.map(({ item, id }, index) => {
                                    return (
                                        <Draggable draggableId={id} key={id} index={index}>
                                            {(provided, snapshot) => (
                                                <div className='items' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                                    {item}
                                                    {provided.placeholder}
                                                </div>
                                            )}

                                        </Draggable>
                                    )
                                })}
                            </div>
                        )}
                    </Droppable>

                    <Droppable droppableId='daily'>
                        {(provided) => (
                            <div className='daily box' {...provided.droppableProps} ref={provided.innerRef} >
                                <h3>Daily Target</h3>
                                {dailyTasks.map(({ id, item }, index) => {
                                    return (
                                        <Draggable key={id} draggableId={id} index={index} >
                                            {(provided, snapshot) => (
                                                <div className='item' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                                    {item}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                })}
                            </div>
                        )}
                    </Droppable>
                </div>
            </div>
        </DragDropContext>
    )
}
export default Task