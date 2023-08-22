import React, { Suspense } from 'react'
import Link from 'next/link'
import Repo from '@/app/components/Repo'
import Repodirs from '@/app/components/Repodirs'
const Repospage = ({ params: { name } }) => {
    return (
        <div className='card'>
            <Link href="/code/repos" className='btn btn-back'>Back to Repositories</Link>
            <Suspense fallback={<div>Loading Repos...</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>Loading contents...</div>}>
                <Repodirs name={name} />
            </Suspense>
        </div>
    )
}

export default Repospage