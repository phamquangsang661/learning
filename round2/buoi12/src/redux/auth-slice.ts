import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  user: User | null;
};
const authSlice = createSlice<
  AuthState,
  {
    setUser: ReducerRedux<AuthState, User>;
    deleteUser: ReducerReduxNoPayload<AuthState>;
  }
>({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    deleteUser(state) {
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
