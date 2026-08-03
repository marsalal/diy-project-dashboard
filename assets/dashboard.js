const tones={"concrete-pad":"brown","wpc-wall":"blue","guanacaste-tables":"amber","adirondack-corner":"green"};
const esc=value=>String(value).replace(/[&<>'"]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
const projectById=(data,id)=>data.projects.find(project=>project.id===id);
const priorityTags=project=>`<div class="priority-tags"><span>ROI: ${esc(project.priority.roi)}</span><span>Complexity: ${esc(project.priority.complexity)}</span><span>${project.priority.toolsReady?"Tools ready":"Waiting on tools"}</span></div>`;

function renderTopProject(project,label){
  return `<article class="top-project" data-tone="${tones[project.id]||"blue"}"><div><span class="top-label">${esc(label)}</span><h3>${esc(project.name)}</h3></div><div class="priority-score" aria-label="Priority score: ${project.priority.score} out of 100"><span>Priority score</span><strong>${project.priority.score}<small>/100</small></strong></div>${priorityTags(project)}<p>${esc(project.priority.reasons[0])}</p></article>`;
}

function renderProject(project){
  const tasks=project.nextTasks.map(task=>`<li>${esc(task)}</li>`).join("");
  const materials=project.materials.map(material=>`<tr><td>${esc(material.item)}</td><td>${esc(material.quantity)}</td><td>${esc(material.note)}</td></tr>`).join("");
  const tools=project.tools.map(tool=>`<span class="chip">${esc(tool)}</span>`).join("");
  const sources=project.sources.length?`<div class="sources"><h4>Sources</h4>${project.sources.map(source=>`<a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.label)}</a>`).join("")}</div>`:"";
  return `<details class="project" data-tone="${tones[project.id]||"blue"}"><summary><div class="summary-row"><div><span class="status">Priority ${project.priority.rank} · ${esc(project.status)}</span><h3>${esc(project.name)}</h3>${priorityTags(project)}<small>Click to view materials, tools, and next steps</small></div><span class="percentage">${project.progress}%</span></div><div class="bar" aria-label="${project.progress}% complete"><i style="width:${project.progress}%"></i></div></summary><div class="detail"><div class="project-grid"><section><h4>Next tasks</h4><ul>${tasks}</ul></section><aside class="metrics"><div><span>Estimated labor</span><b>${esc(project.labor)}</b></div><div><span>Estimated remaining cost</span><b>${esc(project.cost)}</b></div></aside></div><p class="assumption"><strong>Planning assumption:</strong> ${esc(project.assumption)}</p><h4>Quantified materials</h4><div class="table-wrap"><table><thead><tr><th>Material</th><th>Quantity</th><th>Planning note</th></tr></thead><tbody>${materials}</tbody></table></div><h4>Tools & equipment</h4><div class="chips">${tools}</div>${sources}</div></details>`;
}

function setHistoryOpen(open){
  document.querySelector("#history-panel").classList.toggle("open",open);
  document.querySelector("#history-panel").setAttribute("aria-hidden",String(!open));
  document.querySelector("#history-toggle").setAttribute("aria-expanded",String(open));
  document.querySelector("#history-backdrop").hidden=!open;
  if(open)document.querySelector("#history-close").focus();
}
document.querySelector("#history-toggle").addEventListener("click",()=>setHistoryOpen(true));
document.querySelector("#history-close").addEventListener("click",()=>setHistoryOpen(false));
document.querySelector("#history-backdrop").addEventListener("click",()=>setHistoryOpen(false));
document.addEventListener("keydown",event=>{if(event.key==="Escape")setHistoryOpen(false)});

async function loadDashboard(){
  try{
    const response=await fetch("data/projects.json",{cache:"no-store"});
    if(!response.ok)throw new Error("Project data request failed");
    const data=await response.json();
    const current=projectById(data,data.currentProjectId);
    const next=projectById(data,data.nextProjectId);
    document.querySelector("#updated").textContent=`Updated ${data.updatedAt} · Costa Rica · Costs in ${data.currency}`;
    document.querySelector("#current-project").textContent=current?.name||"Not selected";
    document.querySelector("#next-project").textContent=next?.name||"Not selected";
    document.querySelector("#active-count").textContent=`${data.projects.length} active`;
    const ranked=[...data.projects].sort((a,b)=>a.priority.rank-b.priority.rank);
    const nextPriorities=ranked.filter(project=>project.id!==data.currentProjectId).slice(0,2);
    const top=[current,...nextPriorities];
    document.querySelector("#top-projects").innerHTML=top.map((project,index)=>renderTopProject(project,index===0?"Current project":`Priority ${project.priority.rank}`)).join("");
    document.querySelector("#projects").innerHTML=ranked.map(renderProject).join("");
    document.querySelector("#history-list").innerHTML=data.completed.length?data.completed.map(item=>`<article><h3>${esc(item.name)}</h3><time datetime="${esc(item.completedAt)}">${esc(item.completedAt)}</time><p>${esc(item.summary)}</p></article>`).join(""):"<p>No completed projects recorded yet.</p>";
  }catch(error){document.querySelector("#load-error").hidden=false;document.querySelector("#projects").setAttribute("aria-busy","false");}
}
loadDashboard();
