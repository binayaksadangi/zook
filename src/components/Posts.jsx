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
  return (
    <>
      <Card elevation={3}>
        <CardHeader
          avatar={<Avatar src="https://i.pravatar.cc/300" />}
          title="Zook"
          subheader="@zook"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {post.caption}
          </Typography>
        </CardContent>
        <CardMedia
            component="img"
            height="200"
            image="https://picsum.photos/360"
      />
      </Card>
    </>
  );
};

export default Posts;
