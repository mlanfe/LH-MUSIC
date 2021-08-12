import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getBannerAction } from "../../store/actionCreators";

import { Carousel } from 'antd';
import { BannerWrapper, BannerLeft, BannerRight, BannerBtn } from "./style";

export default memo(function TopBanner() {

  const [curIndex, setIndex] = useState(0)

  const bannerList = useSelector(state =>{
    return state.getIn(["recommend","bannerList"])
  }, shallowEqual)
  const dispatch = useDispatch()

  const topBanner = useRef()

  useEffect(() => {
    dispatch(getBannerAction())
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setIndex(to)
  }, [])

  const changeCurBanner = useCallback((value) => {
    if(value === "left") {
      topBanner.current.prev()
    }else {
      topBanner.current.next()
    }
  }, [])

  return (
    <BannerWrapper bgcUrl={bannerList[curIndex]?.imageUrl}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" ref={topBanner} autoplay beforeChange={bannerChange}>
            {bannerList.map( item => {
              return (
                <div className="mid-swipper-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight />
      </div>
      <BannerBtn className="wrap-v2">
        <div className="btn btnL" onClick={e => changeCurBanner("left")}></div>
        <div className="btn btnR" onClick={e => changeCurBanner("right")}></div>
      </BannerBtn>
    </BannerWrapper>
  )
})
