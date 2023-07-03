const TaskItem = ({ title, completed, handleTaskCompletion }) => {
    return (
        <div className={`taskItem ${completed ? 'completed' : 'pending'}`} onClick={handleTaskCompletion}>
            <h3>{title}</h3>
            {completed && <span>✅</span>}
            {!completed && <span>❌</span>}
        </div>
    );
};

export default TaskItem;
