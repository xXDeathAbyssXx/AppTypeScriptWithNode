import { Schema, model } from 'mongoose';

const BlockSchema = new Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    id: { type: String, required: true }
})

export default model('Block', BlockSchema)