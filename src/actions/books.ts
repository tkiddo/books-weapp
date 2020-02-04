
import {SETCATALOG,SELECTCATALOG,SETBOOKLIST,ADDBOOKS,CHANGEHASMORE,SELECTBOOK} from '../constants/books'
import {CatalogItem} from '../entities/CatalogItem'
import {BookItem} from '../entities/bookItem'
import api from '../api'

export const setCatalog = (payload:CatalogItem[])=>{
    return {
        type:SETCATALOG,
        payload
    }
}

export function getCatalog(){
    return async dispatch=>{
        let res:any = await api.getCatalog()
        dispatch(setCatalog(res.data.result))
    }
}

export const selectCatalog = (payload:CatalogItem)=>{
    return {
        type:SELECTCATALOG,
        payload
    }
}

export const setBookList = (payload:BookItem[])=>{
    return {
        type:SETBOOKLIST,
        payload
    }
}

export const AddBooks = (payload:BookItem[])=>{
    return {
        type:ADDBOOKS,
        payload
    }
}

export const changeHasMore = (payload:boolean)=>{
    return {
        type:CHANGEHASMORE,
        payload
    }
}

export function getBookList(id:number,pn:number=0){
    return async dispatch => {
        let res:any = await api.getBooks({id,pn})
        if(res.data.error_code===205003){
            dispatch(changeHasMore(false))
        }else{
            pn===0?dispatch(setBookList(res.data.result.data)):dispatch(AddBooks(res.data.result.data))
        }
        
        
    }
}

export const selectBook = (payload:BookItem)=>{
    return {
        type:SELECTBOOK,
        payload
    }
}