import {ADD_NEW_COMMENT} from "../constants";

export default store => next => action => {
    const {type, ...rest} = action
    if (type != ADD_NEW_COMMENT) return next(action)

    let guid = Math.random().toString(16).slice(2)
    next({...rest, type, id: guid})

}