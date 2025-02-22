import { Request, Response, Router } from 'express'

import Requirements from '@/models/requirements'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: '¡Hola desde Express con TypeScript!' })
})

router.post(
  '/requirements/create',
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

export default router
