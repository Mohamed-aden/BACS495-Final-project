import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { createPost } from '../../actions/posts';
import useStyles from './styles';



function Form() {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator:'', title:'', question: ''
  })

  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
    dispatch(createPost(postData))

  }

  const clear = () => {
    
  }
  return (
    <Paper>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 
        <Typography variant='h6'>Ask a question</Typography>
        <TextField name='creator' variant='outlined' label="Full name" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        
        <TextField name='title' variant='outlined' label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        
        <TextField name='question' variant='outlined' label="Question" fullWidth value={postData.question} onChange={(e) => setPostData({ ...postData, question: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
       
      </form>
    </Paper>
  )
}

export default Form;