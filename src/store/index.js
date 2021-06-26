import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./message-slice";

const store = configureStore ({
    reducer: { mesl: messageSlice.reducer }
});

export default store;

