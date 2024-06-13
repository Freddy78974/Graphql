import * as constants from './const.js'
import { login, auth } from './login.js';

constants.submitBtn.addEventListener('click', () => {
    login();
});

constants.btnLogout.addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href = 'https://freddy78974.github.io/Graphql/'
    // window.location.reload();
});

const userLog = localStorage.getItem('user');

if (userLog) {
    console.log("toto")
    const user = JSON.parse(userLog);
    auth(user.username, user.password);
}

console.log('Hello World');