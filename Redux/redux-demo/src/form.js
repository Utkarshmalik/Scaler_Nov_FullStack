import { useDispatch, useSelector } from "react-redux";
import { changeUserDetails } from "./redux/actionCreators/saveUserDetails";

function Form(){

    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user);


    const onFormSubmit=(e)=>{
        e.preventDefault();

        const name= e.target[0].value;
        const age= e.target[1].value;


        const userDetailUpdateAction = changeUserDetails(name, age);

        console.log(userDetailUpdateAction);

        dispatch(userDetailUpdateAction);
    }


    return <div>

        <form onSubmit={onFormSubmit}>

            Name : 
            <input type="text"/>

            <br/>

            Age : 
            <input type="number"/>

            <br/>

            <input type="submit" value="Save Data" /> 

        </form>

         <h2> Saved Data </h2>


         Name: <h3> {user.name} </h3>
         Age: <h3> {user.age} </h3>

    </div>

}

export default Form;