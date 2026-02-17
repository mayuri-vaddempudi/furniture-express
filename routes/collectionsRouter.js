import express from "express";
import { collections } from "../data/collections.js";

const router = express.Router();


router.get("/", (req, res) => {
    res.render("pages/list", {
        title: "Collections",
        items: collections,
        baseUrl: "/collections"
    });
});

router.get("/:id", (req, res) => {
    const collection = collections[req.params.id];

    if (!collection) {
        return res.status(404).send("Collection not found");
    }

    res.render("pages/detail", { item: collection });
});

export default router;
