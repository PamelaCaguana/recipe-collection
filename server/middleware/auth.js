import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        //grab token from headers, index 1 after Bearer[0]
        const token = req.headers.authorization.split(" ")[1];

        let decodedData;

        if(token){
            decodedData = jwt.verify(token, process.env.TEST_KEY);

            req.userId = decodedData?.id;
        }

        next();

    } catch (error) {
        console.log(error);
    }
}

export default auth;