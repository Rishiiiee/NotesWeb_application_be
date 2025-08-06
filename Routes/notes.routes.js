const express = require("express");
const { Createnotes, testRoute , DeleteNotes,UpdateNotes,GetallNotes,getsinglenote } = require("../Controller/notes.controller");
const CheckAuth = require("../middlewares/auth.middleware");

const notesRouter = express.Router();

notesRouter.get("/test", testRoute);

notesRouter.post("/createNotes", CheckAuth, Createnotes)

notesRouter.get("/getallNotes", CheckAuth, GetallNotes)

notesRouter.delete("/delete/:noteId", CheckAuth, DeleteNotes);

notesRouter.patch("/update/:noteId", CheckAuth, UpdateNotes);

notesRouter.get("/singlenote/:noteId", CheckAuth, getsinglenote)

module.exports = notesRouter;