

import "./Product.css";


function Product(props){

 
    const {title,description,image,category,price,id} = props.data;


    const onDeleteClick=()=>{

        props.onDelete(id);

    }


    return <div className="product">

        <div className="productImg">

            <img src={image} />

        </div>

        <div className="productDetails">

            <h3> {title} </h3>

            <p>  {description} </p>

            <hr/>

            <div className="minorDetails">

                <span> category : {category} </span>
                <span> price : {price} </span>

            </div>
                        
            
            <hr/>



        </div>


        <button onClick={onDeleteClick} className="deleteBtn"> Delete </button>



    </div>

}


export default Product;