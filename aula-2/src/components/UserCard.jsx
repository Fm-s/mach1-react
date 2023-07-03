const UserCard = ({user}) => {
    return (
        <div className="card">
            <h2>{user.nome}</h2>
            <p>Idade: {user.idade}</p>
            <p>Cidade: {user.cidade}</p>
            <p>Objetivo: {user.objetivo}</p>
            {user.isPremium && <div className="premium">Usuário Premium</div>}
        </div>
    );
};

export default UserCard;