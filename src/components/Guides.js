import React from 'react';
import { Grid, Image, Segment, Message } from 'semantic-ui-react';

export default class Guides extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Segment basic textAlign='center' className='guide-text'>
          <Message
            info
            header='Want to learn a character on your own?'
            content='These character guides were created by the SnR community!'
          />
        </Segment>
        <Grid columns={2} stackable>
          <Grid.Column textAlign='center'>
            <a href='https://docs.google.com/document/d/1XaUY3Bc6O6bAsbV2jCwvTpH5vHJ0hJLs928Hrva1ab0/edit?usp=drivesdk' target='__blank'>
              <div className='guide-content'><h1>Snake</h1></div>
            </a>
            <div className='guide-overlay'>
              <Image className='guide' src='./img/guides/snake.png' size='large' href='https://docs.google.com/document/d/1XaUY3Bc6O6bAsbV2jCwvTpH5vHJ0hJLs928Hrva1ab0/edit?usp=drivesdk' target='__blank' />
            </div>
          </Grid.Column>
          {/* <Grid.Column textAlign='center'>
            <a href='https://docs.google.com/document/d/1yuNAczLNXEXjUbhPdk3iJ8kcGC8vSow7jFzImg3PIAQ/edit?usp=sharing' target='__blank'>
              <div className='guide-content'><h1>Joker</h1></div>
            </a>
            <div className='guide-overlay'>
              <Image className='guide' src='./img/guides/joker.png' size='large' href='https://docs.google.com/document/d/1yuNAczLNXEXjUbhPdk3iJ8kcGC8vSow7jFzImg3PIAQ/edit?usp=sharing' target='__blank' />
            </div>
          </Grid.Column> */}
          <Grid.Column textAlign='center'>
            <a href='https://docs.google.com/document/d/1kOCovP0nAUT9PIOM4-Ve1T5A2uMKGbhKWXYrb2zc0GY/edit?usp=sharing' target='__blank'>
              <div className='guide-content'><h1>Captain Falcon</h1></div>
            </a>
            <div className='guide-overlay'>
              <Image className='guide' src='./img/guides/falcon.png' size='large' href='https://docs.google.com/document/d/1kOCovP0nAUT9PIOM4-Ve1T5A2uMKGbhKWXYrb2zc0GY/edit?usp=sharing' target='__blank' />
            </div>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <a href='https://docs.google.com/document/d/19l08NyaitlO5RN1iu3ehWsodYNFUe1tope-t348R05w/edit?usp=sharing' target='__blank'>
              <div className='guide-content'><h1>Isabelle</h1></div>
            </a>
            <div className='guide-overlay'>
              <Image className='guide' src='./img/guides/isabelle.png' size='large' href='https://docs.google.com/document/d/19l08NyaitlO5RN1iu3ehWsodYNFUe1tope-t348R05w/edit?usp=sharing' target='__blank' />
            </div>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}