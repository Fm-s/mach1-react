import { useState } from "react";
import TaskItem from "./TaskItem";




const TaskList = ({ tasks }) => {

    const [taskCompletion, setTaskCompletion] = useState(tasks);
    
    const handleTaskCompletion = (taskId) => {
        const newTaskCompletion = taskCompletion.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }
            return task;
        });
        setTaskCompletion(newTaskCompletion);
    }

    return (
        <div className="taskList">
        {taskCompletion.map((task) => {
            return <TaskItem key={task.id} title={task.title} completed={task.completed} handleTaskCompletion={() => handleTaskCompletion(task.id)} />
        })}
        </div>
    );
};

export default TaskList;