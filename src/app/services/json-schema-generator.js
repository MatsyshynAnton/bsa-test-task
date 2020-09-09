import generateSchema from 'generate-schema';

export class JsonShemaGenerator {

    static getJsonSchema(obj, objName) {
        return generateSchema.json(objName, obj)
    }
}