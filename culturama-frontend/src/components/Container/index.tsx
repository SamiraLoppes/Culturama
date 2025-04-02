import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"

import styles from "./index.module.css"

type ContainerProps = {
    title?: string;
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ title, children }) => {
    return (
        <IonPage className={styles.container}>
            <IonHeader>
                {title && (
                    <IonToolbar>
                        <IonTitle>{title}</IonTitle>
                    </IonToolbar>
                )}
            </IonHeader>
            <IonContent fullscreen>
                {children}
            </IonContent>
        </IonPage>
    )
}
