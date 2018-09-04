import { Application } from 'express';
import examplesRouter from './api/controllers/examples/router';
import graknRouter from './api/controllers/grakn/router';

export default function routes(app: Application): void {
	app.use('/api/v1/examples', examplesRouter).use('/api/v1/grakn', graknRouter);
}
