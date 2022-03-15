import React, { Component } from 'react'
// import { Image } from 'react-native';
import Gallery from '../pages/Gallery'

class Card extends Component {
  render() {
    return (
        <div className="col-lg-6 col-sm-12 p-2">
            <div className="card">
                <div className="card-body row">
                    {/* menampilkan gambar / cover */}
                    <div className="col-5">
                        <img src={this.props.cover} className="img" height="200" />
                    </div>

                    {/* menampilkan deskripsi */}
                    <div className="col-7">
                        <h5 className="text-info">{this.props.judul}</h5>
                        <h6 className="text-dark">{this.props.penulis}</h6>
                        <h6 className="text-dark">{this.props.penerbit}</h6>
                        <h6 className="text-dark">{this.props.harga}</h6>

                        {/* button untuk mengedit */}
                        <button className="btn btn-sm btn-primary m-1" onClick={this.props.onEdit} data-target="#modal_buku">
                            Edit
                        </button>

                        {/* button untuk menghapus */}
                        <button className="btn btn-sm btn-danger m-1" onClick={this.props.onDrop}>
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Card
