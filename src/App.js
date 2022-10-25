import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './header';
import router from './Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
