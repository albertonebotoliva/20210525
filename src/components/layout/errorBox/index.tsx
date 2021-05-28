import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    error: {
        background: "white",
        color: "red",
        height: "100vh",
        textAlign: "center"
    }
});

type Props = {
    error: { message: string }
};

function ErrorBox({ error }: Props) {
    const classes = useStyles();

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} className={classes.error} >
                <p>Something went wrong:</p>
                <pre>{error.message}</pre>
            </Grid>
        </Grid>
    )
}

export default ErrorBox;
