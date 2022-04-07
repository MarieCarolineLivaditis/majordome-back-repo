// todo Import entities controllers
const profileController = require('./profile');
const signupController = require('./signup');
const loginController = require('./login');

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

module.exports = { apiController, profileController, signupController, loginController };
