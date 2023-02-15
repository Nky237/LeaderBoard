import { 
  createBrowserRouter,
  Route, 
   createRoutesFromElements,
   RouterProvider
  } from 'react-router-dom'
import Helplayout from './layouts/Helplayout'
  
  // LAYOUT IMPORT
import Rootlayout from './layouts/Rootlayout'
import ScoreLayout from './layouts/ScoreLayout'



// PAGES IMPORT
import Home from './pages/Home'
import Score from './pages/Score/Score'
import ScoreDetails from './pages/Score/ScoreDetails'
import Contact from './pages/help/Contact'
import Faq from './pages/help/Faq'
import { scoress } from './pages/Data'
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
          <Route path='front' element = {<Score scoress = {scoress} />}
          />  
          <Route path = 'back' element = {<Backend scoress = {scoress} />}
          />  
          <Route path = 'product' element = {<Product scoress = {scoress} />}
          />  
          <Route path='det' 
          element = {<ScoreDetails score = {scoress.id} />}
          />  
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
