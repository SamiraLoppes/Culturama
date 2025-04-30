import React from 'react';
import './index.css';
import { Container } from '../../components/Container';

export const Login: React.FC = () => {
    return (
        <Container>
            <div className="header">
                <div className="profile">
                    <h2 className="title">Olá viajante</h2>
                    <p className="subtitle">Está pronto para descobrir um novo lugar incrível?</p>
                    <strong>Antes de começar, queremos tirar uma dúvida.</strong>
                </div>
                <img src="/images/logo.png" alt="Logo Culturama" className="logo" />
            </div>

            <button
                style={{
                    marginTop: '30px',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: '2px solid white',
                    background: 'transparent',
                    color: 'white',
                    cursor: 'pointer',
                    marginBottom: '10px',
                }}
            >
                Já tenho uma conta
            </button>

            <button
                style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'white',
                    color: 'black',
                    cursor: 'pointer',
                }}
            >
                Sou novo(a) aqui
            </button>
        </Container>
    );
};
