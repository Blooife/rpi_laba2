import NavigaitonBar from './NavigationBar';
import Main from "./Main";
import Footer from './Footer';

import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigaitonBar />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
//pray for vika
  );
}

export default App;
