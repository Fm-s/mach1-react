import "./App.css";
import UserCard from "./components/UserCard";

const user = [
    {
        id: 1,
        nome: "João",
        idade: 18,
        cidade: "São Paulo",
        objetivo: "Desenvolvedor Full Stack",
        isPremium: true,
    },
    {
        id: 2,
        nome: "Maria",
        idade: 22,
        cidade: "Rio de Janeiro",
        objetivo: "Desenvolvedora Front-end",
        isPremium: false,
    },
    {
        id: 3,
        nome: "Pedro",
        idade: 27,
        cidade: "Belo Horizonte",
        objetivo: "Desenvolvedor Back-end",
        isPremium: true,
    },
];

function App() {
    return (
        <div className="App">
            {user.map((user) => {
                return <UserCard key={user.id} user={user} />;
            })}
        </div>
    );
}

export default App;
