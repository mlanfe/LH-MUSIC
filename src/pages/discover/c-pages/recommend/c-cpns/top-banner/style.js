import styled from "styled-components";

import bannerRightImg from '@/assets/img/download.png'
import bannerSprite from '@/assets/img/banner_sprite.png'


export const BannerWrapper = styled.div`
  position: relative;
  background: url(${props => (props.bgcUrl) + '?imageView&blur=40x20'}) center center/6000px;

  .banner{
    display: flex;
    height: 270px;
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  .image{
    width: 100%;
  }
`

export const BannerRight = styled.div`
  width: 254px;
  background: url(${bannerRightImg});
`

export const BannerBtn = styled.div`
  position: absolute;
  height: 63px;
  right: 0;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  a:hover{
    background-color: rgba(0,0,0,.2);
  }

  .btn{
    width: 37px;
    height: 63px;
    position: absolute;

  }
  .btnL{
    width: 37px;
    height: 63px;
    position: absolute;
    background: url(${bannerSprite}) 0 9999px no-repeat;
    background-position: 0 -360px;
    left: -68px;
  }
  .btnR{
    width: 37px;
    height: 63px;
    position: absolute;
    background: url(${bannerSprite}) 0 9999px no-repeat;
    background-position: 0 -508px;
    right: -68px;
  }
`