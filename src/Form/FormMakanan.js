import React,{Component} from 'react';

class FormMakanan extends Component{
	constructor(props){
		super(props);
		this.state={pesanan:"", jumlah:""};

		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleChangeJumlah=this.handleChangeJumlah.bind(this);
		this.fokus=React.createRef();
	}

	handleChange(e){
		e.preventDefault()
		this.setState({pesanan : e.target.value})
	}

	handleChangeJumlah(e){
		e.preventDefault()
		this.setState({jumlah:e.target.value})
	}

	handleSubmit(e){
		e.preventDefault()
		alert(
			"Pesanan Anda Adalah : "+this.state.pesanan+
			" | Jumlah Pesanan : "+this.state.jumlah
			)
		this.setState({pesanan:"", jumlah:""});
		this.fokus.current.focus();
	}

	render(){
		return(
			<div>
				<center>
					<form onSubmit={this.handleSubmit}>
						<input
							onChange={(e)=>this.handleChange(e)}
							type="text"
							value={this.state.pesanan}
							ref={this.fokus}
							placeholder="Masukan Pesan Anda"
						/>

						<input
							onChange={(e)=>this.handleChangeJumlah(e)}
							type="number"
							value={this.state.jumlah}
							ref={this.pesanan}
							placeholder="Masukan Jumlah Pesanan"
						/>
						<br/><br/>
						<input type="submit" value="pesan"/>
					</form>
				</center>
			</div>
			);
	}

}
export default FormMakanan;