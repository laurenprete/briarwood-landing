import { defineFunction } from "@aws-amplify/backend";
    
export const contactFormHandler = defineFunction({
  name: "contact-form-handler",
  entry: "./handler.ts"
});