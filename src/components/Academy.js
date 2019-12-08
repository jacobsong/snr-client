import React from 'react';
import { Grid, Image, Reveal, Message, Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';

export default class Academy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      academyData: null
    }
  }

  async componentDidMount() {
    let academyData;
    try {
      academyData = await axios.get("/api/tutors");
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }

    this.setState({
      ...this.state, 
        isLoading: false,
        academyData: academyData.data
      
    });
  }

  render() {
    const { academyData } = this.state;
    const parseCharName = (charName) => {
      if (charName === "shizue") return "isabelle";
      if (charName === "gaogaen") return "incineroar";
      if (charName === "packun_flower") return "piranha plant";
      if (charName === "dq_hero") return "hero";
      return charName.replace(/_/g, " ").replace("and", "&");
    }

    return (
      <React.Fragment>
        {this.state.isLoading &&
          <Dimmer active>
            <Loader />
          </Dimmer>
        }

        <Grid stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={16}>
              <h3>What is the SnR Academy?</h3>
              <p>
                SnR Academy is SnR's take on the 'Path to Pro' series.
                SnR Academy consists of four roles, which plays a key part in allowing the students to improve at their gameplay.
                Tutors help students through characters specific or fundamentally centric coaching through the use of VOD reviews and live feedback.
                Lecturers hold seminars talking about their character, in a classroom setting: whilst answering any questions about how to play or play against their character.
                Professors exist to maintain the quality of coaching through carrying out re evaluations and scheduling seminars.
                The headmaster (Cryme) oversees the academy, while adding resources that the academy could use through the lab team.
              </p>
              <p style={{ fontStyle: 'italic' }}>
                Hover over each character below to find a tutor
              </p>
            </Grid.Column>
          </Grid.Row>
          {
            academyData &&
            academyData.map(function (character) {
              const key = parseCharName(character.charName);
              let tutors = `@${character.tutors.shift()}`;
              character.tutors.forEach(tutor => {
                tutors = tutors.concat(`, @${tutor}`);
              });
              
              return (
                <Grid.Column width={4} key={key}>
                  <Reveal animated='move'>
                    <Reveal.Content visible>
                      <div className="fighter-name">{key}</div>
                      <div className="fighter-item"><Image src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_h/${character.charName}.png`} fluid /></div>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                      <div className="tutor-item"><p className='tutor-name'>{tutors}</p></div>
                    </Reveal.Content>
                  </Reveal>
                </Grid.Column>
              )
            })
          }
          <Grid.Row>
            <Grid.Column width={16}>
              <Message
                info
                icon='gamepad'
                header='Want to become a tutor for SnR?'
                content='Contact a staff member to play a best of 5 with the character you want to tutor, then answer questions to show your knowledge of your character.'
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Message
                attached
                header='Seminars'
                content='SnR seminars are headed by a lecturer from SnR Academy. Seminars cover but are not limited to, character matchups, playstyles, 
                how to play or play against certain characters. Students can ask questions during the seminar to further their knowledge of Smash Ultimate to improve their game.'
              />
              <iframe className="calendar-desktop" title="Seminar Calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%2300acc1&amp;ctz=America%2FNew_York&amp;src=MnJpYjVpOTZ0NG5vdmJvcGcxNWFzNGoyZTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%233F51B5&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1&amp;showDate=0" width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
              <iframe className="calendar-mobile" title="Seminar Calendar Mobile" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%2300acc1&amp;ctz=America%2FNew_York&amp;src=MnJpYjVpOTZ0NG5vdmJvcGcxNWFzNGoyZTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%233F51B5&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1&amp;showDate=0" width="100%" height="400" frameBorder="0" scrolling="no"></iframe>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}