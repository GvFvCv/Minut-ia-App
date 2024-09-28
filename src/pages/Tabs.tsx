import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import { scan, list, calendar, settings } from 'ionicons/icons';
import ScanBoleta from './scanboleta';
import Dispensa from './dispensa';
import Calendario from './calendario';
import Ajustes from './ajustes';

const Tabs: React.FC = () => {
  return (
    <IonTabs className='tab-page'>
      <IonRouterOutlet>
        <Route path="/tabs/scanboleta" component={ScanBoleta} exact />
        <Route path="/tabs/dispensa" component={Dispensa} exact />
        <Route path="/tabs/calendario" component={Calendario} exact />
        <Route path="/tabs/ajustes" component={Ajustes} exact />
      </IonRouterOutlet>
      

       {/* Barra de navegación de las tabs */}
      <IonTabBar slot="bottom">

        <IonTabButton tab="scanboleta" href="/tabs/scanboleta">
          <IonIcon icon={scan} />
          <IonLabel>Scan Boleta</IonLabel>
        </IonTabButton>

        <IonTabButton tab="dispensa" href="/tabs/dispensa">
          <IonIcon icon={list} />
          <IonLabel>Dispensa</IonLabel>
        </IonTabButton>

        <IonTabButton tab="calendario" href="/tabs/calendario">
          <IonIcon icon={calendar} />
          <IonLabel>Calendario</IonLabel>
        </IonTabButton>

        <IonTabButton tab="ajustes" href="/tabs/ajustes">
          <IonIcon icon={settings} />
          <IonLabel>Ajustes</IonLabel>
        </IonTabButton>

      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
