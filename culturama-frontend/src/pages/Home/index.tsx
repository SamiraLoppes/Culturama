import React from 'react';
import styles from './index.module.css';
import places from '../../data/places.json';
import { IonIcon } from '@ionic/react';
import { Container } from '../../components/Container';
//import { SliderCardProps } from '../../components/SliderCard';
import { Slider } from '../../components/Slider';
import { options } from 'ionicons/icons';

export const Home: React.FC = () => {
    return (
        <Container>
            <header className={styles.header}>
                <div className={styles.profile}>
                    <h2 className={styles.title}>Olá, Samira</h2>
                    <p className={styles.subtitle}>Qual será seu destino hoje?</p>
                </div>

                <img src="https://avatars.githubusercontent.com/u/137065498?v=4" className={styles.avatar} />
            </header>

            <div className={styles.searchBar}>
                <input type="text" placeholder="Para onde gostaria de ir?" className={styles.inputSearch} />
                <IonIcon aria-hidden="true" size="large" className={styles.iconFilter} icon={options} />
            </div>

            <p className={styles.subtitle}>Se liga nessas viagens em alta:</p>

            <Slider
                cards={places}
                settings={{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }}
            />

            <div>
                <p className={styles.subtitle}>Os pontos mais lindos de ver:</p>
            </div>

            <Slider
                cards={places}
                settings={{
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }}
            />
        </Container>
    );
};
