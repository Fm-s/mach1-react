const Movie = ({ texto, titulo, diretor }) => {
    return(
        <div style={{width: "600px"}}>
            <h1>{titulo}</h1>
            <p>Tipo: {texto}</p>
            <p>Diretor: {diretor}</p>
        </div>
    );
};

export default Movie;