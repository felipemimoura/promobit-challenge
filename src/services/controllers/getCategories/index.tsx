import { CATEGORIES_URL } from "../../../config"
import api from "../../API"
import { Categories } from "./interface"

export const getCategories = async (): Promise<Categories> => {
    const result = await api.get<Categories>(`${CATEGORIES_URL}`)
    return result.data

}