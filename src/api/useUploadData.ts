import { api } from '../core/api';

export const uploadImage = async (image: any) => {
    const formData = new FormData();
    formData.append("file", image.file);

    const response = await api.post("https://api.thecatapi.com/v1/images/upload", formData);

    if (response.status === 201) {
        return "success";
    } else {
        return "error";
    }
}