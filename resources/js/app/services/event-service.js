import axios from "axios";

export async function add_event_service(data) {
    try {
        const res = await axios.post("/api/event", data);
        return res.data;
    } catch (error) {
        return error;
    }
}


export async function get_event_service(data) {
    try {
        const res = await axios.get("/api/event");
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function update_event_service(data) {
    try {
        const res = await axios.put("/api/event/"+data.id,data);
        return res.data;
    } catch (error) {
        return error;
    }

    
}

export async function delete_event_service(id) {
    try {
        const res = await axios.delete(`/api/event/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}
