const JWTService = {
    getToken(){
        return localStorage.getItem("token")
    },
    getRefreshToken(){
        return localStorage.getItem("ref_token")
    },
    saveToken(token){
        localStorage.setItem("token", token)
    },
    saveRefreshToken(ref_token){
        localStorage.setItem("ref_token", ref_token)
    },
    destroyToken(){
        localStorage.removeItem("token")
    },
    destroyRefreshToken(){
        localStorage.removeItem("ref_token")
    }
}

export default JWTService;