import { BrowserRouter } from "react-router-dom"

import RoutesConfiguration from '../Routes.jsx';

export const run = async () => {
  window.reactRootElement.render(
    <BrowserRouter>
      <RoutesConfiguration />
    </BrowserRouter>
  )
}
