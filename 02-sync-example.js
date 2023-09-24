import { createHash } from "crypto"
import fs from "fs"
const path = "02-users.json"

class UsersManager{
    async getUsers(queryObj){
        const {limit} = queryObj
        try{
            if(fs.existsSync(path)){
                const usersFile = await fs.promises.readFile(path,"utf-8")
                const userData = JSON.parse(usersFile)
                return limit ? userData.slice(0, limit) : userData
            }else{
                return []
            }

        }catch(err){
            return err
        }
    }
    async createUser(user){
        try{
            const users = await this.getUsers({})
            let id
            if(!users.length){
                id = 1
            }else{
                id = users[users.length - 1].id + 1
            }
            const hashPassword = createHash("sha512")
                .update(user.password)
                .digest("hex")
            const createdUser = {id, ...user, password:hashPassword}
            users.push(createdUser)
            await fs.promises.writeFile(path,JSON.stringify(users))
            return createdUser
        }catch(err){
            return err
        }
    }

    async getUserById(id){
        try{
            const users = await this.getUsers({})
            const user = users.find((u)=> u.id === id)
            return user
        }catch(err){
            return err
        }
    }

    async deleteUser(id){
        try{
            const users = await this.getUsers({})
            const user = users.find((u)=>u.id === id)
            console.log(user)
            if(user){
                const newArrayUsers = users.filter(u => u.id !== id)
                await fs.promises.writeFile(path,JSON.stringify(newArrayUsers))
            }
            return user
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