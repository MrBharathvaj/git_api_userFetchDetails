import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

async function fetchRepo(name) {
    const response = await fetch(`https://api.github.com/repos/MrBharathvaj/${name}`);
    const repo = response.json();
    return repo;
}

const Repo = async ({ name }) => {
    const repo = await fetchRepo(name);
    // console.log("here = " + repo.name);
    return (
        <>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div className='card-stats'>
                <div className='card-stat'>
                    <span>
                        <FaStar />{repo.stargazers_count}
                    </span>
                    <span>
                        <FaCodeBranch />{repo.forks_count}
                    </span>
                    <span>
                        <FaEye />{repo.watchers_count}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Repo