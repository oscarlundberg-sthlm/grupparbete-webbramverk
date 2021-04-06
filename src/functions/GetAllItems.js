export const getAllItems = async () => {
    const response = await fetch('http://localhost:5000/products');
    const data = await response.json();
    return data;
};