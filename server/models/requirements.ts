import mongoose, { Schema, Document } from 'mongoose'

export interface IRequirement extends Document {
  nombre: string
  codigo: string
}

const RequirementSchema = new Schema<IRequirement>(
  {
    nombre: { type: String, required: true },
    codigo: { type: String, required: true },
  },
  { timestamps: true } // 'createdAt' y 'updatedAt'
)

const Requirements = mongoose.model<IRequirement>(
  'Requirements',
  RequirementSchema
)

export default Requirements
