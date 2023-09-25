import { createContext , useState, useEffect} from "react";
import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductContext = createContext({
    products: []
})

export const ProductProvider = ({children})=>{
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        const getCategoriesMap = async()=>{
            const categoryMap   = await getCollectionAndDocuments()
            console.log(categoryMap)
        }
        getCategoriesMap();
    },[])
        const value = {products};
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
//chang