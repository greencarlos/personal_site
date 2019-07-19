Cracking The Coding Interview
Chapter 7
7.10

Minesweeper: Design and implement a text-based Minesweeper game. Minesweeper is the classic single-player computer game where an NxN grid has B mines (or bombs) hidden across the grid. The remaining cells are either blank or have a number behind them. The numbers reflect the number of bombs in the surrounding eight cells. The user then uncovers a cell. If it is a bomb, the player loses. If it is a number, the number is exposed. If it is a blank cell, this cell and all adjacent blank cells (up to and including the surrounding numeric cells) are exposed. The player wins when all non-bomb cells are exposed. The player can also flag certain places as potential bombs. This doesn't affect game play, other than to block the user from accidentally clicking a cell that is thought to have a bomb. (Tip for the reader: if you're not familiar with this game, please play a few rounds online first.)


---SOLUTION---
(JAVA solution)

pg. 129

Writing an entire game-even a text-based one-would take far longer than the allotted time you have in an interview. This doesn't mean that it's not fair game as a question. It just means that your interviewer's expectation will not be that you actually write all of this in an interview. It also means that you need to focus on getting the key ideas-or structure-out.
Let's start with what the classes are. We certainly want a Cell class as well as a Board class. We also prob­ ably want to have a Game class.
I
We could potentially merge Board and Game together, but it's probably best to keep them separate. Err towards more organization, not less. Board can hold the list of Ce11 objects and do some basic moves with flipping over cells. Game will hold the game state and handle user input.


Cell will need to have knowledge of whether it's a bomb, a number, or a blank. We could potentially
subclass Cell to hold this data, but I'm not sure that offers us much benefit.
WecouldalsohaveanenumTYPE {BOMB, NUMBER, BLANK}todescribethetypeofcell.We'vechosen not to do this because BLANK is really a type of NUMBER cell, where the number is 0. It's sufficient to just have an isBomb flag.
It's okay to have made different choices here. These aren't the only good choices. Explain the choices you make and their tradeoffs with your interviewer.
We also need to store state for whether the cell is exposed or not. We probably do not want to subclass Cell for ExposedCell and UnexposedCell. This is a bad idea because Board holds a reference to the cells, and we'd have to change the reference when we flip a cell. And then what if other objects reference the instance of Cell?
It's better to just have a boolean flag for isExposed. We'll do a similar thing for isGuess.
