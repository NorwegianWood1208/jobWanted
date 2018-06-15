import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../login/login';
import Register from '../login/register';
import Deliver from '../deliver/deliver'
import {Router, Route, Link} from 'react-router-dom';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Route exact path="/" component={Deliver}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
            </div>
         )
    }
}
 
export default App;