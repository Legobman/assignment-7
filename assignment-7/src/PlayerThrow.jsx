/** @function PlayerThrow */
// the function to register the player's choice
function PlayerThrow({setPlayerChoice}){
    const choices = ["rock", "paper", "scissors"];

    return(
        <div>
            <h2>Your Throw</h2>

            {choices.map(choice =>(
                <img key={choice} src={`/${choice}.PNG`} alt={choice} onClick={() => {
                    setPlayerChoice(null) 
                    setTimeout(() => setPlayerChoice(choice), 0);}}/>
            ))}
        </div>
    )
}

export default PlayerThrow;