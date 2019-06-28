import React , {Component} from 'react'
import Square from './../square/Square';
class Board extends Component {
    render () {
        return (
            <div>
                <div className="board-row">
                    <Square value={this.props.squares[0]} index={0} onClick={() => this.props.onClick(0)}/>
                    <Square value={this.props.squares[1]} index={1} onClick={() => this.props.onClick(1)}/>
                    <Square value={this.props.squares[2]} index={2} onClick={() => this.props.onClick(2)}/>
                </div>
                <div className="board-row">
                    <Square value={this.props.squares[3]} index={3} onClick={() => this.props.onClick(3)}/>
                    <Square value={this.props.squares[4]} index={4} onClick={() => this.props.onClick(4)}/>
                    <Square value={this.props.squares[5]} index={5} onClick={() => this.props.onClick(5)}/>
                </div>
                <div className="board-row">
                    <Square value={this.props.squares[6]} index={6} onClick={() => this.props.onClick(6)}/>
                    <Square value={this.props.squares[7]} index={7} onClick={() => this.props.onClick(7)}/>
                    <Square value={this.props.squares[8]} index={8} onClick={() => this.props.onClick(8)}/>
                </div>
            </div>
        )
    }
}
export default Board