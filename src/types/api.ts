export declare namespace ExpressApi {
    interface TodoItem {
        title: string;
        description: string;
        type: string;
        done: boolean;
        createdAt: Date;
    }

    interface CategoryItem {
        name: string;
        color: string;
        typeId: string;
    }
}