import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import {ChannelCard, Videos} from './';

function ChannelDetail() {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  // console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 48%, rgba(9,9,121,1) 84%)",
            zIndex: 10,
            height: "200px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}} />
          <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
