import { getGenreUrl } from '@/config/url.config';
import { IMenuItem } from './../menu.interface';
import { GenreService } from "@/services/genre.service"
import { useQuery } from "react-query"

export const usePopularGenres = () => {
    const queryData = useQuery('Popular Genres Menu', () => GenreService.getAll(), {
        select: ({ data }) => data.map(genre => ({
            icon: genre.icon,
            link: getGenreUrl(genre.slug),
            title: genre.name
        } as IMenuItem)).splice(0, 4)
    })


    return queryData
}