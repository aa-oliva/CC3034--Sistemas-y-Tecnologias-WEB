import React from "react"
import $ from "jquery"
import img from './gifs/temmie.gif'

const styles = {
	width:'2%',
	height: '2%',

}

export default class Temmie extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}