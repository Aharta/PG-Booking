export default function Logout(){

    sessionStorage.removeItem("isLoggedIn")
    sessionStorage.removeItem("owner_id")

}