const IsUser = (UserName ,Email, Password) => {
    if ((UserName == 'ali' || Email == 'ali.612345678@gmail.com') && Password == 1368 ) {
        return true
    } else {
        return false
    }
}

export {IsUser}