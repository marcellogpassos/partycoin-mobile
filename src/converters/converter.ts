export interface Converter<T> {

    from(object: T): any;
    
    to(dados: any, id?: any): T;

}