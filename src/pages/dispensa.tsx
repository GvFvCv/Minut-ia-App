import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Dispensa.css';

const Dispensa: React.FC = () => {
  return (
    <IonPage className='dispensa-content'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dispensa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Dispensa</h1>
        {/* Lógica para mostrar la dispensa */}
      </IonContent>
    </IonPage>
  );
};

export default Dispensa;
