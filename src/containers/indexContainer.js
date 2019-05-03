import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "../components/homepage/grid";
import MediaQuery from "react-responsive";

const headingText = {
  fontFamily: `Roboto`,
  fontSize: `2em`,
  wordSpacing: `1em`,
  color: `black`
};

const hrStyle = {
  width: `20%`,
  color: `black`,
  height: `2px`
};

const innerPara = {
  fontSize: `1.125rem`,
  fontFamily: `Roboto`,
  marginBottom: `3%`,
  lineHeight: `2`
};

const indexContainer = () => (
  <div>
    <Grid />
  </div>
);

export default indexContainer;
