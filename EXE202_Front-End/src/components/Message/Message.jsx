const { message } = require("antd")

const success = (mes = 'Success') => {
    message.success('This is a success message')
};

const error = (mes = 'Error') => {
    message.error(mes)
};

const warning = (mes = 'Warning') => {
    message.warning(mes)
};

export { success, error, warning }