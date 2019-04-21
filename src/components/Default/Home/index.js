import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import './index.scss';
import SocialIcons from '../../CommonUi/socialIcons';
//import Pics from '../../CommonUi/partners';


const styles = theme => ({
  Description: {
    fontSize: '16px',
    color: "#BDBDBD",
  },

  list: {
    marginTop: "30px"
  },
  mdlGrid: {
    padding: "0px!important",
  },
  
  mdlCell: {
    background: "#bdbdbd",
    padding: "30px 0",
    textAlign: "center",
    color: "#424242",
    fontWeight: "bold",
  },
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class Configuration extends Component {
  constructor (props) {
    super(props);
    this.state= {
      hover: false,
      height1: 100,
      height2: 300
    };
  }
  
   handleHover() {
    this.setState({hover: !this.state.hover});
  }

  zoomPicIn(arg){
    switch(arg){
      case '1' : this.setState({height1: this.state.height1 + 20});
      case '2' : this.setState({height2: this.state.height2 + 20})

    }
    
  }
  
  zoomPicOut(arg){
    switch(arg){
      case '1' : this.setState({height1: this.state.height1 - 20});
      case '2' : this.setState({height2: this.state.height2 - 20})

    }  }
  
  render() {
    const { classes } = this.props;
    var iconStyle={
      //transform: this.state.hover ? 'translateY(-5px)' : 'none',
      //boxShadow: this.state.hover ? '3px 3px 5px #000' : 'none',
      //color: this.state.hover? "#fff" : "#aaa",
      background: this.state.hover? '#55acee' :'#222',
      transition: "all .6s",
      //borderRadius: '50%',
      //width: 50,
      //textAlign:'center',
      //lineHeight: '50px'
    }



    var iconStyles={
      transform: this.state.hover ? 'translateY(-5px)' : 'none',
      boxShadow: this.state.hover ? '3px 3px 5px #000' : 'none',
      color: this.state.hover? "#fff" : "#aaa",
      background: this.state.hover? '#55acee' :'#222',
      transition: "all .3s",
      borderRadius: '50%',
      height: 50,
      width: 50,
      textAlign:'center',
      lineHeight: '50px'
    }
    
    return (
      <div>
      <Grid container >
        <Grid className="item1 " item xs={6}>
        <video width="100%" height="500" 
        controls
        playsInline
            autoPlay
            muted=""
            loop>
  <source src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4" type="video/mp4"/>
  <source src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4" type="video/ogg"/>
  Your browser does not support the video tag.
</video>
</Grid>

        <Grid className="item2 " item xs={6}>
        <div  className=" style_prevu_kit content" >
          <img className=" content-image" src="https://mdbootstrap.com/img/Others/documentation/1.jpg"    alt="First slide" 
            style={iconStyle} 
          />
          <div class="content-details fadeIn-bottom ">
            <h3 class="content-title">This is a titleeeeeeeeeeeee</h3>
            <p class="content-text">This is a short descriptionnnnnnnnnnnnnn</p>
          </div>
          </div>
        <Grid className="item3 style_prevu_kit content" item xs={4}>
          <img className="content-image " src="https://mdbootstrap.com/img/Others/documentation/1.jpg"    alt="First slide" 
            style={iconStyle} 
          />
           <div class="content-details fadeIn-left">
            <h3 class="content-title">This is a titleeeeeeeeeeeee</h3>
            <p class="content-text">This is a short descriptionnnnnnnnnnnnnn</p>
          </div>
        </Grid> 

        <Grid className=" item4 style_prevu_kit content"  item xs={8}>
          <img class="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
            alt="First slide"
            style={iconStyle} 
          />
          <div class="content-details fadeIn-right">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
          
        </Grid> 
        </Grid>

      </Grid> 

      
      <Typography align="center">
      <h1 >About</h1>
      <br></br>
        <p>
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </p>  
          </Typography>
        
      <SocialIcons />

     </div>          

    );
  }
}

export default withStyles(styles)(Configuration);
