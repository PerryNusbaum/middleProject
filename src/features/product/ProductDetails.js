import { Card, CardContent, Typography, CardMedia, IconButton} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const ProductDetails = ({product,onClose,onReturn, addProductToOrder, 
  removeProductFromOrder,showMinusButton}) => {
    const {id,name,description,imgUrl,content,price,isCooling,company,prodDate}=product;
    return (<Card>
        <CardMedia
          component="img"
          height="500"
          width="200"
          image={imgUrl}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h6" component="h2">
            {name}
          </Typography>
          <Typography variant="h6" component="h2">
            {description}
          </Typography>
          <Typography variant="h6" component="h2">
            {content}
          </Typography>
          <Typography variant="h6" component="h2">
            {price}
          </Typography>
          <Typography variant="h6" component="h2">
            {isCooling}
          </Typography>
          <Typography>
    חברה: {company}
          </Typography>
          <Typography variant="h6" component="h2">
            {prodDate}
          </Typography>
        <IconButton color="primary" aria-label="remove a product" onClick={onReturn}>
            < ArrowBackIcon/>
        </IconButton>
        <IconButton color="primary" aria-label="add a product" onClick={()=>{addProductToOrder(product)}}>
        <AddIcon />
      </IconButton>
      {showMinusButton && (
                <IconButton color="primary" aria-label="remove a product" onClick={() => removeProductFromOrder(product)}>
                    <RemoveIcon />
                </IconButton>
            )}
        </CardContent>
    </Card>);
}

export default ProductDetails;