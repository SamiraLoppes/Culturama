import './theme/App.css';
import { Route } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, star, settings } from 'ionicons/icons';
import { useState } from 'react';

import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites'

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';


setupIonicReact();

export const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<string>("home");

    return (
        <IonApp className='container'>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/favorites" component={Favorites} />
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom" color = "dark" className="rounded-tabbar">
                        <IonTabButton onClick={() => setCurrentPage('home')} selected={currentPage === 'home'} tab="home" href="/">
                            <IonIcon aria-hidden="true" icon={home} />
                        </IonTabButton>
                        <IonTabButton onClick={() => setCurrentPage('favorites')} selected={currentPage === 'favorites'} tab="favorites" href="/favorites">
                            <IonIcon aria-hidden="true" icon={star} />
                        </IonTabButton>
                        <IonTabButton onClick={() => setCurrentPage('settings')} selected={currentPage === 'settings'} tab="settings" href="/settings">
                         <IonIcon aria-hidden="true" icon={settings} />
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    );
}

