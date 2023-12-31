import { useQuery } from '@tanstack/react-query';
import { api } from '../core/api';
import { getVoteDashboardDto } from './dto/getVoteDashboardDto';

const getFavorites = async () => {
    const { data } = await api.get<getVoteDashboardDto>(
        'https://api.thecatapi.com/v1/favourites',
        {
            params: {
                sub_id: 'mytestkey2',
            },
        }
    );

    return data;
};


export const useFavoriteData = () => {
    const { data, isLoading, isError } = useQuery(['getFavorites'], getFavorites);

    return { data, isLoading, isError };
};