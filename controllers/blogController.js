const blogController = {
    createBlog: (req, res) => {
        res.send('Blog created successfully');
    },
    readBlog: (req, res) => {
        res.send('Blog read successfully');
    },
    updateBlog: (req, res) => {
        res.send('Blog update successfully');
    },
    deleteBlog: (req, res) => {
        res.send('Blog delete successfully');
    }
}

module.exports = blogController;