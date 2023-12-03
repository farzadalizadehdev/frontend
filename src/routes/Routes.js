import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { RouteList } from './RouteList'

export default function ComponentRoutes() {
  return (
    <Routes>
      {RouteList?.map(({ Component, path, exact, index }) => {
        return (
          <Route key={index} exact={exact} Component={Component} path={path} />
        )
      })}
    </Routes>
  )
}
