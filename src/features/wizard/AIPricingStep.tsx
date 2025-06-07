import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPricing } from "./wizardSlice";
import { useGeneratePricingMutation } from "./aiAgent";
import { Button } from "../../components/ui/Button";
import { LoadingDots } from "../../components/LoadingDots";
import { motion } from "framer-motion";
import type { RootState } from "../../store";
import { useWizardGuard } from "./useWizardGuard";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export function AIPricingStep({ onNext, onBack }: Props) {
  const dispatch = useDispatch();
  const basics = useSelector((s: RootState) => s.wizard.basics);
  const pricing = useSelector((s: RootState) => s.wizard.pricing);
  const [generatePricing, { data, isLoading }] = useGeneratePricingMutation();
  const [tiers, setTiers] = useState<Array<{ label: string; price: number }>>(
    [],
  );
  useWizardGuard(1);

  useEffect(() => {
    if (pricing) {
      setTiers(pricing.tiers);
    } else if (basics) {
      generatePricing(basics);
    }
  }, [pricing, basics, generatePricing]);

  useEffect(() => {
    if (data) {
      setTiers(data.tiers);
    }
  }, [data]);

  const handleNext = () => {
    dispatch(setPricing({ tiers }));
    onNext();
  };

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
      {isLoading && (
        <div className="text-center py-10">
          <LoadingDots />
        </div>
      )}
      {tiers.length > 0 && (
        <ul className="space-y-2">
          {tiers.map((t, idx) => (
            <li
              key={t.label}
              className="bg-dark2 rounded-md p-2 flex space-x-2"
            >
              <input
                className="bg-transparent flex-1"
                value={t.label}
                onChange={(e) => {
                  const copy = [...tiers];
                  copy[idx].label = e.target.value;
                  setTiers(copy);
                }}
              />
              <input
                type="number"
                className="w-20 bg-transparent"
                value={t.price}
                onChange={(e) => {
                  const copy = [...tiers];
                  copy[idx].price = Number(e.target.value);
                  setTiers(copy);
                }}
              />
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between pt-4">
        <Button onClick={onBack} variant="solid">
          Back
        </Button>
        <Button onClick={handleNext} disabled={isLoading || !tiers.length}>
          Next
        </Button>
      </div>
    </motion.div>
  );
}
