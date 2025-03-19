import "./index.css";
import { IonIcon, IonSearchbar } from "@ionic/react";
import { person } from "ionicons/icons";
import { Container } from "../../components/Container";
import Slider from "react-slick"; // Importando react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home: React.FC = () => {
    const images = [
        "/images/imageAquario.webp",
        "/images/imageCac.jpg",
        "/images/imageCachoeira2.jpg",
    ];

    // Configuração do carrossel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

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
            <Slider {...settings} className="carousel">
                {images.map((src, index) => (
                    <div key={index} className="slide">
                        <img src={src} alt={`Imagem ${index + 1}`} className="carousel-img" />
                    </div>
                ))}
            </Slider>
            <div className="avaliacao">
                <p className="subtitle">Se liga nessas viagens em alta:</p>
            </div>
        </Container>
    );
};
