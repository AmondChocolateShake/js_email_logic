function setUser(id, pr) {
    const user = {
        id: id,
        name: "User " + id,
        email: id + "@naver.com"
    }
    pr(user);
}

setUser("dong", function(user) {
    console.log(user.email);
})