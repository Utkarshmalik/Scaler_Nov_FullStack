import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";
import "./Posts.css";


const Posts = ()=>{

        const posts = useSelector((state)=>state.posts);
        const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts());
    },[])



    return <div>

         <h1> Posts </h1>

         {posts.status === "loading" && <p> Loading...</p> }
         {posts.status === "failed" && <p>  Error : {posts.error} </p> }
         {posts.status === "succeeded" &&   (
            
            <ul>
                {posts.data.map((post)=>{
                    return <li key={post.id} > {post.title} </li>

                })}

            </ul>


         )   }


        </div>
   
    
   

}

export default Posts;