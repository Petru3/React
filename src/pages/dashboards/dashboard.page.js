import jwtDecode from "jwt-decode";
import AdminDashboard from "./admin.dashboard";
import TutorDashboard from "./tutor.dashboard";
import StudentDashboard from "./student.dashboard";

function DashboardPage(){

    let decoded = undefined
    if (localStorage.token){
        let token = localStorage.token
        decoded = jwtDecode(token)
        console.log(decoded.iss)
    }

    const CheckAgainstTokenSubscriber = () => {
        if(decoded.sub === "admin")
            return <AdminDashboard/>
        else if (decoded.sub === "tutor")
            return <TutorDashboard/>
        else if (decoded.sub === "student")
            return <StudentDashboard/>
        else
            return <h1>ROLE IDENTIFICATION FAILURE</h1>
    }

    return (
        CheckAgainstTokenSubscriber()
    )
}

export default DashboardPage