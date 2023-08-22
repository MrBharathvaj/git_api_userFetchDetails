"use client";

import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='logo'>
                    <Link href="/">Bharathvaj</Link>
                </div>
                <div className='links'>
                    <Link href="/youtube">About</Link>
                    <Link href="/youtube/live">Contact</Link>
                    <Link href="/code/repos">Repository</Link>
                </div>
            </div>
        </header>
    )
}

export default Header