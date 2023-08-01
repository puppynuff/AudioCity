import express from "express";
import mainDatabase from "../../..";
const ROUTER = express.Router();

ROUTER.get("/getAllSongs", (req, res) => {
    let songs = mainDatabase.songs;

    res.json({
        songs : songs
    });
});

export { ROUTER as getAllSongs };