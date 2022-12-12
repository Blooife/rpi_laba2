import Home from "./Home";
import List from "./List";
import Card from './Card';

import {Route, Routes} from "react-router-dom";

const Main = () => (
    <main>
      <Routes>
              <Route path="/list" element={<List />} />
              <Route path="/list/:number" element={<Card />} />
              <Route path="*" element={<Home />}/>
      </Routes>
    </main>
)

export default Main;