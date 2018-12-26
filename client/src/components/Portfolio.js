import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
   flexGrow: 1,
 },
  card: {
    maxWidth: 345,
    padding: theme.spacing.unit *2
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },

});


const Portfolio = (props) => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="tech1"
                className={classes.media}
                height="140"
                image="./images/tech1.jpeg"
                title="tech1"
              />
              <CardContent>
                <Typography gutterBottom varient="h5" component="h2">
                  Stock Search App
                </Typography>
                <Typography component="p">
                  Simple app to pull the latest stock information from companies. Uses html,css,javascript.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View Project
              </Button>
              <Button size="small" color="primary">
                Source Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="tech2"
                className={classes.media}
                height="140"
                image="./images/tech2.jpeg"
                title="tech2"
              />
              <CardContent>
                <Typography gutterBottom varient="h5" component="h2">
                  Employee Directory App
                </Typography>
                <Typography component="p">
                  Simple app that allows you to perform CRUD operations for an Employee Directory. Uses, html, css, javascript.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button  target="_blank" href="https://markj06.github.io/Employee-Directory/" size="small" color="primary">
                View Project
              </Button>
              <Button size="small" color="primary">
                Source Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="tech3"
                className={classes.media}
                height="140"
                image="./images/tech3.jpeg"
                title="tech3"
              />
              <CardContent>
                <Typography gutterBottom varient="h5" component="h2">
                  Event Finder App
                </Typography>
                <Typography component="p">
                  App that allows you to find events and flight information if they are outside of your area. html, css, javascript
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View Project
              </Button>
              <Button size="small" color="primary">
                Source Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="tech4"
                className={classes.media}
                height="140"
                image="./images/tech4.jpeg"
                title="tech4"
              />
              <CardContent>
                <Typography gutterBottom varient="h5" component="h2">
                  Employee Compatibility App
                </Typography>
                <Typography component="p">
                  Compatibility app that matches you to an employee based on a survey taken. html, css, javascript
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View Project
              </Button>
              <Button size="small" color="primary">
                Source Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="tech5"
                className={classes.media}
                height="140"
                image="./images/tech5.jpeg"
                title="tech5"
              />
              <CardContent>
                <Typography gutterBottom varient="h5" component="h2">
                  E-commerce App
                </Typography>
                <Typography component="p">
                  E-Commerce app that alows you browse through the available inventory and make purchases. html, css, javascript, express, sequelize, mysql, node
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View Project
              </Button>
              <Button size="small" color="primary">
                Source Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="tech6"
                className={classes.media}
                height="140"
                image="./images/tech6.jpeg"
                title="tech6"
              />
              <CardContent>
                <Typography gutterBottom varient="h5" component="h2">
                  Kudos App
                </Typography>
                <Typography component="p">
                   App that lets you send Kudos to other users. html css, javascript, mongodb, mongoose, express, node
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View Project
              </Button>
              <Button size="small" color="primary">
                Source Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="city"
                className={classes.media}
                height="140"
                image="./images/city.jpeg"
                title="city"
              />
              <CardContent>
                <Typography gutterBottom varient="h5" component="h2">
                  React Kudos
                </Typography>
                <Typography component="p">
                  Kudos App using the MERN stack. Mongodb, Express, React, Node
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View Project
              </Button>
              <Button size="small" color="primary">
                Source Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="tech6"
                className={classes.media}
                height="140"
                image="./images/tech6.jpeg"
                title="tech6"
              />
              <CardContent>
                <Typography gutterBottom varient="h5" component="h2">
                  GoodHelp App
                </Typography>
                <Typography component="p">
                  App that connects Property Owners to Small Business in there area that provide various services. mongodb, express, react, node
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View Project
              </Button>
              <Button size="small" color="primary">
                Source Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}


Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Portfolio);
