import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { fetchPosts } from "./redux/actionCreators/postActions";
import "./style.css";

function PostComponent(){


    const {loading, posts, error} = useSelector(state=>state.posts);
  
    
    const dispatch = useDispatch();

    useEffect(()=>{
        //dispatch an action to fetch the posts 
        dispatch(fetchPosts());
    },[])



    if(loading){
        return <p> Loading.... </p>
    }

    if(error){
        return <p> Error : {error} </p>
    }


    return <div className="post-container">

        <h1> Posts </h1>

        <ul className="post-list">

            {
                posts.map((post)=>
                    <li key={post.id} className="post-item" > 
                    <div className="post-title"> {post.title} </div>
                    <div className="post-body"> {post.body} </div>
                    </li>
                )
            }

        </ul>

    </div>


}


export default PostComponent;
