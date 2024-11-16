import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import ClothesCard from "./pages/ClothesCard";
import {
  Admin_route,
  Basket_route,
  Clothes_route,
  Login_route,
  Registration_route,
  Shop_route,
} from "./utils/const";

export const authRoutes = [
  {
    path: Admin_route,
    Component: Admin,
  },
  {
    path: Basket_route,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: Shop_route,
    Component: Shop,
  },
  {
    path: Login_route,
    Component: Auth,
  },
  {
    path: Registration_route,
    Component: Auth,
  },
  {
    path: Clothes_route + "/:id",
    Component: ClothesCard,
  },
];
