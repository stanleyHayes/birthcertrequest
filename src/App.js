import './App.css';
import {Route, Routes} from "react-router";
import IndexPage from "./pages/index/index-page";
import NotFound from "./pages/404/not-found-page";

function App() {
    return (
        <Routes>
            <Route element={<IndexPage/>} path="/" exact={true}/>
            <Route element={<NotFound/>} path="*" exact={true}/>
        </Routes>
    );
}

export default App;
