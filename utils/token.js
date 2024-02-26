import jwt from 'jsonwebtoken';

function generateJWTToken(user) {
    const payload = {
        userId: user._id,
        email: user.email,
    };

    const secret = process.env.JWT_SECRET;

    try {
        const token = jwt.sign(payload, secret, { expiresIn: '1h' });
        return token;
    } catch (error) {
        console.error(error);
        throw new Error('Error generating JWT token');
    }
}

export default generateJWTToken;