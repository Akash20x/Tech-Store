import React from 'react'

import { Grid, Chip } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom';

export default function CategoryItem({ title, Icon }) {

  return (
    <Grid item component={Link} to={`/chip/${title}`} style={{textDecoration:'none'}}>
      <Chip
        icon={<Icon />}
        label={title}
        clickable
        color={'secondary'}
        variant={'default'}
        style={{ border: 'none'}}
      ></Chip>
    </Grid>
  )
}