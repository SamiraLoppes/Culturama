import { IonIcon, IonSearchbar } from "@ionic/react";
import { person } from "ionicons/icons";
import { Container } from "../../components/Container";
import { SliderCardProps } from "../../components/SliderCard";
import { Slider } from "../../components/Slider";
import styles from './index.module.css';

const cardsWithoutInfos: SliderCardProps[] = [
    {
        img: "/images/imageAquario.webp",
    },
    {
        img: "/images/imageCac.jpg",
    },
    {
        img: "/images/imageCachoeira2.jpg",
    }
];

const cardsWithInfos: SliderCardProps[] = [
    {
        img: "/images/imageAquario.webp",
        description: "Teste Description 1",
        stars: 4.5,
        distance: 6.7
    },
    {
        img: "/images/imageCac.jpg",
        description: "Teste Description 2",
        stars: 5,
        distance: 10.9
    },
    {
        img: "/images/imageCachoeira2.jpg",
        description: "Teste Description 3",
        stars: 3.1,
        distance: 5.4
    }
]

export const Home: React.FC = () => {

    return (
        <Container>
            <header className={styles.header}>
                <div>
                    <h2 className={styles.title}>Olá, Samira</h2>
                    <p className={styles.subtitle}>Qual será seu destino hoje?</p>
                </div>

                {/* Ícone de usuário */}
                <div className={styles.icon}>
                    <IonIcon aria-hidden="true" size="large" icon={person} />
                </div>
            </header>

            {/* Campo de busca */}
            <div>
                <IonSearchbar placeholder="Buscar eventos..." />
                <p className="subtitle">Se liga nessas viagens em alta:</p>
            </div>

            {/* Carrossel de imagens */}
            <Slider
                cards={cardsWithoutInfos}
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

            <div className="avaliacao">
                <p className="subtitle">Se liga nessas viagens em alta:</p>
                <Slider
                    cards={cardsWithInfos}
                    settings={{
                        dots: false,
                        infinite: false,
                        speed: 500,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                    }}
                />
            </div>
        </Container>
    );
};
