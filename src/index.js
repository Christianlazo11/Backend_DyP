import { app, PORT } from "./app";
import "./database";

app.listen(PORT, () => {
  console.log(`Server Listen on port  ${PORT}`);
});
