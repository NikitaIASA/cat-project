import { useQuery } from '@tanstack/react-query';
import { api } from '../core/api';
import { getCatDto } from "./dto/getCats.dto";

interface getGalleryParams {
    breed: string,
    limit: number,
    sorting: string;
    type: string;
    page: number,
}

const getGallery = async ({ breed, limit, sorting, type, page }: getGalleryParams) => {
    const { data } = await api.get<getCatDto>('https://api.thecatapi.com/v1/images/search', {
        params: {
            breed_ids: breed,
            limit: limit,
            order: sorting,
            mime_types: type,
            page: page,
        },
    });

    return data;
};

export const useGalleryData = ({ breed, limit, sorting, type, page }: getGalleryParams) => {
    const { data, isLoading, isError } = useQuery(
        ['getGallery', breed, limit, sorting, type, page],
        () => getGallery({ breed, limit, sorting, type, page })
    );

    return { data, isLoading, isError };
};
