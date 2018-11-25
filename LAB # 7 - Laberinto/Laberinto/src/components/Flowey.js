import React from "react"
import $ from "jquery"
import img from './gifs/flowey.gif'

const styles = {
	width:'2%',
	height: '2%',

}

export default class Flowey extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}