module.exports = {
  userLogin: async (req, res) => {
    // const { username, password } = req.body;
    const privateKey = "mateja";
    const { users } = await import("../models/mock-users.mjs");

    const user = users.find((user) => user.name === "Marisa");

    const password = "6wFWTYXGmcv9qva";
    const { p } = req.body.password;
    res.send("Correct");
  },
};
