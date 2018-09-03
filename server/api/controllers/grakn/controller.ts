import GraknService from '../../services/grakn.service';
import { Request, Response } from 'express';

export class Controller {
	hello(req: Request, res: Response): void {
		res.send(GraknService.hello);
	}
}
export default new Controller();
