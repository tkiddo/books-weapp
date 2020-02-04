import Taro from "@tarojs/taro";
import config from "../config";

interface IOptions {
    url: string;
    data?: any;
    header?: any;
    method?: any;
}

export const http = function (options: IOptions) {
    const interceptor = function (chain) {
        Taro.showLoading({
            title: "loading..."
        });
        const requestParams = chain.requestParams;
        // const { method, data, url } = requestParams;
        // console.log(`http ${method || "GET"} --> ${url} data: `, data);
        return chain.proceed(requestParams).then(res => {
            // console.log(`http <-- ${url} result:`, res);
            return res;
        });
    };

    Taro.addInterceptor(interceptor);
    return new Promise((resolve, reject) => {
        Taro.request({
            ...options,
            url: `${config.baseUrl}${options.url}`
        })
            .then(res => {
                Taro.hideLoading();
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};
