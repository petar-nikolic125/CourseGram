import {
  wizardSlice,
  setBasics,
  setPricing,
  setMarketing,
  reset,
} from "../wizardSlice";

const reducer = wizardSlice.reducer;

describe("wizardSlice", () => {
  it("sets basics", () => {
    const state = reducer(
      undefined,
      setBasics({
        niche: "fitness",
        productType: "video",
        targetPriceRange: "$50",
      }),
    );
    expect(state.basics?.niche).toBe("fitness");
  });

  it("sets pricing", () => {
    const state = reducer(
      undefined,
      setPricing({ tiers: [{ label: "pro", price: 10 }] }),
    );
    expect(state.pricing?.tiers[0].label).toBe("pro");
  });

  it("sets marketing", () => {
    const state = reducer(
      undefined,
      setMarketing({ captions: ["hi"], hashtags: ["#x"] }),
    );
    expect(state.marketing?.captions[0]).toBe("hi");
  });

  it("resets state", () => {
    const initial = reducer(undefined, setPricing({ tiers: [] }));
    const cleared = reducer(initial, reset());
    expect(cleared.pricing).toBeNull();
  });
});
