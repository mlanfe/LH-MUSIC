import React, { memo } from 'react'
import { HashRouter  } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import routes from "./router";
import store from "./store";

import LHAppHeader from 'components/app-header'
import LhAppFooter from 'components/app-footer'



export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <LHAppHeader />
          {renderRoutes(routes)}
        <LhAppFooter />
      </HashRouter>
    </Provider>
  )
})
