const fs = require("fs")
const path = "02-users.json"

class UsersManager{
    async getUsers(){
        try{
            if(fs.existsSync(path)){
                const usersFile = await fs.promises.readFile(path,"utf-8")
                return JSON.parse(usersFile)
            }else{
                return []
            }

        }catch(err){
            return err
        }
    }
    async createUser(user){
        try{
            const users = await this.getUsers()
            users.push(user)
            await fs.promises.writeFile(path,JSON.stringify(users))
        }catch(err){
            return err
        }
    }
    async getUserById(){}
    async deleteUser(id){
        try{
            const users = await this.getUsers()
            const newArrayUsers = users.filter(u => u.id !== id)
            await fs.promises.writeFile(path,JSON.stringify(newArrayUsers))
        }catch(err){
            return err
        }
    }
}

const user1 = {
    first_name : "Juan",
    last_name : "Hoyos",
    age : 40,
    course : "Javascript"
}

const user2 = {
    first_name : "Emanuel",
    last_name : "Ortega",
    age : 26,
    course : "Python"
}

// async function test(){
//     const manager1 = new UsersManager()
//     const users = await manager1.getUsers()
//     await manager1.createUser(user1)
//     console.log(users)
// }

// test()

export const manager = new UsersManager()