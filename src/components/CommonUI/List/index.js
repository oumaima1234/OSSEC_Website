import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
//import Divider from '@material-ui/core/Divider';
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Paper from "@material-ui/core/Paper";
import LongMenu from "../Menu";

const ITEM_HEIGHT = 48;

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  listItemSecondaryAction: {
    visibility: "hidden"
  },
  listItem: {
    "&:hover $listItemSecondaryAction": {
      visibility: "inherit"
    }
  }
});

class DynamicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false
    };
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        <Paper elevation={15}>
          <List className={classes.root}>
            {this.props.items && this.props.items.ListItems.map((value, i) => (
              <ListItem
                key={value.id}
                role={undefined}
                button
                classes={{
                  container: classes.listItem
                }}
              >
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText
                  primary={value.name}
                  secondary = {value.description ?  value.description.substring(0, 90) : null}
                />
                {this.props.menuOptions && (
                  <ListItemSecondaryAction
                    className={classes.listItemSecondaryAction}
                  >
                    <LongMenu
                      index={value.id}
                      itemClick={this.props.action}
                      options={this.props.menuOptions}
                    />
                  </ListItemSecondaryAction>
                )}
              </ListItem>
            ))}
            {this.props.ItemAdd && (
              <ListItem onClick={this.props.addAction} button>
                <Avatar>
                  <AddIcon />
                </Avatar>
                <ListItemText primary={this.props.ItemAdd} />
              </ListItem>
            )}
          </List>
        </Paper>
      </div>
    );
  }
}

DynamicList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DynamicList);
