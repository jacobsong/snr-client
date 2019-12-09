import React from 'react';
import { Segment, Divider, Header, Card, Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';

export default class Staff extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      owners: null,
      coOwners: null,
      admins: null,
      mods: null
    }
    this.createCard = this.createCard.bind(this);
  }

  async componentDidMount() {
    let owners, coOwners, admins, mods;
    try {
      owners = await axios.get("/api/staff/4");
      coOwners = await axios.get("/api/staff/3");
      admins = await axios.get("/api/staff/2");
      mods = await axios.get("/api/staff/1");
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }

    this.setState({
      ...this.state, 
        isLoading: false,
        owners: owners.data,
        coOwners: coOwners.data,
        admins: admins.data,
        mods: mods.data
    });
  }

  createCard(roleArr) {
    const roles = { 1: "Mod", 2: "Admin", 3: "Co Owner", 4: "Owner" };
    const rtnVal = [];
    if (roleArr != null) {
      roleArr.forEach(item => {
        rtnVal.push({
          image: item.discordAvatar,
          header: item.discordName,
          extra: roles[item.roleCd],
          raised: true
        });
      });
    }
    return rtnVal;
  }

  render () {
    const { owners, coOwners, admins, mods } = this.state;
    const ownersCards = this.createCard(owners);
    const coOwnersCards = this.createCard(coOwners);
    const adminsCards = this.createCard(admins);
    const modsCards = this.createCard(mods);
   
    return (
      <React.Fragment>
        {this.state.isLoading &&
          <Dimmer active>
            <Loader />
          </Dimmer>
        }

        <Divider horizontal section className='owners-divider'>
          <Header as='h4'>
            Owner
          </Header>
        </Divider>
        <Segment basic textAlign='center' padded='very'>
          <Card.Group centered items={ownersCards} stackable itemsPerRow={4} />
        </Segment>

        <Divider horizontal section>
          <Header as='h4'>
            Co-Owners
          </Header>
        </Divider>
        <Segment basic textAlign='center' padded='very'>
          <Card.Group centered items={coOwnersCards} stackable itemsPerRow={4} />
        </Segment>

        <Divider horizontal section>
          <Header as='h4'>
            Admins
          </Header>
        </Divider>
        <Segment basic textAlign='center' padded='very'>
          <Card.Group centered items={adminsCards} stackable itemsPerRow={4} />
        </Segment>

        <Divider horizontal section>
          <Header as='h4'>
            Mods
          </Header>
        </Divider>
        <Segment basic textAlign='center' padded='very'>
          <Card.Group centered items={modsCards} stackable itemsPerRow={4} />
        </Segment>
      </React.Fragment>
    );
  }
}