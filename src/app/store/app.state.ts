import { AuthState, authReducer } from "./authentication/auth.reducer";
import { DashboardState, dashboardReducer } from "./dashboard/dashboard.reducer";




export interface AppState{
  auth:AuthState
  dashboard:DashboardState
}


export const appReducer = {
  auth: authReducer,
  dashboard:dashboardReducer
}
