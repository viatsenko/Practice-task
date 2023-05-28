export type AuthState = {
    showError: boolean;
    isUserLoggedIn: boolean;
};
export type LikesState = Record<string, {
    name: string;
    networkId: string;
}>;
export type BikesState = {
    networks: Array<NetworkType>;
    networkPage: Array<NetworkType>;
    stationPage: Array<StationType>;
    stations: Array<StationType>;
    networkName: string | null;
    networkId: string | null;
};
export type NetworkType = {
    id: string;
    name: string;
    location: {
        city: string;
    };
    company: Array<string>;
};
export type StationType = {
    id: string;
    name: string;
    free_bikes: number;
};
export type Store = {
    bikes: BikesState;
    favourite: LikesState;
    auth: AuthState;
};
