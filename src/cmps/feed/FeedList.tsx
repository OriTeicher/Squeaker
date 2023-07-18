import React from 'react'
import FeedPreview from './FeedPreview'
import { FeedListProps } from '../../services/interface.service'

const FeedList: React.FC<FeedListProps> = ({
    feedPosts,
    handleIconClicked,
    isPostLoading,
    filterBy,
    onAddComment
}) => {
    const onIconClicked = (action: {
        type: string
        postId: string
        isStatIncrease: boolean
    }) => {
        handleIconClicked(action)
    }

    const handleAddComment = (
        post: string,
        file: File | null,
        gifUrl: string,
        postId: string
    ) => {
        onAddComment(post, file, gifUrl, postId)
    }

    return (
        <section className="posts-list">
            {feedPosts.map((post, idx) => (
                <FeedPreview
                    filterBy={filterBy}
                    key={idx}
                    id={post.id}
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
                    isPostLoading={isPostLoading}
                    onAddComment={handleAddComment}
                    handleIconClicked={(action: {
                        type: string
                        postId: string
                        stat: string
                        isStatIncrease: boolean
                    }) => onIconClicked(action)}
                />
            ))}
        </section>
    )
}

export default FeedList
