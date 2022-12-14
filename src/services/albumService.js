import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/albums';


export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc`);

export const getOne = (albumId) => request.get(`${baseUrl}/${albumId}`);

export const create = (data) => request.post(baseUrl, data);

export const edit = (albumId, data) => request.put(`${baseUrl}/${albumId}`, data);

export const remove = (albumId) => {
    request.del(`${baseUrl}/${albumId}`);

}

export const search =(searchText)=> {

    const query = encodeURIComponent(`name LIKE "${searchText}"`);

   
   return request.get(`${baseUrl}?where=${query}`);
}



