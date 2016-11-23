let login = (username, password) => {
    if(username !== 'admin' || password !== 'test'){
        console.log('incorrect username');
    }
}

login('admin', 'password');
