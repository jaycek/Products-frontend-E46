import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff7ef",
        textAlign: "center",
        py: 5,
      }}
    >
      <Container maxWidth="md">
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Your One-Stop Shop for Everything You Need!
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 4,
          }}
        >
          Discover the latest deals, trending products, and exclusive collections — all in one place.
        </Typography>

        {/* Image */}
        <Box
          component="img"
          src="cart.png" 
          alt="Shopping illustration"
          sx={{
            width: "100%",
            maxWidth: "400px",
            mx: "auto",
          }}
        />
      </Container>
    </Box>
  );
};

export default Home;
