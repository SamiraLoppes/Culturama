import React from 'react';
import './theme/App.css';
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom'; // ✅ Usar Redirect no lugar de Navigate
import { home, star } from 'ionicons/icons';
import './theme/global.css';

import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { Login } from './pages/Login';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact();

export const App: React.FC = () => {
    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    {/* Rota para login */}
                    <Route exact path="/login" component={Login} />

                    {/* Rotas adicionais */}
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />

                    {/* Redireciona raiz para /login */}
                    <Route exact path="/" render={() => <Redirect to="/login" />} />

                    {/* Rotas com abas */}
                    <Route
                        path="/tabs"
                        render={() => (
                            <IonTabs>
                                <IonRouterOutlet>
                                    <Route exact path="/tabs/home" component={Home} />
                                    <Route exact path="/tabs/favorites" component={Favorites} />
                                    <Route exact path="/tabs" render={() => <Redirect to="/tabs/home" />} />
                                </IonRouterOutlet>
                                <IonTabBar slot="bottom" className="custom-tab-bar">
                                    <IonTabButton tab="home" href="/tabs/home">
                                        <IonIcon icon={home} />
                                    </IonTabButton>
                                    <IonTabButton tab="favorites" href="/tabs/favorites">
                                        <IonIcon icon={star} />
                                    </IonTabButton>
                                </IonTabBar>
                            </IonTabs>
                        )}
                    />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
};
