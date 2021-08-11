import { GET_BANNER } from "./constants";

const InitialBanner = {
  bannerList: []
}

export default function reducer(state=InitialBanner, action) {
  switch (action.type) {
    case GET_BANNER:
      return {...state, bannerList: action.data }
    default:
      return state;
  }
}


