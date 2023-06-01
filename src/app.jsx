import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './views/login/index.jsx'
import Home from './views/home/index.jsx'
export default class App extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            a:1
        }
    }

    

    render() {
        return <div style={{width:'100%',height:'100%'}}>
            <HashRouter>
                <Switch>
                    <Route path="/" component={Login} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/home" component={Home} exact />
                </Switch>
            </HashRouter>
        </div>
    }
}
