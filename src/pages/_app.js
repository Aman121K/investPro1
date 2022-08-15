import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globals.css";
import Layout from "../components/Layout";
import { useState } from "react";
import AppContext from "../AppContext";
function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setisLoggedin] = useState(false);
  const [token, setToken] = useState("");
  return (
    <>
      <AppContext.Provider
        value={{
          state: {
            isLoggedIn: isLoggedIn,
            token: token,
          },
          setisLoggedin: setisLoggedin,
          setToken: setToken,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
