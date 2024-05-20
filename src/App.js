import NavFooter from './components/footer';
import {BrowserRouter} from "react-router-dom";
import RouterView from './router/router';
function App() {
  return (
   <BrowserRouter>
   <RouterView></RouterView>
   <NavFooter></NavFooter>
   </BrowserRouter>
   
  );
}

export default App;
