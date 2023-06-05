import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

import {Body as Main} from './components/MainPage/Body/Body';
import {Body as DSeries} from './components/TrailerPage/Body/Body'
import {Body as Shop} from './components/ShopPage/Body/Body'

const App = () => <Router>
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='dSeries' element={<DSeries />} />
        <Route path='shop' element={<Shop />} />
    </Routes>
</Router>

export default App;
