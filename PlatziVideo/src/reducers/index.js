const reducer = (state, action) =>{
    
    switch(action.type){
        case 'SET_FAVORITE':
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        break;
        case 'DELETE_FAVORITE':
            return{
                ...state,
                myList: state.myList.filter(e => e.id !== action.payload)
            }
        break;
        case 'LOGIN_REQUEST':
            return{
                ...state,
                user: action.payload,
            }
        break;
        case 'LOGOUT_REQUEST':
            return{
                ...state,
                user: action.payload,
            }
        break;
        case 'REGISTER_REQUEST':
            return{
                ...state,
                user: action.payload,
            }
        break;
        case 'GET_VIDEO_SOURCE':
            return{
                ...state,
                playing: state.trends.find(item => item.id === parseInt(action.payload))
                || state.original.find(item => item.id === parseInt(action.payload))
                || [],
            }
        break;
        default:
            return state;
    }

}



export default reducer;