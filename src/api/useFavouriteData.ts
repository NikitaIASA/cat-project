import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '../core/api';
import { GetFavoriteDto } from './dto/getFavourite.dto';

interface GetFavoriteParams {
    page: number;
}

const getFavorite = async ({ page }: GetFavoriteParams) => {
    const { data } = await api.get<GetFavoriteDto>(
        'https://api.thecatapi.com/v1/favourites',
        {
            params: {
                sub_id: 'mytestkey',
                limit: 10,
                page,
            },
        }
    );

    return data;
};

export const useFavoriteData = () => {
    const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =
        useInfiniteQuery(
            [getFavorite],
            ({ pageParam }) => getFavorite({ page: pageParam }),
            {
                getNextPageParam: (lastpage, pages) => pages.length,
            }
        );

    return { data, isLoading, isError, fetchNextPage, isFetchingNextPage };
};