import requests from "../api/requests";
import { GET_USERREPOS } from "./Types";

export const getUserRepos = (userName) => async (dispatch) =>{
    const resp = await requests.get(`/users/${userName}/repos`)
    dispatch({ type: GET_USERREPOS, payload: resp.data })
}