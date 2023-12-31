import React from 'react'
import { Routes, Route, useParams } from 'react-router'
import routes from './routes'
import { AppHeader } from './cmps/AppHeader'

export function RootCmp() {

    return (
        <div className='div-root'>
            <AppHeader />
            <main className='main-layout'>
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                    {/* <Route path="user/:id" element={<UserDetails />} /> */}
                </Routes>
            </main>
        </div>
    )
}


