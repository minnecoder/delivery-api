import { createServer } from "./utils/server"
import { initDB } from "./utils/dbConnection";

const app = createServer()
initDB()

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
