import { v } from "./src/main/schema.js"

const schema = {
    firstName:{
        v:v(true, "this field is required").isString("this field should be string")
    },
    lastName:{
        v:v(true, "this field is required").isString("this field should be string")
    }
}

console.log(schema)