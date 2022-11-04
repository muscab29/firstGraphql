const Purchase = require('../../models/purchase')

module.exports = {
    Mutation:  {
        async registerPurchase (_ , { purchaseInput : {amount,purchaseItem,creditInfo }}){
            try {
            console.log(amount,purchaseItem,creditInfo + 'iiiiiiiiiii')
            const newPurchase = new Purchase({
                amount,purchaseItem,creditInfo
            })

            const res = await newPurchase.save()
            console.log(res)
            return res
            } catch (error) {
                console.log(error)
                
            }
            

        }
   
    }
}