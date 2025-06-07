import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { motion } from "framer-motion";
import { setStatus } from "./wizardSlice";
import type { RootState } from "../../store";
import { useWizardGuard } from "./useWizardGuard";
import { useStartSimMutation } from "../simulator/simApi";
import { setSession } from "../simulator/simSlice";

interface Props {
  onBack: () => void;
}

export function ReviewPublishStep({ onBack }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { basics, pricing, marketing } = useSelector(
    (s: RootState) => s.wizard,
  );
  const [startSim] = useStartSimMutation();
  useWizardGuard(3);

  const handlePublish = async () => {
    await fetch("/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ basics, pricing, marketing }),
    });
    dispatch(setStatus("published"));
    const res = await startSim({ basics: basics! }).unwrap();
    dispatch(setSession({ simId: res.simId, weekPlan: res.weekPlan, forecast: res.forecast }));
    navigate("/dashboard");
  };

  const stripeConnectUrl = `https://connect.stripe.com/express/oauth/authorize?client_id=${
    import.meta.env.VITE_STRIPE_PK
  }&scope=read_write`;

  return (
    <motion.div
      className="space-y-4"
      variants={{
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
      }}
      initial="initial"
      animate="animate"
    >
      <pre className="bg-dark2 p-4 rounded-md text-sm whitespace-pre-wrap">
        {JSON.stringify({ basics, pricing, marketing }, null, 2)}
      </pre>
      <div className="flex justify-between pt-4">
        <Button onClick={onBack} variant="solid">
          Back
        </Button>
        <div className="space-x-2">
          <Button
            variant="solid"
            onClick={() => window.open(stripeConnectUrl, "_blank")}
          >
            Connect Stripe
          </Button>
          <Button onClick={handlePublish}>Publish</Button>
        </div>
      </div>
    </motion.div>
  );
}
