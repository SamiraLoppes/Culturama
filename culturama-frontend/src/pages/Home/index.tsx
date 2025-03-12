import './index.css';

import { IonIcon } from '@ionic/react';
import { person } from 'ionicons/icons';

import { Container } from '../../components/Container';

export const Home: React.FC = () => {
    return (
        <Container>
            <header className='header'>
                <div className='infos'>
                    <h2 className='title'>Olá, Samira</h2>
                    <p className='subtitle'>Qual será seu destino hoje?</p>
                </div>
                <div className='image-container'>
                    <IonIcon aria-hidden="true" size="large" icon={person} />
                </div>
            </header>
        </Container>
    );
};
