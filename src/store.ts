// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import wizardReducer       from './features/wizard/wizardSlice';
import { wizardApi }       from './features/wizard/aiAgent';
import simReducer          from './features/simulator/simSlice';
import { simApi }          from './features/simulator/simApi';

export const store = configureStore({
  reducer: {
    wizard: wizardReducer,
    simulation: simReducer,
    [wizardApi.reducerPath]: wizardApi.reducer,
    [simApi.reducerPath]: simApi.reducer,
  },
  // TS will correctly infer the type of getDefaultMiddleware, so no ": any" needed
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(wizardApi.middleware, simApi.middleware),
});

// Export RootState & AppDispatch for use in hooks/selectors/etc.
export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
