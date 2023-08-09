import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import FeedContentPreview from './FeedContentPreview'
import Loader from '../utils/Loader'
import { FeedPost } from '../../services/interface.service'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import FeedPreviewIcons from './FeedPreviewIcons'
import { constsService } from '../../services/consts.service'
import { eventBus } from '../../services/event.bus.service'

export const FeedPreview: React.FC<FeedPost> = (props: FeedPost) => {
    const { isPostLoading } = useSelector((state: RootState) => {
        return state.loader
    })

    // TODO: handle icon click function - switch function
    const handleIconClick = (selectedIcon: string) => {
        switch (selectedIcon) {
            case constsService.LIKES_FIELD:
                break
            case constsService.COMMENTS_FIELD:
                handleSelectedSqueak(props.id)
                break
        }
    }

    const handlePostClick = (event: React.MouseEvent) => {
        const clickedElement = event.target as HTMLElement
        if (clickedElement.classList.contains('post-photo') || true) return
        handleSelectedSqueak(props.id)
    }

    const handleSelectedSqueak = (selectedId: string) => {
        eventBus.emitEvent('setSelectedSqueakId', selectedId)
    }

    return (
        <>
            <section className="post-preview" onClick={handlePostClick}>
                {isPostLoading ? (
                    <Loader />
                ) : (
                    <div className="top-preview">
                        <Avatar src={props.owner?.profileImgUrl} className="user-avatar" />
                        <FeedContentPreview
                            id={props.id}
                            displayName={props.owner.displayName}
                            username={props.owner.username}
                            verified={props.owner.isVerified}
                            createdAt={props.createdAt}
                            content={props.content}
                            imgUrl={props.imgUrl}
                        />
                    </div>
                )}
                <FeedPreviewIcons
                    likesNum={props.likes}
                    commentsNum={props.comments.length}
                    resqueaksNum={props.resqueaks}
                    onIconClick={handleIconClick}
                />
            </section>
        </>
    )
}
