import { useState, useEffect } from "react";

const ColorChanger = () => {
    const [isBlue, setIsBlue] = useState(false);

    useEffect(() => {
        console.log('i fire once');
        console.log("Componente montado");
        return () => {
            console.log("Componente desmontado");
            alert("Componente está sendo removido da tela");
        };
    }, []);

    useEffect(() => {
        console.log("Componente atualizado");
        document.body.style.backgroundColor = isBlue ? "blue" : "red";
        return () => {
            console.log("Efeito anterior limpo");
        };
    }, [isBlue]);

    const handleClick = () => {
        setIsBlue(!isBlue);
    };

    // TODO: Declare um efeito que será executado apenas na montagem do componente
    // Imprima "Componente montado" no console
    // Retorne uma função de limpeza que será executada na desmontagem do componente
    // Imprima "Componente desmontado" no console

    // TODO: Declare um efeito que será executado sempre que "isBlue" for alterado
    // Imprima "Componente atualizado" no console
    // Implemente uma lógica condicional para alterar a cor de fundo do corpo do documento entre vermelho e azul
    // Retorne uma função de limpeza que será executada antes do próximo efeito
    // Imprima "Efeito anterior limpo" no console

    return (
        <div>
            <button onClick={handleClick}>Change</button>
        </div>
    );
};

export default ColorChanger;
