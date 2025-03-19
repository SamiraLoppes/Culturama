import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"

import "./index.css"

type ContainerProps = {
    title?: string;
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ title, children }) => {
    return (
        <IonPage className="container">
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
