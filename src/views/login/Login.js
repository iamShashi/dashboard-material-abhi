import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
// import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import loginstyles from "./login.module.css";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// core components
// import Navbar from "components/Navbars/Navbar.js";
// import Footer from "components/Footer/Footer.js";
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import classnames from "classnames";
import CustomInput from "components/CustomInput/CustomInput.js";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Button from "components/CustomButtons/Button.js";
// import GridContainer from "components/Grid/GridContainer";
// import CardIcon from "components/Card/CardIcon.js";
// import routes from "routes.js";

export default function Login() {
  // styles
  // const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  // const mainPanel = React.createRef();
  // states and functions
  console.log("hwrw");
  return (
    <div>
      <Grid
        container
        className={classnames(loginstyles.justify__center, "mt-3")}
      >
        <GridItem xs={6} sm={6} md={6} className={classnames("fixed-plugin")}>
          <Card>
            <CardHeader color="danger">
              <h4 className={loginstyles.card__title}>Login</h4>
            </CardHeader>
            <CardBody>
              <CustomInput
                labelText="Login"
                id="username"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon />
                    </InputAdornment>
                  ),
                  placeholder: "Username",
                }}
              />
              <CustomInput
                labelText="Password"
                placeholder="Password"
                id="password"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOpenIcon />
                    </InputAdornment>
                  ),
                  placeholder: "Password",
                }}
              />
              <Grid>
                <GridItem>
                  <Button
                    type="button"
                    color="info"
                    className={classnames("float-right")}
                  >
                    Submit
                  </Button>
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}
