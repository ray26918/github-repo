/* eslint-disable import/no-anonymous-default-export */

import { GET_REPOSITORY, GET_USERREPOS } from "../action/Types"


const INTIAL_STATE = {
  userReposList: [],
  repository: []
}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
      case GET_USERREPOS:
        return { ...state, userReposList: action.payload }
      case GET_REPOSITORY:
        return { ...state, repository: action.payload}
      default:
        return state
    }
}