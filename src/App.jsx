
import './App.css'
import DownloadInvoice from './pages/DownloadInvoice';
import GenerateInvoice from './pages/GenerateInvoice';
import HomePage from './pages/HomePage'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout';

const routes = createBrowserRouter(
  createRoutesFromElements(
     <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='/generateinvoice' element={<GenerateInvoice />}/>
      <Route path='/downloadinvoice' element={<DownloadInvoice />}/>
     </Route>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App
