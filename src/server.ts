import { PORT } from './constants/pokeApi.constants';
import app from './app';

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
