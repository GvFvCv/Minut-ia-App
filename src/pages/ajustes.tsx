import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Ajustes.css';

const Ajustes: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Aquí puedes eliminar los datos de sesión (localStorage, etc.)
    localStorage.removeItem('loggedIn'); // Ejemplo de logout
    history.push('/login'); // Redirige al login
  };

  return (
    <IonPage>
      <IonContent className="centered-content">
        <div className="ajustes-content">
          <h1>Ajustes</h1>
          <button>Modificar Preferencias</button>
          <IonButton color="danger" onClick={handleLogout} style={{ marginTop: '20px' }}>
            Cerrar Sesión
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Ajustes;
