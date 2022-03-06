/* eslint-disable import/no-anonymous-default-export */

import { GET_USERREPOS } from "../action/Types"


const INTIAL_STATE = {
  userReposList: []
}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
      case GET_USERREPOS:
        return { ...state, userReposList: action.payload }
      default:
        return state
    }
}