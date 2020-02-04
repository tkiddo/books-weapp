import {SETCATALOG,SELECTCATALOG,SETBOOKLIST,ADDBOOKS,CHANGEHASMORE,SELECTBOOK} from '../constants/books'
import {CatalogItem} from '../entities/CatalogItem'
import {BookItem} from '../entities/bookItem'
import {IAction} from './IAction'

interface IState{
    catalog:CatalogItem[],
    selectedCatalog:CatalogItem | null,
    bookList:BookItem[],
    hasMore:boolean,
    selectedBook:BookItem | null
}
const INITIAL_STATE:IState = {
    catalog:[],
    selectedCatalog:null,
    bookList:[],
    hasMore:true,
    selectedBook:null
}


export default function books(state=INITIAL_STATE,action:IAction){
    switch(action.type){
        case SETCATALOG:
            return {
                ...state,
                catalog:action.payload,
                selectedCatalog:action.payload[0]
            }
        case SELECTCATALOG:
            return{
                ...state,
                selectedCatalog:action.payload
            }
        case SETBOOKLIST:
            return {
                ...state,
                bookList:action.payload
            }
        case ADDBOOKS:
            return {
                ...state,
                bookList:state.bookList.concat(action.payload)
            }
        case CHANGEHASMORE:
            return {
                ...state,
                hasMore:action.payload
            }
        case SELECTBOOK:
            return {
                ...state,
                selectedBook:action.payload
            }
        default:
            return state
    }
}