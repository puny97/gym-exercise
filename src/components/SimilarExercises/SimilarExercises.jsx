import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "../Loader/Loader";
import HorizontalScrollbar from "../HorizontalScrollbar/HorizontalScrollbar";

const SimilarExercises = ({ targetMuscleVideos, equipmentVideos }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5} textTransform="capitalize">
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{ p: "2", position: "relative", marginBottom: { lg: "100px" } }}
      >
        {targetMuscleVideos.length ? (
          <HorizontalScrollbar data={targetMuscleVideos} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5} textTransform="capitalize">
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentVideos.length ? (
          <HorizontalScrollbar data={equipmentVideos} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
