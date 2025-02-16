import { Square } from './square.jsx'

export const WinnerModal = ({ winner, resetGame }) => {
    if (winner === null) return null

    console.log(winner)

    const winnerText = winner === false ? 'Empate' : 'Gano:'

    return (
        <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>

                <header className='win'>
                    <Square>{winner === false ? '' : winner}</Square>
                </header>

                <footer>
                    <button onClick={resetGame}>Reiniciar</button>
                </footer>
            </div>
        </section>
    )
}
