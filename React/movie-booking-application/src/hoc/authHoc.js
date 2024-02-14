import UnAuthenticated from "../Pages/UnAuthenticated/UnAuthenticated";

function AuthHoc(props){



    //authentication check 

    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");

    const isLoggedIn = token && name;

    if(!isLoggedIn){
        return <UnAuthenticated/>

    }

    return <div>
        {props.children}
    </div>


}


export default AuthHoc;