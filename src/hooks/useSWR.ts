import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());


export const useCustomSWR = (url: string) => {
    const { data, error } = useSWR(`${url}`, fetcher);

    return {
        data,
        isError: error,
        isLoading: !error && !data
    };
};