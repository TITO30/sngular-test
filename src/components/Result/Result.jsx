import React from "react";

export const Result = ({
  serieOperation,
  fibonacci,
  primo,
  triangular,
  error,
}) => {
  return (
    <>
      {error ? (
        <div className="container mt-5">
          <div className="alert alert-danger text-center" role="alert">
            Ingresa valores númericos y que no se encuentre vacío el input.
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <div className="alert alert-success text-center" role="alert">
            El último valor de la serie fibonacci es:{" "}
            <span style={{ fontWeight: "bold" }}>
              {fibonacci === undefined ? "no resuelto" : fibonacci}
            </span>
            <br />
            El último valor de la serie primo es:{" "}
            <span style={{ fontWeight: "bold" }}>
              {primo === undefined ? "no resuelto" : primo}
            </span>
            <br />
            El valor de la serie triangular es:{" "}
            <span style={{ fontWeight: "bold" }}>{triangular}</span>
            <br />
            El resultado de la serie n= 2fibonacci(n-2) * 3triangular(n-2) +
            7primo(n-1) es:{" "}
            <span style={{ fontWeight: "bold" }}>
              {isNaN(serieOperation) ? "no resuelto" : serieOperation}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
