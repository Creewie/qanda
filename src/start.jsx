export default function Start({setGamemode}){
    return(
        <>
            <h1>Gra: Q&A</h1>
            <button onClick={()=>setGamemode(true)}>Rozpocznij gre!</button>
        </>
    )
}