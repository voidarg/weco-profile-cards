import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Chip from "@material-ui/core/Chip";
import { Tabs, Tab } from "@material-ui/core";

const styles = theme => ({
  card: {
    // padding: 12
    //maxWidth: 400
    paddingBottom: 8
  },
  media: {
    width: 100,
    height: 100,
    // minWidth: 120,
    //paddingTop: "%", // 16:9
    //height: 130,
    flex: "0 0 auto"
    // paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    //    backgroundColor: red[500],
    height: 120,
    width: 120,
    borderRadius: 0
  },
  chip: {
    backgroundColor: "0,0,0"
  },
  cardHeader: {
    // alignItems: "flex-start",
    // maxHeight: 110,
    paddingBottom: 0,
    paddingTop: 4,
    overflow: "hidden"
  },
  ideas: {
    backgroundColor: "rgba(255, 109, 100, 1)",
    color: "white"
  },
  strategy: {
    backgroundColor: "rgba(255, 163, 88, 1)",
    color: "white"
  },
  strategy: {
    backgroundColor: "rgba(255, 163, 88, 1)",
    color: "white"
  },
  marketing: {
    backgroundColor: "rgba(255, 210, 69, 1)",
    color: "white"
  },
  execution: {
    backgroundColor: "rgba(171, 216, 115, 1)",
    color: "white"
  },
  itWeb: {
    backgroundColor: "rgba(113, 203, 201, 1)",
    color: "white"
  },
  finance: {
    backgroundColor: "rgba(93, 202, 240, 1)",
    color: "white"
  },
  legal: {
    backgroundColor: "rgba(255, 163, 88, 1)",
    color: "white"
  },
  hr: {
    backgroundColor: "rgba(184, 136, 210, 1)",
    color: "white"
  },
  headerColor: {
    color: "#454545"
  },
  contentTextColor: {
    color: "#a3a3a3"
  },
  chip: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "rgba(0,0,0,0)",
    zoom: 0.75
  },
  chipUnmatched: {
    color: "#A6A6A6"
  },
  chipMatched: {
    color: "#3C7F42"
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false, activeTab: 0 };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card elevation={0} className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          // avatar={
          //   <Avatar
          //     aria-label="Recipe"
          //     className={classes.avatar}
          //     src="https://i.kinja-img.com/gawker-media/image/upload/s--vSY-o42Q--/c_scale,f_auto,fl_progressive,q_80,w_800/ecq5rsk3n1nolujedskk.jpg"
          //   />
          // }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography
              color="textPrimary"
              variant="h6"
              classes={{
                colorTextPrimary: classes.headerColor
              }}
            >
              Shrimp and Chorizo Paella
            </Typography>
          }
          // subheader="April 5th, 2019"
        />
        <CardContent
          style={{
            paddingBottom: 4,
            display: "flex",
            flexDirection: "row",
            paddingTop: 0
          }}
        >
          <CardMedia
            className={classes.media}
            image="https://i.kinja-img.com/gawker-media/image/upload/s--vSY-o42Q--/c_scale,f_auto,fl_progressive,q_80,w_800/ecq5rsk3n1nolujedskk.jpg"
            title="Paella dish"
          />
          <Typography
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              height: 100,
              //              height: 120,
              // width: 100,
              overflow: "hidden"
            }}
            classes={{
              colorTextPrimary: classes.contentTextColor
            }}
            color="textPrimary"
          >
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like. This impressive paella is a perfect party
            dish and a fun meal to cook together with your guests. Add 1 cup of
            frozen peas along with the mussels, if you like. This impressive
            paella is a perfect party dish and a fun meal to cook together with
            your guests. Add 1 cup of frozen peas along with the mussels, if you
            like.This impressive paella is a perfect party dish and a fun meal
            to cook together with your guests. Add 1 cup of frozen peas along
            with the mussels, if you like.This impressive paella is a perfect
            party dish and a fun meal to cook together with your guests. Add 1
            cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions
          style={{
            //maxHeight: 20,
            overflow: "clipped",
            whiteSpace: "nowrap",
            maxWidth: "90%"
          }}
        >
          {/* <Chip label="ReactJS" classes: {{
            colorPrimary: 
          }} /> */}
          <Chip
            label="Management"
            className={[classes.chip, classes.chipMatched].join(" ")}
          />
          <Chip
            label="PHP"
            className={[classes.chip, classes.chipMatched].join(" ")}
          />
          <Chip
            label="CSS"
            className={[classes.chip, classes.chipMatched].join(" ")}
          />
          <Chip
            label="Cognito"
            className={[classes.chip, classes.chipUnmatched].join(" ")}
          />
          <Chip label="...+5" />
          {/* <Chip label='Virtual Infrastructure'></Chip>
          <Chip label='Virtual Infrastructure'></Chip>
          <Chip label='Virtual Infrastructure'></Chip>
          <Chip label='Virtual Infrastructure'></Chip>
          <Chip label='Virtual Infrastructure'></Chip> */}
        </CardActions>
        {/* <CardActions>
          <Chip className={classes.ideas} label={<Typography style={{
            fontSize: 12,
            color: 'white',
            // fontWeight: 'strong'
          }}>ideas</Typography>} />
          <Chip className={classes.strategy} label="strategy" />
          <Chip className={classes.itWeb} label="it & web" />
          <Chip className={classes.ideas} label="marketing" />
        </CardActions> */}
        {/* <CardContent>
          <Tabs
            indicatorColor="secondary"
            // variant='fullWidth'
            value={this.state.value}
            onChange={(event, value) => this.setState({ activeTab: value })}
          >
            <Tab label="Info" />
            <Tab label="I can help with" />
            <Tab label="Projects" />
          </Tabs>
          {this.state.activeTab === 0 && (
            <Typography
              component="p"
              style={{
                maxHeight: 100,              classes: {{
                colorTextPrimary: classes.contentTextColor
              }}

                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like. This impressive paella is a perfect
              party dish and a fun meal to cook together with your guests. Add 1
              cup of frozen peas along with the mussels, if you like. This
              impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the
              mussels, if you like.This impressive paella is a perfect party
              dish and a fun meal to cook together with your guests. Add 1 cup
              of frozen peas along with the mussels, if you like.This impressive
              paella is a perfect party dish and a fun meal to cook together
              with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          )}
        </CardContent> */}
        {/* <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse> */}
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
