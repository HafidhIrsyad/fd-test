import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../store/action';

function App() {
  const { movie } = useSelector(s => s.movies)
  const dispatch  = useDispatch();

  useEffect(() => {
    dispatch(getMovie())
  }, [dispatch])

  return (
    <div className="md:flex md:flex-wrap mx-1 lg:mx-4">
      {console.log(movie)}
    </div>
  );
}

export default App;
