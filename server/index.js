import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import express from "express";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import likeRoutes from "./routes/likes.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });
app.post("/server/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(201).json(file.filename);
});

app.use("/server/auth", authRoutes);
app.use("/server/users", userRoutes);
app.use("/server/posts", postRoutes);
app.use("/server/likes", likeRoutes);
app.use("/server/comments", commentRoutes);

app.listen(8900, () => {
  console.log("Successfully connected!");
});
