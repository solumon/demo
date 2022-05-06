function request(path) {
    return new Promise((resolve, reject) => {
        if (path) {
            resolve('请求成功')
        } else {
            reject('请求失败')
        }
    })
}


(async () => {
    console.log('pm')
    try {
        const data = await request('http://www.baidu.com')
        console.log('data:', data)
    } catch (e) {
        console.log('catch:', e)
    }


})()
