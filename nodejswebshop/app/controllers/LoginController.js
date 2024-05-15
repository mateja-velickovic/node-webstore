module.exports = {
  userLogin: async (req, res) => {
    // const { username, password } = req.body;
    const privateKey = "mateja";
    const { users } = await import("../models/mock-users.mjs");

    // us_ data from user
    const us_user = 2;
    const us_password = 2;
    
    const user = users.find((user) => user.name === "Marisa");

    const password = "6wFWTYXGmcv9qva";
    const { p } = req.body.password;
    res.send("Correct");
  },
};
