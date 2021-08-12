import * as api  from "@/network/recommend";
import { CHANGE_BANNER_ACTION } from "./constants";

export function changeBannerAction(data) {
  return {
    type: CHANGE_BANNER_ACTION,
    data,
  }
}

export function getBannerAction() {
  return dispatch => {
    api.getBannerList().then(res => {
      console.log(res.data.banners);
      dispatch(changeBannerAction(res.data.banners))
    })
  }
}