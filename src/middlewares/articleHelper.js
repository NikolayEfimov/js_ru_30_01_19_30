import {ADD_NEW_COMMENT} from "../constants";

export default store => next => action => {
    const {type, ...rest} = action
	//через мидлвары будут проходить все экшины, суть в том, что делать их нужно максимально реюзабильными. Не завязывайся на один экшин
    if (type != ADD_NEW_COMMENT) return next(action)

    let guid = Math.random().toString(16).slice(2)
    next({...rest, type, id: guid})

}
