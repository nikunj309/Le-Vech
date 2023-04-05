import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
    userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,

    save: {
        savedItems: localStorage.getItem('savedItems')
            ? JSON.parse(localStorage.getItem('savedItems'))
            : [],
    },
};
function reducer(state, action) {
    switch (action.type) {

        case 'SAVE_ADD_ITEM':
            // add to cart
            const newItem = action.payload;
            const existItem = state.save.savedItems.find(
                (item) => item._id === newItem._id
            );
            const savedItems = existItem
                ? state.save.savedItems.map((item) =>
                    item._id === existItem._id ? newItem : item
                )
                : [...state.save.savedItems, newItem];
                localStorage.setItem('savedItems', JSON.stringify(savedItems));
            return { ...state, save: { ...state.save, savedItems } };

            case 'SAVED_REMOVE_ITEM': {
                const savedItems = state.save.savedItems.filter(
                  (item) => item._id !== action.payload._id
                );
                localStorage.setItem('savedItems', JSON.stringify(savedItems));
                return { ...state, save: { ...state.save, savedItems } };
              }

        case 'USER_SIGNIN':
            return { ...state, userInfo: action.payload };
            
        case 'USER_SIGNOUT':
            return {
                ...state,
                userInfo: null,
            };
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children} </Store.Provider>;
}