import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import orange from "@material-ui/core/colors/orange";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";

// declarations and css
const innerTypo = {
  color: `grey`,
  fontSize: `16px`,
  fontFamily: "Roboto",
  overflowY: "hidden",
  height: "92px"
};

const outerTypo = {
  fontFamily: "Roboto",
  fontSize: `18px`,
  overflowY: "hidden",
  height: "62px"
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: `10%`
  },
  cardContent: {
    padding: "0 0",
    paddingBottom: "0"
  },
  card: {
    padding: theme.spacing.unit * 2,
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: "100%"
  },
  btn: {
    color: "white",
    borderRadius: "20px",
    fontSize: "14px",
    fontFamily: "Roboto",
    marginBottom: "12px"
  },
  thirdButton: {
    backgroundColor: "#1a237e",
    borderColor: "#007bff",
    "&:hover": {
      backgroundColor: "#0d47a1",
      borderColor: "#0062cc"
    }
  },
  fourthButton: {
    backgroundColor: "#42a5f5",
    borderColor: "#007bff",
    "&:hover": {
      backgroundColor: "#90caf9",
      borderColor: "#0062cc"
    }
  },
  thirdLink: {
    color: "#1a237e"
  },
  fourthLink: {
    color: "#42a5f5"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: {
      main: "#8e24aa"
    }
  }
});

// functional component
function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        {/* First card component */}
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Card className={classes.card} square={true}>
              <CardContent className={classes.cardContent}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                >
                  MONTHLY SESSIONS
                </Button>
                <Typography
                  component="h2"
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  style={outerTypo}
                >
                  Tech talks, demo and display of projects, hands-on experience.
                </Typography>
                <Typography
                  component="h2"
                  align="left"
                  variant="body1"
                  gutterBottom
                  style={innerTypo}
                >
                  These sessions attempt to bring all developers and enthusiasts
                  to learn, innovate and share ideas.
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    window.location = "/sessions";
                  }}
                  className={classes.link}
                >
                  SESSIONS
                </Link>
              </CardActions>
            </Card>
          </Grid>

          {/* Second Card component */}
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Card className={classes.card} square={true}>
              <CardContent className={classes.cardContent}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.btn}
                >
                  RICH ALUMNI BASE
                </Button>
                <Typography
                  component="h2"
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  style={outerTypo}
                >
                  Meet our great achievers and well-placed Alumni.
                </Typography>
                <Typography
                  component="h2"
                  align="left"
                  variant="body1"
                  gutterBottom
                  style={innerTypo}
                >
                  We have an active, diverse and extremely well-connected Alumni
                  base across the globe with great accomplishments.
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    window.location = "/alumni";
                  }}
                  color="secondary"
                  className={classes.link}
                >
                  ZAIRZA FAMILY
                </Link>
              </CardActions>
            </Card>
          </Grid>

          {/* Third Card component */}
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Card className={classes.card} square={true}>
              <CardContent className={classes.cardContent}>
                <Button
                  variant="contained"
                  color="tertiary"
                  className={classNames(classes.btn, classes.thirdButton)}
                >
                  BIG ACHIEVERS
                </Button>
                <Typography
                  component="h2"
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  style={outerTypo}
                >
                  Meet our big achievers with exceptional achievements.
                </Typography>
                <Typography
                  component="h2"
                  align="left"
                  variant="body1"
                  gutterBottom
                  style={innerTypo}
                >
                  Zairza has the highest number of Google Summer of Code interns
                  from Odisha and various other achievements too.
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  component="button"
                  variant="body2"
                  className={classes.thirdLink}
                  onClick={() => {
                    window.location = "/team";
                  }}
                  className={classes.link}
                >
                  MEET THE TEAM
                </Link>
              </CardActions>
            </Card>
          </Grid>

          {/* Fourth Card component */}
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Card className={classes.card} square={true}>
              <CardContent className={classes.cardContent}>
                <Button
                  variant="contained"
                  color="tertiary"
                  className={classNames(classes.btn, classes.fourthButton)}
                >
                  AWESOME PROJECTS
                </Button>
                <Typography
                  component="h2"
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  style={outerTypo}
                >
                  Here at Zairza, we design, create and innovate.
                </Typography>
                <Typography
                  component="h2"
                  align="left"
                  variant="body1"
                  gutterBottom
                  style={innerTypo}
                >
                  List of our extensive research work, innovative project
                  development both in hardware as well as in software category.
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  component="button"
                  variant="body2"
                  className={classes.fourthLink}
                  onClick={() => {
                    window.location = "/projects";
                  }}
                  className={classes.link}
                >
                  PROJECTS
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
