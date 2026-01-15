const baseUrlJsonplaceholder = 'https://jsonplaceholder.typicode.com'
const baseUrlDummyjson = 'https://dummyjson.com'

export const urls = {
    users: {
        allUsersJsonplaceholder: baseUrlJsonplaceholder + '/users',
        allUsersDummyjson: baseUrlDummyjson + '/users'
    },
    posts: {
        allPostsJsonplaceholder: baseUrlJsonplaceholder + '/posts',
        allPostsDummyjson: baseUrlDummyjson + '/posts'
    },
    comments: {
        allCommentsJsonplaceholder: baseUrlJsonplaceholder + '/comments',
        allCommentsDummyjson: baseUrlDummyjson + '/comments'
    }
}