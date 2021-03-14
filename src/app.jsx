import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './views/login/index.jsx'
export default class App extends Component {
    constructor(props) {
        
        super(props)

    }

    render() {
        return <div style={{width:'100%',height:'100%'}}>
            <HashRouter>
                <Switch>
                    <Route path="/" component={Login} exact />
                </Switch>
            </HashRouter>
        </div>
    }
}
