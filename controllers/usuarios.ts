import { Request, Response } from "express";
import Usuario from "../models/usuario";
import Publication from "../models/publication";
import Comment from "../models/comment";

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll({
    include: [
      {
        model: Publication,

        include: [
          {
            model: Comment,
          },
        ],
      },
    ],
  });

  res.json({ usuarios });
};
export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id, {
    include: [
      {
        model: Publication,
      },
    ],
  });
  if (usuario) {
    res.json({ usuario });
  } else {
    res.status(404).json({
      msg: `No se encontro usuario con id: ${id}`,
    });
  }
};
export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const usuario = await Usuario.create(body);
    console.log(usuario.toJSON());
    if (usuario.tipo === 'Anonimo') {
      let randomNumber = Math.floor(Math.random() * 10) + 1;
      randomNumber = String(randomNumber).padStart(2, '0');
      usuario.imageUrl = `https://facelessapi.kiura.co/assets/avatars/Avatar-${randomNumber}.jpg`;
      console.log(usuario.imageUrl)
      await usuario.save();
    }
    res.json({ usuario });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador de la base de datos",
      error: error,
    });
  }
 };
 
 
 
export const updateUsuario = (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  res.json({
    msg: "Update_Usuarios",
    body,
    id,
  });
};
export const deleteUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "Delete_Usuarios",
    id,
  });
};
