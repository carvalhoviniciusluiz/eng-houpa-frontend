import { AppBar, Box, Toolbar } from '@mui/material';
import Image from 'next/image';
import React from 'react';

type DefaultLayoutProps = {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Box>
      <AppBar position="static" elevation={0}>
        <Toolbar
          style={{
            minHeight: 44,
            backgroundColor: '#450887'
          }}
        />
      </AppBar>
      <AppBar
        component="div"
        position="static"
        elevation={0}
      >
        <Toolbar style={{
          minHeight: 78,
          backgroundColor: '#5F12B6',
          justifyContent: 'center'
        }}>
          <Image
            width={36.41}
            height={39.31}
            src="/img/logo.svg"
            alt="logo"
          />
        </Toolbar>
      </AppBar>

      <Box style={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: 'calc(100vh + -122px)'
      }} >
        <Box
          style={{
            width: 452,
            marginTop: 104
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}