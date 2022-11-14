import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Button } from "react-bootstrap";
import Masonry from "react-masonry-css";
import { LinkContainer } from "react-router-bootstrap";
import Moment from "react-moment";

import { getPosts } from "../../store/actions";

const HomePosts = (props) => {
  const homePosts = useSelector((state) => state.posts);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts({}, 1, "desc", 6));
    console.log(homePosts);
  }, [dispatch]);
  const loadMorePosts = () => {
    setLoading(true);
    const page = homePosts.page + 1;
    dispatch(getPosts(homePosts, page, "desc", 6)).then(() => {
      setLoading(false);
    });
  };
  return (
    <>
      <Masonry
        breakpointCols={{default:3,800:2,500:1}}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {homePosts.posts
          ? homePosts.posts.map((item) => (
              <div key={item.id}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={item.image}
                />
                <div className="author">
                  <span>{item.author} - </span>
                  <Moment format="DD MMMM YY">{item.createdAt}</Moment>
                </div>
                <div className="content">
                  <div className="title">{item.title}</div>
                  <div className="excerpt">{item.excerpt}</div>
                  <LinkContainer to={`/article/${item.id}`} className="mb-3">
                    <Button variant="light">Read more</Button>
                  </LinkContainer>
                </div>
              </div>
            ))
          : null}
      </Masonry>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : null}
      {!homePosts.end && !loading ? (
        <Button variant="uotline-dark" onClick={() => loadMorePosts()}>
          Load More
        </Button>
      ) : null}
    </>
  );
};
export default HomePosts;
