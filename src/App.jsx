import './App.css';
import {BrowserRouter} from "react-router-dom";
import { Routes,Route } from 'react-router-dom';
import {Box} from '@mui/material'; 
import Navbar from './component/Navbar';
import Feed from './component/Feed';
import VideoDetail from './component/VideoDetail';
import ChannelDetail from './component/ChannelDetail';
import SearchFeed from './component/SearchFeed';
 

const App = () => (
   <BrowserRouter>
      <Box sx={{ backgroundColor:'black'}}>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Feed/>}/>
            <Route exact path='/video/:id' element={<VideoDetail/>}/>
            <Route exact path='/channel/:id' element={<ChannelDetail/>}/>
            <Route exact path='/search/:searchTerm' element={<SearchFeed/>}/>
          </Routes>
      </Box>
   </BrowserRouter>
);

export default App;



// import {Navbar,Feed,VideoInformation,ChannelInformation,SearchFeed} from './component';