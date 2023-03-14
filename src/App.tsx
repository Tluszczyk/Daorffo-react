import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

import {Body as MainBody} from './components/MainPage/Body/Body';
import {Body as DSeriesBody} from './components/TrailerPage/Body/Body'

const App = () => <Router>
    <Routes>
        <Route path='/' element={<MainBody />} />
        <Route path='dSeries' element={<DSeriesBody />} />
    </Routes>
</Router>

export default App;
