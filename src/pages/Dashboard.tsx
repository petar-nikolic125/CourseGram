import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNextSimStepMutation } from '../features/simulator/simApi';
import { addAdvice } from '../features/simulator/simSlice';
import type { RootState } from '../store';
import { Button } from '../components/ui/Button';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { simId, weekPlan, forecast, advice } = useSelector((s: RootState) => s.simulation);
  const [metrics, setMetrics] = useState({ sales: 0, traffic: 0, cvr: 0 });
  const [nextSimStep, { isLoading }] = useNextSimStepMutation();

  if (!simId) return <div className="p-8">No active simulation</div>;

  const submit = async () => {
    const res = await nextSimStep({ simId, metrics }).unwrap();
    dispatch(addAdvice({ weekPlan: res.updatedPlan, forecast: res.forecast, advice: res.advice }));
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <pre className="bg-dark2 p-4 rounded text-sm">{JSON.stringify({ weekPlan, forecast, advice }, null, 2)}</pre>
      <div className="space-x-2">
        <input className="bg-dark2 p-2" type="number" value={metrics.sales} onChange={e => setMetrics({ ...metrics, sales: Number(e.target.value) })} placeholder="sales" />
        <input className="bg-dark2 p-2" type="number" value={metrics.traffic} onChange={e => setMetrics({ ...metrics, traffic: Number(e.target.value) })} placeholder="traffic" />
        <input className="bg-dark2 p-2" type="number" value={metrics.cvr} onChange={e => setMetrics({ ...metrics, cvr: Number(e.target.value) })} placeholder="cvr" />
        <Button onClick={submit} disabled={isLoading}>Send</Button>
      </div>
    </div>
  );
}
