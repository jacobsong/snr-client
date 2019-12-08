import React from 'react';
import { Accordion, Table, Label } from 'semantic-ui-react';
import LabData from './LabData';

export default function Lab() {
  const panels = createPanels(LabData);

  return (
    <React.Fragment>
      <Accordion panels={panels} defaultActiveIndex={0} />
    </React.Fragment>
  )
}

function createPanels(characters) {
  const panels = [];

  characters.forEach(function (char) {
    panels.push(
      {
        key: char.key,
        title: { content: (<Label ribbon image color='blue'><img src={`./img/lab/${char.key}.png`} alt='' />{char.title}</Label>) },
        content: {
          content: (
            <Table celled unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Resource Name</Table.HeaderCell>
                  <Table.HeaderCell>Link</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {
                  char.content.map(function (data, index) {
                    return (
                      <Table.Row key={index}>
                        <Table.Cell><Label tag color='green'>{data.resourceName}</Label></Table.Cell>
                        <Table.Cell>
                          <a href={data.link} target='__blank'>
                            <Label pointing='left' color='blue'>View Data</Label>
                          </a>
                        </Table.Cell>
                      </Table.Row>
                    )
                  })}
              </Table.Body>
            </Table>
          ),
        },
      }
    )
  });

  return panels;
}