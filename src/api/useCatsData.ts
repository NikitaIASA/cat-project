import { useQuery } from '@tanstack/react-query';
import { api } from '../core/api';
import { getCatDto } from "./dto/getCats.dto";

interface getCatsParams {
    breed: string,
    limit: number,
    sorting: string;
}

const getCats = async ({ breed, limit, sorting }: getCatsParams) => {
    const { data } = await api.get<getCatDto>('https://api.thecatapi.com/v1/images/search', {
        params: {
            breed_ids: breed,
            limit: limit,
            order: sorting === 'ascending' ? 'ASC' : 'DESC',
        },
    });

    return data;
};

export const useCatsData = (breed: string, limit: number, sorting: string) => {
    const { data, isLoading, isError } = useQuery(
        ['getCats', breed, limit, sorting],
        () => getCats({ breed, limit, sorting })
    );

    return { data, isLoading, isError };
};
