export interface Tweet {
    
        _id:string,
        body:string,
        likesCount:number,
        reTweetsCount:number,
        commentsCount:number,
        attachments:string[],
        isLiked: boolean,
        createdAt:Date
    
}