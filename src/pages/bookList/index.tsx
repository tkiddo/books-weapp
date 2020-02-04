import {ComponentClass} from 'react'
import Taro,{ Component,Config } from "@tarojs/taro"
import {View,ScrollView} from '@tarojs/components'
import {CatalogItem} from '../../entities/CatalogItem'
import {BookItem} from '../../entities/bookItem'
import BookItemComponent from '../../components/bookItem'
import {SystemInfo}from '../../entities/systemInfo'
import {getBookList,selectBook} from '../../actions/books'
import {connect} from '@tarojs/redux'


import './index.scss'

type PageStateProps = {
    books:{
        selectedCatalog:CatalogItem,
        bookList:BookItem[],
        hasMore:boolean
    },
    systemInfo:SystemInfo
}
type PageDispatchProps = {
    getBookList:(id:number,pn:number)=>void
    selectBook:(payload:BookItem)=>void
}
type PageOwnProps = {}
type PageState = {
    pn:number,
    pageCount:number
}

type IProps = PageOwnProps & PageStateProps & PageDispatchProps

interface BookList{
    props:IProps,
    state:PageState
}

@connect(({books,systemInfo})=>({
    books,systemInfo
}),(dispatch)=>({
    getBookList(id:number,pn:number){
        dispatch(getBookList(id,pn))
    },
    selectBook(payload:BookItem){
        dispatch(selectBook(payload))
    }
}))

class BookList extends Component{
    config:Config={
        navigationBarTitleText:''
    }
    constructor(){
        super(...arguments)
        this.state={
            pn:0,
            pageCount:10
        }
    }

    getMoreBooks=()=>{
        const {selectedCatalog,hasMore} = this.props.books
        if(!hasMore){
            return
        }
        this.setState({
            pn:this.state.pn+this.state.pageCount
        },()=>{
            this.props.getBookList(selectedCatalog.id,this.state.pn)
        })
    }

    handleSelect=(item:BookItem)=>{
        this.props.selectBook(item)
        Taro.navigateTo({
            url:'/pages/bookDetail/index'
        })
    }

    componentWillMount(){
        const {selectedCatalog} = this.props.books
        Taro.setNavigationBarTitle({title:selectedCatalog.catalog})
    }
    componentDidMount(){
        const {selectedCatalog} = this.props.books
        this.props.getBookList(selectedCatalog.id,0)
    }

    render(){
        const {bookList,hasMore} = this.props.books
        const {windowHeight} = this.props.systemInfo
        return (
            <ScrollView 
            style={{'height':`${windowHeight}px`}}
            scrollY
            onScrollToLower={this.getMoreBooks}>
                <View className='wrapper' >
                {
                    bookList.map((item,idx)=>{
                        return (
                            <View className='item' key={idx}>
                                <BookItemComponent info={item} onHandleClick={this.handleSelect.bind(this,item)}></BookItemComponent>
                            </View>
                            
                        )
                    })

                }
                </View>
                {
                    !hasMore && (
                        <View className='no-more'>没有更多了。</View>
                    )
                    
                }
                
            </ScrollView>
        )
    }
}

export default BookList as ComponentClass<PageOwnProps,PageState>