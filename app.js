const express = require('express');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/blogs',blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});