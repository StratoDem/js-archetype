/** @flow
 * StratoDem Analytics : test-env
 * Principal Author(s) : Michael Clawar
 * Secondary Author(s) :
 * Description :
 *
 *  (c) 2016- StratoDem Analytics, LLC
 *  All Rights Reserved
 */

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const $ = require('jquery');


Enzyme.configure({ adapter: new Adapter() });

global.$ = $;
global.jQuery = $;
