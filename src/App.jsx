import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom';
import Mainlayout from './Component/MainLayout/mainlayout';
import Home from './Component/Home/home'
import Contact from './Component/Contact/contact';
import NotFound from './Component/NotFound/notfound';
import People from './Component/People/people';
import Register from './Component/Register/register';
import LogIn from './Component/LogIn/login';
import Movies from './Component/Movies/movies';
import TvShows from './Component/TvShows/tvShows';
import Details from './Component/Details/Details';





function ProtectedRoute(props){
  if(localStorage.getItem("userName")){
     return props.children
  }else{
   return <Navigate to="/"/>
  }
}




const routers= createBrowserRouter([
  {path:"/",element:<Mainlayout/>,children:[
    {path:"home" ,element:<ProtectedRoute> <Home/></ProtectedRoute>},
    {path:"people",element:<ProtectedRoute><People/></ProtectedRoute>},
    {path:"contact",element:<ProtectedRoute><Contact/></ProtectedRoute>},
      {path:"register",element:<Register/>},
        {index:true,element:<LogIn/>},
        {path:"Trend" ,element:<LogIn/>},

          {path:"movies",element:<ProtectedRoute><Movies/></ProtectedRoute>},
            {path:"tvshows",element:<ProtectedRoute><TvShows/></ProtectedRoute>},
            {path:"details/:id/:type",element:<ProtectedRoute><Details/></ProtectedRoute>},
    {path:"*",element:<NotFound/>}

  ]}
])

function App() {
  return (
    <>
  <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
