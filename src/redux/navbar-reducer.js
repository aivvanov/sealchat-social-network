const TOGGLE_NAVBAR = 'TOGGLE-NAVBAR';

const initialState = {
    isNavbarCollapsed: false
}

const navbarReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_NAVBAR:
            return {
                ...state,
                isNavbarCollapsed: !state.isNavbarCollapsed
            };
        default:
            return state;
    }
}

export const toggleNavbar = () => ({ type: TOGGLE_NAVBAR });

export default navbarReducer;