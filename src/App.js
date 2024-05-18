
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes }from 'react-router-dom'
import Had from './Had';
import Navv from './Navv';




function App() {
  return (
   <>
   
    {/* <BrowserRouter>
    <Switch>
      <Route  path="/Nav" component={Nav} />
  
    </Switch>
  </BrowserRouter>  */}

  <Router>
                <Routes>
                   
                    <Route exact path="had" element={<Had />} />
                    <Route exact path="navv" element={<Navv />} />
                </Routes>
              
            </Router>

<Navv/>
   </>
  );
}

export default App;
