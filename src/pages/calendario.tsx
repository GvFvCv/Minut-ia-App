import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Calendario.css';

const Calendario: React.FC = () => {
  return (
    <IonPage className='tab-page'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calendario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="centered-content">
        <h1>Calendario</h1>
        {/* Lógica para mostrar eventos del calendario */}
      </IonContent>
    </IonPage>
  );
};

export default Calendario;
