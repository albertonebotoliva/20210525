import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ErrorBoundary } from 'react-error-boundary'
import ErrorBox from '../layout/errorBox'
import { reducer, initialState } from '../../store/reducer';

const useStyles = makeStyles({

});

type Error = {
    error: { message: string }
}

function ErrorFallback(props: Error) { return <ErrorBox {...props} /> }

function View() {
    const classes = useStyles();
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => { }}
        >
            <Grid container spacing={0}>
                <Grid item xs={12} >
                    HELLO
                </Grid>
            </Grid>
        </ErrorBoundary>
    )
}

export default View;
