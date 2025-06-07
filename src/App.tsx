import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { ProgressBar } from "./components/ui/ProgressBar";

const Landing = lazy(() => import("./pages/Landing"));
const WizardLayout = lazy(() => import("./features/wizard"));
const AIDemoModal = lazy(() => import("./components/modals/AIDemoModal"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

export function App() {
  return (
    <>
      <ProgressBar />
      <Layout>
        <Suspense fallback={<div className="p-8">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/wizard/:stepIndex?" element={<WizardLayout />} />
            <Route path="/demo" element={<AIDemoModal />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}
