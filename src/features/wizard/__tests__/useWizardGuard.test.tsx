import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { wizardSlice } from "../wizardSlice";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { useWizardGuard } from "../useWizardGuard";

function Guarded({ step }: { step: number }) {
  useWizardGuard(step);
  return <div>step{step}</div>;
}

function setup(initialEntries: string[], step: number) {
  const store = configureStore({ reducer: { wizard: wizardSlice.reducer } });
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/wizard/:stepIndex" element={<Guarded step={step} />} />
          <Route path="/wizard/0" element={<div>step0</div>} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
}

test("redirects to step 0 when basics missing", async () => {
  setup(["/wizard/1"], 1);
  await waitFor(() => expect(screen.getByText("step0")).toBeInTheDocument());
});

test("stays on step when data present", async () => {
  const store = configureStore({ reducer: { wizard: wizardSlice.reducer } });
  store.dispatch(
    wizardSlice.actions.setBasics({ niche: "x", productType: "v", targetPriceRange: "$" })
  );
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/wizard/1"]}>
        <Routes>
          <Route path="/wizard/:stepIndex" element={<Guarded step={1} />} />
          <Route path="/wizard/0" element={<div>step0</div>} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText("step1")).toBeInTheDocument();
});
