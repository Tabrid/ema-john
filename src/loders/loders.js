import { getStoreCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {

    const productsData = await fetch('products.json');
    const products = await productsData.json();


    const saveedCart = getStoreCart();

   const previousCart =[];

    for( const id in saveedCart){
       const addedProduct = products.find(product => product.id ===id)
       if(addedProduct){

        const quantity = saveedCart[id];
        addedProduct.quantity = quantity;
        previousCart.push(addedProduct);
       }
    }
    return {products:products ,previousCart:previousCart};

}