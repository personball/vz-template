export interface IQueryListEto<T> {
    queryForm: any,
    skipCount: number,
    maxResultCount: number,
    updateList: (items: T[], totalCount: number) => void
}
export type QueryListHander<T> = (event: IQueryListEto<T>) => void;