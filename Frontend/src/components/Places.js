import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./CardI";
import { Link } from "react-router-dom";
import places from "../static/places";
import useWindowPosition from "../hooks/useWindowPosition";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
export default function Places() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="place-to-visit">
      <Link to="/medical">
        <ImageCard place={places[1]} checked={checked} />
      </Link>
      <Link to="/about-us">
        <ImageCard place={places[0]} checked={checked} />
      </Link>
    </div>
  );
}
