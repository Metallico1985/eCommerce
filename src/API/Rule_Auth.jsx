// import API from './Rule_API'

// export const getUser = async () => {
//     let url = "/api/user/info";
//     return await API.get(url)
//         .then((response) => {
//             return response.data;
//         })
//         .catch((error) => {
//             console.log(error)
//             throw error.response.data.error || "Error procesando la solicitud"
//         })
// }

// export const login = async (usuario) => {
//     let url = "/api/users/login";
//     return await API.post(url, usuario)
//         .then((response) => {
//             localStorage.setItem("token", response.data.token);
//             return response.data;
//         })
//         .catch((error) => {
//             console.log(error);
//             throw error.response.data.error || "Error procesando la solicitud"
//         })
// }
// export const register = async (usuario) => {
//     let url = "/api/users/registro";
//     return await API.post(url, usuario)
//         .then((response) => {
//             return response.data;
//         })
//         .catch((error) => {
//             console.log(error);
//             throw error.response.data.error || "Error procesando la solicitud"
//         })
// }