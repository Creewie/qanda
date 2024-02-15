export default function Start({setGamemode}){
    return(
        <>
            <div id="qst">
            <h1>Quiz: Kurs na prawo jazdy!</h1>
            <h4>Czy zdasz za pierwszym?</h4>
            </div>
            <button style={{margin:15}} onClick={()=>setGamemode(true)}>Rozpocznij gre!</button>
        </>
    )
}