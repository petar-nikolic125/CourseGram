import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Basics, WeekPlan, Forecast, Metrics } from '../../types/business';

interface StartResponse {
  simId: string;
  pricing: unknown;
  weekPlan: WeekPlan;
  forecast: Forecast;
}

export const simApi = createApi({
  reducerPath: 'simApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    startSim: builder.mutation<StartResponse, { basics: Basics }>({
      query: (body) => ({ url: 'simulation/start', method: 'POST', body }),
    }),
    nextSimStep: builder.mutation<{ updatedPlan: WeekPlan; forecast: Forecast; advice: string }, { simId: string; metrics: Metrics }>({
      query: (body) => ({ url: 'simulation/next-step', method: 'POST', body }),
    }),
    endSim: builder.mutation<{ summary: string }, { simId: string }>({
      query: (body) => ({ url: 'simulation/end', method: 'POST', body }),
    }),
  }),
});

export const { useStartSimMutation, useNextSimStepMutation, useEndSimMutation } = simApi;
