import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getBannerAction } from "./store/actionCreators";


export default memo(function LHRecommend() {
  const dispatch = useDispatch()
  const bannerList = useSelector(state=>{
    return state.recommend.bannerList
  }, shallowEqual)

  useEffect(() => {
    dispatch(getBannerAction())
  }, [dispatch])

  return (
    <div>
      {bannerList.length}
    </div>
  )
})
