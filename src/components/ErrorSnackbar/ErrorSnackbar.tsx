import React from 'react';
import {Snackbar} from '@material-ui/core';

interface ErrorSnackbarProps {
    open: boolean;
    message: string;
}

export const ErrorSnackbar: React.FC<ErrorSnackbarProps> = ({open, message}) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={open}
            message={message}
        />
    );
};
