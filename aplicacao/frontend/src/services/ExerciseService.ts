
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
});


export async function getExercisesbyTheirId(id: number) {

    const response = await instance.get(`/exercise/${id}`);
    console.log(response.data)
    return response.data;

}