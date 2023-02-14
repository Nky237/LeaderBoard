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
import Score, { scoreLoader } from './pages/Score/Score'
import ScoreDetails from './pages/Score/ScoreDetails'
import Contact from './pages/help/Contact'
import Faq from './pages/help/Faq'

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
          <Route index element = {<Score />} 
          loader = {scoreLoader}
          />  
          <Route path='details' element = {<ScoreDetails />} />  
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
