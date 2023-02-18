import { 
  createBrowserRouter,
  Route, 
   createRoutesFromElements,
   RouterProvider
  } from 'react-router-dom'

  
  // LAYOUT IMPORT
import Rootlayout from './layouts/Rootlayout'
import ScoreLayout from './layouts/ScoreLayout'
import Helplayout from './layouts/Helplayout'
import ProductLyout from './layouts/ProductLyout'
import BackLayout from './layouts/BackLayout'
import FrontLayout from './layouts/FrontLayout'


// PAGES IMPORT
import Home from './pages/Home'
import Score, { scoreLoader } from './pages/Score/Score'
import ScoreDetails, { scoreDetailsLoader } from './pages/Score/ScoreDetails'
import Contact from './pages/help/Contact'
import Faq from './pages/help/Faq'


// import { scoress } from './pages/Data'
import Backend from './pages/Score/Backend'

import Product from './pages/Score/Product'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout />}>
        <Route path='/' element = {<Home />} />
        {/* ROUTING FOR HELP ELEMENT */}
        <Route path='help' element = {<Helplayout />}>
          <Route path='faq' element = {<Faq />} />  
          <Route path='contact' element = {<Contact />} />  
        </Route>
        {/* ROUTING FOR LEADER BOARD */}
        <Route path='leader' element = {<ScoreLayout />}>
          <Route path='fronto' element = {<FrontLayout />}>
          <Route index element={<Score />} 
          loader = {scoreLoader}
          />
          <Route path=':id' 
          element = {<ScoreDetails />}
          loader = {scoreDetailsLoader}
          />  
          </Route >
          <Route path ='backo' element = {<BackLayout />}>
         <Route index element = {<Backend />}
          loader = {scoreLoader}
          />  
            <Route path=':id' 
          element = {<ScoreDetails />}
          loader = {scoreDetailsLoader}
          />  
          </Route>
          <Route path ='product' element = {<ProductLyout />}>
         <Route index element = {<Product />}
          loader = {scoreLoader}
          />  
            <Route path=':id' 
          element = {<ScoreDetails />}
          loader = {scoreDetailsLoader}
          />  
          </Route>
          
        

        </Route>
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  )
}

export default App