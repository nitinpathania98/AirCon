import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Crud() {
  const naviagte = useNavigate();
  const [old, setNew] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8082/getdata/").then((res) => {
      setNew(res.data)
    })
  }, [])

  // delete data
  const deletedata = (e, id) => {
    e.preventDefault();
    var mydata = { "id": id }
    axios({
      method: 'post',
      url: "http://localhost:8082/deldata",
      data: mydata
    }).then((res) => {
      alert(res.data)
    })
  };


  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">Crud</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item text-primary" aria-current="page">Crud Operation</li>
            </ol>
          </nav>
        </div>
      </div>


      <div className="container py-5 px-5">
        <table className="table table-bordered table-condensed table-striped">
          <thead>
            <tr>
              <th> username </th>
              <th> email </th>
              <th> phone </th>
              <th> city </th>
              <th> state </th>
              <th> message </th>
              <th> ACTION</th>
            </tr>
          </thead>
          <tbody>
            {old.map((result) => (
              <tr key={result._id}>
                <td>{result.username}</td>
                <td>{result.email}</td>
                <td>{result.phone}</td>
                <td>{result.city}</td>
                <td>{result.state}</td>
                <td>{result.message}</td>
                <td>
                  <span>
                    <abbr title="Edit">
                      <button className='btn btn-info'>
                        <i className='bi bi-pencil-square'></i>
                      </button>
                    </abbr>
                  </span>

                  <span>
                    <abbr title="Delete">
                      <button className='btn btn-danger' onClick={(e) => deletedata(
                        e, result._id,
                      )} >
                        <i className='bi bi-trash'></i>
                      </button>
                    </abbr>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Crud
