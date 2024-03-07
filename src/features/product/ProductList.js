import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RemoveIcon from '@mui/icons-material/Remove';
import { Card, CardContent, Typography, CardMedia, IconButton} from '@mui/material';


import { getProducts } from "./productApi";
import { addProduct, removeProduct, updateProductQty } from "../order/orderSlice";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

import './ProductList.css'




const PrductList = () => {
    const [productList, setProductList] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isProductInOrder, setIsProductInOrder]= useState(false)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProductList(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const orderProductList = useSelector(state => state.order.cart);

    // עכשיו תוכל לעשות שימוש במערך `currentOrder` בתוך הקומפוננטה שלך
    // לדוגמה:
    console.log(orderProductList);
    let dispatch = useDispatch();
    const addProductToOrder = (product) => {
        const existingProduct = orderProductList.find(item => item.id === product.id);
        if (existingProduct) {
            const updatedProduct = { ...existingProduct, qty: existingProduct.qty + 1 };
            dispatch(updateProductQty(updatedProduct));
        } else {
            dispatch(addProduct({ ...product, qty: 1 }));
        }
    }
    const removeProductFromOrder = (product) => {
        const existingProduct = orderProductList.find(item => item.id === product.id);
        if (existingProduct.qty > 1) {
            const updatedProduct = { ...existingProduct, qty: existingProduct.qty - 1 };
            dispatch(updateProductQty(updatedProduct));
        } else if (existingProduct.qty === 1) {
            dispatch(removeProduct(product));
        }
    }

    const handleProductClick = (productId) => {
        const product = productList.find(product => product.id === productId);
        setSelectedProduct(product);
        const ProductInOrder = orderProductList.find((orderItem) => orderItem.id === productId);
        setIsProductInOrder(ProductInOrder)
    };

    const handleProductClose = () => {
        setSelectedProduct(null);
    };


    const handleReturnToProducts = () => {
        setSelectedProduct(null);
    };
    return (<>
        {productList.map((item) => {
            return (
                <ul key={item.id} className="product-list">
                    <li onClick={() => handleProductClick(item.id)}>
                        <Product
                            key={item.id}
                            product={item}
                            // addProductToOrder={addProductToOrder}
                            // removeProductFromOrder={removeProductFromOrder}
                            // showMinusButton={isProductInOrder}
                        />
                         {isProductInOrder && (
                                <IconButton color="primary" aria-label="remove a product" onClick={() => removeProductFromOrder(item)}>
                                    <RemoveIcon />
                                </IconButton>
                            )}
                    </li>
                </ul>
            );
        })}
        <div className="product-details">
            {()=>{}}
            {selectedProduct && <ProductDetails
                product={selectedProduct}
                onClose={handleProductClose}
                onReturn={handleReturnToProducts} 
                addProductToOrder={addProductToOrder}
                removeProductFromOrder={removeProductFromOrder}
                showMinusButton={isProductInOrder}/>}
        </div>
    </>);
}

export default PrductList;