import {useState} from "react";
import {Login} from "../../utils/api/api.auth";
import {SetAuthToken} from "../../utils/token/token";

function LoginPage(){
    const [data, setData] = useState({
        username: "",
        password: "",
        account_type: ""
    });
    const HandleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        Login(data).then((response) => {
            const token = response.data
            if(token && token !== "failure"){
                SetAuthToken(token)
                document.location.href = "/"
            }
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <div className={"page login-page"}>
            <img className={"bg-illustration"} src={require("../../assets/loginImg.jpg")} alt=""/>
            
            <form onSubmit={HandleSubmit}>
                <div className={"input-fields"}>
                    <div className="right-part">
                        <div className="login-form">
                        <div className="text">
                            <h1>Welcome:))</h1>
                            <p>Please do not disclose your password in any possible way for better protection, thank you!!</p>
                        </div>
                            <div className="user">
                                <svg id="person-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M50 50C54.9728 50 59.7419 48.0246 63.2583 44.5083C66.7746 40.9919 68.75 36.2228 68.75 31.25C68.75 26.2772 66.7746 21.5081 63.2583 17.9917C59.7419 14.4754 54.9728 12.5 50 12.5C45.0272 12.5 40.2581 14.4754 36.7417 17.9917C33.2254 21.5081 31.25 26.2772 31.25 31.25C31.25 36.2228 33.2254 40.9919 36.7417 44.5083C40.2581 48.0246 45.0272 50 50 50V50ZM62.5 31.25C62.5 34.5652 61.183 37.7446 58.8388 40.0888C56.4946 42.433 53.3152 43.75 50 43.75C46.6848 43.75 43.5054 42.433 41.1612 40.0888C38.817 37.7446 37.5 34.5652 37.5 31.25C37.5 27.9348 38.817 24.7554 41.1612 22.4112C43.5054 20.067 46.6848 18.75 50 18.75C53.3152 18.75 56.4946 20.067 58.8388 22.4112C61.183 24.7554 62.5 27.9348 62.5 31.25V31.25ZM87.5 81.25C87.5 87.5 81.25 87.5 81.25 87.5H18.75C18.75 87.5 12.5 87.5 12.5 81.25C12.5 75 18.75 56.25 50 56.25C81.25 56.25 87.5 75 87.5 81.25ZM81.25 81.225C81.2437 79.6875 80.2875 75.0625 76.05 70.825C71.975 66.75 64.3063 62.5 50 62.5C35.6875 62.5 28.025 66.75 23.95 70.825C19.7125 75.0625 18.7625 79.6875 18.75 81.225H81.25Z" fill="black" fill-opacity="0.7"/>
                                </svg>
                                <input type="text" name={"username"} placeholder="Username" onChange={HandleChange}/>
                                </div>
                            <div className="pass">
                                <svg id="pass-svg" viewBox="0 0 53 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.2486 2.75C27.989 2.75 29.6581 3.32946 30.8887 4.36091C32.1194 5.39236 32.8107 6.79131 32.8107 8.25V19.25H19.6865V8.25C19.6865 6.79131 20.3778 5.39236 21.6085 4.36091C22.8391 3.32946 24.5082 2.75 26.2486 2.75ZM36.0918 19.25V8.25C36.0918 6.06196 35.0548 3.96354 33.2088 2.41637C31.3628 0.869194 28.8592 0 26.2486 0C23.638 0 21.1344 0.869194 19.2884 2.41637C17.4424 3.96354 16.4054 6.06196 16.4054 8.25V19.25C14.665 19.25 12.9959 19.8295 11.7653 20.8609C10.5346 21.8924 9.84326 23.2913 9.84326 24.75V38.5C9.84326 39.9587 10.5346 41.3576 11.7653 42.3891C12.9959 43.4205 14.665 44 16.4054 44H36.0918C37.8322 44 39.5013 43.4205 40.7319 42.3891C41.9626 41.3576 42.6539 39.9587 42.6539 38.5V24.75C42.6539 23.2913 41.9626 21.8924 40.7319 20.8609C39.5013 19.8295 37.8322 19.25 36.0918 19.25Z" fill="black" fill-opacity="0.70"/>
                                </svg>
                                <input type="password" name={"password"} placeholder="Password" onChange={HandleChange}/>
                            </div>
                            <button className={"button-submit"} type="submit"><h3>Login</h3></button>
                            <div className='checkbox-status'>
                                <ul className="account-type">
                                    <li>
                                    <input
                                        defaultChecked
                                        className="inline-text-group"
                                        type="radio"
                                        value={"student"}
                                        onChange={HandleChange}
                                        name={"account_type"}/> Student
                                    </li>
                                    <li>
                                    <input
                                        className="inline-text-group"
                                        type="radio"
                                        value={"tutor"}
                                        onChange={HandleChange}
                                        name={"account_type"}/> Tutor
                                    </li>
                                    <li>
                                    <input
                                        className="inline-text-group"
                                        type="radio"
                                        value={"admin"}
                                        onChange={HandleChange}
                                        name={"account_type"}/> Admin
                                    </li>
                                </ul>
                                <ul className="account-profil">
                                    <li>
                                    <input
                                        className="inline-group"
                                        type="radio"
                                        value={"mate"}
                                        onChange={HandleChange}
                                        name={"account_profil"}/> Matematica-Informatica
                                    </li>
                                    <li>
                                    <input
                                        className="inline-group"
                                        type="radio"
                                        value={"tur"}
                                        onChange={HandleChange}
                                        name={"account_profil"}/> Hotelier(Turism si alimentatie)
                                    </li>
                                    <li>
                                    <input
                                        className="inline-group"
                                        type="radio"
                                        value={"auto"}
                                        onChange={HandleChange}
                                        name={"account_profil"}/> Automatica si calculatoare
                                    </li>
                                    <li>
                                    <input
                                        className="inline-group"
                                        type="radio"
                                        value={"indus"}
                                        onChange={HandleChange}
                                        name={"account_profil"}/> Industrie Alimentara
                                    </li>
                                </ul> 
                            </div>
                      </div>
                    </div>
                </div>  
            </form>
        </div>
    );
}

export default LoginPage;
