import express from "express";
import path from "path";
import "dotenv/config";

import { collections } from "./data/collections.js";
import { products } from "./data/products.js";

import homeRouter from "./routes/homeRouter.js";
import productsRouter from "./routes/productsRouter.js";
import collectionsRouter from "./routes/collectionsRouter.js";

const app = express();
const __dirname = path.resolve();
const port = process.env.PORT || 3000;

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));

// Combine data 
const allItems = [...collections, ...products];

// Home page 
app.get("/", (req, res) => {
    res.render("pages/index", {
        pageType: "all",
        sidebarItems: allItems,
        collections: collections,
        products: products
    });
});



// Routers
app.use("/products", productsRouter);
app.use("/collections", collectionsRouter);
app.use("/", homeRouter);

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
