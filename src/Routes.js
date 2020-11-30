import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Videos from './Pages/Videos';
import AskQuestion from './Pages/AskQuestion';
import FAQ from './Pages/FAQ';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/ask-a-question" component={AskQuestion} />
                <Route exact path="/videos" component={Videos} />
                <Route exact path="/faq" component={FAQ} />

                <Route component={() => <h1>Not Found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes