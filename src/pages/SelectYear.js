import { useNavigate } from "react-router-dom";

function SelectYear() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <h2>SÉLECTIONNEZ VOTRE ANNÉE</h2>

      <button onClick={() => navigate("/field")}>1ère Année</button>
      <button onClick={() => navigate("/field")}>2ème Année</button>
      <button onClick={() => navigate("/field")}>3ème Année</button>
    </div>
  );
}

export default SelectYear;
