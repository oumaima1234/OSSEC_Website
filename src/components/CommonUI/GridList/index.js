import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import YoutubePlayer from '../../GenericComponents/videoYoutube';
import './grid.scss';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "80%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

const tileData = [
	   {
	     img: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	     title: 'Image',
	     author: 'author',
	     cols: 5,
	     rows: 5,
	   },
	   {
		img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
		title: 'Image',
		author: 'author',
		cols: 5,
		rows: 3,	      
	},

	      {
		img: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		title: 'Image',
		author: 'author',
		cols: 2,
		rows: 2,
	      },
	      {
		img: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		title: 'Image',
		author: 'author',
		cols: 3,
		rows: 2,
	      },
	
	]
	function AdvancedGridList(props) {
		const { classes } = props;
	      
		return (
		  <div className={classes.root}>
		    <GridList cellHeight={200} spacing={1} className={classes.gridList}cols={10} rows={1}>
		    <GridListTile  cols={5} rows={5}>
			 <YoutubePlayer/>
			  <GridListTileBar
			    title={"qsfdsg"}
			    titlePosition="top"
			    actionIcon={
			      <IconButton className={classes.icon}>
				<StarBorderIcon />
			      </IconButton>
			    }
			    actionPosition="left"
			    className={classes.titleBar}
			  />
			</GridListTile>
			<GridListTile  cols={5} rows={5}>
			



			<GridListTile  >
			  <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
			  <GridListTileBar
			    title={"qsfdsg"}
			    titlePosition="top"
			    actionIcon={
			      <IconButton className={classes.icon}>
				<StarBorderIcon />
			      </IconButton>
			    }
			    actionPosition="left"
			    className={classes.titleBar}
			  />
			</GridListTile>
					<GridListTile  >
					<GridList cellHeight={200} spacing={1} className={classes.gridList}cols={5} rows={1}>

								
									<GridListTile   cols={2} rows={2.5}>
							<img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
						
							</GridListTile>
							<GridListTile  cols={3} rows={2.5} >
							<img src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
							<GridListTileBar
							title={"qsfdsg"}
							titlePosition="top"
							actionIcon={
							<IconButton className={classes.icon}>
								<StarBorderIcon />
							</IconButton>
							}
							actionPosition="left"
							className={classes.titleBar}
							/>
							</GridListTile>

							</GridList>

					</GridListTile>


			</GridListTile>
			




		    </GridList>
		  </div>
		);
	      }
	      
	      AdvancedGridList.propTypes = {
		classes: PropTypes.object.isRequired,
	      };
	      
	      export default withStyles(styles)(AdvancedGridList);