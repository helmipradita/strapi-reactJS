import api from ".";

export default {
    find: () => api.get("/blogs").then((res) => res.data),
    detail: (id) => api.get(`/blogs/${id}`).then((res) => res.data),
}