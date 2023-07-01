import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos  from './Videos';
import ChannelCard from './Channelcard';
import { fetchFromAPI } from "../utils/fetchFromAPI";


function ChannelDetail() {
    
    const [channelDetail,setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    // destructuring the id
    const { id } = useParams();
    // console.log("chaneldetails",channelDetail);
    // console.log("videos",videos);
    // rerender whenever the id changes
    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data) => setChannelDetail(data?.items[0]) )


        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data) => setVideos(data?.items) )
    },[id]);

    return(
        <>
            <Box minHeight="95vh">
                <Box>
                    <div style={{
                                background: 'linear-gradient(324deg, rgba(66,61,164,1) 0%, rgba(5,0,1,0.9360119047619048) 19%, rgba(128,4,5,1) 26%, rgba(230,8,8,0.9248074229691877) 41%, rgba(245,4,9,0.9556197478991597) 53%, rgba(224,22,30,1) 60%, rgba(213,31,41,1) 68%, rgba(58,81,154,1) 83%, rgba(0,212,255,1) 95%)',
                                zIndex: 10,
                                height:'300px'
                                }}/>
                    <ChannelCard  channelDetail={channelDetail} marginTop="-110px"/>            
                </Box>
                <Box display="flex" p="2">
                    <Box sx={{ m:{sm:'10px'} }}/>
                     {/* rendering the videos */}
                    <Videos videos={videos}/>
                </Box>
            </Box>
        </>
    );
}
export default ChannelDetail;