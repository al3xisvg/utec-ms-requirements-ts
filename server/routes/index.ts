import { Request, Response, Router } from 'express'

import Requirements from '../models/requirements'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: '¡Hola desde Express con TypeScript!' })
})

router.post(
  '/requirements/create-single',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { nombre, codigo } = req.body

      if (!nombre || !codigo) {
        res.status(400).json({ message: 'Todos los campos son obligatorios' })
        return
      }

      const nuevoRequirement = new Requirements({
        nombre,
        codigo,
      })
      await nuevoRequirement.save()

      res.status(201).json(nuevoRequirement)
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error al crear el requerimiento', error })
    }
  }
)

router.get(
  '/requirements/list',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const requirements = await Requirements.find({})
        .sort({ createdAt: -1 })
        .lean()

      res.status(201).json({ requirements })
    } catch (error) {
      res.status(500).json({ message: 'Error al listar requerimientos', error })
    }
  }
)

router.get(
  '/requirements/obtain/:id',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params
      const requirements = await Requirements.findById(id)
        .sort({ createdAt: -1 })
        .lean()

      res.status(201).json({ requirements })
    } catch (error) {
      res.status(500).json({ message: 'Error al listar requerimientos', error })
    }
  }
)

export default router
