import { Router } from "express";
import { manager } from "../UsersManager.js";

const router = Router()

const user = {
  first_name: "Emanuel",
  last_name: "Ortega",
  email: "emanuel.ortega@noemail.com",
};

const users = [
  {
    first_name: "Emanuel",
    last_name: "Ortega",
    email: "emanuel.ortega@noemail.com",
  },
  {
    first_name: "Carlos",
    last_name: "Betancour",
    email: "carlosb@noemail.com",
  },
  {
    first_name: "Mariano",
    last_name: "Otero",
    email: "marioanoo@noemail.com",
  },
  {
    first_name: "Carlos",
    last_name: "Slim",
    email: "carloss@noemail.com",
  },
];

// Render plantillas
router.get("/view1", (req,res) => { 
    res.render("view1")
})

router.get("/view2", (req, res) => {
  res.render("view2");
});

router.get("/user", (req, res) => {
  res.render("user",{user})
})

router.get("/users", (req, res) => {
  res.render("users", { users });
});

router.get("/signup", (req, res) => {
  res.render("signup")
})

router.get("/user/:idUser", async (req,res) => {
  const { idUser } = req.params;
  try {
    const user = await manager.getUserById(parseInt(idUser));
    res.render("profile", { user });
  } catch (err) {
    res.render("profile", { err });
  }
});

export default router