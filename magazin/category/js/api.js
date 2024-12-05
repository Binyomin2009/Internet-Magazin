import { uniques } from "../../const.js";
import { get } from "./dom.js";
let { url } = uniques

export async function getData() {
    try {

        let { data } = await axios.get(url)
        get(data)
    } catch (error) {
        console.error(error);
    }
}

export async function deleteUser(id) {
    try {
        const { data } = await axios.delete(`${url}/${id}`)
        getData()
    }
    catch (error) {
        console.error(error);
    }
} 
