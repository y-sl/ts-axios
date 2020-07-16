import axios from '../../src/index'
import qs from 'qs'
import { AxiosTransformer } from '../../src/types/index'
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// 'Content-Type': 'application/x-www-form-urlencoded'
// axios.defaults.headers['POST']['Content-Type'] = 'application/x-www-form-urlencoded'
// axios({
//   url: '/config/post',
//   method: 'post',
//   data: qs.stringify({
//     a: 1
//   }),
//   headers: {
//     test: '321'
//   }
// }).then(res => {
//   console.log(res.data)
// })
// console.log('axios.defaults', axios.defaults)
// axios({
//   transformRequest: [
//     function (data) {
//       console.log('data', data)
//       // return data
//       return qs.stringify(data)
//     },
//     ...(axios.defaults.transformRequest as AxiosTransformer[])
//   ],
//   transformResponse: [
//     ...(axios.defaults.transformResponse as AxiosTransformer[]),
//     function (data) {
//       if (typeof data === 'object') {
//         data.b = 2
//       }
//       return data
//     }
//   ],
//   url: '/config/post',
//   method: 'post',
//   data: {
//     a: 1
//   }
// }).then(res => {
//   console.log(res)
// })
// console.log('axios', axios)

const instance = axios.create({
  transformRequest: [
    // function (data) {
    //   return qs.stringify(data)
    // },
    ...(axios.defaults.transformRequest as AxiosTransformer[])
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    function (data) {
      if (typeof data === 'object') {
        data.b = 2
      }
      return data
    }
  ]
})

instance({
  url: '/config/post',
  method: 'post',
  data: {
    a: 1
  }
}).then(res => {
  console.log(res.data)
})
