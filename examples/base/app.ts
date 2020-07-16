import axios from '../../src/index'

axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: ['bar', 'baz']
    }
})

axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: {
            bar: 'baz'
        }
    }
})

const date = new Date()

axios({
    method: 'get',
    url: '/base/get',
    params: {
        date
    }
})

axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: '@:$, 没文化+%20'
    }
})

axios({
    method: 'post',
    url: '/base/post',
    data: {
        a: 1,
        b: 2
    }
})

axios({
    method: 'post',
    url: '/base/post',
    headers: {
        'content-type': 'application/json;'
    },
    data: {
        a: 1,
        b: 2
    }
})

const arr = new Int32Array([21, 31])

axios({
    method: 'post',
    url: '/base/buffer',
    data: arr
})

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

axios({
    method: 'post',
    url: '/base/post',
    data: searchParams
})

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: 'bar',
//         baz: null
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get#hash',
//     params: {
//         foo: 'bar'
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get?foo=bar',
//     params: {
//         bar: 'baz'
//     }
// })

axios({
    method: 'post',
    url: '/base/post',
    data: {
        a: 1,
        b: 2
    }
}).then(res => {
    console.log(res)
})

axios({
    method: 'post',
    url: '/base/post',
    responseType: 'json',
    data: {
        a: 3,
        b: 4
    }
}).then(res => {
    console.log(res)
})

axios({
    method: 'get',
    url: '/error/get1'
})
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

axios({
    method: 'get',
    url: '/error/get'
})
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

setTimeout(() => {
    axios({
        method: 'get',
        url: '/error/get'
    })
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })
}, 5000)

axios({
    method: 'get',
    url: '/error/timeout',
    timeout: 2000
})
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e.message)
    })
