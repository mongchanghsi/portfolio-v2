import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom";

import ExternalUrlButton from ".";

const DUMMY_LABEL = "DUMMY_LABEL";
const DUMMY_URL = "https://dummy.com/";

describe("External Url Component", () => {
  it("should render normal button", async () => {
    const { getByRole } = render(
      <ExternalUrlButton label={DUMMY_LABEL} url={DUMMY_URL} />
    );

    const button = getByRole("link") as HTMLAnchorElement;
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe(DUMMY_LABEL);
    expect(button.href).toBe(DUMMY_URL);
  });

  it("should render disabled button", async () => {
    const { getByRole } = render(
      <ExternalUrlButton label={DUMMY_LABEL} url={DUMMY_URL} notAllowed />
    );

    const button = getByRole("button") as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    expect(button.disabled).toBeTruthy();
  });
});
