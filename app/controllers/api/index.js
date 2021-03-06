// todo Import entities controllers
const signupController = require('./signup');
const loginController = require('./login');
const resetPasswordController = require('./resetPassword');
const profileController = require('./profile');
const clientController = require('./client');
const projectController = require('./project');
const interventionController = require('./intervention');
const pictureController = require('./picture');
const documentController = require('./document');
const supplierController = require('./supplier');
const changePasswordController = require('./changePassword');

const apiController = {
    /**
     * Default API controller to show documention url.
     * ExpressMiddleware signature
     * @param {object} request Express request object (not used)
     * @param {object} response Express response object
     * @returns {string} Route API JSON response
     */
    home(request, response) {
        const fullUrl = `${request.protocol}://${request.get('host')}`;
        return response.json({
            documentation_url: `${fullUrl}${process.env.API_DOCUMENTATION_ROUTE}`,
        });
    },
};

// todo Add to export entities controllers
module.exports = {
    apiController,
    signupController,
    loginController,
    profileController,
    clientController,
    projectController,
    interventionController,
    pictureController,
    documentController,
    resetPasswordController,
    changePasswordController,
    supplierController,
};
