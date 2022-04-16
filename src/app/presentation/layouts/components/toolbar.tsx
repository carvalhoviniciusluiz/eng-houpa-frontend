import { AppBar, Toolbar as ToolbarMui } from '@mui/material';
import Image from 'next/image';

type ToolbarProps = {
  children?: React.ReactNode
}

export default function Toolbar({ children }: ToolbarProps) {
  return (
    <>
      <AppBar position="static" elevation={0}>
        <ToolbarMui
          style={{
            padding: 0,
            minHeight: 44,
            backgroundColor: '#450887'
          }}
        >
          {children}
        </ToolbarMui>
      </AppBar>
      <AppBar
        component="div"
        position="static"
        elevation={0}
      >
        <ToolbarMui style={{
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
        </ToolbarMui>
      </AppBar>
    </>
  )
}