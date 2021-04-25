
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Routes } from './index';

const Routerview = (props) => {

    return (
        <Switch>
            {Routes.map(({ path, component }, i) => <Route key={i} exact path={path} component={component} />)}
        </Switch>
    )


}

export default Routerview
