import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header } from "./components/Commons/Header";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Commons/Footer";
import "./index.css";
import { MainParticles } from "./components/Home/Particles";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <div className='absolute z-0 max-h-screen'>
            <MainParticles />
        </div>
        <main className='relative z-10 mx-auto max-w-[1200px]'>
            <RouterProvider router={router} />
        </main>
    </React.StrictMode>
);
