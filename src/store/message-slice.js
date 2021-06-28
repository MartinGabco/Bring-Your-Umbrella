import { createSlice } from "@reduxjs/toolkit";
import { startsWith } from "lodash";

const messageSlice = createSlice({
    name: 'messageItem',
    initialState: {
        messages_items: []
     },
    reducers: {
        addMessageToAuthentication(state, action) {
            const newMessage = action.payload;
                state.messages_items.push({
                    name: newMessage.message
                });
        }
    }
});

export const messageActions = messageSlice.actions;
export default messageSlice;