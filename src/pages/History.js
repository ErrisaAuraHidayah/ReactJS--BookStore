import React, { Component } from 'react'

class History extends Component {
  render() {
    return (
      <div>
        <table class="table m-4">
            <thead class="table-info">
                <tr>
                <th scope="col">No.</th>
                <th scope="col">Nama</th>
                <th scope="col">Judul Buku</th>
                <th scope="col">Qty</th>
                <th scope="col">Harga(pcs)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default History
