import * as authService from './authService.js';

 const request = (method,url,data) => {
    let options = {};

    if(method != "GET"){
        options.method = method;

        if(url !== `http://localhost:3030/users/login` && url !== `http://localhost:3030/users/register`){
            options.headers = {
                'content-type': 'application/json',
                'X-Authorization': authService.getToken()
    
            }
         }
         else{
            options.headers = {
                'content-type': 'application/json'

            };

         }
        
        options.body = JSON.stringify(data)
    }

    return fetch(url,options).then(res => res.json());
}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');
export const patch = request.bind({}, 'PATCH');
