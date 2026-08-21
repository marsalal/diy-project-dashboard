import fs from "node:fs";
const requiredFiles=["AGENTS.md",".agents/skills/weekly-diy-dashboard/SKILL.md",".agents/skills/website-designer/SKILL.md","README.md","CHANGELOG.md","SECURITY.md",".gitignore","index.html","assets/styles.css","assets/dashboard-ui.css","assets/dashboard.js","data/projects.json",".github/workflows/validate.yml",".github/workflows/deploy-pages.yml"];
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
  if(!project.priority||typeof project.priority!=="object")throw new Error(`${project.id} missing priority`);
  if(!Number.isInteger(project.priority.rank)||project.priority.rank<1)throw new Error(`${project.id} priority.rank must be a positive integer`);
  if(!Number.isInteger(project.priority.score)||project.priority.score<0||project.priority.score>100)throw new Error(`${project.id} priority.score must be an integer from 0 to 100`);
  if(!["High","Medium","Low"].includes(project.priority.roi))throw new Error(`${project.id} priority.roi must be High, Medium, or Low`);
  if(!["High","Medium","Low"].includes(project.priority.complexity))throw new Error(`${project.id} priority.complexity must be High, Medium, or Low`);
  if(typeof project.priority.toolsReady!=="boolean")throw new Error(`${project.id} priority.toolsReady must be boolean`);
  if(!Array.isArray(project.priority.reasons)||!project.priority.reasons.length)throw new Error(`${project.id} priority.reasons must be a non-empty array`);
  for(const field of ["nextTasks","materials","tools","sources"]){if(!Array.isArray(project[field]))throw new Error(`${project.id}.${field} must be an array`)}
  if(project.expenseReport!==undefined){
    const report=project.expenseReport;
    for(const field of ["status","finalizedAt","total","items"]){if(report[field]===undefined)throw new Error(`${project.id}.expenseReport missing ${field}`)}
    if(!Array.isArray(report.items)||!report.items.length)throw new Error(`${project.id}.expenseReport.items must be a non-empty array`);
    for(const item of report.items){
      for(const field of ["date","item","quantity","amount","description"]){if(item[field]===undefined||item[field]==="")throw new Error(`${project.id}.expenseReport item missing ${field}`)}
      if(typeof item.amount!=="number"||item.amount<0)throw new Error(`${project.id}.expenseReport item amount must be a non-negative number`);
    }
    const itemTotal=report.items.reduce((total,item)=>total+item.amount,0);
    if(Math.abs(itemTotal-report.total)>0.001)throw new Error(`${project.id}.expenseReport total does not match its line items`);
  }
  for(const source of project.sources){new URL(source.url)}
}
if(new Set(data.projects.map(project=>project.priority.rank)).size!==data.projects.length)throw new Error("Priority ranks must be unique");
if(!ids.has(data.currentProjectId)||!ids.has(data.nextProjectId))throw new Error("Current and next project IDs must reference active projects");
for(const file of requiredFiles.filter(file=>!file.endsWith(".json"))){const content=fs.readFileSync(file,"utf8");for(const pattern of forbiddenPatterns){if(pattern.test(content))throw new Error(`Potential private data or secret detected in ${file}`)}}
console.log(`Validated ${data.projects.length} active projects and ${data.completed.length} completed projects.`);
