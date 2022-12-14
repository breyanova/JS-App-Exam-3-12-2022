
export const saveUser = (user) => {
    if(user.accessToken){
        localStorage.setItem('user', JSON.stringify(user));
    }
    else{
                    alert('Password dont match');
            return;
        
 
    }
    
};

export const deleteUser = () => {
    localStorage.removeItem('user');
}
export const getUser =() =>{
    let serializeUser = localStorage.getItem('user');
    if(serializeUser){
        let user = JSON.parse(serializeUser);
        return user;
    }
}

export const getToken = () => {
    return getUser()?.accessToken;
}