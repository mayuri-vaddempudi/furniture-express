import express from "express";
import { products } from "../data/products.js";

const router = express.Router();


router.get("/", (req, res) => {
    res.render("pages/list", {
        title: "Products",
        items: products,
        baseUrl: "/products"
    });
});


router.get("/:id", (req, res) => {
    const product = products[req.params.id];

    if (!product) {
        return res.status(404).send("Product not found");
    }

    res.render("pages/detail", { item: product });
});

export default router;
