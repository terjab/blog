import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import style from "../styles/pages/Detail.module.scss";

import { getPost } from "../api/get-post";
import { getUsers } from "../api/get-users";
import { binarySearch, findAllOccurrences } from "../utils";
import * as routes from "../routes";
import { getComments } from "../api/get-comments";
import { Comment } from "../components/Comment/Comment";

export function PostDetail(props) {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    postId && getPost(postId).then((res) => setPost(res));
  }, [postId]);

  useEffect(() => {
    if (post) {
      getUsers().then((res) => setAuthor(binarySearch(res, post.userId)));
      getComments().then((res) =>
        setComments(findAllOccurrences(res, post.id))
      );
    }
  }, [post]);

  return (
    <>
      {post && author && (
        <div className={style.wrapper}>
          <Link to={routes.HOMEPAGE} className={style.link}>
            {`< Back to all posts`}
          </Link>
          <h1 className={style.header}>{post.title}</h1>
          <div className={style.columns}>
            <div className={style.author}>
              <div className={style.subheader}>Author</div>
              <div className={style.text}>{author.name}</div>
              <div className={style.text}>{author.email}</div>
            </div>
            <div className={style["full-text"]}>
              <div>{post.body}</div>
              <div>
                Groom yourself 4 hours - checked, have your beauty sleep 18
                hours - checked, be fabulous for the rest of the day - checked
                poop in litter box, scratch the walls. Chew foot find a way to
                fit in tiny box or waffles or cough hairball on conveniently
                placed pants yet you have cat to be kitten me right meow for the
                best thing in the universe is a cardboard box scratch the
                postman wake up lick paw wake up owner meow meow. Lay on arms
                while you're using the keyboard make muffins stares at human
                while pushing stuff off a table cat mojo purr for no reason and
                sun bathe.
              </div>
              <div>
                Lick master's hand at first then bite because im moody skid on
                floor, crash into wall . Scratch me there, elevator butt love
                and coo around boyfriend who purrs and makes the perfect
                moonlight eyes so i can purr and swat the glittery gleaming yarn
                to him (the yarn is from a $125 sweater) but freak human out
                make funny noise mow mow mow mow mow mow success now attack
                human so use lap as chair. I see a bird i stare at it i meow at
                it i do a wiggle come here birdy spot something, big eyes, big
                eyes.
              </div>
            </div>
          </div>
          <h2 className={style.h2}>Comments</h2>
          <div className={style.comments}>
            {comments &&
              comments.map((comment, i) => (
                <div key={i} className={style.comment}>
                  <Comment data={comment} order={i + 1} />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
