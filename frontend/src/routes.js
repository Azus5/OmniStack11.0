import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            {/* O switch garante que apenas uma rota seja chamada por vez */}
            <Switch>
                {/* A rota '/' deve possuir 'exact' para que as outras rotas não caiam nela por começarem com '/', com a propriedade exact, a rota digitada deve ser identica */}
                <Route path="/" exact component={Logon} />
                <Route path='/register' component={Register} />
                <Route path='/profile' component={Profile} />
                <Route path='/incidents/new' component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}