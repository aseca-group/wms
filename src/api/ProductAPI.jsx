import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8080/product";

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