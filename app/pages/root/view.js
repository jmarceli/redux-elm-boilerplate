import { view } from 'redux-elm';

import buildRouting from '../../routing';

// Just exports routes defined in routing file
export default view(({ history }) => buildRouting(history));
