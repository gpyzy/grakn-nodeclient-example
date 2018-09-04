import { Grakn } from 'grakn';

// var Grakn = require('grakn');
const grakn = new Grakn('localhost:48555', null);

const session = grakn.session('growthclick');

export class GraknService {
	async hello() {
		const tx = await session.transaction(0);
		const email = 'jony.yang@thermofisher.com';
		const resultIterator = await tx.query(`match $employee isa employee has email '${email}' ; limit 10; get;`); // This will return an Iterator of ConceptMap Answer
		const answer = await resultIterator.next(); // Take first ConceptMap Answer
		const person = answer.map().get('employee'); // Access map in Answer with answer.map() and take Concept associated to variable x from 'match $x isa person; get;'
		tx.close();
		return person;
	}
}

export default new GraknService();
