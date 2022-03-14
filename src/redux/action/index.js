import requests from "../api/requests";
import { GET_REPOSITORY, GET_USERREPOS } from "./Types";

export const getUserRepos = (userName, curPage) => async (dispatch) =>{
    const resp = await requests.get(`/users/${userName}/repos`,{ params: {
        per_page: 10,
        page: curPage
    }})
    dispatch({ type: GET_USERREPOS, payload: resp.data })
    return resp.data
}

export const getRepository = (owner, repo) => async (dispatch) =>{
    const resp = await requests.get(`/repos/${owner}/${repo}`)
    dispatch({ type: GET_REPOSITORY, payload: resp.data })
    return resp.data
}