import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FacebookProvider, CustomChat } from 'react-facebook';

import './App.css';

import {Body as Main} from './components/MainPage/Body/Body';
import {Body as DSeries} from './components/DSeriesPage/Body/Body'
import {Body as Shop} from './components/ShopPage/Body/Body'
import {Body as Unit} from './components/UnitPage/Body/Body'

const App = () => <>
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path='/' element={<Main pageTitle='Da Orffo'/>} />
            <Route path='dSeries' element={<DSeries pageTitle='Da Orffo | DSeries'/>} />
            <Route path='shop' element={<Shop pageTitle='Da Orffo | Shop'/>} />
            <Route path='unit' element={<Unit pageTitle='Da Orffo | USeries'/>} />
        </Routes>
    </Router>


    <FacebookProvider appId="1357604634938810" chatSupport>
        <CustomChat pageId="610415412327342" minimized={true}/>
    </FacebookProvider>   
</>

export default App;
