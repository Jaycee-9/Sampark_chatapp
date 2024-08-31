import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";

import GoogleAuth from "./Components/googleLogin/GoogleAuth";
const clientId =
  "1034152152994-j95baiu7ibrpg8f83io948bo63gvu9tm.apps.googleusercontent.com";
export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/login"
      element={
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleAuth />
        </GoogleOAuthProvider>
      }
    />
  )
);
