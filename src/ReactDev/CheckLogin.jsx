import AdminPage from "./Adminpage";
import LoginPage from "./Loginpage";

function CheckLogin(){
    let isLoggedIn=true
/*
        let content;
        if(isLoggedIn){
            content=<AdminPage/>
        }else{
            content=<LoginPage/>
        }
*/
let content=isLoggedIn?<AdminPage/>:<LoginPage/>
    return(
        <div>
            {content}
        </div>
    )
}
export default CheckLogin