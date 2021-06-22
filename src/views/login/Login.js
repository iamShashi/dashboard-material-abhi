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
// import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
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
      <Grid container>
        <Card>
          <CardHeader color="danger">
            <h4 className={loginstyles.card__title}>Login</h4>
          </CardHeader>
          <CardBody>
            {`The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to Naviglio" where you can enjoy the main night
            life in Barcelona...`}
          </CardBody>
        </Card>
      </Grid>
    </div>
  );
}
