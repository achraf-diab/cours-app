import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import SelectYear from "./pages/SelectYear";
import SelectField from "./pages/SelectField";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/year" element={<SelectYear />} />
        <Route path="/field" element={<SelectField />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
