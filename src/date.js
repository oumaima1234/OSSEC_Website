import React from 'react';
import { DatePicker } from 'material-ui-pickers';
import { Event } from 'material-ui-icons'
class KeyboardDatePicker extends React.Component {
  state = { date: Date.now() };

  handleDateChange = (date) => {
    this.setState({ date });
  };

  render() {
    return (
      <div>
        <DatePicker
          label='Some text...'
          value={this.state.date}
          onChange={this.handleDateChange}
          keyboard
        />
      </div>
    )
  }
}

export default KeyboardDatePicker;
