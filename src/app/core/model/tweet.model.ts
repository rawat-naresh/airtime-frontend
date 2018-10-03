export interface Tweet {
        firstname:string,
        lastname:string,
        username;string,
        tweet:{
                _id:string,
                body:string,
                likesCount:number,
                reTweetsCount:number,
                commentsCount:number,
                attachments:string[],
                isLiked: boolean,
                isRetweeted:boolean,
                createdAt:Date
        }
    
}