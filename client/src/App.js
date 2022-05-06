import React, {useEffect} from "react"
import './App.css';
import {Container, Grow, Grid} from "@material-ui/core";
import { useDispatch } from "react-redux";

import {getPosts} from "./actions/posts"
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
// import useStyles from "./styles";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (
   <Container className = "appContainer" maxWidth="lg">
     <Navbar/>
     <Grow in>
       <Container>
         <Grid  container justifyContent="space-between" alignItems="stretch" spacing={3}>
           <Grid item xs={12} sm={7}>
             <Posts />
           </Grid>
           <Grid item xs={12} sm={4}>
             <Form />
           </Grid>

         </Grid>
       </Container>
      </Grow>
      <Footer />
   </Container>
  );
}

export default App;
