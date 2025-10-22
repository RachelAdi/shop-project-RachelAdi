
export const getProducts = () => {
    return fetch('/api/products')
        .then(response => response.json())
        .then(data => data.products);
}