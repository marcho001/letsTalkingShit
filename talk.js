function trashTalk(Target){
  let  job = Target || ''
  
  if(job === ''){
    return '請選擇一個職業'
  }
  const target = {
    engineer:'工程師',
    designer:'設計師',
    entrepreneur:'創業家'
  }
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  let taskOfJob = task[job]
  let newTask = Math.floor(Math.random() * taskOfJob.length)
  let newPhrase = Math.floor(Math.random() * phrase.length)
  return `身為一個${target[job]}，${taskOfJob[newTask]}，${phrase[newPhrase]}吧??`
}

module.exports = trashTalk