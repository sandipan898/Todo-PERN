const express = require('express');
const cors = require('cors');
const todoRouter = require("./routes/todo");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRouter);

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});
