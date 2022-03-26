export interface TodoItem {
    id: string;
    title: string;
    description: string;
    type: string;
    done: boolean;
    createdAt: Date;
}
export interface CategoryItem {
    id: string;
    name: string;
    color: string;
    typeId: string;
}
