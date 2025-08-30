import {createBrowserRouter, Navigate} from "react-router";
import App from "../Components/App";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import CatalogPage from "../Pages/Catalog/CatalogPage.tsx";
import ProductDetailsPage from "../Pages/Catalog/ProductDetails.tsx";
import ErrorPage from "../Pages/ErrorPage.tsx";
import ServerError from "../../errors/ServerError.tsx";
import NotFound from "../../errors/NotFound.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <HomePage/>},
            {path: "about", element: <AboutPage/>},
            {path: "contact", element: <ContactPage/>},
            {path: "catalog", element: <CatalogPage/>},
            {path: "error", element: <ErrorPage/>},
            {path: "server-error", element: <ServerError/>},
            {path: "catalog/:id", element: <ProductDetailsPage/>},
            {path: "not-found", element: <NotFound/>},
            {path: "*", element: <Navigate to="/not-found"/>},
        ],
    },
]);