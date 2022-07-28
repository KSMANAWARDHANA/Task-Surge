import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword.jsx';
import Dashboard from './pages/adminDashboard';
import StuDashboard from './pages/stuDashboard';
import './App.css';
import ViewList from './components/allStudents';

function App() {
    return (
        <div className=" ">
            {/*<Sidebar />*/}
            <div className="bg-indigo-100">
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path='/users/password/forget' component={ForgetPassword}/>
                    <Route exact path="/admin/dashboard" component={Dashboard} />
                    <Route exact path="/student/dashboard" component={StuDashboard} />
                    <Route exact path="/student/list" component={ViewList} />
                    
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </div>
    );
}

export default App;
