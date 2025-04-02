import "./index.css";
import { IonIcon, IonSearchbar } from "@ionic/react";
import { person } from "ionicons/icons";
import { Container } from "../../components/Container";
import { SliderCard, SliderCardProps } from "../../components/SliderCard";
import { Slider } from "../../components/Slider";

const cards: SliderCardProps[] = [
    {
        img:"/images/imageAquario.webp",
    },
    {
        img:"/images/imageCac.jpg",
    },
    {
        img:"/images/imageCachoeira2.jpg",
    }
];

const cardsdescription:SliderCardProps[] = [
    {
        img:"/images/imageCachoeira2.jpg",
        description: "Cachoeira Azul",
    },
    {
        img:"/images/imageNobres.webp",
        description: "Nobres",
    }
]

export const Home: React.FC = () => {


    return (
        <Container>
            <header className="header">
                <div className="infos">
                    <h2 className="title">Olá, Samira</h2>
                    <p className="subtitle">Qual será seu destino hoje?</p>
                </div>

                {/* Ícone de usuário */}
                <div className="image-container">
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
                cards={cards} 
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
            </div>

            <Slider 
                cards={cardsdescription}            
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
        </Container>
    );
};
