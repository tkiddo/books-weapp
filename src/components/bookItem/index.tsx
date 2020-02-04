import Taro,{ Component} from "@tarojs/taro"
import {View,Image} from '@tarojs/components'
import {BookItem} from '../../entities/bookItem'
import './index.scss'

interface IProps{
    info:BookItem,
    onHandleClick:()=>void
}

export default class BookItemComponent extends Component<IProps>{
    render(){
        const {info} = this.props
        return (
            <View className='item' onClick={this.props.onHandleClick}>
                <Image src={info.img} mode='widthFix'></Image>
                {/* <View className='img'></View> */}
                <View className='title'>{info.title}</View>
                <View className='reading'>{info.reading}</View>
            </View>
        )
    }
}