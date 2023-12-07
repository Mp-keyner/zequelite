import { Request, Response } from "express";
import Publication from "../models/publication";
import Comment from "../models/comment";
import User from "../models/usuario";

export const getPublications = async (req: Request, res: Response) => {
  const publication = await Publication.findAll({
    include: [
      {
        model: Comment,
        include: [{ model: User }],
      },
      {
        model: User,
      },
    ],
  });

  res.json({ publication });
};
export const getPublication = async (req: Request, res: Response) => {
  const { id } = req.params;
  const publication = await Publication.findOne({
    where: { id },
    include: [
      {
        model: Comment,
        include: [{ model: User }],
      },
      {
        model: User,
      },
    ],
  });
  if (publication) {
    res.json({ publication });
  } else {
    res.status(404).json({
      msg: `No se encontro publicacion con id: ${id}`,
    });
  }
};
export const postPublication = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const publication = await Publication.create(body);
    res.json({ publication });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador de la base de datos",
      error: error,
    });
  }
};

export const updatePublication = (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  res.json({
    msg: "Update_publicacion",
    body,
    id,
  });
};
export const deletePublication = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "Delete_publicacion",
    id,
  });
};

export const getComments = async (req: Request, res: Response) => {
  // const comment = await Comment.findAll();
  //res.json({ comment });
};

export const postComment = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const comment = await Comment.create(body);
    res.json({ comment });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador de la base de datos",
    });
  }
};