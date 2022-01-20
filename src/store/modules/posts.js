import { getPostList } from "../../api/posts";

const getDefaultState = () => ({
  posts: [],
  searchPost: "",
  selectLocale: 1,
});

const postsList = {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    getPosts: ({ posts }) => {
      return posts;
    },
    getSearchPost: ({ searchPost }) => {
      return searchPost;
    },
    getLocales: ({ selectLocale }) => {
      return selectLocale;
    },
  },
  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts;
    },
    setSearchPost: (state, searchPost) => {
      state.searchPost = searchPost;
    },
    setSelectLocales: (state, selectLocale) => {
      state.selectLocale = selectLocale;
    },
  },
  actions: {
    loadPosts: async ({ commit }) => {
      const posts = await getPostList();
      commit("setPosts", posts);
    },
    changePosts: ({ commit }, posts) => {
      commit("setPosts", posts);
    },
    searchPost: ({ commit }, post) => {
      commit("setSearchPost", post);
    },
    changeSelectLocale: ({ commit }, value) => {
      commit("setSelectLocales", value);
    },
  },
};

export default postsList;
