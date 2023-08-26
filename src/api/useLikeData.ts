import { useQuery } from '@tanstack/react-query';
import { api } from '../core/api';
import { getVoteDashboardDto } from './dto/getVoteDashboardDto';

const getLikes = async () => {
    const { data } = await api.get<getVoteDashboardDto>(
        'https://api.thecatapi.com/v1/votes',
        {
            params: {
                sub_id: 'mytestkey2',
            },
        }
    );

    const filteredData = data.filter(item => item.value === 1);

    return filteredData;
};

export const useLikeData = () => {
    const { data, isLoading, isError } = useQuery(['getLikes'], getLikes);

    return { data, isLoading, isError};
};