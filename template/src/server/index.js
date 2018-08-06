let apiAjax = (url, paramas)=> {

    // 请求
    // 云编译开启全局加密的情况下，请务必使用api.ajax，避免使用JQ等框架的ajax，否则将引起请求失败。
    // 详情https://docs.apicloud.com/Client-API/api#3
    // 可以根据适合自己的业务封装下

    return new Promise((resolve, reject)=> {
            window.api.ajax({
                data: {
                    values: paramas
                }
            },
            (res, err)=> {
                
            }
        )
    })

}

export default apiAjax;