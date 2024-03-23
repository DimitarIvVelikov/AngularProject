Base URI = "http://127.0.0.1:5000/api"

User Base URI = "/auth"
User Endpoints = {
login: "/auth/login", POST
register: "/auth/register", POST
profile: "/auth/profile" POST
}

Training Programs Base URI = "/training-programs"

Training Programs Endpoints = {
create: "/training-programs/", POST
getAllTrainingPrograms: "/training-programs/", GET
getOneTrainingProgram: "/training-programs/:id", GET
updateTrainingProgram: "/training-programs/:id", PUT
deleteTrainingProgram: "/training-programs/:id", DELETE
}
