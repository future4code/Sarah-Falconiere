import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from '../../constants/urls'
import { FeedPageContainer, StyledCardToPost, StyledCard, StyledTextField } from './styled'
import { CardActions, CardContent, Button, Typography, TextField, Card } from "@material-ui/core";
import { goToPostDetails } from "../../routes/coordinator";
import { useHistory } from "react-router";


export const FeedPage = () => {
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    console.log(posts)
    useProtectedPage()

    const onClickCard = (id) => {
        goToPostDetails(history, id)
    }

    const renderPostsList = posts.map((post) => {
        return (
            <StyledCard key={post.id}>
                <div>
                    <Typography variant='h8'>{post.username}</Typography>
                </div>
                <CardContent onClick={() => onClickCard(post.id)} >
                    <Typography variant='h6' >
                        {post.title}
                    </Typography>
                    <Typography variant="body2">
                        {post.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <div>
                        {post.voteSum}
                    </div>
                    <div>
                        {post.commentCount}
                    </div>
                </CardActions>
            </StyledCard>
        )
    })

    return (
        <FeedPageContainer>
            <StyledCardToPost>
                <CardContent>
                    <StyledTextField placeholder='Escreva seu post' variant='outlined'></StyledTextField>
                </CardContent>
                <CardActions>
                    <Button>Postar</Button>
                </CardActions>
            </StyledCardToPost>
            {renderPostsList}
        </FeedPageContainer>
    )
}