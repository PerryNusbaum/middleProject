import { useSelector } from "react-redux";
import Product from "../product/Product";

const OrderList = () => {
    const orderList = useSelector(state => state.order.cart);

    // עכשיו תוכל לעשות שימוש במערך `currentOrder` בתוך הקומפוננטה שלך
    // לדוגמה:
    console.log(orderList);
    // let productList=useSelector(state=>state.order.currentOrder);
    // console.log(productList)
    return (
        //  orderList.map((item)=>{
        // return <Product key={item.id} product={item}
        //  />
    // })
    <div style={{height:"500px"}}>orderList</div>
    );
}
 
export default OrderList;