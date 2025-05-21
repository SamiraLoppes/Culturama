import React from 'react';
import { useParams } from 'react-router-dom';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/react';
import placesData from '../../data/places.json';
import styles from './index.module.css';

export const PlacePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Buscando a lista no JSON, e procurando o lugar de acordo com o ID da rota
    const places = placesData;
    const place = places.find((p) => p.id === id);

    if (!place) {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Destino não encontrado</IonTitle>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/tabs/home" />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <p>O destino que você está procurando não existe ou foi removido.</p>
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/tabs/home" />
                    </IonButtons>
                    <IonTitle>{place.name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {place.images.map((item, index) => (
                    <img key={index} src={item} alt={place.name} className={styles.image} />
                ))}
                <h2 style={styles.description}>{place.name}</h2>
                <p>{place.description}</p>
                <p>
                    <strong>Endereço:</strong> {place.address}
                </p>
            </IonContent>
        </IonPage>
    );
};
