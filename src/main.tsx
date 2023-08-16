import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header } from "./components/Commons/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Commons/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
    const router = createBrowserRouter([
        {
            element: (
                <main className='mx-auto max-w-[1200px] px-8'>
                    <Header />
                    <Outlet />
                    <Footer />
                </main>
            ),
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
            ],
        },
    ]);

    return (
        <React.StrictMode>
            <RouterProvider router={router} />
            <ToastContainer />
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
