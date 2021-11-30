import { configureStore } from "@reduxjs/toolkit";
import dashBoardReducer from "../components/dashBoardSlice";
import vehicleStoresReducer from "../features/admin/components/vehicleStores/vehicleStoresSlice";
import signInReducer from "../features/auth/signIn/signInSlice";
import homePageReducer from "../features/customer/homepage/homePageSlice";

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    dashboard: dashBoardReducer,
    vehicleStores: vehicleStoresReducer,
    homePageCustomer: homePageReducer,
  },
});
