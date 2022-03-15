import React, { Component } from 'react'
import Table from '../components/Table'
import $ from 'jquery'

class History extends Component {
  constructor(){
    super()
    this.state = {
      pembeli : [
        {
          nama: "Cristopher Mayli",
          judul: "Cara Makan yang Baik",
          qty: 1,
          harga: 20000
        },
        {
          nama: "Mayster Olivira",
          judul: "Bertobat",
          qty: 2,
          harga: 10000
        }

      ],

      action: "",
      nama: "",
      judul: "",
      qty: 0,
      harga: 0,
      selectedItem: null
    }
  }

  //ini untuk add
  Add = () => {
    //menampilkan komponen modal
    $("#modal").show()
    this.setState({
      action: "insert",
      nama: "",
      judul: "",
      qty: 0,
      harga: 0
    })
  }

  //ini untuk edit
  Edit = (item) => {
    $("#modal").show()
    this.setState({
      action: "update",
      nama: item.nama,
      judul: item.judul,
      qty: item.qty,
      harga: item.harga
    })
  }

  Save = (event) => {
    event.preventDefault();

    let tempPembeli = this.state.pembeli

    if(this.state.action === "insert"){
      tempPembeli.push({
        nama: this.state.nama,
        judul: this.state.judul,
        qty: this.state.qty,
        harga: this.state.harga
      })
    }else if(this.state.action === "update"){
      let index = tempPembeli.indexOf(this.state.selectedItem)
      tempPembeli[index].nama = this.state.pembeli
      tempPembeli[index].judul = this.state.judul
      tempPembeli[index].qty = this.state.qty
      tempPembeli[index].harga = this.state.harga
    }

    this.setState({pembeli : tempPembeli})

    $("#modal").hide()
  }

  Drop = (item) => {
    if(window.confirm("Apakah anda yakin ingin menghapus?")){
      let tempPembeli = this.state.pembeli

      let index = tempPembeli.indexOf(item)
      
      tempPembeli.splice(index, 1)

      this.setState({pembeli : tempPembeli})
    }

  }

  

  render() {
    return (
      <div className="container">
          <div className="row">
              {this.state.map( (item, index) => (
                  <Table
                    nama={item.nama}
                    judul={item.judul}
                    qty={item.qty}
                    harga={item.harga}
                    onEdit={ () => this.Edit(item)}
                    onDrop={ () => this.Drop(item)}
                  />
              ))}
          </div>

          <button className="btn btn-success" onClick={() => this.Add()} data-toggle="modal" data-target="#modal">
              Tambah Data
          </button>

          {/* component modal sbg control manipulasi data */}
          <div className="modal" id="modal">
                <div className="modal-dialog">
                     <div className="modal-content">
                        {/* modal header */}
                        <div className="modal-header">
                            Form History Pembeli
                        </div>
 
                        {/* modal body */}
                        <div className="modal-body">
                            <form onSubmit={ev => this.Save(ev)}>
                                Nama Pembeli
                                <input type="text" className="form-control mb-2"
                                value={this.state.nama}
                                onChange={ ev => this.setState({nama: ev.target.value}) }
                                required />

                                Judul Buku
                                <input type="text" className="form-control mb-2"
                                value={this.state.judul}
                                onChange={ ev => this.setState({judul: ev.target.value}) }
                                required />
                                     
                                Jumlah Buku
                                <input type="number" className="form-control mb-2"
                                value={this.state.qty}
                                onChange={ ev => this.setState({qty: ev.target.value}) }
                                required />
                                    
                                Harga Buku
                                <input type="number" className="form-control mb-2"
                                value={this.state.harga}
                                onChange={ ev => this.setState({harga: ev.target.value}) }
                                required />
 
                                <button className="btn btn-info btn-block" type="submit">
                                    Simpan
                                </button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default History
