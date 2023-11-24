const ProductItem = (props) => {
    return ( 
        <article>
            <img src={props.image} alt="#" />
            <p>{props.title}</p>
            <p>{props.price}</p>
            <div>
            <button>Buy Now</button>
            </div>

        </article>

     );
}
 
export default ProductItem;