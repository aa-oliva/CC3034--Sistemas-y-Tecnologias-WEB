import React from "react"
import $ from "jquery"
import img from './gifs/plus.gif'

const styles = {
	width:'2%',
	height: '2%',

}

export default class Plus extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}