// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";
import Typography from "@mui/material/Typography";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Typography variant="h2" gutterBottom style={{ marginTop: "0.25rem" }}>
        Call a Friend
      </Typography>

      <Typography
        variant="overline"
        display="block"
        gutterBottom
        style={{ marginTop: "-1rem", padding: "0 10px" }}
      >
        Your friendly contact app
      </Typography>
    </>
  );
};

export default Header;
