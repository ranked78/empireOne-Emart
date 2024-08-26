import axios from "axios";

export async function add_inventory_service(data) {
    try {
        const res = await axios.post("/api/inventory", data);
        return res.data;
    } catch (error) {
        return error;
    }
}


export async function get_inventory_service(data) {
    try {
        const res = await axios.get("/api/inventory");
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function update_inventory_service(data) {
    try {
        const res = await axios.put("/api/inventory/"+data.id,data);
        return res.data;
    } catch (error) {
        return error;
    }

    
}

export async function delete_inventory_service(id) {
    try {
        const res = await axios.delete(`/api/inventory/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}
