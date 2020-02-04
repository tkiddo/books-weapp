import Taro,{Component} from '@tarojs/taro'
import {ComponentClass} from 'react'
import { BookItem } from "../../entities/bookItem";
import './index.scss'
import { View,Image } from '@tarojs/components';
import {connect} from '@tarojs/redux'

type PageOwnProps ={}
type PageState={}
type PageDispatchProps={}
type PageStateProps={
    books:{
        selectedBook:BookItem
    }
}
type IProps = PageDispatchProps & PageOwnProps & PageStateProps
interface BookDetail{
    props:IProps,
    state:PageState
}
@connect(({books})=>({
    books
}))
class BookDetail extends Component{
    constructor(){
        super(...arguments)
    }

    render(){
        const {selectedBook} = this.props.books
        return (
            <View className='wrapper'>
                <Image src={selectedBook.img} mode='widthFix'></Image>
                <View className='title'>{selectedBook.title}</View>
                <View className='tags'>{selectedBook.tags}</View>
                <View className='sub2'>{selectedBook.sub2}</View>
            </View>
        )
    }

}

export default BookDetail as ComponentClass<PageOwnProps,PageState>

