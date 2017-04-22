
import compose from 'utils/compose';

import lowercase from 'utils/lowercase';
import collapse from 'utils/collapse-white-spaces';
import stripSymbols from 'utils/strip-symbols';

const tokenize = compose(lowercase, collapse, stripSymbols);

export default tokenize;
