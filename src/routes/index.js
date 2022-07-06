import HeaderOnly from "../layout/HeaderOnly";
import Home from "../pages/Home";
import Cars from "../pages/Cars";
import Blog from "../pages/Blog";
export const publicRoutes = [
    { path: "/", component: Home },
    { path: "/cars", component: Cars },
    { path: "/blog", component: Blog, layout: HeaderOnly },
];
export const privateRoutes = [];
