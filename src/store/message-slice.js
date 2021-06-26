import { createSlice } from "@reduxjs/toolkit";
import { startsWith } from "lodash";

const messageSlice = createSlice({
    name: 'mesl',
    initialState: { message: [{  1: 1, 2: 2, 3: 3 }] },
    reducers: {
        takeMessage(state, action) {
            const newMessage = action.payload;
            state.message.push(newMessage);
        }
    }
});

export const messageActions = messageSlice.actions;
export default messageSlice;