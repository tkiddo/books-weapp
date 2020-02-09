# 利用聚合数据做一个图书信息展示小程序

### 项目技术栈
typescript@3.0.1+taro@1.0.0-beta.15+redux@3.0.6+sass

### 项目运行
```
git clone https://github.com/justforfunmy/books-weapp.git

cd books-weapp

npm install

npm run dev:weapp
```
通过[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)可以预览项目效果


### 几点说明

1. ##### 聚合数据接口
因为这个项目只是为了展示开发微信小程序的流程，所以就采用了免费的数据接口[聚合数据](https://www.juhe.cn/)。图中AppKey值用于接口调用，配置见项目`src/config`。
<img src='https://github.com/justforfunmy/books-weapp/blob/master/imgs/%E8%81%9A%E5%90%88%E6%95%B0%E6%8D%AE.jpg'>

2. ##### taro+typescript
本项目使用[taro](https://taro.aotu.io/)开发，基于react语法，任何熟悉react语法的同学都可以轻松上手，学习成本较低。至于[typescript](http://www.typescriptlang.org/)，本人觉得每个前端开发者都需要尽快学习,最好结合项目实际开发。

3. ##### sass+flex布局
[sass](https://www.sass.hk/)作为一个专业级的css扩展语言，可以极大地提高css代码的编写效率。`flex`布局，建议阅读阮一峰的[flex布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

最后，小程序比较粗糙，以后改进，附上小程序码：
<img src='https://github.com/justforfunmy/books-weapp/blob/master/imgs/Find%E4%B9%A6.jpg'>



