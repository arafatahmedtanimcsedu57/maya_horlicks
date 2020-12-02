import React from 'react';

import Home from './Pages/Home';

const Routes = () => {
    return (
        // <BrowserRouter>
        //     <Layout>
        //         <Switch>
        //             <Route exact path={["/", "/home"]} component={Home} />

        //             <abbrRoute exact path="/faq" component={Home} />

        //             <Route component={() => <h1>Not Found</h1>} /> * /}
        //      </Switch>
        //     </Layout>
        // </BrowserRouter>
        <Home />
    )
}

export default Routes