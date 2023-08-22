import React from 'react'
import { FaFolder, FaRegFile } from 'react-icons/fa';
async function fetchRepoContents(name) {
    const response = await fetch(`https://api.github.com/repos/MrBharathvaj/${name}/contents`);
    const contents = await response.json();
    return contents;
}
const Repodirs = async ({ name }) => {
    const contents = await fetchRepoContents(name);
    return (
        <>
            <h3>contents</h3>
            <ul>
                {contents.map((dir) => (
                    <li key={dir.path}>
                        {dir.type === "dir" ? <FaFolder /> : <FaRegFile />}
                        <span>{dir.path}</span>
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default Repodirs