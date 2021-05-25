import React, { useReducer } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ErrorBoundary } from 'react-error-boundary'
import ErrorBox from '../layout/errorBox'
import { reducer, initialState } from '../../stores';

const useStyles = makeStyles({

});

const ErrorFallback = props => <ErrorBox {...props} />

const View = () => {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => { }}
        >
            <Grid container spacing={0}>
                <Grid item xs={12} >

                </Grid>
            </Grid>
        </ErrorBoundary>
    )
}

View.propTypes = {}

View.defaultProps = {}

export default View;
