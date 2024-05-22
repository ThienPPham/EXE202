const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { genneralAccessToken, genneralRefreshToken } = require("./JwtService");

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = newUser
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null) {
                resolve({
                    status: 'OK',
                    message: 'The email is already'
                })
            }
            const hash = bcrypt.hashSync(password, 10)
            const createdUser = await User.create({
                name,
                email,
                password: hash,
                phone
            })
            if (createdUser) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createdUser
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = userLogin
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'the user is not defined'
                })
            }
            const comparePassword = bcrypt.compareSync(password, checkUser.password)
            console.log('comparePassword', comparePassword)
            if (!comparePassword) {
                resolve({
                    status: 'OK',
                    message: 'the password or username is incorrect'
                })
            }
            const access_token = await genneralAccessToken({
                id: checkUser._id,
                isAdmin: checkUser.isAdmin
            })

            const refresh_token = await genneralRefreshToken({
                id: checkUser._id,
                isAdmin: checkUser.isAdmin
            })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                access_token,
                refresh_token
            })
        } catch (e) {
            reject(e)
        }
    })
}

const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Using the correct field name for the id, which is usually _id in MongoDB
            const checkUser = await User.findById(id);
            console.log('checkUser', checkUser);

            if (checkUser === null) {
                return resolve({
                    status: 'OK',
                    message: 'The user is not defined'
                });
            }

            const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
            console.log('updatedUser', updatedUser);

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedUser
            });
        } catch (e) {
            reject(e);
        }
    });
};

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Check if the user exists
            const checkUser = await User.findById(id);
            console.log('checkUser', checkUser);

            if (checkUser === null) {
                return resolve({
                    status: 'OK',
                    message: 'The user is not defined'
                });
            }
            // Delete the user
            await User.findByIdAndDelete(id);
            console.log('User deleted:', checkUser);

            resolve({
                status: 'OK',
                message: 'Delete User SUCCESS',
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUser = await User.find();
            console.log('All users fetched:', allUser); // Debug log
            resolve({
                status: 'OK',
                message: 'GET User SUCCESS',
                data: allUser
            });
        } catch (e) {
            console.error('Error in getAllUser:', e); // Debug log
            reject(e);
        }
    });
};

const getDetailsUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Check if the user exists
            const user = await User.findById(id);

            if (user === null) {
                return resolve({
                    status: 'OK',
                    message: 'The user is not defined'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: user
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser
}