import decode from "jwt-decode";

class AuthService {
    getProfile() {
        return decode(this.getToken())
    }
    loggedIn() {
        const token = this.getToken()
        return !!token && !this.isTokenExpired(token)
    }
    isTokenExpired(token) {
        try {
            const decoding = decode(token)
            if (decoding.exp < Date.now() / 1000) {
                return true
            }
            else return false

        } catch (error) {
            return false
        }
    }
    getToken() {
        return localStorage.getItem("id_token")
    }
    login(tokenId) {
        localStorage.setItem("id_token", tokenId)
        window.location.assign("/")
    }
    logout() {
        localStorage.removeItem("id_token")
        window.location.assign("/")
    }
}

export default new AuthService();