export const setAuthData = (data) => ({
    type: 'SET',
    payload: data,
  });
  
  export const login = (status) => ({
    type: 'LOGIN',
    payload: status,
  });
  
  export const resetLoginData = () => ({
    type: 'LOGIN',
    payload: {
      status: false,
      paused: { status: true, loading: false },
      agentInfo: {},
    },
  });
  
  export const loginSuccessfull = () => ({
    type: 'LOGIN_SUCCESSFULL',
  });
  
  export const loginFailed = (error, message) => ({
    type: 'LOGIN_FAILED',
    payload: {
      errorCode: error,
      message,
    },
  });
  
  export const loadingDashboard = () => ({
    type: 'LOADING_DASHBOARD',
  });
  
  export const dashboardLoaded = () => ({
    type: 'DASHBOARD_LOADED',
  });
  
  export const pause = () => ({
    type: 'PAUSE',
  });
  
  export const resume = () => ({
    type: 'RESUME',
  });
  
  export const statusUpdateFailed = () => ({
    type: 'STATUS_UPDATE_FAILED',
  });
  
  export const loadingStatus = () => ({
    type: 'LOADING_STATUS',
  });
  