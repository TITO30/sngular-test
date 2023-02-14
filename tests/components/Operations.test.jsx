import { render } from "@testing-library/react";
import { Operations } from "../../src/components";


describe("Test of a Operations component", () => {
  test("shuold return an integer", () => {
    render(<Operations serie={1} />);
    render(<Operations serie={2} />);
    render(<Operations serie={3} />);
    render(<Operations serie={4} />);
    render(<Operations serie={5} />);
    render(<Operations serie={6} />);
    render(<Operations serie={7} />);
    render(<Operations serie={8} />);
    render(<Operations serie={9} />);
    render(<Operations serie={0} />);
  });
});
