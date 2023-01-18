import React from 'react'
import monkey from '../../assets/icons-monkey/full-monkey.webp';
import '../../App.css'

export default function Home() {
  return (
    <div className='App'>
        <object data={monkey} className="logo" width="100" height="100"> </object>
        <h1>{import.meta.env.VITE_DOMAIN}</h1>
        <p className="base">
            This is a WIP
        </p>
    </div>
  )
}
