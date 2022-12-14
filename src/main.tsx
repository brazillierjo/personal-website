import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header } from "./components/Commons/Header";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Commons/Footer";
import "./index.css";
import ScrollToTop from "./components/Commons/ScrollToTop";
import MyParticles from "./components/Commons/Particles";

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
        <main className='relative z-10 mx-auto max-w-[1200px] p-10 md:p-4'>
            <RouterProvider router={router} />
            <ScrollToTop />
        </main>
        <MyParticles />
    </React.StrictMode>
);
