import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const TextInput = () => {
    const classes = useStyles();
    
    return (
        <InputBase
          id="standard-full-width"
          placeholder="Start typing your sh*t here"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
            
          }}
          className={classes.input}
          variant="outlined"
        />
    );
};

const useStyles = makeStyles((theme) => ({
  input: {
      color: 'white', 
      border: '2px solid',
      borderColor: '#45A29E',
      borderRadius: '10px',
      padding: '15px',
      margin: 8,
      fontWeight: 'bold'
  }
}));

export default TextInput;