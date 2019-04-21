import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./magasine.scss";


const styles = theme => ({
  Description: {
    color: "#BDBDBD"
  },

  list: {
    marginTop: "30px"
  },

  


});

class Slider extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	      active: 0,
	      max: 0,
	      index: 0
	  };
	  this.state.max = this.props.children.length;
	  this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
	}
      
	dotClicked = e => {
	  this.setState({ index: parseInt(e.target.dataset.index, 10) });//find index of dot
	  this.setState({
	    active: this.state.index
	  });
	};
      
	isActive(value){
	  if(this.state.active === value){
	      return 'active';
	  }
	}
      
	componentDidMount() {
	  this.interval = setInterval( () => this.intervalBetweenSlides(), 5000); 
	}
      
	componentWillUnmount() {
	  clearInterval( this.interval );
	}
      
	intervalBetweenSlides() { 
	    if (this.state.active === this.state.max - 1) {
		this.state.active = 0;
	    } else {
		this.state.active++;
	    }
	    this.setState({
	      active: this.state.active
	    });
	}
      
	nextOne(e){
	  this.setState({ index: parseInt(e.target.dataset.index, 10) });
	  if (this.state.active < this.state.max - 1) {
	    this.setState({
	      active: this.state.active + 1
	    });
	  }
	  else {
	    this.state.active = 0;
	  }
	}
      
	prevOne(){
	  if (this.state.active > 0) {  
	    this.setState({
	      active: this.state.active - 1
	    });
	  }
	  else {
	    this.state.active = this.state.max;
	  }
	}
      
	setSliderStyles(){
	  return {
	    left: -100 * this.state.active + "%"
	  }
      }
      
	render() {
	  return (
	  <div className="slider">
	  <span className="slid__number">0{this.state.active+1}</span>
	    <div className="slider-container">
	      <div
		className="slider-innerContainer"
		style={ this.setSliderStyles() }>
		{this.props.children.map((child, index, activ) =>
		  <div key={index} >
		    {child}
		  </div>)
		}
		  
	      </div>
	      <div className="slider-dots">
		{this.props.children.map((child, index) =>
		  <div key={index} data-index={index} onClick={this.dotClicked} className={this.isActive(index) + ' dots' }>
		    {index === this.state.active ? "◉" : "◌"}
		  </div>
		)}
	      </div>
	    </div>
	    <div className="controler">
		    <div onClick={ this.prevOne.bind(this)} className="slid__arrow back"  alt="prev slid">
		      &#x2039;
		    </div>
		    <div  onClick={this.nextOne.bind(this)} className="slid__arrow next"  alt="next slid">
		      &#8250;
		    </div>
	    </div>
	    </div>
	  );
	}
      }
      
      class SliderApp extends  React.Component {
	render() {
	  return (
	    <div>
	      <Slider>
		<img src="https://images.unsplash.com/photo-1511804472014-fa7b871cd6a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Wohnzimmer"/>
		<img src="https://www.wavecity.in/wp-content/uploads/2017/07/Featured-7-825x510.jpg" alt="Flur"/>
		<img src="https://www.aqua.org/-/media/Images/Events/world-oceans-day/worlds-ocean-desktop-header_5-22-18_1260x558.ashx"/>
		<img src="https://assets.atlasobscura.com/article_images/40609/image.jpg" alt="Terasa"/>
	      </Slider>
	      <div class="article">
      	      <div class ="rectangle"></div>
		<h1>An ocean from Ancient</h1>
		<p>Saline water covers approximately 361,000,000 km2 (139,000,000 sq mi) and is customarily divided into several principal oceans and smaller seas, with the ocean covering approximately 71% of Earth's surface and 90% of the Earth's biosphere.[6] The ocean contains 97% of Earth's water, and oceanographers have stated that less than 5% of the World Ocean has been explored.[6] The total volume is approximately 1.35 billion cubic kilometers (320 million cu mi) with an average depth of nearly 3,700 meters (12,100 ft)
		</p>			
		<button>world ocean </button>
		<a target="_blank" title="instagram/web__addict" href="https://www.instagram.com/web__addict/"><i class="fab fa-instagram"></i></a>
	      </div>
	    </div>
	  );
	}
      }
      
      
      

export default withStyles(styles)(SliderApp);
