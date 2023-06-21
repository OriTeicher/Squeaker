import React from 'react'
import FeedPreview from './FeedPreview'

interface FeedListProps {
    feedPosts: FeedPost[]
    handleIconClicked: Function
}

interface FeedPost {
    displayName: string
    username: string
    txt: string
    imgUrl?: string
    avatar: {
        bgColor: string
        imgUrl?: string
    }
    verified: boolean
    createdAt: string
    likes: number
    comments: object[]
    resqueaks: number
}

const FeedList: React.FC<FeedListProps> = ({
    feedPosts,
    handleIconClicked
}) => {
    return (
        <section className="posts-list">
            {feedPosts.map((post, idx) => (
                <FeedPreview
                    key={idx}
                    // id={post.id}
                    displayName={post.displayName}
                    username={post.username}
                    txt={post.txt}
                    imgUrl={post.imgUrl}
                    avatar={post.avatar}
                    verified={post.verified}
                    createdAt={post.createdAt}
                    likes={post.likes}
                    comments={post.comments}
                    resqueaks={post.resqueaks}
                    handleIconClicked={handleIconClicked}
                />
            ))}
        </section>
    )
}

export default FeedList
