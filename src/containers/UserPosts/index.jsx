import React from "react";
import Container from "@material-ui/core/Container";
import Footer from "../../components/Footer";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import PostCardUserView from "../../components/PostCardUserView";
import HeaderPrivate from "../../components/HeaderPrivate";
import useStyles from "../../styles/user_posts";

const userPosts = [
  {
    id: "1",
    title: "How COVID is affecting the Economy",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    date: "Sun 23, 2021",
    cover: "https://picsum.photos/1200/800",
  },
  {
    id: "2",
    title: "How Walter White failed to deal drugs",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    date: "Sun 23, 2021",
    cover: "https://picsum.photos/1200/800",
  },
  {
    id: "3",
    title: "How COVID is affecting the Economy",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    date: "Sun 23, 2021",
    cover: "https://picsum.photos/1200/800",
  },
  {
    id: "4",
    title: "How COVID is affecting the Economy",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    date: "Sun 23, 2021",
    cover: "https://picsum.photos/1200/800",
  },
];

export default function PostPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <HeaderPrivate />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h3" align="left" className={classes.section}>
              My Posts
            </Typography>
            {userPosts.map((post) => (
              <div key={post.id} style={{ marginTop: "15px" }}>
                <PostCardUserView post={post} />
              </div>
            ))}
          </Paper>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}
