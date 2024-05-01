import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Header from "../components/header/header";
import Rules from "./rules/rules";
import Catalog from "./catalog/catalog";
import Partners from "./partners/partner";

export enum RoutesList {
  Home = "/",
  Rules = "/rules",
  Catalog = "/catalog",
  Partners = "/partners",
  Default = "*",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<Header />}>
          <Route path={RoutesList.Home} element={<Home />} />
          <Route path={RoutesList.Rules} element={<Rules />} />
          <Route path={RoutesList.Catalog} element={<Catalog />} />
          <Route path={RoutesList.Partners} element={<Partners />} />

          <Route
            path={RoutesList.Default}
            element={<Navigate to={RoutesList.Home} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
