"use client"

export default function Error({error, reset} : {error: Error & {digest?: string}, reset: () => void}){
    return(
        <main>
            <h2>Error</h2>
            <button onClick={() => reset}></button>
        </main>
    )
}