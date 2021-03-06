import { User } from '../entities/User';
import { UsersRepositories } from "../repositories/UserRepositories"

interface IUserRequest {
    name:string;
    email:string;
    admin?:boolean;
}

class CreateUserService {    
   
    async execute({name,email,admin}: IUserRequest) {
     
        const usersRepository = new UsersRepositories();

        if(!email){
            throw new Error("Email incorrect")
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });
        
        if(userAlreadyExists){
            throw new Error("User already exits");
        }
        
        const user = usersRepository.create({
            name,
            email,
            admin
        });

        await usersRepository.save(user);

        return User;
    }
    
}

export {CreateUserService}
