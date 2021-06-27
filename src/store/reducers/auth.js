export const initialAuthState = {
    loggedIn: false,
    loading: false,
    errorCode: '',
    message: '',
  };
  
  export default (state, action) => {
    switch (action.type) {
      case 'SET': return { ...state, ...action.payload };
      case 'LOGIN':
        return {
          ...state,
          loading: false,
          loggedIn: action.payload,
        };
      case 'LOGIN_SUCCESSFULL':
        return { ...state, loggedIn: true };
      case 'LOGIN_FAILED':
        return {
          ...state,
          errorCode: action.payload.errorCode,
          message: action.payload.message,
          loading: false,
        };
      case 'PAUSE':
        return { ...state, paused: { status: true, loading: false } };
      case 'RESUME':
        return { ...state, paused: { status: false, loading: false } };
      case 'STATUS_UPDATE_FAILED':
        return { ...state, paused: { ...state.paused, loading: false } };
      case 'LOADING_STATUS':
        return { ...state, paused: { ...state.paused, loading: true } };
      case 'LOADING_DASHBOARD':
        return {
          ...state, loading: true, errorCode: '', message: '',
        };
      case 'DASHBOARD_LOADED':
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  