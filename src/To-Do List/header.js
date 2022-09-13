import header, { useState } from 'react';

const Header = () => {
    const [item, updateBook] = useState([
        { Title: "Walking", Description: "Morning", DateTime: "2022-08-16T5:00" },
        { Title: "Studying", Description: "Morning", DateTime: "2022-08-16T7:00" },
        { Title: "Playing", Description: "Evening", DateTime: "2022-08-16T17:00" },
        { Title: "Revising", Description: "Night", DateTime: "2022-08-16T21:00" },
    ]);
    const [titem, pickitem] = useState("");
    const [ditem, pickditem] = useState("");
    const [dateitem, pickdate] = useState("");


    const save = () => {
        var newbook = { Title: titem, Description: ditem, DateTime: dateitem };
        updateBook(item => [...item, newbook]);
        pickitem("");
        pickditem("");
        pickdate("")
    }

    const deletepro = (index) => {
        item.splice(index, 1);
        updateBook(item => [...item]);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <nav className="navbar navbar-expand-lg bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand text-white" href="#">TODOs - LIST</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled text-white">Disabled</a>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success text-white" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* ----------------------------Navbar------------------------Navbar----------------------------Navbar--------------------------------Navbar------------------------------ */}

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h2 className='text-center text-success mx-5 mt-5'>TODOs - LIST</h2>
                        <div className="mb-3">
                            <label for="title" className="form-label"><h3>Title</h3></label>
                            <input type="text" className="form-control" id="title" placeholder="Text" onChange={obj => pickitem(obj.target.value)} value={titem} />
                        </div>
                        <div className="mb-3">
                            <label for="description" className="form-label" id="description"><h3>Description</h3></label>
                            <textarea className="form-control" id="description" rows="3" placeholder="Description" onChange={obj => pickditem(obj.target.value)} value={ditem}></textarea>
                        </div>
                        <div className="mb-3">
                            <label for="title" className="form-label"><h3>Calender (Date and Time)</h3></label>
                            <input type="datetime-local" className="form-control" id="title" placeholder="Day & Time" onChange={obj => pickdate(obj.target.value)} value={dateitem} />
                        </div>
                        <div className="mb-3">
                            <button className='btn btn-primary text-center' onClick={save}>List Add</button>
                        </div>

                    </div>
                    <div className='col-lg-6 mt-5'>
                    <h3 className='mt-5'>Your Item</h3>
                <table className='table table-bordered shadow'>
                    <thead>
                        <tr className='text-center'>
                            <th> Sl No. </th>
                            <th> Title </th>
                            <th> Your Description </th>
                            <th> Day & Time </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item.map((map, index) => {
                                return (
                                    <tr key={index} className="text-center">
                                        <td>{index}</td>
                                        <td>{map.Title}</td>
                                        <td>{map.Description}</td>
                                        <td>{map.DateTime}</td>
                                        <td><button className='btn btn-danger' onClick={deletepro.bind(this, index)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                    </div>
                </div>
            </div>
{/* //---------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h4>T0-DOs List is a daily routine plan and write daily Plans<br/> daily are of little importance, but planning is essential.<br/>“Our goals can only be reached through a vehicle of a plan, in which we must fervently believe, and upon<br/> which we must vigorously act. There is no other route<br/> to success.”</h4>
                </div>
                <div className='col-lg-6'></div>
            </div>
        </div>
        </div>
          
    )
}

export default Header;