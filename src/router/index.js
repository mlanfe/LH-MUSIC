// import react from 'react'
import { Redirect } from "react-router-dom";
import LHDiscover from "../pages/discover";
import LHFriend from "../pages/friend";
import LHMine from "../pages/mine";


import LHRecommend from "../pages/discover/c-pages/recommend";
import LHRanking from "../pages/discover/c-pages/ranking";
import LHSongs from "../pages/discover/c-pages/songs";
import LHDjRadio from "../pages/discover/c-pages/djradio";
import LHArtist from "../pages/discover/c-pages/artist";
import LHAlbum from "../pages/discover/c-pages/album";

const routes = [
  {
    path:'/',
    exact: true,
    render: () =>{
      return <Redirect to='/discover'/>
    }
  },
  {
    path:'/discover',
    component: LHDiscover,
    routes:[{
        path:'/discover',
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        ),
      },{
        path:'/discover/recommend',
        component: LHRecommend,
      },{
        path:'/discover/ranking',
        component: LHRanking,
      },{
        path:'/discover/songs',
        component: LHSongs,
      },{
        path:'/discover/djradio',
        component: LHDjRadio,
      },{
        path:'/discover/artist',
        component: LHArtist,
      },{
        path:'/discover/album',
        component: LHAlbum,
      },
    ]
  },{
    path:'/mine',
    component: LHMine,
  },{
    path:'/friend',
    component: LHFriend,
  }
]

export default routes