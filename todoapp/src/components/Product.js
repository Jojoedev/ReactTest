import { useState } from "react";
import NewTask from "../NewTask";
import { FaTimes } from "react-icons/fa";
import classes from '../style.module.css';



const Product = () =>{
    
    const [products, setProduct] = useState([
        {
            id: 1,
            name: 'Peak Milk',
            category: 'Beverages',
            quantity: 20,
            price: 3400
        },
        {
            id: 2,
            name: 'Bread',
            category: 'Staple',
            quantity: 120,
            price: 800
        },
        {
            id: 3,
            name: 'Orange',
            category: 'Fruits',
            quantity: 60,
            price: 40
        }
    ])
    
    const [text, setText] = useState(false)


    const ChangeText = () =>{
    setText(!text)
    }
  
    const AddTask = (product) =>{     

        setProduct([...products, product])
    }

const OnDelete = (id) =>{

setProduct(products.filter((product) =>product.id !== id))
}


    return(
            <div className="products">
                
                <button style={{width: '100px'}} className={classes.NewBtn} onClick={ChangeText} class="btn btn-primary"> {text? "Add" : "List"}</button>               
                
                <NewTask onCreateTask = {AddTask} />
                <br></br>
                <h3>........................................................................ </h3>
                {!text &&  products.map((product) =>(
                    
                   <table> 
                    
                    <fieldset>
                        
                   <label>Name  : </label>  {product.name} <FaTimes className={classes.fa} onClick={(() => OnDelete(product.id))} /> <br></br>
                    <label>Category  :</label>  {product.category} <br></br>
                   <label>Quantity  :</label>  {product.quantity} <br></br>
                    <label>Price  : </label>  {product.price}
                    </fieldset>
                    <h3>........................................................................ </h3>
                </table>
                    
                ))}
            </div>

    );
}

export default Product;