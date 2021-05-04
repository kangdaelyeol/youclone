import routes from "../routes"

export const usergetJoin = (req, res) => {
    res.render("join", {pageTitle : "userjoin"});
}
export const userpostJoin = (req, res) => {
    const {
        body : { password1, password2 }
    } = req;
    if(password1 !== password2){
        res.status(400);
        res.render("join", {pageTitle: "userjoin"})
    } else {
        // To Do: Register user
        // Log user in
        res.redirect(routes.home);
    }
}

export const userGetLogin = (req, res) => res.render("login", {pageTitle : "userLogin"});
export const userPostLogin = (req, res) => {
    res.redirect(routes.home);
};

export const userLogout = (req, res) => res.redirect(routes.home);

export const users = (req, res) => res.render("users", {pageTitle : "users"});
export const userEditProfile = (req, res) => res.render("useredit", {pageTitle : "userEditprofile"});
export const userChangePassword = (req, res) => res.render("changepw", {pageTitle : "userChange password", routes});
export const userDetail = (req, res) => res.render("userdetail", {pageTitle : "userDetail"});