import axios from "axios";

export async function add_events_service(data) {
    try {
        const res = await axios.post("/api/events", data);
        return res.data;
    } catch (error) {
        return error;
    }
}


export async function get_events_service(data) {
    try {
        const res = await axios.get("/api/events");
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function update_events_service(data) {
    try {
        const res = await axios.put("/api/events/"+data.id,data);
        return res.data;
    } catch (error) {
        return error;
    }
}
