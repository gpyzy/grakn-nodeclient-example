// https://github.com/graknlabs/grakn/blob/master/client-nodejs/src/Grakn.js
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-class-d-ts.html

// AttributeType.DATA_TYPE
// https://github.com/graknlabs/grakn/blob/2e6b67bd7a5eb6a64473a65b2221c9de6fab0b74/client-protocol/proto/Concept.proto#L487

// Grakn.txType
// enum Type {
//     READ = 0;
//     WRITE = 1;
//     BATCH = 2;
// }

// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ This is the module template file for class modules.
 *~ You should rename it to index.d.ts and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ Note that ES6 modules cannot directly export class objects.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ If this module is a UMD module that exposes a global variable 'myClassLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
// export as namespace myClassLib;

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = Grakn;

/*~ Write your module's methods and properties in this class */
declare class Grakn {
	constructor(uri: string, credentials: any);

	session: any;
	keyspace: any;
	dataType: number;
	txType: number;
}

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block.
 */
// declare namespace MyClass {
// 	export interface MyClassMethodOptions {
// 		width?: number;
// 		height?: number;
// 	}
// }