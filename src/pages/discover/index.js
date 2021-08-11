import React, { memo, useEffect } from 'react'

import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";

import { DiscoverWrapper, TitleWrapper } from "./style";

export default memo(function LHDiscover(props) {
  useEffect(() => {
    // getBannerList({type: 2}).then(res => {
    //   console.log(res);
    // })
    console.log(props.route.routes);
  })
  
  return (
    <DiscoverWrapper>
      
      <div className="title-container">
        <TitleWrapper className="wrap-v1">
          <NavLink to="/discover/recommend" className="title-item">推荐</NavLink>
          <NavLink to="/discover/ranking" className="title-item">排行榜</NavLink>
          <NavLink to="/discover/songs" className="title-item">歌单</NavLink>
          <NavLink to="/discover/djradio" className="title-item">主播电台</NavLink>
          <NavLink to="/discover/artist" className="title-item">歌手</NavLink>
          <NavLink to="/discover/album" className="title-item">新碟上架</NavLink>
        </TitleWrapper>
      </div>
      
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
})
