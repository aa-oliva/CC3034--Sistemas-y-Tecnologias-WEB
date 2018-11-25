import React from "react"
import $ from "jquery"
import Minus from './Minus'
import Temmie from './Temmie'
import CharadB from './CharadB'
import CharadF from './CharadF'
import CharadR from './CharadR'
import CharadL from './CharadL'
import Flowey from './Flowey'
import img from './images/background.jpg'


var dir=0;
const styles = {
	background: `url(${img})`,
	backgroundSize: 1080
}


export default class Laberinto extends React.Component{
	constructor(){
		super()
		this.state = {
			laberinto:[],
			x:1,
			y:1,
			pos:0,
		}

		$.getJSON('http://34.210.35.174:3001/?type=json&w=8&h=8').done((result)=>{
			this.setState({laberinto:result})
		})
	}
	
	handleKeyDown(e) {
		document.getElementById('play').play();
		e.preventDefault()

        if (e.key === "ArrowLeft") {
			dir=1
			/*Aqui se  limpia el rastro del personaje por eso no es 
			necesario evaluarlo dentro del if*/
            const validmove = this.state.laberinto
			validmove[this.state.y][this.state.x] = " "
            if(validmove[this.state.y][this.state.x-1] == " "){
                validmove[this.state.y][this.state.x-1] = "p"
                this.setState({
                    x: this.state.x -1,
                    laberinto: validmove
                })
			}
			/*Si se la meta no esta en la esquina inferior derecha se gana con lo siguiente*/
            if(validmove[this.state.y][this.state.x+1] == "g"){
                validmove[this.state.y][this.state.x+1] = "p"
                this.setState({
                    x: this.state.x +1,
                    laberinto: validmove,
                })
                alert("Flowey?!?!");
            }
        }
        if (e.key === "ArrowRight") {
			dir=2
			const validmove = this.state.laberinto
			/*Aqui se  limpia el rastro del personaje por eso no es 
			necesario evaluarlo dentro del if*/
			validmove[this.state.y][this.state.x] = " "
        	if(validmove[this.state.y][this.state.x+1] == " "){
            	validmove[this.state.y][this.state.x+1] = "p"
            	this.setState({
                	x: this.state.x +1,
                	laberinto: validmove

            	})
        	}
        	if(validmove[this.state.y][this.state.x+1] == "g"){
            	validmove[this.state.y][this.state.x+1] = "p"
            	this.setState({
                	x: this.state.x +1,
                	laberinto: validmove,
            	})
            	alert("Flowey?!?!!");
        	}
        }
        if (e.key === "ArrowUp") {
			dir=3
			const validmove = this.state.laberinto
			/*Aqui se  limpia el rastro del personaje por eso no es 
			necesario evaluarlo dentro del if*/
			validmove[this.state.y][this.state.x] = " "
        	if(validmove[this.state.y-1][this.state.x] == " "){
            	validmove[this.state.y-1][this.state.x] = "p"
            	this.setState({
                	y: this.state.y -1,
                	laberinto: validmove
            	})
			}
			/*Si se la meta no esta en la esquina inferior derecha se gana con lo siguiente*/
			if(validmove[this.state.y][this.state.x+1] == "g"){
            	validmove[this.state.y][this.state.x+1] = "p"
            	this.setState({
                	x: this.state.x +1,
                	laberinto: validmove,
            	})
            	alert("Flowey?!?!");
        	}
        }
        if (e.key === "ArrowDown") {
			dir=4
			const validmove = this.state.laberinto
			validmove[this.state.y][this.state.x] = " "
			/*Aqui se  limpia el rastro del personaje por eso no es 
			necesario evaluarlo dentro del if*/
        	if(validmove[this.state.y+1][this.state.x] == " "){
				validmove[this.state.y+1][this.state.x] = "p"
				this.setState({
					y: this.state.y + 1,
					laberinto: validmove
				})
			}
			if(validmove[this.state.y+1][this.state.x]=="g"){
				validmove[this.state.y][this.state.x] = " "
				validmove[this.state.y+1][this.state.x] = "p"
				this.setState({
					x: this.state.y +1,
					laberinto: validmove,
				})
				
				alert("Flowey?!?!")
			}
			
        }

    }

	render(){
		return <div id="Laberinto" style = {styles} onKeyDown = {this.handleKeyDown.bind(this)} tabIndex = "0">
			{
				this.state.laberinto.map(row=>{
					let casillas = row.map(casilla =>{
						if((casilla== "+")||(casilla=="|")||(casilla=="-"))
						{
							return <Temmie/>
						}
						if(casilla == " "){
							return <Minus/>
						}
						if(casilla == "p"){
							if(dir == 1){
								return <CharadL/>
							}
							if(dir == 2){
								return <CharadR/>
							}
							if (dir == 3){
								return <CharadB/>
							}
							if (dir == 4){
								return <CharadF/>
							}else {
								return <CharadF/>
							}
						}
						if(casilla == "g"){
							return <Flowey/>
						}
						return <span>{casilla}</span>
					})
					casillas.push(<br />)
						return casillas
				})
			}
		</div>
	}

}
function esto(casilla){
	
}