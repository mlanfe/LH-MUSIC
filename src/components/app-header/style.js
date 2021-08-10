import styled from 'styled-components'
import pic from '@/assets/img/sprite_01.png'


export const HeaderWrapper = styled.div`
  display: flex;
  background-color: #242424;
  color: #ccc;
  height: 70px;
  line-height: 70px;
  font-size:14px;
  flex-wrap: wrap;

  .content{
    display: flex;
    justify-content: space-between;
  }

  .header-left-item{
    position: relative;

    &:hover, &.active{
      text-decoration:none;
      color: #fff;
      background-color: #000;
    }

    &.active .icon{
      position: absolute;
      bottom: -1px;
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 12px;
      height: 7px;
      background-position: -226px 0;
    }

    :last-of-type{
      position: relative;

      ::after {
        position: absolute;
        content: "";
        width: 28px;
        height: 19px;
        background-image: url(${pic});
        background-position: -190px 0;
        top: 20px;
        right: -15px;
      }
    }
  }

  .bottom-line{
    background-color: #C20C0C;
    height: 34px;
    width: 100%;
    display: flex;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo{
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  
  .header-left-item{
    padding: 0 15px;
    color: #ccc;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  .search{
    height: 32px;
    width: 200px;
    border-radius: 16px;
    background-color: #fff;
    
    input::placeholder {
      font-size: 12px;
      color: #9b9b9b;
    }
  }

  .creator-center{
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    border-radius: 16px;
    color: #ccc;
    border: 1px solid #ccc;
    margin: 0 16px;
  }

  .login-in{
    color: #787878;
  }
`