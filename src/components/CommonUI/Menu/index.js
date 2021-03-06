import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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

class LongMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [0],
      isOpen: false,
      anchorEl: null
    };
  }

  handleDeleteOption = index => {
    console.log(index);
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? `long-menu` : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          style={{ boxShadow: "none" }}
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 15,
              width: 200
            }
          }}
        >
          {this.props.options.map(option => (
            <MenuItem
              key={`${option.key}:${this.props.index}`}
              id={`${option.id}:${this.props.index}`}
              onClick={e => {
                this.props.itemClick(e);
                this.handleClose();
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

LongMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LongMenu);
