import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

import {Body as Main} from './components/MainPage/Body/Body';
import {Body as DSeries} from './components/DSeriesPage/Body/Body'
import {Body as Shop} from './components/ShopPage/Body/Body'
import {Body as Unit} from './components/UnitPage/Body/Body'

const App = () => <Router basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='dSeries' element={<DSeries />} />
        <Route path='shop' element={<Shop />} />
        <Route path='unit' element={<Unit />} />
    </Routes>
</Router>

export default App;
