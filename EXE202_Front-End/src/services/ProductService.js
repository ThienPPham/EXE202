import axios from "axios"

export const getAllProduct = async () =>{
    const res = await axios.get(`http://localhost:3001/api/product/get-all`)
    return res.data
}
export const createProduct = async (data) =>{
    const res = await axios.post(`http://localhost:3001/api/product/create`, data)
    return res.data
}

export const getDetailsProduct = async (id) => {
    const res = await axios.get(`http://localhost:3001/api/product/get-details/${id}`);
    return res.data;
};