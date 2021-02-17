import { PORT } from "./constants/pokeapi.constants";
import app from "./app";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
