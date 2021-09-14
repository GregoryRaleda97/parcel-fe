const INITIAL_STATE = {
    id: null,
    username: "",
    fullname: "",
    gender: "",
    email: "",
    password: "",
    address: "",
    age: "",
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { ...state, ...action.payload }
        case "PROFILE_DATA":
            console.log("Response profile data reducer", action.payload)
            return { ...state, profile: action.payload };
        case "UPDATE_CART":
            console.log("reducer CART", action.payload)
            return { ...state, CART: action.payload };
        case "LOGOUT":
            return INITIAL_STATE;
        default:
            return state;
    }
}