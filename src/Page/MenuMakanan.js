import React, {Component} from 'react';


import DaftarMakanan from '../Lib/DaftarMakanan';

const ListMakanan =[
	{
		NamaMakanan : "Nasi Padang",
		Harga : "20.000"
	},

	{
		NamaMakanan : "Sate",
		Harga : "20.000"
	},

	{
		NamaMakanan : "Soto",
		Harga : "10.000"
	},

	{
		NamaMakanan : "Uduk",
		Harga : "10.000"
	},

	{
		NamaMakanan : "Nasi Kuning",
		Harga : "15.000"
	},

	{
		NamaMakanan : "Ayam Geprek",
		Harga : "15.000"
	},

	{
		NamaMakanan : "Pecel Lele",
		Harga : "10.000"
	},

	{
		NamaMakanan : "Pecel",
		Harga : "10.000"
	},

	{
		NamaMakanan : "Mie Ayam",
		Harga : "10.000"
	}
];

class MenuMakanan extends Component{

	render(){
		return(
			<div>
				<h3>Daftar Makanan Favorit</h3>
				<table>
					<tbody>
						<tr>
							{DaftarMakanan.map((data, index)=>{
								return(
									<td key={index}>
										<img
											src={data.img}
											alt="Product Makanan"
											width="150"
											height="100"
										/>
										<center>
											<p>{data.NamaMakanan }</p>
											<p>Harga : Rp. {data.Harga }</p>
										</center>
									</td>
									);
							})}
						</tr>
					</tbody>
				</table>
				<h1>List Makanan</h1>
				{ListMakanan.map((data, index)=>{
				
				return(
					<div key={index}>
					 <p>
					 {data.NamaMakanan}| Harga Makanan : {data.Harga}
					 </p>
					</div>

					)
			})}
			</div>
			);
	}
}
export default MenuMakanan;