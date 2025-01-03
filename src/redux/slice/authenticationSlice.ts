import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../data/interfaces";
import AuthService from "../../Services/AuthService";

export interface initialStateValues {
  users: User[];
  currentUser: User | null;
  error: User | null;
}




const initialState: initialStateValues = {
  users: [
    {
      fullName: "Fadi Noumih 18",
      email: "fadinoumih18@gmail.com",
      password: "12345678",
    },
  ],
  currentUser: null,
  error: null,
};

const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { errors, errorsExits } = AuthService.SignUserIn(
        state.users,
        action.payload
      );
      if (errorsExits) state.error = errors;
      else {
        state.users.push(action.payload);
        state.currentUser = action.payload;
        state.error = null;
        console.log(JSON.parse(JSON.stringify(state.users)), state.currentUser);
        
      }
    },
    signUserIn: (state, action) => {
      const user: User = action.payload;
      const { errors, errorsExits } = AuthService.logUserIn(
        user.email,
        user.password
      );
      if (errorsExits) {
        state.error = errors;
      } else {
        state.error = null;
        const userData: User | undefined = state.users.find(
          (u) => user.email === u.email && user.password === u.password
        );
        console.log(userData, state.users);
        
        if (userData) state.currentUser = userData;
        else throw new Error("email or password is not valid");
      }
    },
    logUserOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { registerUser, signUserIn, logUserOut } = authenticationSlice.actions;
export default authenticationSlice;