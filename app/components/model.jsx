import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  paper: {
    padding: '0 20px',
    width: '80%',
    height: 300,
    margin: '20px auto'
  }
};

class Model extends Component {
  render() {
    return (
      <Paper style={styles.paper} zDepth={2} >
        <TextField
          hintText="Placeholder here"
          floatingLabelText="Floating Label Text"
        />
        <RaisedButton label="Add" secondary={true} />
      </Paper>
    );
  }
}

export default Model;
