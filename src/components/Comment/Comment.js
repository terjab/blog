import React from "react";
import style from "./Comment.module.scss";

export const Comment = ({ data, order }) => {
  return (
    <div className={style.flex}>
      <div className={style.order}>{order + "."}</div>
      <div className={style.wrapper}>
        <div className={style.row}>
          <div className={style.name}>{data.name}</div>
          <div className={style.email}>{data.email}</div>
        </div>
        <div>{data.body}</div>
      </div>
    </div>
  );
};
