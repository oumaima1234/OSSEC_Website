import React from 'react';
import "./icons.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
const SocialButtonsPage = () => {
  return (
    <div id="social">
    <a class="facebookBtn smGlobalBtn" href="https://www.facebook.com/ossec.tn/ " target="_blank" ></a>
    <a class="twitterBtn smGlobalBtn" href="#" target="_blank" ></a>
    <a class="googleplusBtn smGlobalBtn" href="#" target="_blank"></a>
    <a class="linkedinBtn smGlobalBtn" href="#" target="_blank"></a>
    <a class="pinterestBtn smGlobalBtn" href="#" target="_blank"></a>
    <a class="tumblrBtn smGlobalBtn" href="#" target="_blank"></a>
    <a class="rssBtn smGlobalBtn" href="#" target="_blank"></a>
  </div>
  );
}

export default SocialButtonsPage;