import "./App.css";
import TaskList from "./components/TaskList";

const tasks = [
    { id: 3, title: "Estudar HTML", completed: true },
    { id: 2, title: "Estudar CSS", completed: true },
    { id: 4, title: "Estudar JS", completed: true },
    { id: 1, title: "Estudar React", completed: false },
    { id: 5, title: "Estudar Node", completed: false },
    { id: 6, title: "Estudar PHP", completed: false },
    { id: 7, title: "Estudar Java", completed: false },
];

function App() {
    return (
        <div className="App">
            <h1>Minhas Tarefas</h1>
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;
