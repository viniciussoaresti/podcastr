import { createContext } from 'react';

interface Episode {
    title: string;
    members: string;
    thumbnail: string;
    duration: string;
    url: string;
};

interface PlayerContextData {
    episodeList: Array<Episode>;
    currentEpisodeIndex: number;
};

export const PlayerContext = createContext({} as PlayerContextData);