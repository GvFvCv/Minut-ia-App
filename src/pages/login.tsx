import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  // Verificar si el usuario ya está autenticado
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      history.push('/tabs/scanboleta');
    }
  }, [history]);

  const handleLogin = () => {
    // Simulación de autenticación exitosa
    localStorage.setItem('isAuthenticated', 'true');
    history.push('/tabs/scanboleta');
  };

  return (
    <IonPage className="page-login">
      <IonHeader>
        <IonToolbar>
          <IonTitle>BIENVENIDO A MiNUTA-IA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="centered-content">
        <div className="login-header">INICIA SESIÒN</div>
        <IonItem className="login-input">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>
        <IonItem className="login-input">
          <IonLabel position="floating">Contraseña</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
        </IonItem>
        <IonButton className="login-button" expand="full" onClick={handleLogin}>Iniciar Sesión</IonButton>
        <div className="login-register-link">
          <a href="/register">¿No tienes una cuenta? Regístrate</a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
