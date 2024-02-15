import { useState } from "react"
import './App.css'

export default function Pytajnik(){
    
    const [quesiton, setQuesiton] = useState(0)
    const [answer, setAnswer] = useState(-1)
    const [points, setPoints] = useState(0)

    return(
        <>
            { quesiton >= pytania.length ? (
            <>
                {`Liczba uzyskanych punktów: ${points}`}
                <button onClick={()=>{
                    location.reload()
                }}>Zacznij od początku!</button>
            </>
            ):(
               <>
                <span>
                    {pytania[quesiton].pytanie}
                </span>
                <div>
                    {pytania[quesiton].odpowiedzi.map((odp,index)=>(<button onClick={()=>setAnswer(index)}>{odp}</button>))}
                </div>
                <div>
                    <button onClick={()=>{
                        if (answer == -1) {
                            return
                        }
                        if (pytania[quesiton].poprawna == answer) {
                            setPoints(points+1)
                        }
                        setQuesiton(quesiton+1)
                        setAnswer(-1)
    
                        }}>Następne pytanie!</button>
                </div>
            </>
            ) }
        </>
    )
}

const pytania = [
    { 
      pytanie:"Z jaką prędkością, kierując samochodem osobowym, należy poruszać się za tym pojazdem, jeżeli tunel znajduje się poza obszarem zabudowanym, a jego długość wynosi 600 m?" ,
      odpowiedzi:["Z taką, aby utrzymywać, co najmniej 50 m odstępu.", "Z taką, aby utrzymywć, co najmniej 80 m odstępu", "Z taką, aby utrzymywć, co najmniej 5 m odstępu."],
      poprawna:0
    },
    { 
      pytanie: "O czym ostrzega świecąca się na czerwono w czasie jazdy samochodem osobowym lampka kontrolna układu chłodzenia?",
      odpowiedzi: ["O zbyt wysokiej temperaturze płynu chłodniczego", "O zbyt niskiej temperaturze płynu chłodniczego", "O zbyt niskim poziomie płynu do spryskiwania szyby"],
      poprawna: 0
    },
    {
      pytanie: "Za które naruszenie przepisów ruchu drogowego policjant zatrzyma prawo jazdy?",
      odpowiedzi: ["Za wyprzedzanie z naruszeniem pojedynczej linii ciągłej", "Za przewożenie osób w liczbie przekraczającej o dwa liczbę miejsc określoną w dowodzie rejestracyjnym samochodu osobowego", "Za wymijanie na przejeździe kolejowym"],
      poprawna: 1
    },
    {
      pytanie: "Jaką funkcję spełnia układ przeciwblokujący (ABS) stosowany w pojazdach?",
      odpowiedzi: ["Ułatwia zmianę toru jazdy w czasie hamowania", "W każdych warunkach skraca drogę hamowania", "Zapobiega zerwaniu przyczepności kół napędowych podczas rozpędzania pojazdu"],
      poprawna: 0
    },
    {
      pytanie: "Jakie uszkodzenia zazwyczaj towarzyszą ciężkim urazom głowy po upadku z czterokołowca?",
      odpowiedzi: ["Uszkodzenia kręgosłupa lędźwiowego", "Uszkodzenia kręgosłupa piersiowego", "Uraz kręgosłupa szyjnego i czaszki"],
      poprawna: 2
    },
    {
      pytanie: "Jaki minimalny odstęp od pojazdu poprzedzającego powinieneś zachować, stojąc w tunelu, w zatorze drogowym tzw korku?",
      odpowiedzi: ["3 m", "5 m", "7 m"],
      poprawna: 1
    }
    ]