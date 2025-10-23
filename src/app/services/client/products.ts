
export const getProducts = () => {
  return fetch("/api/products")
    .then((response) => response.json())
    .then((data) => {
      console.log("🔍 data from /api/products:", data);
      return data; 
    });
};
