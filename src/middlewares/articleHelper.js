import {guidGenerator} from "../utils";

export default store => next => action => {
    console.log("in helper middleware")
    if (!action.generateComment) return next(action)

    //пока не разобрался как "добавлять что-то" в middleware
    //так понимаю что параметром в next
    debugger
    let guid = guidGenerator
    next({...rest, id: guid})
    console.log("id from middleware")

}