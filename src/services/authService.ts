import axios from '../utils/config/axios.config';

/**
 * Login Method
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
export const login = (email: string, password: string) => {
    
    // Declare Body to POST
    let body = {
        email: email,
        password: password
    }

    // Send POST request to login endpoint
    return axios.post('/auth/login', body)
}

/**
 * Register Method
 * @param {string} name
 * @param {string} email 
 * @param {string} password
 * @param {number} age
 * @returns 
 */
export const register = (name: string, email: string, password: string, age: number) => {
    
    // Declare Body to POST
    let body = {
        name: name,
        email: email,
        password: password,
        age: age
    }

    // Send POST request to register endpoint
    return axios.post('/auth/register', body)
}
