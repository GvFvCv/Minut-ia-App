import { IonApp, IonRouterOutlet } from '@ionic/react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Tabs from './pages/Tabs';


const App: React.FC = () => (
  <IonApp>
    <Router>
      <IonRouterOutlet>
        <Route path="/login" component={Login} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route path="/tabs" component={Tabs} />
        <Redirect exact from="/" to="/login" />
      </IonRouterOutlet>
    </Router>
  </IonApp>
);

export default App;
