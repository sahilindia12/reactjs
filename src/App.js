
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes }from 'react-router-dom'
import Had from './Had';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';
import Navv from './Navv';
import Sinup from './Sinup';




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
                    <Route exact path="singup" element={<Sinup />} />

                </Routes>
              
            </Router>

<Navv/>

   </>
  );
}

export default App;
