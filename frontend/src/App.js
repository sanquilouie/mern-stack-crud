import './App.css';
import User from './getUser/User';
import AddUser from './AddUser/AddUser';
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<User/>
    },
    {
      path:"/add",
      element:<AddUser/>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
