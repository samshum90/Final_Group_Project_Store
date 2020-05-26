import React from 'react'
import { Feed, Segment, Rating } from 'semantic-ui-react'

const FeedContainer = () => (
  <Segment>
    <Feed>
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>Elliot Fu</Feed.User> Reviewed this 3 stars
            <Feed.Date>1 Hour Ago</Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
            <Rating 
									className='rating'
									icon="star" 
									defaultRating={3} 
									maxRating={5} 
								/> 
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>


      <Feed.Event>
        <Feed.Content>
          <Feed.Summary
            date='2 Days Ago'
            user='Jenny Hess'
            content='Reviewed this 2 stars'
          />
          <Feed.Meta>
            <Feed.Like>
            <Rating 
									className='rating'
									icon="star" 
									defaultRating={2} 
									maxRating={5} 
								/>
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
          <Feed.User>Joe Henderson</Feed.User> Posted a Review
            <Feed.Date>3 days ago</Feed.Date>
          </Feed.Summary>
          <Feed.Like>
            <Rating 
									className='rating'
									icon="star" 
									defaultRating={5} 
									maxRating={5} 
								/>
            </Feed.Like>
          <Feed.Extra text>
            Ours is a life of constant reruns. We're always circling back to where
            we'd we started, then starting all over again. Even if we don't run
            extra laps that day, we surely will come back for more of the same
            another day soon.
          </Feed.Extra>
          <Feed.Meta>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  </Segment>
)

export default FeedContainer;