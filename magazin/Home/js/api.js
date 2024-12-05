import { uniques } from "../../const.js";
import { get, gets } from "./dom.js"
let { urlProduct } = uniques
let { url } = uniques

export async function getData() {

    try {
        let { data } = await axios.get(urlProduct)
        get(data)
    } catch (error) {
        console.error(error);
    }
}

export async function getCats() {
    try {
        let { data } = await axios.get(url)
        console.log(data);
        gets(data)
    } catch (error) {
        console.error(error);
    }
}
