import { createSlice } from "@reduxjs/toolkit";

const initialState = [
]

const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        addLike: (state, action) => {
            state.push(action.payload)
        },
        deleteLike: (state, action) => {
            const idToDelete = action.payload;
            return state.filter(like => like.id !== idToDelete);
        }

    }

})

export const {addLike, deleteLike} = likesSlice.actions;
export default likesSlice.reducer

