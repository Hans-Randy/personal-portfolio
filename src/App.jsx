import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home';
import RootLayout from './components/RootLayout/Root';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import ServicesPage from './Pages/Services';
import ProjectsPage from './Pages/Projects';
import "./App.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: 'services',
        element: <ServicesPage />
      },
      {
        path: 'contact-me',
        element: <ContactPage />
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
