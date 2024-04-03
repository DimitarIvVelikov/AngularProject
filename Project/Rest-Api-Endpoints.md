Base API = "http://127.0.0.1:5000/api"

User Base URI = "/auth"
User Endpoints = {
login: "/login", POST
register: "/register", POST
logout: "/logout", POST
profile: "/profile", GET
profile: "/profile", PUT
profilePopulated: "/profile-populated", GET
}

Training Programs Base URI = "/training-programs"

Training Programs Endpoints = {
create: "/", POST
getLatestTrainingPrograms: "/latest", GET
getAllTrainingPrograms: "/", GET
getOneTrainingProgram: "/:id", GET
updateTrainingProgram: "/:id", PUT
deleteTrainingProgram: "/:id", DELETE
signUpForTrainingProgram: "/signUp/:id", POST
}
