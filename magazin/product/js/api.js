import { uniques } from "../../const.js";
let { urlProduct } = uniques
import { get } from "./dom.js";

export async function getData() {
    try {
        let { data } = await axios.get(urlProduct)
        get(data)
    } catch (error) {
        console.error(error);
    }
}

export async function deleteProd(id) {
    try {
        await axios.delete(`${urlProduct}/${id}`)
        getData()
    } catch (error) {
        console.error(error);
    }
}