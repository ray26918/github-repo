import requests from "../api/requests";
import { GET_USERREPOS } from "./Types";

export const getUserRepos = (userName, curPage) => async (dispatch) =>{
    const resp = await requests.get(`/users/${userName}/repos`,{ params: {
        per_page: 10,
        page: curPage
    }})
    dispatch({ type: GET_USERREPOS, payload: resp.data })
    return resp.data
}