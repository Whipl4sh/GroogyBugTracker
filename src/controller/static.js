module.exports = {
    index: async (req, res) => {
        try {
            return res.render('index');
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).send("Error");
        }
    }
}