export interface Comment {
    firstname:string,
    lastname: string,
    username:string,
    profile :string,
    comment:{
        body:string,
        likesCount:number,
        repliesCount:number,
        hasReplies:boolean,
    },
}