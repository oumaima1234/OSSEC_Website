import React from 'react';
import "./icons.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
const SocialButtonsPage = () => {
  return (
    <div id="social">
    <a className="facebookBtn smGlobalBtn" href="https://www.facebook.com/ossec.tn/ " target="_blank" ></a>
    <a className="twitterBtn smGlobalBtn" href="#" target="_blank" ></a>
    <a className="googleplusBtn smGlobalBtn" href="#" target="_blank"></a>
    <a className="linkedinBtn smGlobalBtn" href="#" target="_blank"></a>
    <a className="pinterestBtn smGlobalBtn" href="#" target="_blank"></a>
    <a className="tumblrBtn smGlobalBtn" href="#" target="_blank"></a>
    <a className="rssBtn smGlobalBtn" href="#" target="_blank"></a>
  </div>
  );
}

export default SocialButtonsPage;