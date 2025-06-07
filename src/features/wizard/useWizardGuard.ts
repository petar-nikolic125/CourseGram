import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../store";

export function useWizardGuard(step: number) {
  const navigate = useNavigate();
  const { basics, pricing, marketing } = useSelector(
    (s: RootState) => s.wizard,
  );

  useEffect(() => {
    if (step >= 1 && !basics) navigate("/wizard/0");
    else if (step >= 2 && !pricing) navigate("/wizard/1");
    else if (step >= 3 && !marketing) navigate("/wizard/2");
  }, [step, basics, pricing, marketing, navigate]);
}
