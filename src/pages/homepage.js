import React, { useEffect, useMemo, useState } from "react";

import style from "../styles/pages/Homepage.module.scss";

import { getComments } from "../api/get-comments";
import { getPosts } from "../api/get-posts";
import { getUsers } from "../api/get-users";
import { Card } from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 10;
    const lastPageIndex = firstPageIndex + 10;
    return posts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, posts]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res));
    getUsers().then((res) => setUsers(res));
    getComments().then((res) => setComments(res));
  }, []);

  return (
    <>
      <div className={style.wrapper}>
        {posts &&
          currentTableData.map((post, i) => (
            <div key={i} className={style.card}>
              <Card post={post} authors={users} comments={comments} />
            </div>
          ))}
      </div>
      <div className={style.pagination}>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={posts.length}
          pageSize={10}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
}
