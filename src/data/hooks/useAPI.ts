import { useCallback } from 'react'

import { API } from '../api';

export default function useAPI<T = any>() {
    const httpGet = useCallback(async function (uri: string): Promise<T> {
        const res = await API.get<T>(uri);
        return res.data;
    }, []);

    const httpPost = useCallback(async function (uri: string, body: T): Promise<void> {
        await API.post(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
    }, []);

    return { httpGet, httpPost }
}
