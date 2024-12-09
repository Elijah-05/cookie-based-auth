import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
const JWT_SECRET = "your_secret_key";

router.get("/", (req, res) => {
  res.send("Hello");
});

// Login Route
router.post("/login", (req: Request, res: Response): any => {
  const { username, password } = req.body;
  // Dummy validation (replace with database logic)
  if (username === "Ella" && password === "password") {
    const token = jwt.sign({ username, password }, JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("logged In, token: ", token);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Set to true in production
      sameSite: "strict",
    });
    return res
      .status(200)
      .send({ user: { name: "Elijah", phone: "09327423432", age: "27" } });
  }

  return res.status(401).json({ message: "Invalid credentials" }).end();
});

// Check Authentication Route
router.get("/check", (req, res): any => {
  const token = req.cookies.token;

  console.log("check Token: ", token);

  if (!token) {
    res.status(401).json({ authenticated: false });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return res.status(200).json({ authenticated: true, user: decoded });
  } catch (err) {
    return res.status(401).json({ authenticated: false });
  }
});

// Logout Route
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
});

export default router;
