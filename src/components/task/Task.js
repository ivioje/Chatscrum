import React, { useEffect, useState } from 'react'
import './task.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const Task = ({ data, deleteTask }) => {
  const [weeklyTasks, updateWeeklyTasks] = useState([])
  const [dailyTasks, setDailyTasks] = useState([])

  useEffect(() => {
    return updateWeeklyTasks(data)
  }, [data])

  const handleOnDragEnd = result => {
    if (!result.destination) return

    if (result.source.droppableId === result.destination.droppableId) {
      if (result.source.droppableId === 'weekly') {
        let tempWeeklyTasks = Array.from(weeklyTasks)
        const [reorderedItems] = tempWeeklyTasks.splice(result.source.index, 1)
        tempWeeklyTasks.splice(result.destination.index, 0, reorderedItems)

        updateWeeklyTasks(tempWeeklyTasks)
      } else {
        let tempDailyTasks = Array.from(dailyTasks)
        const [reorderedItems] = tempDailyTasks.splice(result.source.index, 1)
        tempDailyTasks.splice(result.destination.index, 0, reorderedItems)

        setDailyTasks(tempDailyTasks)
      }
    } else {
      let tempWeeklyTasks = weeklyTasks
      let tempDailyTasks = dailyTasks

      if (result.source.droppableId === 'weekly') {
        const [removed] = tempWeeklyTasks.splice(result.source.index, 1)
        tempDailyTasks.splice(result.destination.index, 0, removed)
        updateWeeklyTasks(tempWeeklyTasks)
        setDailyTasks(tempDailyTasks)
      } else {
        const [removed] = tempDailyTasks.splice(result.source.index, 1)
        tempWeeklyTasks.splice(result.destination.index, 0, removed)
        updateWeeklyTasks(tempWeeklyTasks)
        setDailyTasks(tempDailyTasks)
      }
    }
  }
  console.log(dailyTasks);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className='task_container'>
        <div className='scrum_container'>
          <Droppable droppableId='weekly'>
            {(provided) => (
              <div
                className='weekly box'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h3>Weekly tasks</h3>

                {weeklyTasks.map((tasks, index) => (
                  <Draggable draggableId={tasks.id} key={tasks.id} index={index} >
                    {(provided, snapshot) => (
                      <div>
                        <p
                          className='items'
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          onClick={() => deleteTask(tasks.id)}
                        >
                          {tasks.task}
                        </p>
                        <hr />
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId='daily'>
            {(provided) => (
              <div
                className='daily box'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h3>Daily Target</h3>
                {dailyTasks.map((tasks, index) => {
                  return (
                    <Draggable key={tasks.id} draggableId={tasks.id} index={index}>
                      {(provided, snapshot) => (
                        <div>
                          <p
                            className='item'
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {tasks.task}
                          </p>
                          <hr />
                        </div>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  )
}
export default Task










// import React, { useEffect, useState } from 'react';
// import './task.css'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const Task = ({ data }) => {

//     const [weeklyTasks, updateWeeklyTasks] = useState([]);
//     const [dailyTasks, setDailyTasks] = useState([]);

//     // useEffect(() => {
//     //     updateWeeklyTasks(data)
//     // }, [data])

//     const handleOnDragEnd = result => {
//         if (!result.destination) return;

//         if (result.source.droppableId === result.destination.droppableId) {
//             if (result.source.droppableId === 'weekly') {
//                 let tempWeeklyTasks = Array.from(weeklyTasks);
//                 const [reorderedItems] = tempWeeklyTasks.splice(result.source.index, 1);
//                 tempWeeklyTasks.splice(result.destination.index, 0, reorderedItems);

//                 updateWeeklyTasks(tempWeeklyTasks);
//             } else {
//                 let tempDailyTasks = Array.from(dailyTasks);
//                 const [reorderedItems] = tempDailyTasks.splice(result.source.index, 1);
//                 tempDailyTasks.splice(result.destination.index, 0, reorderedItems);

//                 setDailyTasks(tempDailyTasks);
//             }
//         } else {
//             let tempWeeklyTasks = weeklyTasks;
//             let tempDailyTasks = dailyTasks;

//             if (result.source.droppableId === 'weekly') {
//                 const [removed] = tempWeeklyTasks.splice(result.source.index, 1);
//                 tempDailyTasks.splice(result.destination.index, 0, removed);
//                 updateWeeklyTasks(tempWeeklyTasks);
//                 setDailyTasks(tempDailyTasks);
//             } else {
//                 const [removed] = tempDailyTasks.splice(result.source.index, 1);
//                 tempWeeklyTasks.splice(result.destination.index, 0, removed);
//                 updateWeeklyTasks(tempWeeklyTasks);
//                 setDailyTasks(tempDailyTasks);
//             }
//         }
//     }
//     console.log(weeklyTasks, 'weekly task');

//     return (
//         <DragDropContext onDragEnd={handleOnDragEnd}>
//             <div className='task_container'>
//                 <div className='scrum_container'>
//                     <Droppable droppableId='weekly'>
//                         {(provided) => (
//                             <div className='weekly box' {...provided.droppableProps} ref={provided.innerRef} >
//                                 <h3>Weekly tasks</h3>

//                                 {/* {Object.keys(weeklyTasks).map((content) => {
//                                     return (
//                                         <Draggable draggableId={content.id} key={content.id} index={content.id}>
//                                             {(provided, snapshot) => (
//                                                 <div>
//                                                     <p className='items' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
//                                                         {weeklyTasks[content]}
//                                                     </p>
//                                                     < hr />
//                                                 </div>

//                                             )}

//                                         </Draggable>
//                                     )})} */}
                                            
//                                 {provided.placeholder}
//                             </div>
//                         )}
//                     </Droppable>

//                     <Droppable droppableId='daily'>
//                         {(provided) => (
//                             <div className='daily box' {...provided.droppableProps} ref={provided.innerRef} >
//                                 <h3>Daily Target</h3>
//                                 {dailyTasks.map(({ id, item }, index) => {
//                                     return (
//                                         <Draggable key={id} draggableId={id} index={index} >
//                                             {(provided, snapshot) => (
//                                                 <div>
//                                                     <p className='item' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
//                                                         {item}
//                                                     </p>
//                                                     <hr />
//                                                 </div>
//                                             )}
//                                         </Draggable>
//                                     )
//                                 })}
//                                 {provided.placeholder}
//                             </div>
//                         )}
//                     </Droppable>
//                 </div>
//             </div>
//         </DragDropContext>
//     )
// }
// export default Task