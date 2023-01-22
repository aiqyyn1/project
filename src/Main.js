import Box from '@mui/material/Box';
import Reg from './components/Reg'

import Check from './components/Check';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function Main() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/Check' element={<Check/>}></Route>
          <Route index element={<Reg></Reg>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Main