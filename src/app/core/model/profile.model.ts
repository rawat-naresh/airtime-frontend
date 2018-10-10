import { Tweet } from "./tweet.model";

export interface Profile {
    firstname: string,
    lastname: string,
    username: string,
    bio: string,
    birthday: Date,
    contact: string,
    relationship: string,
    profile: string,
    wall: string,
    followersCount: number,
    followingCount: number,
    tweets: Tweet,
    isFollowing:boolean,
    country:string,
    createdAt: Date,
}