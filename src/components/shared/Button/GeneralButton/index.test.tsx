import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom";

import GeneralButton from ".";

const DUMMY_LABEL = "DUMMY_LABEL";

describe("General Button Component", () => {
  it("should render normal button", async () => {
    const { getByRole } = render(<GeneralButton label={DUMMY_LABEL} />);

    const button = getByRole("button") as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe(DUMMY_LABEL);
  });

  it("should render disabled button", async () => {
    const { getByRole } = render(
      <GeneralButton label={DUMMY_LABEL} notAllowed />
    );

    const button = getByRole("button") as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    expect(button.disabled).toBeTruthy();
  });

  it("should render a spinner logo if loading state", async () => {
    const { getByRole, getByTestId } = render(
      <GeneralButton label={DUMMY_LABEL} loading />
    );

    const button = getByRole("button") as HTMLButtonElement;
    const spinner = getByTestId("spinner-loader");
    expect(button).toBeInTheDocument();
    expect(button.disabled).toBeTruthy();
    expect(spinner).toBeInTheDocument();
  });
});
