
const Demo = require('../../models/demo')

module.exports = {
    Query : {
        async getDemos () {
            try {
                const demos = await Demo.find({})
                return demos
            } catch (error) {

                throw new Error(error)
                
            }
        },

        //  getSingleDemo :async (_,args)=>{
        //     const id = args.id
        //     console.log(id)
        //     const single = await Demo.find({id});
        //     console.log(single)
        //     return single

        // }
    },

    Mutation:  {
        async createDemo (_ , { demoInput : {companyName,phoneNumber,firstName , email}}){
            try {
            console.log(companyName,phoneNumber,firstName + 'iiiiiiiiiii')
            const newDemo = new Demo({
                companyName,phoneNumber,firstName, email
            })

            const Demos = await newDemo.save()
            console.log(Demos)
            return Demos
            } catch (error) {
                console.log(error)
                
            }
            

        }
   
    }
}