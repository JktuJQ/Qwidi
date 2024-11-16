import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Shop_route } from "../utils/const";
import { Context } from "../index";
// import Shop from "../pages/Shop";

const AppRouter = () => {
  const {user} = useContext(Context);
  console.log(user)
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {/* <Route to={Shop_route} />
      <Route path="*" element={<Shop />} /> */}
      <Route path="*" element={<Navigate to={Shop_route} />} />
    </Routes>
  );
};

export default AppRouter;
