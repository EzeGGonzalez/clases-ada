import React, { Component } from 'react';
import Flechas from './Flechas';
import Imagen from './Imagen';

class Carousel extends Component {
	constructor (props) {
		super(props);

		this.state = {
			position: 0,
			images: props.images
		}
	}

	next () {
		this.setState({
			position: this.state.position === this.state.images.length - 1 ?
							0 : this.state.position + 1
		})
	}

	prev () {
		this.setState({
			position: this.state.position === 0 ?
							this.state.images.length - 1 : this.state.position - 1
		})
	}

	render () {
		return (
			<div className="carousel">
				<Flechas onPrev={() => this.prev()} onNext={() => this.next()} />
				<Imagen image={this.state.images[this.state.position]} />
			</div>
		);
	}
}

export default Carousel;