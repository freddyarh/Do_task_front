import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { useModalEntry } from '../../hooks/useModalEntry';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ mb: 3, p: 0 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ loadDataEntries }) {

  const {
    open,
    handleSaveEntries,
    handleFileChange ,
    handleInputChange,
    handleClickOpen,
    handleClose
  } = useModalEntry(loadDataEntries);

  return (
    <div>
      <div variant="outlined" onClick={handleClickOpen}>
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-1">
            New entry
        </p>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open} 
      >
        <DialogContent>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <TextField
              margin="none"
              id="title"
              name="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              onChange={ handleInputChange }
            />
        </BootstrapDialogTitle>
          <TextField
            id="outlined-multiline-static"
            name="description"
            fullWidth
            label="How was your day?"
            multiline
            rows={4}
            placeholder="Add some text"
            onChange={ handleInputChange }
          />
        </DialogContent>
        <DialogContent>
          <Typography component="legend">Did you enjoy?</Typography>
          <Rating
            id="rating"
            name="rating"
            precision={0.5}
            onChange={ handleInputChange }
          />
        </DialogContent>
        <DialogContent dividers>
          <input 
            type="file"
            name="image"
            id="image"
            onChange={ handleFileChange }
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSaveEntries}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}