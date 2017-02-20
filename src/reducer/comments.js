import {normalizedComments as defaultComments} from "../fixtures";
import {arrayToMap, mapToArr} from "../utils";
import {ADD_NEW_COMMENT} from "../constants";

const defaultState = arrayToMap(defaultComments)

export default (state = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case ADD_NEW_COMMENT:
            let newId = action.id
            console.log("in reducer: ADD_NEW_COMMENT")
            console.log(payload)
            let newState = {...state}
            console.log(newState)
            let stateArr = mapToArr(newState)
            console.log(stateArr)
            let newComment = {
                "id": newId,
                "text": payload.text,
                "user": payload.user
            }
            stateArr.push(newComment)
            newState = arrayToMap(stateArr)
            return newState
    }
    return state
}