import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll();

  res.json({ usuarios });
};
export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);
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
    const usuario = new Usuario(body);
    res.json({ usuario });
    await usuario.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador de la base de datos",
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
