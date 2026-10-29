import { run as initializeReactRoot } from './config/initializers/reactRoot.js'
import { run as initializeUI } from './config/initializers/ui.jsx'

import './application/stylesheets/index.css'

const main = async () => {
  await initializeReactRoot();
  await initializeUI();
}

main()
