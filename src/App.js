import Header from './Header';
import Main from "./Main";
import Footer from './Footer';

import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
//pray for vika
  );
}

export default App;
