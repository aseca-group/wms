import axios from "axios";

const API_BASE_URL = "http://control-tower-control-tower-1:8080/product";

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/`);
        return response.data;
    } catch (error) {
        console.error("error fetching products", error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("error fetching product", error);
        throw error;
    }
};

export const createProduct = async (price, name) => {
    try {
        const response = await axios.post(`${API_BASE_URL}`, {
            price: price,
            name: name
        });
        return response.data;
    } catch (error) {
        console.error("error creating product", error);
        throw error;
    }
}