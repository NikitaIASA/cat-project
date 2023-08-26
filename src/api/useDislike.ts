import { useQuery } from '@tanstack/react-query';
import { api } from '../core/api';
import { getVoteDashboardDto } from './dto/getVoteDashboardDto';

const getDislikes = async () => {
    const { data } = await api.get<getVoteDashboardDto>(
        'https://api.thecatapi.com/v1/votes',
        {
            params: {
                sub_id: 'mytestkey2',
            },
        }
    );

    const filteredData = data.filter(item => item.value === 0);

    return filteredData;
};

export const useDislikeData = () => {
    const { data, isLoading, isError } = useQuery(['getDislikes'], getDislikes);

    return { data, isLoading, isError };
};