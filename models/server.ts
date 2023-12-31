import express, { Application } from "express";
import userRoutes from "../routes/usuario";
import publicationRoutes from "../routes/Publication";
import commentRoutes from "../routes/Comment";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import db from "../db/connection";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
    publication: "/api/publication",
    comment: "/api/comment",
  };
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "4000";
    this.app.use(morgan("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded());
    this.app.use(express.json());
    this.routes();
    this.dbConnection();
    this.middlewares();
  }

  async dbConnection() {
    try {
      await db.sync({ alter: true });
      console.log("Data Conecction successful");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
    this.app.use(this.apiPaths.publication, publicationRoutes);
    this.app.use(this.apiPaths.comment, commentRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto  ${this.port}`);
    });
  }
}

export default Server;
