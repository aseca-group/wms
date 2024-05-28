import axios from 'axios';

const API_BASE_URL = "http://127.0.0.1:8080/inventory";

export const getAllInventory = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/`);
        return response.data;
    } catch (error) {
        console.error("error fetching inventories", error);
        throw error;
    }
};

export const getInventoryById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("error fetching inventory", error);
        throw error;
    }
};

export const createInventory = async (inventory) => {
    try {
        const response = await axios.post(`${API_BASE_URL}`, inventory);
        return response.data;
    } catch (error) {
        console.error("Error creating inventory", error);
        throw error;
    }
};