import User from '../models/User.js';

    class UserService{
        async findByEmail(name, email, password) {
            try {
            const newUser = new User({
                 name, 
                 email, 
                 password 
                });
                await newUser.save();
        }catch (error) {
            console.error('Error:', error);
            
        }
}
    }
export default new UserService();
