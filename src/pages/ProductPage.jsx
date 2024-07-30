import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchProduct from '../hooks/useFetchProduct';
import ProductDetail from '../components/ProductDetail';

const ProductPage = () => {
    const { id } = useParams();
    const { product, loading, error } = useFetchProduct(id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching product: {error.message}</p>;

    return (
        <div className="container mx-auto p-4">
            {product ? <ProductDetail product={product} /> : <p>Product not found</p>}
        </div>
    );
};

export default ProductPage;
