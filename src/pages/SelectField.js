import { useNavigate } from "react-router-dom";

function SelectField() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <h2>SÉLECTIONNEZ VOTRE FILIÈRE</h2>

      <button onClick={() => navigate("/modules")}>Développement Digital</button>
      <button onClick={() => navigate("/modules")}>Infrastructure Digitale</button>
      <button onClick={() => navigate("/modules")}>Gestion des Entreprises</button>
    </div>
  );
}

export default SelectField;
