import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import PartnersData from './PartnersData';

export default class Partners extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Image src='./img/discord-logo.png' size='large' centered />
        <p className='partners-message'>Below you will find Discord servers of our partners</p>
        <Grid stackable verticalAlign='middle' className='partners-list'>
          <Grid.Row>
            {
              PartnersData.map(function (partner) {
                return (
                  <Grid.Column width={4} key={partner.name}>
                    <a href={`https://discord.gg/${partner.link}`} target='__blank' className='partner-item'>
                      <Image src={`./img/partners/${partner.icon}.png`} size='mini' verticalAlign='top' inline circular />
                      <span className='partner-title'>
                        <div className='partner-text'>
                          {partner.name}
                        </div>
                      </span>
                    </a>
                  </Grid.Column>
                )
              })
            }
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}