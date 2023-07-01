import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper,IconButton } from "@mui/material";
import { Search } from '@mui/icons-material';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (searchTerm) {
        navigate(`/search/${searchTerm}`);
  
        setSearchTerm('');
      }
    };

    return(
        <>
          <Paper component="form" onSubmit={handleSubmit}
            sx={{border:'1px solid  red',
                 borderRadius:20,
                 pl:2,
                 mr:{ sm:5 },
                 boxShadow:'none'
                }}>
                    <input placeholder="Search..." className="search-bar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

                    <IconButton type="submit" sx={{p:'10px',color:'red'}}>
                        <Search/>
                    </IconButton>
          </Paper>
        </>
    );
}
export default SearchBar;