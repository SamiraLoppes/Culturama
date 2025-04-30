import React from 'react';
import styles from './index.module.css';

export type SliderCardProps = {
    img: string;
    description?: string;
};

export function SliderCard({ img, description }: SliderCardProps) {
    return (
        <div className={styles.slide}>
            <img src={img} alt={description} className={styles.carouselImg} />
            {description && (
                <div className={styles.containerDescription}>
                    <p className={styles.description}>{description}</p>
                </div>
            )}
        </div>
    );
}
