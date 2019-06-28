import React, {Component} from 'react'
import './game.css'
import Board from './board/Board'
const calculateWinner = function (squares) {
    const lines = [ // 获胜的可能性枚举
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a]
        }
    }
    return null
}
  // Game 顶层组件
  class Game extends Component {
    constructor (props) {
        super(props)
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        }
    }
    handleClick (i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{
                squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        })
    }
    jumpTo (step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }
    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares)
        let status
        if (winner) { // 检查是否结束
            status = `Winner: ${winner}`
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
        }
        const moves = history.map((step, move) => { // 显示步骤
            const desc = move ? `Go to move #${move}` : 'Go to game Start'
            return (
                <li key={move}><button onClick={() => this.jumpTo(move)}>{desc}</button></li>
            )
        })
        return (
            <div className="game">
            <div className="game-board">
                <Board squares={current.squares}
                       onClick={(i) => this.handleClick(i)}/>
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
            </div>
        );
    }
  }
export default Game