import React from 'react'

import { Outlet } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
        <div>Nav</div>
        <Outlet />
    </div>
  )
}
