import { useContext } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import { useAuth } from "../context/auth";


export default function Home() {

  const[auth,setAuth] = useAuth();
    return (
     <div>
        <Jumbotron title = "Hello World" subtitle ="Welcome to  TFF shopping page " />

        <pre>{JSON.stringify(auth,null,4)}</pre>

      <h1>This is Home page</h1>
     </div>
    );
  }
  