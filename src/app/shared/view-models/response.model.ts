// Generic Response Type.
export interface ResponseModel<T> {
    code: number;
    data: T;
}