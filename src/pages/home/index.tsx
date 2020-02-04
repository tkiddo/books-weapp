import { ComponentClass } from 'react'
import Taro, { Component, Config } from "@tarojs/taro"
import { View,Picker } from '@tarojs/components'
import { CatalogItem } from "../../entities/CatalogItem"
import {SystemInfo}from '../../entities/systemInfo'
import { connect } from '@tarojs/redux'
import { getCatalog, selectCatalog } from '../../actions/books'
import {setSystemInfo} from '../../actions/systemInfo'

type PageStateProps = {
    books: {
        catalog: CatalogItem[],
        selectedCatalog:CatalogItem
    },
    systemInfo:SystemInfo
}

type PageDispatchProps = {
    getCatalog: () => void
    selectCatalog: (payload:CatalogItem) => void
    setSystemInfo:(payload:SystemInfo)=>void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Home {
    props: IProps;
}

@connect(({ books,systemInfo }) => ({
    books,systemInfo
}), (dispatch) => ({
    getCatalog() {
        dispatch(getCatalog())
    },
    selectCatalog(payload: CatalogItem) {
        dispatch(selectCatalog(payload))
    },
    setSystemInfo(payload:SystemInfo){
        dispatch(setSystemInfo(payload))
    }
}))

class Home extends Component {
    config: Config = {
        navigationBarTitleText: '类目'
    }

    getCatalog = () => {
        this.props.getCatalog()
    }

    toListPage = (payload:CatalogItem) => {
        this.props.selectCatalog(payload)
        Taro.navigateTo({
            url: `/pages/bookList/index`
        })
    }

    getSystemInfo=async ()=>{
        let res = await Taro.getSystemInfo()
        this.props.setSystemInfo({windowHeight:res.windowHeight,windowWidth:res.windowWidth})
    }

    handleOnChange=(e)=>{
        const {catalog} = this.props.books
        this.props.selectCatalog(catalog[e.detail.value])
        Taro.navigateTo({
            url: `/pages/bookList/index`
        })
    }
    

    componentDidMount() {
        this.getCatalog()
        this.getSystemInfo()

    }

    render() {
        const { catalog,selectedCatalog } = this.props.books
        return (
            <View className='wrapper'>
                {/* {
                    catalog.map((item) => {
                        return (
                            <View className='item' key={item.id} onClick={this.toListPage.bind(this, item)}>{item.catalog}</View>
                        )
                    })
                } */}
                <View className='title'>选择类目</View>
                <Picker mode='selector' range={catalog} rangeKey='catalog' onChange={this.handleOnChange} value={0}>
                    <View className='picker'>
                        {selectedCatalog.catalog}
                        
                    </View>
                </Picker>

            </View>
        )
    }
}


export default Home as ComponentClass<PageOwnProps, PageState>