import { useHistory } from 'react-router-dom';
import React from 'react';
import './indexLogin.css';
import { Container } from '../../components/Container';

export const Login: React.FC = () => {
    const history = useHistory();
    return (
        <Container>
            <div className="login-screen">
                <div className="logo-container">
                    <img src="/images/Logo.png" alt="Logo Culturama" className="logo" />
                </div>

                <h2 className="greeting">Olá viajante</h2>
                <p className="description">Está pronto para descobrir um novo lugar incrível?</p>
                <strong className="question">Antes de começar, queremos tirar uma dúvida.</strong>

                <div className="button-group">
                    <button className="button outline" onClick={() => history.push('/signin')}>
                        Já tenho uma conta
                    </button>
                    <button className="button filled" onClick={() => history.push('/signup')}>
                        Sou novo(a) aqui
                    </button>
                </div>
            </div>
        </Container>
    );
};
