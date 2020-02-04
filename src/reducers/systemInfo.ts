import {SETSYSTEMINFO} from '../constants/systemInfo'
import {IAction} from './IAction'
import {SystemInfo} from '../entities/systemInfo'

const INITIAL_STATE:SystemInfo = {
    windowWidth:0,
    windowHeight:0
}


export default function systemInfo(state:SystemInfo=INITIAL_STATE,action:IAction){
    switch (action.type){
        case SETSYSTEMINFO:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}