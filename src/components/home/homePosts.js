import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Button } from "react-bootstrap";

import { getPosts } from "../../store/actions"


const HomePosts = (props) => {
    const homePosts = useSelector(state => state.posts)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts({}, 1, "desc", 6))
    }, [dispatch])
    const loadMorePosts = () => {
        setLoading(true)
        const page = homePosts.page + 1
        dispatch(getPosts(homePosts, page, "desc", 6)).then(()=>{
            setLoading(false)
        })
    }
    return (
        <>
            {loading ? <div style={{ textAlign: "center" }}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div> : null}
            {!homePosts.end && !loading ?
                <Button
                    variant="uotline-dark"
                    onClick={() => loadMorePosts()}
                >
                    Load More
                </Button>
                : null}
        </>
    )
}
export default HomePosts