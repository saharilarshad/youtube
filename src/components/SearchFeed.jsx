import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  console.log(searchTerm);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search Results for :
        <span style={{ color: "#F31503", marginLeft: "5px" }}>
          {searchTerm}
        </span>{" "}
        videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
