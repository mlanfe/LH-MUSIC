import React, { memo } from 'react'
import { HashRouter  } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "./router";

import LHAppHeader from 'components/app-header'
import LhAppFooter from 'components/app-footer'



export default memo(function App() {
  return (
    <div>
      <HashRouter>
        <LHAppHeader />
          {renderRoutes(routes)}
        <LhAppFooter />
      </HashRouter>
    </div>
  )
})
