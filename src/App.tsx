import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

import {Body as Main} from './components/MainPage/Body/Body';
import {Body as DSeries} from './components/DSeriesPage/Body/Body'
import {Body as Shop} from './components/ShopPage/Body/Body'
import {Body as Unit} from './components/UnitPage/Body/Body'

const App = () => <Router basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route path='/' element={<Main pageTitle='Da orffo'/>} />
        <Route path='dSeries' element={<DSeries pageTitle='Da orffo | DSeries'/>} />
        <Route path='shop' element={<Shop pageTitle='Da orffo | Shop'/>} />
        <Route path='unit' element={<Unit pageTitle='Da orffo | USeries'/>} />
    </Routes>
</Router>

export default App;
