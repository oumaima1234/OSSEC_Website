import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
import React, { Component } from 'react'
import InvertedButton from '../InvertedButton'
import SocialIcons from '../../GenericComponents/socialIcons';

class Footer extends Component {
  render () {
    const { classes } = this.props
    const currentYear = new Date().getFullYear()
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          className={classNames(classes.footerText, classes.footerSections)}
        >
          <Grid item xs={12} sm={4}>
            <div vocab="http://schema.org/" typeof="Organization">
              <span property="name">Franciscan University of Steubenville</span>
              <div property="address" typeof="PostalAddress">
                <span property="streetAddress">1235 University Boulevard</span>
                <span property="addressLocality" style={{ display: 'block' }}>
                  Steubenville, Ohio{' '}
                </span>
                <span property="postalCode">43952</span>
              </div>
              <span property="telephone">(740) 283-3771</span>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container>
              <Grid
                className={classes.flexContainer}
                style={{ justifyContent: 'center' }}
                item
                xs={12}
              >
                     <SocialIcons />

              </Grid>
              <Grid
                className={classes.flexContainer}
                style={{ justifyContent: 'center' }}
                item
                xs={12}
              >
                <InvertedButton
                  style={{ width: '200px' , backgroundColor:'#998643'}}
                  className={classes.invertedBtnDark}
                  href="https://franciscan.secure.force.com/form?formid=217772"
                  title="Request Info"
                >
                  Newsletter
                </InvertedButton>
              </Grid>
              <Grid
                className={classes.flexContainer }
                style={{ justifyContent: 'flex-end' }}
                item
                xs={6}
              >
                <InvertedButton
                  style={{ width: '92px' ,  backgroundColor:'#998643' }}
                  className={classes.invertedBtnDark}
                  href="https://franciscanuniversity.force.com/portal"
                  title="Apply"
                >
                  Contact
                </InvertedButton>
              </Grid>
              <Grid className={classes.flexContainer} item xs={6}>
                <InvertedButton
                  style={{ width: '92px' ,  backgroundColor:'#998643' }}
                  className={classes.invertedBtnDark}
                  href="https://franciscan.secure.force.com/events"
                  title="Visit"
                >
                  Visit
                </InvertedButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ul style={{ listStyle: 'none', margin: 0 }}>
              <li>
                <a
                  prefetch={true}
                  as="/contact"
                  href="/page?type=aboutPages&id=contact"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    Home
                  </a>
                </a>
              </li>
              <li>
                <a
                  prefetch={true}
                  as="/ferpa"
                  href="/page?type=aboutPages&id=ferpa"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    News
                  </a>
                </a>
              </li>
              <li>
                <a
                  prefetch={true}
                  as="/directions-and-attractions"
                  href="/page?type=aboutPages&id=directions-and-attractions"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    Events
                  </a>
                </a>
              </li>
              <li>
                <a
                  prefetch={true}
                  as="/consumer-information/non-discrimination/"
                  href="/page?type=aboutPages&id=non-discrimination"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    Magazine
                  </a>
                </a>
              </li>
              <li>
                <a
                  prefetch={true}
                  as="/consumer-information"
                  href="/page?type=aboutPages&id=consumer-information"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    Training
                  </a>
                </a>
              </li>
              <li>
                <a
                  prefetch={true}
                  as="/consumer-information/non-discrimination/"
                  href="/page?type=aboutPages&id=non-discrimination"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    Contact us
                  </a>
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid className={classes.subFooter} item xs={12}>
          <Typography
            className={classes.white}
            variant="subheading"
            component={'span'}
          >
            © {currentYear} Franciscan University of Steubenville
          </Typography>
        </Grid>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    marginTop: 30,
    //backgroundColor: `${theme.palette.primary[500]}`,  
    backgroundColor: '#ebebeb' ,
    borderTop: 'solid 3px #998643',
    paddingTop: '16px',
    overflowX: 'hidden'
  },
  footerSections: {
    margin: '0 16px'
  },
  subFooter: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    padding: '8px 16px 8px 16px',
    marginTop: '8px'
  },
  footerText: {
    color: '#000',
    fontSize: '18px',
    lineHeight: 1.5
  },
  invertedBtnDark: {
    color: '#fff',
    backgroundColor: 'transparent',
    border: '2px #fff solid',
    boxShadow: 'none',
    margin: '8px'
  },
  white: {
    color: '#000'
  },
  flexContainer: {
    display: 'flex'
  }
})

export default withStyles(styles)(Footer)