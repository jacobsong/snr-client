import React from 'react';
import { Grid, Image, List, Icon } from 'semantic-ui-react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import WidgetBot from '@widgetbot/react-embed';
import axios from 'axios';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      memberCount: 6200
    }
  }

  async componentDidMount() {
    let memberCount;
    try {
      memberCount = await axios.get("/api/membercount");
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }

    this.setState({
      ...this.state, 
        isLoading: false,
        memberCount: memberCount.data
      
    });
  }

  render() {
    return (
      <React.Fragment>
        <Grid stackable verticalAlign='middle' className='homepage-rows'>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image src='./img/snr.png' fluid />
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={9}>
              <h3>Welcome to Smashin' n Relaxin'</h3>
              <p>
                Looking for a global smash community to make new friends and grow as a player?<br />
                Look no further than because Smashin' n Relaxin' is the place for you!
              </p>
              <p>
                What SnR offers:
                <List>
                  <List.Item icon='minus' content='The largest and most diverse Smash community on all of discord!' />
                  <List.Item icon='minus' content={`${this.state.memberCount} members`} />
                  <List.Item icon='minus' content='A fun friendly community welcoming all people!' />
                  <List.Item icon='minus' content='Pro Players are here as well!' />
                  <List.Item icon='minus' content='Tutors for Smash Ultimate and schoolwork!' />
                  <List.Item icon='minus' content='Smash Tournaments that are free to enter with prize pools!' />
                  <List.Item icon='minus' content='An academy dedicated to improving your smash skills!' />
                  <List.Item icon='minus' content='Crew battles against other servers!' />
                  <List.Item icon='minus' content='And many more!' />
                </List>
              </p>
              <p>Come join Smashin' n Relaxin!<a href="https://discord.gg/nFAyxNH" target='__blank'><Icon name='discord' size='large' /></a></p>
              <p>We can't wait to have you aboard!</p>
            </Grid.Column>
          </Grid.Row>

          {/* <Grid.Row>
            <Grid.Column width={10}>
              <h3>Partners & Sponsors</h3>
              <p style={{ fontStyle: 'italic' }}>Insert some cool words here...</p>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' fluid />
            </Grid.Column>
            <Grid.Column width={6}>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' fluid />
            </Grid.Column>
          </Grid.Row> */}

          <Grid.Row>
            <Grid.Column width={8}>
              <TwitterTimelineEmbed
                sourceType='profile'
                screenName='nrelaxin'
                noFooter={true}
                noScrollbar={true}
                noBorders={true}
                transparent={true}
                options={{ height: 400, width: '100%' }}

              />
            </Grid.Column>
            <Grid.Column width={8}>
              <WidgetBot
                server="505051511525736470"
                channel="505053310554734593"
                // shard='https://disweb.deploys.io'
                shard='https://disweb.dashflo.net'
                // shard='https://e.widgetbot.io'
                height={400}
                width='100%'
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={8}>
              <iframe title='SnR YouTube' src="https://www.youtube.com/embed/+lastest?list=UU7bmwg-pSgFPXWY10up_VDA" height="378" width="100%" frameBorder="0" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </Grid.Column>
            <Grid.Column width={8}>
              <iframe title='SnR Twitch' src="https://player.twitch.tv/?channel=smashin_n_relaxin" height="378" width="100%" frameBorder="0" allowFullScreen={true} scrolling="no"></iframe>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </React.Fragment >
    )
  }
}