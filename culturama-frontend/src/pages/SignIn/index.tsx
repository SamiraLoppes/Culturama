import React from 'react';
import { Container } from '../../components/Container';
import './index.css';

const SignIn: React.FC = () => {
    return (
        <Container>
            <div className="signin-screen">
                <h2>Entrar</h2>
                <p>Bem-vindo de volta! Faça login para continuar sua jornada.</p>
                {/* Aqui você pode adicionar inputs de e-mail/senha e botão de login */}
            </div>
        </Container>
    );
};

export default SignIn;
