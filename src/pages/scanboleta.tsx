import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './scanboleta.css';

const ScanBoleta: React.FC = () => {
  return (
    <IonPage className='scan-content'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scan Boleta</IonTitle>
          <h1>HOLA MUNDO</h1>
        </IonToolbar>
      </IonHeader>
      <IonContent className='scan-content'>
        <h1>Escanea tu boleta aquí</h1>
        {/* Lógica para escanear boleta */}
      </IonContent>
    </IonPage>
  );
};

export default ScanBoleta;
