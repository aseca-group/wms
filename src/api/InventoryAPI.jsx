import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/inventory";

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

export const createInventory = async (productId, stock) => {
    try {
        const response = await axios.post(`${API_BASE_URL}`, {
            productId: productId,
            stock: stock
        });
        return response.data;
    } catch (error) {
        console.error("Error creating inventory", error);
        throw error;
    }
};

export const addInventoryStock = async (productId, stockToAdd) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/addStock`, {
            productId: productId,
            stockToAdd: stockToAdd
        });
        return response.data;
    } catch (error) {
        console.error("Error adding stock", error);
        throw error;
    }
}

export const removeStock = async (productId, stockToRemove) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/removeStock`, {
            productId: productId,
            stockToRemove: stockToRemove
        });
        return response.data;
    } catch (error) {
        console.error("Error removing stock", error);
        throw error;
    }
}

export const deleteInventory = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting inventory", error);
        throw error;
    }
}