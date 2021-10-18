import { Request, Response } from 'express';

import { CreateUserService } from '../services/CreateUsersService';

class CreateUserController{
    
    async hadle(request: Request,response: Response){

        const {ame,email,admin} = request.body;
        
        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name,email,admin})
    }
    
}

export {CreateUserController}