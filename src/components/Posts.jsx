import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
  Avatar,
} from "@mui/material";

const Posts = ({post}) => {
  const {caption,imgURL} = post;
  if(post.imgURL){
    return(
      <>
      <Article caption={caption} img={imgURL}/>
      </>
    )
    }
    else{
      return(
        <>
        <Blog caption={caption} />
        </>
      )
    }
};

const Article = ({caption,imgURL})=>{
  console.log(caption,imgURL);
  return(
  <>
  <Card elevation={3}>
    <CardHeader
      avatar={<Avatar src="https://i.pravatar.cc/300" sx={{ width: 56, height: 56 }} />}
      title="Zook"
      subheader="@zook"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary">
        {caption}
      </Typography>
    </CardContent>
   
    
    <CardMedia
        component="img"
        height="200"
        image={imgURL}
  />
  </Card>
</>
  )
}

const Blog =(post)=>{
  return(
    <>
    <Card elevation={3}>
      <CardHeader
        avatar={<Avatar src="https://i.pravatar.cc/300" sx={{ width: 56, height: 56 }} />}
        title="Zook"
        subheader="@zook"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {post.caption}
        </Typography>
      </CardContent>
    </Card>
  </>
  )
}
export default Posts;
