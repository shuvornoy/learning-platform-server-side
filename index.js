const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('Course API Running');
});

app.get('/news-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(courses);
    }
    else {
        const category_courses = courses.filter(n => n.category_id === id);
        res.send(category_courses);
    }
})

app.get('/courses', (req, res) =>{
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(n => n._id === id);
    res.send(selectedCourses);
});

app.listen(port, () => {
    console.log('Course Server running on port', port);
})