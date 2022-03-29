import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components//HelloWorld";
import Tuiter from "./components/Tuiter";
import Labs from "./components/Labs";
import {BrowserRouter,Route,Routes} from "react-router-dom";

import './vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome-free-6.0.0-web/css/all.min.css';
import HomeScreen from "./components/Tuiter/home-screen/HomeScreen";
import ExploreScreen from "./components/Tuiter/explore-screen /ExploreScreen";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                    <Route path="/hello"
                           exact={true}
                           element={<HelloWorld/>}/>
                    <Route path="/"
                           exact={true}
                           element={<Labs/>}/>
                    <Route path="/tuiter"
                           exact={true}
                           element={<Tuiter/>}/>
                    <Route path="/tuiter/home" element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" element={<ExploreScreen/>}/>



                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;

