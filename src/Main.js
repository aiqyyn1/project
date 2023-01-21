import Box from '@mui/material/Box';
import Reg from './components/Reg'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Check from './Check';

function Main(){
return (
<BrowserRouter>
  <Routes>
  <Route path="/" element={<Check></Check>}></Route>
  <Route index element={<Reg />} />
  </Routes>
</BrowserRouter>
)



}
export default Main