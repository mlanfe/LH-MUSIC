import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function AppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <NavLink to="/discover" className="header-left-item sprite_01">
            发现音乐
            <i className="sprite_01 icon"></i>
          </NavLink>
          <NavLink to="/mine" className="header-left-item sprite_01">
            我的音乐
            <i className="sprite_01 icon"></i>
          </NavLink>
          <NavLink to="/friend" className="header-left-item sprite_01">
            朋友
            <i className="sprite_01 icon"></i>
          </NavLink>
          <a className="header-left-item" href="#/">音乐人</a>
          <a className="header-left-item" href="#/">下载客户端</a>
        </HeaderLeft>

        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" allowClear prefix={<SearchOutlined />} bordered={false}/>
          <div className="creator-center">创作者中心</div>
          <div className="login-in">登录</div>
        </HeaderRight>
      </div>

      <div className="bottom-line">
      </div>

    </HeaderWrapper>
  )
})
