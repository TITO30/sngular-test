import { useState } from "react";
import { Operations } from "./components";
import "./index.css";

function App() {
  const [serie, setSerie] = useState("");
  const [value, setValue] = useState(0);
  const [error, setError] = useState(false);
  const [flag, setFlag] = useState(false);

  const handleSubmit = (e) => {
    if (serie.length === 0) {
      e.preventDefault();
      setError(true);
    } else {
      if (isNaN(serie) === true) {
        e.preventDefault();
        setError(true);
      } else {
        e.preventDefault();
        setFlag(true);
        setValue(Number(serie));
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSerie(e.target.value);
    setError(false);
  };

  const handleReset = (e) => {
    setSerie("");
    setValue("");
    setError(false);
    setFlag(false);
    e.preventDefault();
  };

  return (
    <div className="form-content">
      <form onSubmit={handleSubmit} className="container form-serie">
        <h2 className="mt-4 text-center">Inserta tu serie</h2>
        <input
          type="text"
          maxLength={2}
          value={serie === "NaN" ? "" : serie}
          onChange={handleChange}
          className={
            error
              ? "form-control mt-4 border border-danger"
              : "form-control mt-4"
          }
          placeholder={
            error || serie == "NaN"
              ? "Requerido"
              : "Inserta los números de tu serie"
          }
        />
        <div className="row">
          <div className="col-6">
            <button
              onSubmit={handleSubmit}
              className="btn btn-primary mt-4 w-100"
            >
              Enviar
            </button>
          </div>
          <div className="col-6">
            <button
              onClick={handleReset}
              className="btn btn-secondary mt-4 w-100"
            >
              Reset
            </button>
          </div>
        </div>

        {flag ? <Operations serie={value} error={error} /> : <></>}
      </form>
    </div>
  );
}

export default App;
