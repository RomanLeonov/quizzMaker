import { Router } from 'express';

import quiz from './quiz';

const router = Router();

const defaultRoutes = [
    {
        path: '/quiz',
        route: quiz,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;