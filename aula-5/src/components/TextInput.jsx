// Exercício

// Etapa 4: Envio do formulário
// Quando o formulário estiver completamente preenchido e válido, implemente a função de envio do formulário. Você pode exibir uma mensagem de sucesso.

// Desafio
// Cria o campo confirmar senha e aplique a seguinte validação ao enviar o formulário ambas as senhas do campo senha e confirmar senha devem ser iguais, caso não, exibir na página a mensagem “campos de senha inválidos"

import { useState } from "react";

const TextInput = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const validInvalidClassAppend = (target, isValid) => {
        if (isValid) {
            target.classList.add("valid");
            target.classList.remove("invalid");
        } else {
            target.classList.remove("valid");
            target.classList.add("invalid");
        }
    };

    const validateForm = (e) => {
        let isValid = true;
        e.target.querySelectorAll("input").forEach((input) => {
            switch (input.name) {
                case "name":
                    isValid = validateName({ target: input }) && isValid;
                    break;
                case "email":
                    isValid = validateEmail({ target: input }) && isValid;
                    break;
                case "password":
                    isValid =
                        passwordMatchHandler({ target: input }) && isValid;
                    break;
                case "password-confirm":
                    isValid =
                        passwordMatchHandler({ target: input }) && isValid;
                    break;
                case "terms":
                    isValid = validateTerms({ target: input }) && isValid;
                    break;
                default:
                    break;
            }
        });
        console.log(isValid);
        return isValid;
    };

    const validateName = (e) => {
        const isValid = e.target.value.trim() !== "";
        validInvalidClassAppend(e.target, isValid);
        return isValid;
    };

    const validateEmail = (e) => {
        const isValid = e.target.value !== "" && e.target.validity.valid;
        validInvalidClassAppend(e.target, isValid);
        return isValid;
    };

    const validateTerms = (e) => {
        const isValid = e.target.checked;
        validInvalidClassAppend(e.target, isValid);
        return isValid;
    };

    const passwordConfirmFocusHandler = () => {
        if (password !== passwordConfirm) {
            setPasswordConfirm("");
        }
    };

    const passwordMatchHandler = (e) => {
        if (e.target.name === "password") {
            if (password.length < 8) {
                validInvalidClassAppend(e.target, false);
            } else {
                validInvalidClassAppend(e.target, true);
            }
        } else if (e.target.name === "password-confirm") {
            if (password === passwordConfirm) {
                validInvalidClassAppend(e.target, true);
            } else {
                validInvalidClassAppend(e.target, false);
            }
        }
        return password.length >= 8 && password === passwordConfirm;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validateForm(e)) {
            const modal = document.createElement("div");
            modal.classList.add("modal");

            const content = document.createElement("div");
            content.classList.add("modal-content");

            const modalText = document.createElement("p");
            modalText.innerText = "Formulário enviado com sucesso!";
            content.appendChild(modalText);

            const closeModal = document.createElement("button");
            closeModal.innerText = "Fechar";
            closeModal.addEventListener("click", () => {
                modal.remove();
            });
            content.appendChild(closeModal);

            modal.appendChild(content);

            document.body.appendChild(modal);
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-control name">
                <label htmlFor="name">Nome completo</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={validateName}
                />
                <div className="invalid-feedback">
                    Nome não pode estar em branco!
                </div>
            </div>
            <div className="form-control email">
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validateEmail}
                />
                <div className="invalid-feedback">E-mail inválido</div>
            </div>
            <div className="password-field">
                <div className="form-control password">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={passwordMatchHandler}
                    />
                    <div className="invalid-feedback">
                        A senha deve ter no mínimo 8 caracteres
                    </div>
                </div>
                <div className="form-control password">
                    <label htmlFor="password-confirm">Confirmar Senha</label>
                    <input
                        type="password"
                        id="password-confirm"
                        name="password-confirm"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        onBlur={passwordMatchHandler}
                        onFocus={passwordConfirmFocusHandler}
                    />
                    <div className="invalid-feedback">
                        As senhas são divergentes
                    </div>
                </div>
            </div>
            <div className="form-control terms">
                <input type="checkbox" id="terms" name="terms" />
                <label htmlFor="terms">Aceitar os termos de uso</label>
                <div className="invalid-feedback">
                    Você precisa aceitar os termos de uso
                </div>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default TextInput;
