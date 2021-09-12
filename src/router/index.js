import React from 'react'
import Home from '../views/Home'
import Dashboard from '../views/Dashboard'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import Navbar from '../components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as Middleware from '../middleware/App'
import Profile from '../views/Profile'

function Router (props) {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <div className="mt-4"/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login'>
                        <Middleware.Guest render={<Login/>}/>
                    </Route>
                    <Route exact path='/register'>
                        <Middleware.Guest render={<Register/>}/>
                    </Route>
                    <Route exact path='/dashboard'>
                        <Middleware.Authenticated render={<Dashboard/>}/>
                    </Route>
                    <Route exact path='/profile'>
                        <Middleware.Authenticated render={<Profile/>}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
