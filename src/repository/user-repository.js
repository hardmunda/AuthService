const { User, Role } = require('../models/index');

class UserRepository {
    async create(data) {
        try{
            const user = await User.create(data);
            return user;

        }catch(error){
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async destroy(userId) {
        try{
            await User.destroy({
                where: {
                    id: userId
                }
            });
            return true;

        }catch(error){
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getById(userId) {
        try{
            //Say we don't want our password to get fetched 
            const user = await User.findByPk(userId, {
                attributes: ['email','id']
            });
            return user;

        }catch(error){
            console.log("Something went wrong on repoitory layer");
            throw error;
        }
    }

    async getByEmail(userEmail) {
        try{
            const user = await User.findOne({where: {
                email: userEmail
            }});
            return user;

        }catch(error){
            console.log("Something went wrong on repository layer");
            throw error;

        }
    }

    
}
 
module.exports = UserRepository;