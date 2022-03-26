export declare namespace Api {
    interface TodoItem {
        id: string;
        title: string;
        description: string;
        type: string;
        done: boolean;
        createdAt: Date;
    }

    interface CategoryItem {
        id: string;
        name: string;
        color: string;
        typeId: string;
    }
}