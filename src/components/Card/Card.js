import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import style from "./Card.module.scss";

import { binarySearch, findAllOccurrences } from "../../utils";

export const Card = ({ post, authors, comments }) => {
  const [filteredComments, setfilteredComments] = useState();

  useEffect(() => {
    if (post) {
      setfilteredComments(findAllOccurrences(comments, post.id));
    }
  }, [post, comments]);

  return (
    <>
      {post && (
        <Link to={"/posts/" + post.id} className={style.link}>
          <div className={style.wrapper}>
            <div className={style.author}>
              {binarySearch(authors, post.userId).name}
            </div>
            <div className={style.title}>{post.title}</div>
            <div className={style.body}>{post.body + " ..."}</div>
            <div className={style.row}>
              <div className={style.link}>Show more...</div>
              {filteredComments && (
                <div className={style.link}>
                  Comments ({filteredComments.length})
                </div>
              )}
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
