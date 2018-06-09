const axios = require('axios');
const COGNITIVE_SERVICE_ENDPOINT ='https://southeastasia.api.cognitive.microsoft.com/face/v1.0';
const API_KEY = process.env.COGNITIVE_SERVICE_API_KEY;


module.exports = async function (context, req) {
    const faceListName = req.query.name;
    const addFaceListAPIEndpoint = COGNITIVE_SERVICE_ENDPOINT 
        + '/facelists/' + faceListName;

    const response = await axios.put(
        addFaceListAPIEndpoint, 
        {
            name: faceListName
        }, 
        {
            headers: {
                'Ocp-Apim-Subscription-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        }
    );

    context.res = {
        status: 200
    };
};