import React from "react";
import { fibonacci, primo, triangular } from "../../helpers/helpers";
import { Result } from "../Result/Result";

export const Operations = ({ serie, error }) => {
  const fibonacciValue = fibonacci(serie);
  const triangularValue = triangular(serie);
  const primoValue = primo(serie);

  const serieOperation =
    2 * fibonacci(serie - 2) * (3 * triangular(serie - 2)) +
    7 * primo(serie - 1);

  return (
    <div>
      <Result
        serieOperation={serieOperation}
        primo={primoValue}
        fibonacci={fibonacciValue}
        triangular={triangularValue}
        error={error}
      />
    </div>
  );
};
