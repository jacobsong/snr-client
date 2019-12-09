import React from 'react';

export default class Events extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h3>Community Events</h3>
        <iframe className="calendar-desktop" title="SnR Calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%2300acc1&amp;ctz=America%2FNew_York&amp;src=aDN0a2c2dG5taTFhN2dqa2VlNGUzMTkzdnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%233F51B5&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1&amp;showDate=1" width="100%" height="800" frameBorder="0" scrolling="no"></iframe>
        <iframe className="calendar-mobile" title="SnR Calendar Mobile" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%2300acc1&amp;ctz=America%2FNew_York&amp;src=aDN0a2c2dG5taTFhN2dqa2VlNGUzMTkzdnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%233F51B5&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1&amp;showDate=0" width="100%" height="500" frameBorder="0" scrolling="no"></iframe>
      </React.Fragment>
    )
  }
}