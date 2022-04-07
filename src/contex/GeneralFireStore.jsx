import { createContext,useState,useEffect } from "react";
import {collection,addDoc,getDocs, doc,deleteDoc,onSnapshot} from 'firebase/firestore'
import * as firebaseApp from '../firebase/configFirebase'
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'
export const  FirestoreContext = createContext();

const refCollection = collection(firebaseApp.firestore,'products')

const FirestoreProvider = ({children}) =>{
    const [allProducts,setAllProducts] = useState([])

    // this function create my product 
    const addProduct = async(newProduct,image)=>{
        const refHosting = ref(firebaseApp.storage,`images/${image.name}`)
        const uploadImage = uploadBytesResumable(refHosting,image);
        uploadImage.on(
            'state_change',(snapshot)=>{
                const proggress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log(`you have upload the ${proggress} %`)
            },(err)=>{console.log(err.message)},()=>getDownloadURL(uploadImage.snapshot.ref).then((url)=> addDoc(refCollection,{...newProduct,img:url}))
        )
    }

    //  this function get the data from firestore and save it in my state
    const getAllProducts = async () =>{
        const productsFromFirestore = await getDocs(refCollection)
        console.log(productsFromFirestore)
        setAllProducts(productsFromFirestore.docs.map((product)=>({
            data:product.data(),
            id:product.id
        })))
    }
    useEffect(()=>{
        getAllProducts()
    },[])
    
    //TODOS modify Products
    //DELETE producs
    const deleteProduct = (id) =>{
        const referenceDoct =  doc(firebaseApp.firestore,"products",id)
        deleteDoc(referenceDoct)
    }

    //observer that check if there are changes in our data 

    onSnapshot(doc(firebaseApp.firestore,'products',"name"),(doc)=>{
        getAllProducts()
    })

    const data = {
        allProducts:allProducts,
        addProduct:addProduct,
        deleteProduct:deleteProduct
    }

    return(
        <FirestoreContext.Provider value={data}>
            {children}
        </FirestoreContext.Provider>
    )
}
export default FirestoreProvider
