import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { baseColor } from "../../../parameters";


function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  function LinkTab(props) {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
  }

  
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    backgroundColor: "#ebebeb", // tab bg color

  },
  tabsIndicator: {
  //  backgroundColor: baseColor, // underlined color
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    //maxHeight: 192,

    fontSize: 20,
    'color': '#000', //text color
    //fontSize: '18px',
    //fontWeight: 400,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      'backgroundColor': ' #ebebeb', // hover color
     
      opacity: 1,
    },
    '&$tabSelected': {
      'backgroundColor': ' #ebebeb',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#4fc3f7',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class CustomizedTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div id= {this.props.id} className={classes.root}>
      
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          indicatorColor="#81d4fa"

        >
        {this.props.items.map(item => (
          <Tab
           key = {item.id}
           id = {item.id}
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label= {item.label}
          />
        ))}
          
      
        </Tabs>

        {<TabContainer >{ this.props.items[value].content}</TabContainer>}
       
      </div>
    );
  }
}

CustomizedTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTabs);