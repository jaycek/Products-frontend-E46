import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, CardMedia , Button} from "@mui/material";
import axios from "axios";
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  backgroundColor: '#FFD700', // Bright yellow color
  color: '#000',              // Black text
  fontWeight: 'bold',
  textTransform: 'none',       // Disable uppercase
  borderRadius: '20px',        // Rounded corners
  padding: '10px 20px',
  width:'150px',
  '&:hover': {
    backgroundColor: '#FFC107', // Slightly darker yellow on hover
  },
});
const Products = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_PRODUCTS_API 
  const getProducts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#fff7ef",
      }}
    >
      {products.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 300, m: 2 , display: "flex",flexDirection:"column",
          justifyContent: "space-between"}}>
          <CardMedia
            component="img"
            height="240"
            image={product.image}
            alt={product.name}
            sx={{ objectFit: "cover" }}
          />
          <CardContent  sx={{ display: "flex",flexDirection:"column",
          justifyContent: "space-between",gap:"1rem",alignItems:"center"}}>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Price: $${product.price}`}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Rating: {product.rating?.rate || "N/A"}
            </Typography> */}
               <CustomButton variant="contained">
      Add to cart
    </CustomButton>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Products;
