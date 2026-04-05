import ActivationCode from "./paga/Auth/Pages/ActivationCode/ActivationCode";
import CreateNewPassword from "./paga/Auth/Pages/CreateNewPassword/CreateNewPassword";
import ForgetPassword from "./paga/Auth/Pages/ForgetPassword/ForgetPassword";
import Login from "./paga/Auth/Pages/LoginPage/Login";
import NestedAuthPaga from "./paga/Auth/Pages/NestedAuthPaga";
import SineInForm from "./paga/Auth/Pages/SineInForm/SineInForm";
import Home from "./paga/Home/Home";
import NestedPaga from "./paga/NestedPaga/NestedPaga";
import Notfound from "./paga/Notfound/Notfound";
import { myStore } from "./store/store";

import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TermsAndConditions from "./paga/TermsAndConditions/TermsAndConditions";
import About from "./paga/About/About";
import ContactPage from "./paga/ContactPage/ContactPage";
import Blogs from "./paga/Blogs/Blogs";
import SeeMorePopularDestination from "./paga/See More Pages/PopularDestination/SeeMorePopularDestination";
import CardDetails from "./paga/CardDetails/CardDetails";
import MakeYourTrip from "./paga/MakeYourTrip/MakeYourTrip";
import VisitingPyramidsGiza from "./paga/VisitingPyramidsGiza/VisitingPyramidsGiza";
import RentCar from "./paga/RentCar/RentCar";
import OneDayTours from "./paga/OneDayTours/OneDayTours";
import ToursDetails from "./paga/ToursDetails/ToursDetails";
import Cart from "./paga/Cart/Cart";
import Checkout from "./paga/Checkout/Checkout";
import AllFaqs from "./paga/AllFaqs/AllFaqs";
import BlogsDetails from "./paga/BlogsDetails/BlogsDetails";

function App() {
  const routaring = createBrowserRouter([
    {
      path: "/",
      element: <NestedPaga />,
      children: [
        { index: true, element: <Home /> },
        { path: "*", element: <Notfound /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact-us", element: <ContactPage /> },
        { path: "blogs", element: <Blogs /> },
        { path: "terms-and-conditions", element: <TermsAndConditions /> },
        {
          path: "see-more-popular-destination",
          element: <SeeMorePopularDestination />,
        },
        { path: "card-details/:id", element: <CardDetails /> },
        { path: "blogs-details", element: <BlogsDetails /> },
        { path: "make-your-trip", element: <MakeYourTrip /> },
        { path: "rent-car", element: <RentCar /> },
        { path: "visiting-pyramids-giza", element: <VisitingPyramidsGiza /> },
        { path: "one-day-tours", element: <OneDayTours /> },
        { path: "tours/:id", element: <ToursDetails /> },
        { path: "cart", element: <Cart /> },
        { path: "checkout", element: <Checkout /> },
        { path: "all-frequently-asked", element: <AllFaqs /> },
      ],
    },
    {
      path: "/auth",
      element: <NestedAuthPaga />,
      children: [
        { path: "*", element: <Notfound /> },
        { path: "login", element: <Login /> },
        { path: "sine-in", element: <SineInForm /> },
        { path: "forget-password", element: <ForgetPassword /> },
        { path: "activation-code", element: <ActivationCode /> },
        { path: "create-new-password", element: <CreateNewPassword /> },
      ],
    },
  ]);

  return (
    <Provider store={myStore}>
      <RouterProvider router={routaring} />
    </Provider>
  );
}

export default App;
