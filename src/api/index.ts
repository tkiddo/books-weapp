import config from '../config'
import {http} from '../utils/http'

const getCatalog = '/goodbook/catalog'
const getBooks = '/goodbook/query'

export default {
    getCatalog(){
        return http({
            url:`${getCatalog}?key=${config.key}&dtype=json`
        })
    },
    getBooks(params){
        return http({
            url:`${getBooks}?key=${config.key}&catalog_id=${params.id}&pn=${params.pn}&rn=10&dtype=json`
        })
    }
}