import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function MostWanted() {
  return (
    <React.Fragment>
      <Grid stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src='./img/smw/smw.png' fluid />
          </Grid.Column>
          <Grid.Column width={12}>
            <h2>Smash's Most Wanted</h2>
            <p>
              Smash's Most Wanted is a Nintendo based server mainly revolving around smash,
              but not a smash only server. We hold smash tourneys and events, game nights, and
              have coaches and matchmaking for other games! SMW is a friendly environment, with
              multiple live streams every week, a youtube channel, twitch and do many things
              involving viewers so that everyone can get their 15 minutes of fame! Come join us
              at SMW for a fun time with a good crowd or people that want to improve on their gameplay,
              or maybe just chat! Hope to see you there!
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>
            <a href="https://discordapp.com/invite/hwCR3Yg" target='__blank'>
              <Image src='./img/smw/discord.png' size='small' centered />
            </a>
          </Grid.Column>
          <Grid.Column width={6}>
            <a href="https://www.twitch.tv/SMW_DudeNificent" target='__blank'>
              <Image src='./img/smw/twitch.png' size='small' centered />
            </a>
          </Grid.Column>
          <Grid.Column width={5}>
            <a href="https://twitter.com/SmashMostWanted" target='__blank'>
              <Image src='./img/smw/twitter.png' size='small' centered />
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  )
}