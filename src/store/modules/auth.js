const getDefaultState = () => ({
    isAuth: false
  });
  
  const auth = {
    namespaced: true,
    state: getDefaultState(),
    getters: {
      getAuth: ({ isAuth }) => {
        return isAuth;
      }
    },
    mutations: {
      setIsAuth: (state, bool) => {
        state.isAuth = bool;
      }
    },
    actions: {
      changeIsAuth: ({ commit }, bool) => {
        commit("setIsAuth", bool);
      }
    }
  };
  
  export default auth;
  