import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasics } from "./wizardSlice";
import type { RootState } from "../../store";
import { FieldGroup } from "../../components/FieldGroup";
import { Button } from "../../components/ui/Button";
import { motion } from "framer-motion";

interface Props {
  onNext: () => void;
}

export function BusinessInfoStep({ onNext }: Props) {
  const dispatch = useDispatch();
  const basics = useSelector((s: RootState) => s.wizard.basics);
  const [niche, setNiche] = useState("");
  const [productType, setProductType] = useState("");
  const [targetPriceRange, setTargetPriceRange] = useState("");

  useEffect(() => {
    if (basics) {
      setNiche(basics.niche);
      setProductType(basics.productType);
      setTargetPriceRange(basics.targetPriceRange);
    }
  }, [basics]);

  const handleNext = () => {
    dispatch(setBasics({ niche, productType, targetPriceRange }));
    onNext();
  };

  const canNext = niche && productType && targetPriceRange;

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
      <FieldGroup label="Your niche">
        <input
          className="w-full rounded-md bg-dark2 p-2"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
        />
      </FieldGroup>
      <FieldGroup label="Product type">
        <select
          className="w-full rounded-md bg-dark2 p-2"
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="video">video</option>
          <option value="pdf">pdf</option>
          <option value="coaching">coaching</option>
        </select>
      </FieldGroup>
      <FieldGroup label="Target price range">
        <select
          className="w-full rounded-md bg-dark2 p-2"
          value={targetPriceRange}
          onChange={(e) => setTargetPriceRange(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="$0-49">$0-49</option>
          <option value="$50-99">$50-99</option>
          <option value="$100+">$100+</option>
        </select>
      </FieldGroup>
      <div className="flex justify-end pt-4">
        <Button onClick={handleNext} disabled={!canNext}>
          Next
        </Button>
      </div>
    </motion.div>
  );
}
