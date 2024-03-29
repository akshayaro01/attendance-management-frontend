import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { facultyLogout } from '../redux/action/facultyAction'



const Home = () => {
    const store = useSelector((store) => store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.faculty.faculty.faculty.name) {
            setName(store.faculty.faculty.faculty.name)
        }
    }, [store.faculty.faculty.faculty.name])
    const logoutHandler = () => {
        dispatch(facultyLogout())
        history.push('/')
    }
    return (
        <div className="container-fluid">
            {/* <Header /> */}
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                        <img className="navbar-brand mt-1" alt='G.L.B.I.M' src='/glLogo.png' height={100} width={100}></img>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active btn">
                                    <Link to="/home"><li>{name.toUpperCase()}</li></Link>
                                </li>
                                <li className="nav-item btn">
                                    <Link to="/faculty/updateProfile"><li>UPDATE PROFILE</li></Link>
                                </li>
                                <li className="nav-item btn">
                                    <Link to="/attendenceFaculty"><li>MARK ATTENDANCE</li></Link>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/uploadMarks"><li>UPLOAD MARKS</li></Link></button>
                                </li>
                                <li className="nav-item btn">
                                    <Link to="/faculty/updatePassword"><li>UPDATE PASSWORD</li></Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn"><img src="/logout.png" alt="logout" height={50} width={50} /></button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Home
