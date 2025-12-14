import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <h1>Bienvenue, Cher Apprenant</h1>
      <p>Accédez facilement à vos cours.</p>

      <button onClick={() => navigate("/year")}>
        Commencer
      </button>
    </div>
  );
}

export default Welcome;
