import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export function signToken(data: object, expiresIn: string = '30d') {
    return jwt.sign({
        ...data
    }, 'secret', { expiresIn });
}

export function verifyToken(token: string) {
    return jwt.verify(token, 'secret');
}

export function hashPassword(password: string) {
    return bcrypt.hash(password, 10)
}

export function comparePassword(password: string, hash: string) {
    return bcrypt.compare(password, hash)
}
