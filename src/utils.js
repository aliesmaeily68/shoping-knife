const IsUser = (UserName ,Email, Password,UserType) => {
    if ((UserName == 'ali' || Email == 'ali.612345678@gmail.com') && Password == 1368 && UserType=='user') {
        return true
    } else {
        return false
    }
}

export {IsUser}