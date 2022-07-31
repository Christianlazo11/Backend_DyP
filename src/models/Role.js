import { Schema, model } from "mongoose";

const roleSchemanew = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Role", roleSchema);
