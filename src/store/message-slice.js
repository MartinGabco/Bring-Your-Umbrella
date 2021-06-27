import { createSlice } from "@reduxjs/toolkit";
import { startsWith } from "lodash";

const messageSlice = createSlice({
    name: 'mesl',
    initialState: { message: 2 },
    reducers: {
        takeMessage(state, action) {
            const newMessage = action.payload;
            state.message++;
        }
    }
});

export const messageActions = messageSlice.actions;
export default messageSlice;