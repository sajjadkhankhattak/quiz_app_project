import { createBrowserRouter } from "react-router-dom";
import LandingPage from "/src/pages/LandingPage";
import Login from "/src/pages/Login";
import Signup from "/src/pages/Signup";
import Contact from '/src/pages/contact';
import CreateQuiz from '/src/pages/createQuiz';
import AdminPortal from '/src/pages/AdminPortal';
import QuizDetails from '/src/pages/quiz-details';


const routes = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/admin", element: <AdminPortal /> },
    { path: "/contact", element: <Contact /> },
    { path: "/create-quiz", element: <CreateQuiz /> },
    { path: "/quiz/:id", element: <QuizDetails /> }
]);

export default routes;