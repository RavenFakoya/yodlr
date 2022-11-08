import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Register from '../auth/Register';

//Routes for site

function Routes({register}){
    return(
        <div>
            <Switch>
                <Route exact path="/register" >
                    <Register register={register} />
                </Route>
                <Route exact path="/admin-page">

                </Route>
            </Switch>
        </div>
    )
}

export default Routes;