import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { WeekPlan, Forecast } from '../../types/business';

interface SimState {
  simId: string | null;
  weekPlan: WeekPlan | null;
  forecast: Forecast | null;
  advice: string[];
}

const initialState: SimState = {
  simId: null,
  weekPlan: null,
  forecast: null,
  advice: [],
};

export const simSlice = createSlice({
  name: 'simulation',
  initialState,
  reducers: {
    setSession(state, action: PayloadAction<{ simId: string; weekPlan: WeekPlan; forecast: Forecast }>) {
      state.simId = action.payload.simId;
      state.weekPlan = action.payload.weekPlan;
      state.forecast = action.payload.forecast;
    },
    addAdvice(state, action: PayloadAction<{ weekPlan: WeekPlan; forecast: Forecast; advice: string }>) {
      state.weekPlan = action.payload.weekPlan;
      state.forecast = action.payload.forecast;
      state.advice.push(action.payload.advice);
    },
    clearSession() {
      return initialState;
    },
  },
});

export const { setSession, addAdvice, clearSession } = simSlice.actions;
export default simSlice.reducer;
