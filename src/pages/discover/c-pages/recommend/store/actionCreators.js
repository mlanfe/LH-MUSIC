import * as api  from "@/network/recommend";
import { GET_BANNER } from "./constants";

export function getBanner(data) {
  return {
    type: GET_BANNER,
    data,
  }
}

export function getBannerAction() {
  return dispatch => {
    api.getBannerList().then(res => {
      console.log(res.data.banners);
      dispatch(getBanner(res.data.banners))
    })
  }
}