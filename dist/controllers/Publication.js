"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postComment = exports.getComments = exports.deletePublication = exports.updatePublication = exports.postPublication = exports.getPublication = exports.getPublications = void 0;
const publication_1 = __importDefault(require("../models/publication"));
const comment_1 = __importDefault(require("../models/comment"));
const usuario_1 = __importDefault(require("../models/usuario"));
const getPublications = async (req, res) => {
    const publication = await publication_1.default.findAll({
        include: [
            {
                model: comment_1.default,
                include: [{ model: usuario_1.default }],
            },
            {
                model: usuario_1.default,
            },
        ],
    });
    res.json({ publication });
};
exports.getPublications = getPublications;
const getPublication = async (req, res) => {
    const { id } = req.params;
    const publication = await publication_1.default.findOne({
        where: { id },
        include: [
            {
                model: comment_1.default,
                include: [{ model: usuario_1.default }],
            },
            {
                model: usuario_1.default,
            },
        ],
    });
    if (publication) {
        res.json({ publication });
    }
    else {
        res.status(404).json({
            msg: `No se encontro publicacion con id: ${id}`,
        });
    }
};
exports.getPublication = getPublication;
const postPublication = async (req, res) => {
    const { body } = req;
    try {
        const publication = await publication_1.default.create(body);
        res.json({ publication });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador de la base de datos",
            error: error,
        });
    }
};
exports.postPublication = postPublication;
const updatePublication = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "Update_publicacion",
        body,
        id,
    });
};
exports.updatePublication = updatePublication;
const deletePublication = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "Delete_publicacion",
        id,
    });
};
exports.deletePublication = deletePublication;
const getComments = async (req, res) => {
    // const comment = await Comment.findAll();
    //res.json({ comment });
};
exports.getComments = getComments;
const postComment = async (req, res) => {
    const { body } = req;
    try {
        const comment = await comment_1.default.create(body);
        res.json({ comment });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador de la base de datos",
        });
    }
};
exports.postComment = postComment;
//# sourceMappingURL=Publication.js.map