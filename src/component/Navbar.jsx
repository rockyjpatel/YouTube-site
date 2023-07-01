import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import {logo} from '../utils/logos';

function Navbar() {
    return(
        <>
          <Stack 
            direction="row"
            alignItems="center"
            p={1}
            sx={{position:'sticky',background:'black',top:'0',justifyContent:'space-between'}}>

            <Link to="/" style={{display:"flex",alignItems:"center"}}>
                <img src={logo} alt="logo" height={40} />
            </Link>
            <SearchBar/>
          </Stack>
        </>
    );
}
export default Navbar;