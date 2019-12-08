import React, { Component } from 'react';
import { Container, Icon, Image, Menu, Sidebar } from 'semantic-ui-react';
import Home from './components/Home';
import Lab from './components/Lab';
import Academy from './components/Academy';
import Events from './components/Events';
import Guides from './components/Guides';
import MostWanted from './components/MostWanted';
import Footer from './components/Footer';
import Staff from './components/Staff';
import Partners from './components/Partners';
import './App.css';

export default class App extends Component {
  state = {
    sidebarVisible: false,
    home: true,
    lab: false,
    academy: false,
    events: false,
    guides: false,
    mostWanted: false,
    staff: false,
    partners: false
  };

  toggleSidebar = (e) => {
    this.setState({ sidebarVisible: !this.state.sidebarVisible });
  }

  handleMenuClick = (e, { name }) => {
    this.setState({ sidebarVisible: false });
    this.setState({
      home: false, lab: false, academy: false, events: false, guides: false, mostWanted: false,
      staff: false, partners: false
    });
    this.setState({ [name]: true });
  }

  render() {
    const menuItems = [
      { key: 'home', name: 'home', content: 'Home', icon: 'home', href: '#', active: this.state.home },
      { key: 'lab', name: 'lab', content: 'Lab Results', icon: 'lab', href: '#' },
      { key: 'guides', name: 'guides', content: 'Guides', icon: 'book', href: '#' },
      { key: 'events', name: 'events', content: 'Event Calendar', icon: 'calendar check outline', href: '#' },
      { key: 'academy', name: 'academy', content: 'SnR Academy', icon: 'pencil', href: '#' },
      { key: 'mostwanted', name: "mostWanted", content: "Smash's Most Wanted", icon: 'heart', href: '#' },
      { key: 'staff', name: "staff", content: "Meet The Staff", icon: 'group', href: '#' },
      { key: 'partners', name: "partners", content: "Partners", icon: 'handshake outline', href: '#' }
    ]

    return (
      <React.Fragment>
        <Menu fixed='top' items={menuItems} onItemClick={this.handleMenuClick} />
        <Sidebar.Pushable >
          <Sidebar
            animation='overlay'
            direction='top'
            visible={this.state.sidebarVisible}
            onHide={() => this.setState({ sidebarVisible: false })}
            width='thin'
          >
            <Menu items={menuItems} onItemClick={this.handleMenuClick} stackable fluid />
          </Sidebar>
          <div className='mobile-menu'>
            <button onClick={this.toggleSidebar}>
              <Icon name='sidebar' size='large' />
              <span className='mobile-title'>Smashin n Relaxin</span>
            </button>
          </div>
          <Sidebar.Pusher dimmed={this.state.sidebarVisible}>
            <Image src='./img/banner.jpg' className='banner' fluid />
            <Container className='App'>
              {this.state.home && <Home />}
              {this.state.lab && <Lab />}
              {this.state.academy && <Academy />}
              {this.state.events && <Events />}
              {this.state.guides && <Guides />}
              {this.state.mostWanted && <MostWanted />}
              {this.state.staff && <Staff />}
              {this.state.partners && <Partners />}
            </Container>
            <Footer />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </React.Fragment>
    )
  }
}
