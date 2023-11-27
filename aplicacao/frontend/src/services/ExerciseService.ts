
import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: 'https://tutor-de-ensino-ts.onrender.com',
    //baseURL: 'http://localhost:3000',
});

export async function getExercisesbyTheirId(id: number) {

    const response = await instance.get(`/exercise/${id}`);
    console.log(response.data)
    return response.data;

}

export async function checkIfTextIsRefactored(id: number, novoDado: string | undefined): Promise<AxiosResponse> {
    const url = `/exercise/${id}`;
    const response = await instance.put(url, novoDado);
    return response;

}
