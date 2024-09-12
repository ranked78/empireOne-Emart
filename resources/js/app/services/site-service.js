import axios from "axios";

export async function add_site_service(data) {
    try {
        const res = await axios.post("/api/site", data);
        return res.data;
    } catch (error) {
        return error;
    }
}


export async function get_site_service(data) {
    try {
        const res = await axios.get("/api/site");
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function update_site_service(data) {
    try {
        const res = await axios.put("/api/site/"+data.id,data);
        return res.data;
    } catch (error) {
        return error;
    }

    
}

export async function delete_site_service(id) {
    try {
        const res = await axios.delete(`/api/site/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}
