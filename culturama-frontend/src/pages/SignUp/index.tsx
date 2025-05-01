import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../../components/Container';
import './index.css';
import api from '../../api';

const SignUp: React.FC = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateAccount = async () => {
        try {
            await api.post('/signup', { email, password });
            alert('Usuário cadastrado com sucesso!');
            history.push('/signin');
        } catch (error) {
            alert('Erro ao cadastrar usuário. Verifique os dados.');
        }
    };

    return (
        <Container>
            <div className="auth-screen">
                <button className="back-button" onClick={() => history.goBack()}>
                    &larr;
                </button>

                <img src="/images/Logo.png" alt="Logo" className="logo" />

                <h2>Cadastre-se</h2>
                <p className="subtitle">Que bom que vai se juntar a nós :)</p>

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

                <p className="terms">
                    Ao criar a conta, você concorda com os <a href="#">Termos de Uso</a> e <a href="#">Política de Privacidade</a>
                    .
                </p>

                <button className="primary-button" onClick={handleCreateAccount}>
                    Criar conta
                </button>
            </div>
        </Container>
    );
};

export default SignUp;
