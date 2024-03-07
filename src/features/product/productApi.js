import axios from 'axios'
export const getProducts = async () => {
    try {
        const response = await axios.get('http://localhost:4000/product');
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};