import axios from "axios";

export async function add_account_service(data) {
    try {
        const res = await axios.post("/api/account", data);
        return res.data;
    } catch (error) {
        return error;
    }
}


export async function get_account_service(data) {
    try {
        const res = await axios.get("/api/account");
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function update_account_service(data) {
    try {
        const res = await axios.put("/api/account/"+data.id,data);
        return res.data;
    } catch (error) {
        return error;
    }

    
}

export async function delete_account_service(id) {
    try {
        const res = await axios.delete(`/api/account/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}
