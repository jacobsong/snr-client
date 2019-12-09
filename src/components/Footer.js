import React from 'react';
import { Segment, Grid, Image, Icon } from 'semantic-ui-react';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <Segment inverted vertical className='footer'>
        <Grid stackable inverted divided verticalAlign='middle'>
          <Grid.Column width={3} textAlign='center'>
            <Image src='./img/snr.png' size='mini' circular centered />
          </Grid.Column>
          <Grid.Column width={10} textAlign='center'>
            <p>Smashin' n Relaxin' &copy; 2019</p>
          </Grid.Column>
          <Grid.Column width={3} textAlign='center'>
            <a href="https://discord.gg/nFAyxNH" target='__blank'><Icon name='discord' size='large' /></a>
            <a href="https://twitter.com/NRelaxin" target='__blank'><Icon name='twitter' size='large' /></a>
            <a href="https://www.instagram.com/smashnrelax/" target='__blank'><Icon name='instagram' size='large' /></a>
            <a href="https://www.youtube.com/channel/UC7bmwg-pSgFPXWY10up_VDA" target='__blank'><Icon name='youtube' size='large' /></a>
            <a href="https://www.twitch.tv/smashin_n_relaxin" target='__blank'><Icon name='twitch' size='large' /></a>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}