import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';


function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/player/:id' element={<Player />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
