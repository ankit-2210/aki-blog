import axios from 'axios';

const url = 'http://localhost:8000';

export const createPost = async (post) => {
    try {
        return await axios.post(`${url}/create`, post);
    }
    catch (error) {
        console.log('Error message ', error);
    }
}

export const getAllPosts = async (param) => {
    try {
        let response = await axios.get(`${url}/posts${param}`);
        return response.data;
    }
    catch (error) {
        console.log('Error message ', error);
    }
}

export const getPost = async (id) => {
    try {
        let response = await axios.get(`${url}/post/${id}`);
        return response.data;
    }
    catch (error) {
        console.log('Error message ', error);
    }
}

export const updatePost = async (id, post) => {
    try {
        return await axios.put(`${url}/update/${id}`, post);
    }
    catch (error) {
        console.log('Error message ', error);
    }
}

export const deletePost = async (id) => {
    try {
        return await axios.delete(`${url}/delete/${id}`);
    }
    catch (error) {
        console.log('Error message ', error);
    }
}

export const uploadFile = async (post) => {
    // console.log(post);
    try {
        return await axios.post(`${url}/file/upload`, post);
    }
    catch (error) {
        console.log('Error message ', error);
    }
}

export const newComment = async (data) => {
    // console.log(data);
    try {
        return await axios.post(`${url}/comment/new`, data);
    }
    catch (error) {
        console.log('Error message ', error);
    }
}


export const getComment = async (id) => {
    // console.log(data);
    try {
        let response = await axios.get(`${url}/comments/${id}`);
        return response.data;
    }
    catch (error) {
        console.log('Error message ', error)
    }
}

export const deleteComment = async (id) => {
    // console.log(id);
    try {
        return await axios.delete(`${url}/comment/delete/${id}`);
    }
    catch (error) {
        console.log('Error message ', error)
    }
}


export const createSingin = async (user) => {
    console.log(user);
    try {
        return await axios.post(`${url}/signup`, user)
    }
    catch (error) {
        console.log('Error message ', error)
    }
}

export const createLogin = async (user) => {
    console.log(user);
    try {
        return await axios.post(`${url}/login`, user)
    }
    catch (error) {
        console.log('Error message ', error);
    }
}


export const UserContact = async (contact) => {
    // console.log(userid);
    try {
        return await axios.post(`${url}/contacts`, contact);
    }
    catch (error) {
        console.log('Error message ', error);
    }
}
