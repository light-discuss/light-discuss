import { setTimeout } from 'timers';

export type ResponseComment = {
    id: string,
    originCommentId: string|null,
    articleId: string,
    userId: string|null,
    anonymousName: string|null,
    username: string|null,
    content: string,
    likeCount: number,
    createdAt: number,
    isReplyComment: boolean,
    floor: number|null,
    replyComments?: ResponseComment[]
};

export function fetchCommentList() {
    return new Promise<ResponseComment[]>((resolve, reject) => {
        const data = [
            {
                id: '1',
                originCommentId: null,
                articleId: '1',
                userId: null,
                anonymousName: 'Konie Shadow',
                username: null,
                content: '今晚打老虎',
                likeCount: 0,
                createdAt: 1513221050355,
                isReplyComment: false,
                floor: 1,
                replyComments: [
                    {
                        id: '2',
                        originCommentId: '1',
                        articleId: '1',
                        userId: null,
                        anonymousName: '浩子',
                        username: null,
                        content: '逃避虽可耻但是有用',
                        likeCount: 0,
                        createdAt: 1513221050355,
                        isReplyComment: true,
                        floor: null
                    }
                ]
            }
        ];

        setTimeout(() => resolve(data), 1000);
    });
}
