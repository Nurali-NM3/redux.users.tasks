import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import UsersPage from "./Pages/usersPage";



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Homepage/>}/>
          <Route path={'/users'} element={<UsersPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;