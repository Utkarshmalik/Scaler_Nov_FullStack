
function Login(props){

    console.log("Login component rendered");

    const onBtnClick=()=>{
        console.log("Login Comp : Login button is clicked");
        props.onLogin();
    }

    return <div style={{height:"100vh"}}> 
        
        
           <h2>
            Login Page
            </h2> 

            <button onClick={onBtnClick}  > Login  </button>

    </div>

}


export default Login;