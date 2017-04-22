
const compose =
  (...fns) => 
    (result) => {
      let list = fns.slice();
      while (list.length > 0) {
        result = list.pop()( result );
      }
      return result;
    };

export default compose;
