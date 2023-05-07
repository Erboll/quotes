export interface QuoteType {
    author:string;
    category:string;
    text:string;
    id:string;
}
export type QuoteWithoutId = Omit <QuoteType, "id">;  

export interface QuoteApi {
    [id:string]:Quote
}

export interface QuoteLink {
    title:string;
    id:string;
}