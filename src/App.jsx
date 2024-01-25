import "./styles/input.css";
import logo from "./assets/lws-logo-en.svg";

export function Navbar() {
  return (
    <div>
      <div>
        <img src={logo} alt="" />
      </div>
      <button>Get Admission</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}
