import React from 'react';
import styles from './index.module.css';
import places from '../../data/places.json';
import { IonIcon } from '@ionic/react';
import { Container } from '../../components/Container';
// import { SliderCardProps } from '../../components/SliderCard';
import { Slider } from '../../components/Slider';
import { options } from 'ionicons/icons';

// const cardsdescription: SliderCardProps[] = places.map((place) => ({
//     img: place.images[0], // pega a primeira imagem do lugar
//     href: `/place/${place.id}`, // cria uma rota dinâmica
// }));

export const Favorites: React.FC = () => {
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

            <Slider
                cards={places}
                settings={{
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }}
            />
            <Slider
                cards={places}
                settings={{
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }}
            />
        </Container>
    );
};
