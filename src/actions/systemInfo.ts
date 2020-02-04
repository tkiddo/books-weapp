import {SETSYSTEMINFO} from '../constants/systemInfo'
import {SystemInfo}from '../entities/systemInfo'

export const setSystemInfo = (payload:SystemInfo)=>{
    return {
        type:SETSYSTEMINFO,
        payload
    }
}