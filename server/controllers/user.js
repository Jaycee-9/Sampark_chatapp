import User from "../models/user.js";

export const userLogin = async (req, res) => {
  try {
    const sub = req.body.sub;
    const user = await User.findOne({ sub: sub });

    if (user) {
      return res.status(200).json(user);
    } else {
      const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        picture: req.body.picture,
        sub: req.body.sub,
      });

      await newUser.save();

      return res.status(201).json(newUser);
    }
  } catch (error) {
    console.error("Error in userLogin:", error);
    return res.status(500).json({ msg: "Something went wrong in userLogin" });
  }
};
