import GraknService from '../../services/grakn.service';
import { Request, Response } from 'express';

export class Controller {
	async hello(req: Request, res: Response): Promise<void> {
		let employee= await GraknService.hello();
		let id, baseType = {employee.id,employee.baseType};
		res.json({
			person: {employee.id};
		});
	}
}
export default new Controller();
