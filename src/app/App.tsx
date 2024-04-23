import Home from '../components/Pages/Home/Home';
import {Route, Router, Switch} from 'wouter';
import TestAnother from '../components/Pages/TestAnother/TestAnother';
interface IError {
    code: string;
    message: string;
}

export default function App() {

    return (
        <Router base={'/app'}>
            <Switch>
                <Route path={'/'} component={Home} />
                <Route path={'/test'} component={TestAnother} />
            </Switch>
        </Router>
    );
}