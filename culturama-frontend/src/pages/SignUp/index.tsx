import React from 'react';
import { Container } from '../../components/Container';
import './index.css';

const SignUp: React.FC = () => {
    return (
        <Container>
            <div className="signup-screen">
                <h2>Criar Conta</h2>
                <p>Vamos começar! Preencha os dados para criar sua conta.</p>
                {/* Aqui você pode adicionar inputs de nome/email/senha e botão de cadastro */}
            </div>
        </Container>
    );
};

export default SignUp;
