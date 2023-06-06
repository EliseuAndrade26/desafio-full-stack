import { RoutesMain as Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserProvider } from "./contexts/UserContext";
import { Container } from "./styles/containers";

export const App = () => {
  return (
    <>
      <UserProvider>
        <Container>
          <Routes />
        </Container>
        <ToastContainer autoClose={2000} position="top-right" />
      </UserProvider>
    </>
  );
};
