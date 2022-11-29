import React from "react";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import { Query_UserFeed } from "../../utils/queries";
import Post from "./Post";

export const Feed = () => {

    const { username: userParam } = useParams();
    
    const { loading, error, data } = useQuery(Query_UserFeed);

    const feed = data || {};

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/home" />
    }
    if (loading) {
        return <div>Loading...</div>
    }
    if (feed) {

        return (
            <div>
                {feed.userFeed.length ? (feed.userFeed.map((post) => (
                    <Post key={post._id} post={post}/>
                )))
                    : (<div className='mx-auto align-items-center text-center my-4 vh-100'>No Posts Available</div>)
            }
            </div>
        )

    }


}