import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface ICatalogItemProps{
    product: IProduct;
}

export function CatalogItem({product}: ICatalogItemProps){
    const dispatch = useDispatch()

    const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCart(product))
    }, [dispatch, product])

    return (
        <article >
            <strong>{product.title}</strong> {" - "}
            <span>Price: {product.price}</span> {"  "}
            
            <button 
                type="button"
                onClick={handleAddProductToCart}
            >
                Comprar
            </button>

        </article> 
    );
}