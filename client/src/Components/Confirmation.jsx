import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';



import Avatar from '@material-ui/core/Avatar';

import Grid from '@material-ui/core/Grid';
import '../style/App.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';



class Confirmation extends Component {
    constructor(props) {
      super();
      this.state = {
        value: props.value,
     
      };
    }
  
  
    // handleCancel = () => {
    //     console.log('hiiiii',this.props)
    //     this.props.onClose(this.state.value);
    //       };
    
    // handleClose = value => {
    //     console.log('value', value)
    //     this.setState({ value, open: false });
    //   };
  
    // handleOk = () => {
    //     console.log('what is it',this.state.value)
    //   this.props.onClose(this.state.value);
    // };
  
    render() {
      const { value, ...other } = this.props;

  
      return (
        <Dialog
          maxWidth="xs"
          {...other}
      
        >
          <DialogTitle id="confirmation-dialog-title">Arabic Bank</DialogTitle>
          <DialogContent>
            <Grid container justify="center" alignItems="center">
              <Avatar style={{ width: '100px', height: '100px', backgroundColor: '#CE93D8' }}>H105</Avatar>
            </Grid>
            <span style={{ marginTop: '50px' }}>Estimated time: 1 hour</span>
          </DialogContent>
  
          <DialogActions>
            <Button onClick={this.props.cancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleOk} color="primary">
              Ok
            </Button>
            <Button onClick={this.handleOk} color="primary">
              Delay
            </Button>
          </DialogActions>
        </Dialog>
      );
    }
  }
  

  Confirmation.propTypes = {
    onClose: PropTypes.func,
    value: PropTypes.string,
  };

  export default Confirmation;