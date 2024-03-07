// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import { Card, CardContent, Typography, CardMedia, IconButton, PlusIcon } from '@mui/material';
const Product = ({ product , addProductToOrder, removeProductFromOrder,showMinusButton}) => {
  const {name,imgUrl,company} = product;
  console.log(product.name)
  return (<Card>
    <CardMedia
      component="img"
      height="200"
      width="200"
      image={imgUrl}
      alt={product.name}
    />
    <CardContent>
      <Typography variant="h6" component="h2">
        {name}
      </Typography>
      <Typography>
חברה: {company}
      </Typography>
      {/* <IconButton color="primary" aria-label="add a product" onClick={()=>{addProductToOrder(product)}}>
        <AddIcon />
      </IconButton>
      {showMinusButton && (
                <IconButton color="primary" aria-label="remove a product" onClick={() => removeProductFromOrder(product)}>
                    <RemoveIcon />
                </IconButton>
            )} */}
    </CardContent>
  </Card>);
}

export default Product;