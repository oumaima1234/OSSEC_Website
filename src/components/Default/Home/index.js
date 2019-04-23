import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import './index.scss';
import SocialIcons from '../../GenericComponents/socialIcons';
import Pics from '../../GenericComponents/partners';
import Player from '../../GenericComponents/video';
import YoutubePlayer from '../../GenericComponents/videoYoutube';


const data = [{
	id: 1,
	name: "Island",
  image: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
  website: "https://www.google1.com/"
}, {
	id: 2,
	name: "Forest",
	image: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
  website: "https://www.google2.com/"
}, {
	id: 3,
	name: "Whale",
	image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff",
  website: "https://www.google3.com/"
}, {
	id: 4,
	name: "Mountain",
	image: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0",
  website: "https://www.google4.com/"
}, {
	id: 5,
	name: "Boat",
	image: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0",
  website: "https://www.google5.com/"
}, {
	id: 6,
	name: "Flowers",
	image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc",
  website: "https://www.google6.com/"
}, {
	id: 7,
	name: "Fire",
	image: "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=1f57cc13084e32839627453821a43abf",
  website: "https://www.google7.com/"
}, {
	id: 8,
	name: "Garden",
  image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
  website: "https://www.google8.com/"
}, {
	id: 9,
	name: "Bridge",
	image: "https://images.unsplash.com/photo-1445723356089-6dbb51d9c4f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=6e476c6e7ce1adac161295616d1bec05",
  website: "https://www.google9.com/"
}];



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
      height2: 300,
      isYoutube: false,
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
        {this.state.isYoutube ?    <YoutubePlayer/> :   <Player/> }
        
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
      <br></br>

      
      <Typography align="center">
      <h1 >About</h1>
      <br></br>
        <p>
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </p>  
          </Typography>
        
      <SocialIcons />

      <Pics data={data}  ></Pics>
   
     </div>          

    );
  }
}

export default withStyles(styles)(Configuration);
