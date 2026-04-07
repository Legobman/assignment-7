/** @function PlayerThrow */
//
function PlayerThrow({setPlayerChoice}){
    const choices = ["rock", "paper", "scissors"];

    return(
        <div>
            <h2>Your Throw</h2>

            {choices.map(choice =>(
                <img key={choice} src={`/${choice}.PNG`} alt={choice} onClick={() => setPlayerChoice(choice)}/>
            ))}
        </div>
    )
}

export default PlayerThrow;