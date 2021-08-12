import { CHANGE_BANNER_ACTION } from "./constants";
import { Map } from "immutable";

const InitialBanner = Map({
  bannerList: []
})

export default function reducer(state=InitialBanner, action) {
  switch (action.type) {
    case CHANGE_BANNER_ACTION:
      return state.set('bannerList', action.data)
    default:
      return state;
  }
}


