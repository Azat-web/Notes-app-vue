import request from './request'

export const getPostList = async () => {
    return await request.get('/posts?_limit=6/')
    .then(response => response.data)
    .catch(error=> console.log(error))
  }