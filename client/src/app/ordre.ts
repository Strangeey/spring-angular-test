export class Ordre {
    id:number;
    reference : String;
    date : String;
    articles: [{
        id: string;
        name: string;
        price : number;
        picture : String;
      }]
}
