// import React from 'react';
import axios, { AxiosResponse } from 'axios';
import https from 'https';
import { Guid } from 'guid-typescript';

interface BookType {
    Title: string;
    Author: string;
    Description: string;
    publishedDate: DateTime | null;
}
export const createBook = async (book: BookType): Promise<void> => {
    const resp = await axios.post('https://localhost:7051/api/Book', book,
        {
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        });
    console.log(resp);
}

export const getBooks = async (): Promise<void> => {
    const books: any = await axios.get('https://localhost:7051/api/Book', {
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });
    const { result } = books.data;
    console.log(result);
    return result;
}
export const deleteBook = async (id: string | null): Promise<void> => {
    const resp: any = await axios.delete(`https://localhost:7051/api/Book/${id}`, {
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });
    return resp;
}
export const getBook = async (id: Guid): Promise<void> => {
    const book = await axios.get(`https://localhost:7051/api/Book/${id}`, {
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });
    const { result } = book.data;
    return result;
}
export const updateBook = async (id: Guid): Promise<void> => {
    const book = await axios.put(`https://localhost:7051/api/Book/${id}`, {
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });
    const { result } = book.data;
    return result;
};