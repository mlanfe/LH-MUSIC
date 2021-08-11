import axios from 'axios'
import { BASEURL, TIMEOUT } from './config'


const service =  axios.create({
  baseURL: BASEURL,
  timeout: TIMEOUT,
})

function request(url="", method="get", data={}, headers={}) {
  const config = {
    header: {'content-type': 'application/json', ...headers},
    url,
    method,
  }

  if(method==="get" || method==="delete") {
    config.params = data
  }else if(method==="post" || method==="put"){
    if(config.header['content-type'] === 'application/json') {
      config.data = data
    }
  }

  return service.request(config)
}


export default request