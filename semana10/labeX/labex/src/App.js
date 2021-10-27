import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Components/Header/Header";
import { ListTrips } from "./Pages/ListTripsPage/ListTripsPage";
import TripDetails from "./Pages/TripDetailsPage/TripDetailsPage";
import Login from "./Pages/LoginPage/LoginPage";
import CreateTrip from "./Pages/CreateTripPage/CreateTripPage";
import ApplicationForm from "./Pages/ApplicationFormPage/ApplicationFormPage";
import AdminHome from "./Pages/AdminHomePage/AdminHomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {

  return (
    <div>

      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path={"/"}>
            <HomePage />
          </Route>

          <Route exact path={"/trips/list"}>
            <ListTrips />
          </Route>

          <Route exact path={"/trips/application"}>
            <ApplicationForm />
          </Route>

          <Route exact path={"/login"}>
            <Login />
          </Route>

          <Route exact path={"/admin/trips/list"}>
            <AdminHome />
          </Route>

          <Route exact path={"/admin/trips/create"}>
            <CreateTrip />
          </Route>

          <Route exact path={"/admin/trips/:id"}>
            <TripDetails />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
