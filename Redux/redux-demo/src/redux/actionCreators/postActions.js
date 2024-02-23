
export const fetchPostsRequest = () => ({
  type: 'FETCH_POSTS_REQUEST'
});


export const fetchPostsSuccess = (posts) => ({
  type: 'FETCH_POSTS_SUCCESS',
  payload:posts 
});

export const fetchPostsFailure = (error) => ({
  type: 'FETCH_POSTS_FAILURE',
  payload:error
});

export const fetchPosts = ()=>{

    return async dispatch =>{

        dispatch(fetchPostsRequest());

        //async action 

        try{
            const posts = await fetchPostsViaAPI();
             dispatch(fetchPostsSuccess(posts))
        }catch(err){
            dispatch(fetchPostsFailure(err.message))
        }

    }
    
}


const fetchPostsViaAPI = async ()=>{

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data;
    }
    catch(err){
        throw new Error("Failed to fetch posts from API");
    }
}