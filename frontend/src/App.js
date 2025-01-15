import './App.css';
import User from './getUser/User';
import AddUser from './AddUser/AddUser';
import UpdateUser from './updateUser/UpdateUser';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<User/>
    },
    {
      path:"/add",
      element:<AddUser/>
    },
    {
      path:"/update/:id",
      element:<UpdateUser/>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
