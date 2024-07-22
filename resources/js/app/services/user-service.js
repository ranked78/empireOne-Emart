export async function get_user_service(data) {
    try {
        const res = await axios.get("/api/user");
        return res.data;
    } catch (error) {
        return error;
    }
}