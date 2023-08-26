export type getVoteDashboardDto = VoteDashboard[];

 interface VoteDashboard {
    id: number;
    user_id?: string;
    image_id: string;
    sub_id?: string;
    created_at: string;
    country_code?: string;
    value?: number;
    image: Image;
}

interface Image {
    id?: string;
    url?: string;
}