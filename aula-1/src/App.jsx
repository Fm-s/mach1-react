import Movie from "./components/movie";

const movies = [
    {
        id: 1,
        titulo: "Harry Potter",
        texto: "Filme de magia",
        diretor: "Chris Columbus",
    },
    {
        id: 2,
        titulo: "Senhor dos Anéis",
        texto: "Filme de fantasia",
        diretor: "Peter Jackson",
    },
    {
        id: 3,
        titulo: "O Poderoso Chefão",
        texto: "Filme de máfia",
        diretor: "Francis Ford Coppola",
    },
];

const App = () => {
    return (
        <div style={{width: "100vw", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center"}}>
            {movies.map((movie) => {
                return (
                    <Movie
                        key={movie.id}
                        titulo={movie.titulo}
                        texto={movie.texto}
                        diretor={movie.diretor}
                    />
                );
            })}
        </div>
    );
};

export default App;
