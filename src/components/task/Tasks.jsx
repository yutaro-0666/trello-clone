import React from 'react';
import { Task } from './Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (taskList, startIndex, endIndex) => {
  // タスクを並び替える
  const remove = taskList.splice(startIndex, 1);
  taskList.splice(endIndex, 0, remove[0]);
};

export const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (e) => {
    if (!e.source || !e.destination) return;
    reorder(taskList, e.source.index, e.destination.index);
    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, i) => (
                <div key={task.id}>
                  <Task
                    index={i}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
