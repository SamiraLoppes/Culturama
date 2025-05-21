import React from 'react';
import styles from './index.module.css';
import { useHistory } from 'react-router-dom';

export type SliderCardProps = {
    id: string;
    name: string;
    description?: string;
    images: string[];
};

export function SliderCard({ id, name, description, images }: SliderCardProps) {
    const history = useHistory();

    return (
        <div className={styles.slide} onClick={() => history.push(`/place/${id}`)}>
            <img src={images[0]} alt={description} className={styles.carouselImg} />

            <div className={styles.containerDescription}>
                <p className={styles.description}>{name}</p>
            </div>
        </div>
    );
}
