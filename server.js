global.window = {
  location: {},
};

import { createRequire } from "module";
const require = createRequire(import.meta.url);
global.EventSource = require("eventsource");
import { client } from "@gradio/client";

 async function initialize_database() {
   try {
     const response_0 = await fetch(
       "https://github.com/gradio-app/gradio/raw/main/test/test_files/sample_file.pdf"
     );
     const exampleFile = await response_0.blob();
     console.log(exampleFile);

     const app = await client(
       "https://namanroxx-pdf-chatbot.hf.space/--replicas/ocvp9/"
     );
    //  console.log(app);
 const result = await app.predict("/initialize_database", [
   exampleFile, 	// blob in 'Upload your PDF documents (single or multiple)' File component		
   100, // number (numeric value between 100 and 1000) in 'Chunk size' Slider component		
   10, // number (numeric value between 10 and 200) in 'Chunk overlap' Slider component
 ]);
    console.log(result);
   } catch (err) {
     console.log(err);
   }
 }

async function test_api() {
  const grapi_test = await client("gradio/hello_world");
  const apitest_result = await grapi_test.predict("/predict", ["John"]);
  console.log(apitest_result?.data);
}

// test_api();
initialize_database();
