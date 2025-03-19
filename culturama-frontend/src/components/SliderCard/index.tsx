import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import styles from './index.module.css'

export type SliderCardProps = {
    img: string;
    description?: string;
    stars?: number;
    distance?: number;
};

export function SliderCard({ img, description, stars, distance }: SliderCardProps) {
    return (
        <div className={styles.slide}>
            <img
                src={img}
                alt={description || `Image - ${img}`}
                className={styles.image}
            />
            {description && stars && distance && (
                <div>
                    <p>{description}</p>
                    <div>
                        <p>
                            <span>{stars}</span>
                            <IonIcon aria-hidden="true" size="small" icon={star} />
                        </p>
                        <p>
                            <span>{distance}</span> Km
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
