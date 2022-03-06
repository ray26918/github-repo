import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserRepos } from "../redux/action";

export default function UserReposList() {

    const dispatch = useDispatch()
    const userReopsList = useSelector((state) => state.userRepos.userReposList)

    let { username } = useParams()

    useEffect(() => {
        dispatch(getUserRepos(username))
    }, [])

    useEffect(() => {
        console.log(userReopsList)
    }, [userReopsList])

    return(
        <div>
            UserReposList pages
        </div>
    )
}