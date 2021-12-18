const USERS = "_USERS";

export function saveUser(user) {
    let users = localStorage.getItem(USERS)

    !users ? users = [] : users = JSON.parse(users);
    users.push(user);

    localStorage.setItem(USERS, JSON.stringify(users));
}

export function validateError() {
    // TODO
}

export function getUsers() {
    return JSON.parse(localStorage.getItem(USERS))
}