import React, {Suspense} from 'react'
import ErrorBoundary from './ErrorBoundary'
const Button = React.lazy(() => import('MicroFrontend/Button'))


function App() {
  return (
    <div>
        <h2>App - SHELL component</h2>
        <p>
            In this App component we are trying to render other component from Micro FEs with [ ModuleFederationPlugin]
        </p>
        <Button buttonName={"click here"} />
    </div>
  )
}

export default App


// import React from 'react'
// const Button = React.lazy(() => import('MicroFrontend/Button'))

// export default function App() {
//   return (
//     <div>
//       App 2
//       <Button buttonName={"Hey there"} />
//     </div>
//   )
// }