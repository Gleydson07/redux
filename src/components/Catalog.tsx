import React, { useEffect, useState } from 'react'

import api from '../services/api';

import { IProduct } from '../store/modules/cart/types';
import { CatalogItem } from './CatalogItem';

export default function Catalog(){
    const [catalog,setCatalog] = useState<IProduct[]>([])

    useEffect(() => {
        async function getProducts(){
            const {data} = await api.get("products");
            setCatalog([...data])
        }

        getProducts()

    }, [])

    return (
        <main>
            <h1>Catalog</h1>
                {catalog.map(product => (
                    <CatalogItem 
                        key={product.id}
                        product={product}
                    />                     
                ))}     
        </main>
    )
}