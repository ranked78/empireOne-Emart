import axios from "axios";

export async function add_user_service(data) {
    try {
        const res = await axios.post("/api/user", data);
        return res.data;
    } catch (error) {
        return error;
    }
}


export async function get_user_service(data) {
    try {
        const res = await axios.get("/api/user");
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function update_user_service(data) {
    try {
        const res = await axios.put("/api/user/"+data.id,data);
        return res.data;
    } catch (error) {
        return error;
    }
}
