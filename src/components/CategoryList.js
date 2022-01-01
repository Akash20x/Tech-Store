import React from 'react'
import {
  DesktopWindows,
  Tablet,
  PhoneAndroid,
  Watch,
  Tv,
  Headset,
  DevicesOther,
} from '@material-ui/icons'
import { Grid } from '@material-ui/core'
import CategoryItem from './CategoryItem';
import { Box } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const CATEGORIES = [
  {
    title: 'Computer',
    Icon: DesktopWindows,
  },
  {
    title: 'Tablet',
    Icon: Tablet,
  },
  {
    title: 'Phone',
    Icon: PhoneAndroid,
  },
  {
    title: 'Watch',
    Icon: Watch,
  },
  {
    title: 'TV',
    Icon: Tv,
  },
  {
    title: 'Music',
    Icon: Headset,
  },
  {
    title: 'Other',
    Icon: DevicesOther,
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export default function CategoryList() {
  const classes = useStyles()

  return (
    <main className= {classes.content}>
    <Grid container justify="space-evenly" spacing={4} className={classes.root}>
      {CATEGORIES.map((category) => (
        <CategoryItem key={category.title} {...category}></CategoryItem>
      ))}
    </Grid>
    </main>
  )
}