import { useCallback } from "react";
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

interface AuthState {
  success: null | boolean;
  loading: boolean;
  called: boolean;
}

const initialState: AuthState = {
  success: null,
  loading: false,
  called: false,
};

// -----------------------------------------------------------------------------

interface LoginProps {
  email: string;
  password: string;
}

const onSubmit = ({ email, password }: LoginProps): Promise<void> => {
  return axios.post("/api/auth", {
    email,
    password,
  });
};

const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginProps) => {
    await onSubmit({ email, password });
  }
);

export const useLogin = () => {
  const dispatch = useDispatch();

  return useCallback(
    ({ email, password }) => dispatch(login({ email, password })),
    [dispatch]
  );
};

// -----------------------------------------------------------------------------

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
      state.called = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
      state.success = false;
      state.called = true;
    });
  },
});

export default authSlice.reducer;

// -----------------------------------------------------------------------------

const getAuthLoading = ({ auth }) => auth.loading;

export const useAuthLoading = (): boolean => useSelector(getAuthLoading);

// -----------------------------------------------------------------------------

const getAuthSuccess = ({ auth }) => auth.success;

export const useAuthSuccess = (): boolean => useSelector(getAuthSuccess);

// -----------------------------------------------------------------------------

const getAuthCalled = ({ auth }) => auth.called;

export const useAuthCalled = (): boolean => useSelector(getAuthCalled);
