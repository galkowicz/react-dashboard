import usersList from '../mocks/users'


class LoginService {
    login(userCredentials) {
        const {username, password} = userCredentials;
        if (!usersList[username]) {
            return false;
        } else {
            if (usersList[username] === password) {
                return true;
            }
        }
    }
}

export default LoginService;