import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"

type ContainerProps = {
    title?: string;
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ title, children }) => {
    return (
        <IonPage>
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
