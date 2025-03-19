import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SliderSlick, { Settings } from "react-slick";
import { SliderCard, SliderCardProps } from "../SliderCard";
import styles from './index.module.css';

type SliderProps = {
    cards: SliderCardProps[];
    settings: Settings;
}

export function Slider({ cards, settings }: SliderProps) {
    return (
        <SliderSlick {...settings} className={styles.carousel}>
            {cards.map((item, index) => (
                <SliderCard key={index} {...item} />
            ))}
        </SliderSlick>
    );
}
