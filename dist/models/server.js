"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const Publication_1 = __importDefault(require("../routes/Publication"));
const Comment_1 = __importDefault(require("../routes/Comment"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: "/api/usuarios",
            publication: "/api/publication",
            comment: "/api/comment",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "4000";
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded());
        this.app.use(express_1.default.json());
        this.routes();
        this.dbConnection();
        this.middlewares();
    }
    async dbConnection() {
        try {
            await connection_1.default.sync({ alter: true });
            console.log("Data Conecction successful");
        }
        catch (error) {
            throw new Error(error);
        }
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
        this.app.use(this.apiPaths.publication, Publication_1.default);
        this.app.use(this.apiPaths.comment, Comment_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto  ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map