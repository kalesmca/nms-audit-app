export const DB = {
    USERS: "users"
}

export const bloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Other"]
export const userTypes = ["MEMBTER", "DONOR", "OTHER"]

export const initUser = {
    name: "",
    userType: userTypes[0],
    native: "",
    mobile:"",
    email:"",
    dob : new Date(),
    bloodGroup: bloodGroup[0]

}
