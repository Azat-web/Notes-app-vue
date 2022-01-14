import { getPostList } from '../../api/posts'

const getDefaultState = () => ({
  posts: [],
  searchPost: ''
})

const postsList = {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    getPosts: ({ posts }) => {
        return posts
      },
    getSearchPost: ({ searchPost }) => {
      return searchPost
    }  
  },
  mutations: {
    setPosts: (state, posts) => {
        state.posts = posts
      },
    setSearchPost: (state, searchPost) => {
        state.searchPost = searchPost
    }  
  },
  actions: {
    loadPosts: async ({ commit }) => {
        const posts = await getPostList()
        commit('setPosts', posts)
      },
    changePosts: ({commit}, posts) => {
        commit('setPosts', posts)
      },
    searchPost: ({commit}, post) => {
        commit('setSearchPost', post)
      }
    } 
  }

export default postsList