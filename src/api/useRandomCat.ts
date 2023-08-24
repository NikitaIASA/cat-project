import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from '../core/api';
import { GetRandomCatDto } from './dto/getRandomCat.dto';

interface voteCatParams {
    imageId: string;
    value: number;
}

interface AddFavoriteParams {
    imageId: string;
}

export const getRandomCat = async () => {
    const { data } = await api.get<GetRandomCatDto>(
        'https://api.thecatapi.com/v1/images/search'
    );

    return data[0];
};



export const voteCat = async ({ imageId, value }: voteCatParams) => {
    await api.post('https://api.thecatapi.com/v1/votes', {
        image_id: imageId,
        sub_id: "mytestkey",
        value: value,
    })
}

const addFavorite = async ({ imageId }: AddFavoriteParams) => {
    await api.post(
        'https://api.thecatapi.com/v1/favourites',
        {
            image_id: imageId,
            sub_id: 'mytestkey',
        }
    );
};

export const useRandomCat = () => {
    const { data, isLoading, isError } = useQuery(['getRandomCat'], getRandomCat);

    return { data, isLoading, isError };
};

export const useVoteCat = () => {
    const voteMutation = useMutation(({ imageId, value }: voteCatParams) =>
        voteCat({ imageId, value })
    );

    return voteMutation;
};

export const useAddFavourite = () => {
    const addFavoriteMutation = useMutation(({ imageId }: AddFavoriteParams) =>
        addFavorite({ imageId })
    );

    return addFavoriteMutation;
};