"use client"

import * as React from 'react';
import CardMUI from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTheme } from '@mui/material/styles';
import { Divider } from '@mui/material';
import Link from 'next/link';

export default function Card() {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardMUI sx={{ maxWidth: 345 ,marginBlock:2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
     <Link href='/SinglePost'>
      <CardMedia
        component="img"
        height="194"
        image="./p1.jpeg"
        alt="Paella dish"
              />
      </Link>
          <Divider variant="inset"  />
    </CardMUI>
  );
}