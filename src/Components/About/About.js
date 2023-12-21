import React from 'react'
import { Tab } from '../Tab/Tab'
import { Pink } from '../Pink/Pink'
import { Card } from '../Card/Card'
import { Grid } from '@mui/material'
export const About = () => {
    return (
        <>
            <Tab />
            <Grid sx=
                {{
                    width: "92%",
                    margin: "auto",
                    paddingTop: "3rem",
                    '@media (max-width: 380px)': {
                        width: '100%',
                      },
                }}>
                <Pink />
            </Grid>


        </>
    )
}
