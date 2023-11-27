import express from 'express';
import cors from 'cors';
import {createConnection, getRepository, Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

const app = express();
const port = 3001;
const bcrypt = require('bcrypt');
app.use(cors());

app.use(express.json());
app.use((req, res, next) => {
    console.log(`Получен запрос на ${req.method} ${req.url}`);
    next();
});
const secretKey = 'SecretKey';

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id?: number = 1;

    @Column()
    username?: string = 'admin';

    @Column()
    email?: string = 'admin@mail.ru';

    @Column()
    password?: string = '123';
}

createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'admin',
    password: 'TaxFree3887!',
    database: 'ms_rb',
    synchronize: true,
    entities: [User],
})
    .then(() => {
        console.log('Подключено к базе данных');
    })
    .catch((error) => console.log('Ошибка подключения к базе данных: ', error));


// Маршруты
app.get('/', (req, res) => {
    res.send('Привет, мир!');
});

app.get('/users', async (req, res) => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.json(users);
});

app.post('/users', async (req, res) => {
    const userRepository = getRepository(User);
    const newUser = userRepository.create(req.body);
    const result = await userRepository.save(newUser);
    res.json(result);
});
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await getRepository(User).findOne({
            where: { username },
        });

        if (existingUser) {
            return res.status(400).json({ message: 'User with this username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User();
        newUser.username = username;
        newUser.password = hashedPassword;

        // Сохранение пользователя в базе данных
        await getRepository(User).save(newUser);

        res.json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({
            where: { username },
        });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/me', (req: any, res: Response) => {
    if (req.user) {
        res.json({ user: req.user });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
