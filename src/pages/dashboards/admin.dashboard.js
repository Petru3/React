import {useEffect, useState} from "react";
import {GetStudents, GetTutors, GetAdmins, DeleteUser} from "../../utils/api/api.users";
import formatDate from "../../utils/formatting/date"
import {InsertUser} from "../../utils/api/api.insert";
import {CreateErasmusJournal} from "../../utils/api/api.journals";

function AdminDashboard(){

    const [students, SetStudents] = useState([])
    const [tutors, SetTutors] = useState([])
    const [admins, SetAdmins] = useState([])

    useEffect(() => {
        GetStudents().then((response) => {
            const data = response.data
            if(Array.isArray(data)){
                SetStudents(data)
            }
        })
        GetTutors().then((response) => {
            const data = response.data
            if(Array.isArray(data)){
                SetTutors(data)
            }
        })
        GetAdmins().then((response) => {
            const data = response.data
            if(Array.isArray(data)){
                SetAdmins(data)
            }
        })
    }, [])

    return (
        <div className={"page admin-dashboard-page"}>
            <h1>ADMIN DASHBOARD</h1>
            <div className={"admin-dashboard-data"}>
                <div>
                <div className={"user-list"}>
                    <h3>Registered students</h3>
                    {students.length > 0 && students.map((student, key) => {
                        return (
                            <div className={"user-card"} key={key}>
                                <h6>ID: {student._id}</h6>
                                <h6>FIRST NAME: {student.first_name}</h6>
                                <h6>LAST NAME: {student.last_name}</h6>
                                <h6>USERNAME: {student.username}</h6>
                                <h6>CREATION DATE: {formatDate(student.creation_date)}</h6>
                                <button onClick={() => DeleteUser("student", student.username)}>DELETE</button>
                            </div>
                        )
                    })}
                </div>
                <div className={"user-list"}>
                    <h3>Registered tutors</h3>
                    <div className={"tutors-list"}>
                        {tutors.length > 0 && tutors.map((tutor, key) => {
                            return (
                                <div className={"user-card"} key={key}>
                                    <h6>ID: {tutor._id}</h6>
                                    <h6>FIRST NAME: {tutor.first_name}</h6>
                                    <h6>LAST NAME: {tutor.last_name}</h6>
                                    <h6>USERNAME: {tutor.username}</h6>
                                    <h6>CREATION DATE: {formatDate(tutor.creation_date)}</h6>
                                    <button onClick={() => DeleteUser("tutor", tutor.username)}>DELETE</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={"user-list"}>
                    <h3>Registered admins</h3>
                    <div className={"admin-list"}>
                        {admins.length > 0 && admins.map((admin, key) => {
                            return (
                                <div className={"user-card"} key={key}>
                                    <h6>ID: {admin._id}</h6>
                                    <h6>USERNAME: {admin.username}</h6>
                                    <h6>CREATION DATE: {formatDate(admin.creation_date)}</h6>
                                    <button onClick={() => DeleteUser("admin", admin.username)}>DELETE</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard