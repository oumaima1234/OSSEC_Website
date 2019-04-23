import React, { Component } from "react";
import Tab from "../CommonUI/Tabs";
import Home from "./Home";
import News from "./News";
import Events from "./Events";
import Magazine from "./Magazine";
import Trainings from "./Trainings";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "../CommonUI/Footer"
class Default extends Component {
  render() {
    var logo_ossec=require('../../images/logo_ossec.png')
    return(
      <div id = {this.props.id}> 
      <Tab id="ilm-main-tab" 
            items = {[
                  { content:  <Home id ="ossec-home"/>,
                  label:  <img  src={logo_ossec}   alt="logo_ossec"/>,
                  id: 'logo_ossec-tab'
                  },
                  { content: <Home id ="ossec-home"/>,
                  label: "Home",
                  id: 'ossec-home-tab'
                },
                { content: <News id ="ossec-news"/>,
                  label: "News",
                  id: 'ossec-news-tab'
                },
                { content: <Events id ="ossec-events"/>,
                  label: "Events",
                  id: 'ossec-events-tab'
                },
                { content: <Magazine id ="ossec-magazine"/>,
                  label: "Magazine",
                  id: 'ossec-magazine-tab'
                },
                { content: <Trainings id ="ossec-trainings"/>,
                  label: "Trainings",
                  id: 'ossec-trainings-tab'
                },
                { content: <Team id ="ossec-team"/>,
                  label: "Team",
                  id: 'ossec-team-tab'
                },
                { content: <Contact  id ="ossec-contact"/>,
                  label: "Contact us",
                  id: 'ossec-contact-tab'
                }
                    ]
      } ></Tab>
        <Footer></Footer>
      
      </div>
    );}
  }


export default (Default);
