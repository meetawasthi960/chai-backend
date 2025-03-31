import express from 'express';
import cors from 'cors';  // ✅ Import CORS

const app = express();

app.use(cors());  // ✅ Enable CORS for all requests

// Get a list of jokes
app.get('/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: "A joke", content: "This is a joke" },
        { id: 2, title: "Ram", content: "Jai Shree Ram" },
        { id: 3, title: "Shyam", content: "Radhe Radhe" },
        { id: 4, title: "Om", content: "Om Namah Shivaya" },
        { id: 5, title: "Krishna", content: "Hare Rama" }
    ];
    res.json(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});
