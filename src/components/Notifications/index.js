import React from 'react';
import Notification from "../CommonUI/Snackbar"
import ReactDOM from "react-dom";

/* Notifications
message : message à afficher dans la notification;
type: success| error | warning | info
*/
export const addNotification = ( message , type) => {
    ReactDOM.render(<div><Notification message = {message} type = {type} open= {true}/></div> ,
         document.getElementById("app_Notification"));
    
  };
  