

export const changeUserDetails = (name,age)=>{

    return {
        type:"CHANGE_USER_DETAILS",
        payload:{
            name, 
            age
        }
    }
}