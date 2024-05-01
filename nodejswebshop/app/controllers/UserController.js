module.exports = {
  profile: async (req, res) => {
    const { users } = await import("../models/mock-users.mjs");
    res.send(users);
  },
  /*getUser_BI: async (req, res) => {
    const { users } = await import("../models/mock-users.mjs");
    const userId = parseInt(req.params.id);
    const user = users.find((user) => user.id === userId);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  },*/
  getUser_BN: async (req, res) => {
    const { users } = await import("../models/mock-users.mjs");
    const firstName = req.params.name;

    // Trouver un utilisateur correspondant
    const user = users.find(
      (user) => user.name.toLowerCase() === firstName.toLowerCase()
    );

    if (user) {
      res.json(user);
    } else {
      // Erreur client si l'utilisateur n'existe pas
      res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  },
};
