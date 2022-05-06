import axios  from 'axios';

const API_ENDPOINT = 'http://localhost:8084';

export const getItemsFromQuery = async (query: any) => {

    // Manejo de errores

    const url = `${API_ENDPOINT}/api/items?q=${encodeURIComponent(query)}`
    const { data } = await axios.get(url);


    return data;

} 

export const getProductDetails = async (id) => {

    const url = `${API_ENDPOINT}/api/items/${encodeURIComponent(id)}`
    const { data } = await axios.get(url);


    return data;

}
