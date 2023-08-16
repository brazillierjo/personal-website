import React from "react";
import ReactDOM from "react-dom/client";
import ScrollToTop from "./components/Commons/ScrollToTop";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header } from "./components/Commons/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Commons/Footer";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const AppLayout = () => {
    // const [isUnderConstruction] = useAtom(isUnderConstructionAtom);

    // useEffect(() => {
    //     isUnderConstruction && Notifier("The english translation is still in progress 🚧", "info", 10000);
    // }, [isUnderConstruction]);

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
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <main className='relative z-10 mx-auto max-w-[1200px] p-10 md:p-4'>
            <RouterProvider router={router} />
            <ScrollToTop />
        </main>

        <ToastContainer />
    </React.StrictMode>
);
