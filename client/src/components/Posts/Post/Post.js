import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core"
import UpVoteIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizeIcon from "@material-ui/icons/MoreHoriz"
import Moment from "moment"

import useStyles from "./styles"


function Post({post}) {
  const classes = useStyles();
  
  const [upVote, setUpVote] = useState(0);
  const [userClick] = useState(false);

  function handleVote() {
    userClick ? setUpVote(upVote + 1): setUpVote(upVote -1)
  }


  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} title={Post.title} />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{Moment(post.CreatedAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => { }}>
          <MoreHorizeIcon fontSize='default'/>
        </Button>
      </div>
      <div className={classes.details}>
      <Typography variant='body2' color='textSecondary'>{post.creator}</Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={() => { }}>
          <UpVoteIcon fontSize='small'  onClick={handleVote}/>
          UpVote
        </Button>
        <Button size='small' color='primary'>
          <DeleteIcon fontSize='small' onClick={handleVote} />
          Delete
        </Button>



      </CardActions>
   </Card>
  )
}

export default Post;