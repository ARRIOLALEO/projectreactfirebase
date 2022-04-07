import React,{useContext} from 'react'
import {FirestoreContext} from '../contex/GeneralFireStore'
import {Grid,Button,CardMedia} from '@mui/material'
export default function SeeAllProducts() {
  const {allProducts,deleteProduct} = useContext(FirestoreContext)
  console.log(allProducts)
  return (
    <Grid container spacing={2}>
      {
        allProducts.map(({data,id})=>(
          <>
          <Grid container spacing={2}>
          <Grid item sx={2}>{data.name}</Grid>
          <Grid item sx={2}>{data.price}</Grid>
          <Grid item sx={2}><CardMedia component="img" image={data.img} height="50"/></Grid>
          <Grid item sx={2}><Button variant='contained'>Modify</Button></Grid>
          <Grid item sx={2}><Button variant='contained' style={{backgroundColor:"red"}} onClick={()=>deleteProduct(id)}>DELETE</Button></Grid>
          </Grid>
          </>
        ))
      }

    </Grid>
  )
}
