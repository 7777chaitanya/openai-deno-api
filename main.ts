import {fetchCompletions} from './open-ai-apis/createCompletions.ts'


fetchCompletions("The quick brown fox").then((completion) => {
  console.log("completion =>",completion);
});
