import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../../assets/images/Logo.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="log" className={classes.image} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" className={classes.home}>
          Home
        </Link>
        <a href="#exercises" className={classes.exercises}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
