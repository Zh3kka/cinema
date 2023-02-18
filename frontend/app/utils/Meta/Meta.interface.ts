import { ChildrenProp } from '@/shared/types/children.type';
export interface ISeo extends ChildrenProp {
    title: string
    description?: string
    image?: string

}