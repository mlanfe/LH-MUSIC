import request from "./request";

export const getBannerList = (data) => {
  return request('/banner',"get", data)
  }
