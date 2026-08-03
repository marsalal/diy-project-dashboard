import fs from "node:fs";
const requiredFiles=["README.md","CHANGELOG.md","SECURITY.md",".gitignore","index.html","assets/styles.css","assets/dashboard.js","data/projects.json",".github/workflows/validate.yml",".github/workflows/deploy-pages.yml"];
const forbiddenPatterns=[/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,/\/Users\//,/ghp_[A-Za-z0-9]+/,/github_pat_[A-Za-z0-9_]+/,/BEGIN (RSA |OPENSSH )?PRIVATE KEY/];
for(const file of requiredFiles){if(!fs.existsSync(file))throw new Error(`Missing required file: ${file}`)}
const data=JSON.parse(fs.readFileSync("data/projects.json","utf8"));
if(data.schemaVersion!==1)throw new Error("Unsupported schemaVersion");
if(!/^\d{4}-\d{2}-\d{2}$/.test(data.updatedAt))throw new Error("updatedAt must use YYYY-MM-DD");
if(!Array.isArray(data.projects)||!data.projects.length)throw new Error("At least one active project is required");
const ids=new Set();
for(const project of data.projects){
  for(const field of ["id","name","status","labor","cost","assumption"]){if(!project[field])throw new Error(`${project.id||"project"} missing ${field}`)}
  if(ids.has(project.id))throw new Error(`Duplicate project id: ${project.id}`);ids.add(project.id);
  if(!Number.isInteger(project.progress)||project.progress<0||project.progress>100)throw new Error(`${project.id} progress must be an integer from 0 to 100`);
  for(const field of ["nextTasks","materials","tools","sources"]){if(!Array.isArray(project[field]))throw new Error(`${project.id}.${field} must be an array`)}
  for(const source of project.sources){new URL(source.url)}
}
if(!ids.has(data.currentProjectId)||!ids.has(data.nextProjectId))throw new Error("Current and next project IDs must reference active projects");
for(const file of requiredFiles.filter(file=>!file.endsWith(".json"))){const content=fs.readFileSync(file,"utf8");for(const pattern of forbiddenPatterns){if(pattern.test(content))throw new Error(`Potential private data or secret detected in ${file}`)}}
console.log(`Validated ${data.projects.length} active projects and ${data.completed.length} completed projects.`);
