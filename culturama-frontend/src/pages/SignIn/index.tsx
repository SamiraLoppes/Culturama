import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../../components/Container';
import './index.css';
import api from '../../api';

const SignIn: React.FC = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await api.post('/signin', { email, password });
            alert('Login realizado com sucesso!');
            history.push('/tabs/home');
        } catch (error) {
            alert('Email ou senha inválidos. Tente novamente.');
        }
    };

    return (
        <Container>
            <div className="auth-screen">
                <button className="back-button" onClick={() => history.goBack()}>
                    &larr;
                </button>

                <img src="/images/Logo.png" alt="Logo" className="logo" />

                <h2>Acesse sua conta</h2>
                <p className="subtitle">Estávamos com saudades :)</p>

                <div className="input-group">
                    <span className="icon">👤</span>
                    <input type="email" placeholder="Inserir e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="input-group">
                    <span className="icon">🔒</span>
                    <input
                        type="password"
                        placeholder="Inserir senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <p className="link">Esqueceu a senha?</p>

                <button className="primary-button" onClick={handleLogin}>
                    Entrar
                </button>
            </div>
        </Container>
    );
};

export default SignIn;
