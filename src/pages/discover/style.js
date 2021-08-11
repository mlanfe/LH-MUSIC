import styled from "styled-components";


export const DiscoverWrapper = styled.div`
  .title-container{
    background-color: #C20C0C;
    padding: 5px 0;

  }
`

export const TitleWrapper = styled.div`
  display: flex;
  padding-left: 180px;

  a:hover{
    text-decoration: none;
  }
  .title-item {
    color: #fff;
    margin: 0 15px;
    height: 20px;
    line-height: 20px;
    border-radius: 15px;
    padding: 0 15px;

    &.active{
      background-color: #9c0909;
    }
  }

`