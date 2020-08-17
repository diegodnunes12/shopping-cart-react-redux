import productsData from './products-data.json'

export class Products{
    static getProducts(){
        return new Promise( (resolve, reject) => {
            if(productsData){
                resolve(productsData)
            }else{
                reject()
            }
        } )
    }

    static getProductById(id){
        return new Promise( (resolve, reject) => {
            const product = productsData.items.find(p => p.id === parseInt(id))

            if(product){
                resolve(product)
            }else{
                reject()
            }
        } )
    }
}