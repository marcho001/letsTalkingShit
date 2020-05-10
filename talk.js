function createRandomTrashTalking(Target){
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
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code','坐到長痔瘡','重度近視','長一頭白髮','英打快一點','學個新套件','年薪一兩百萬','走兩步就喘','每天洗個頭'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計','配色配好一點','純CSS製圖','多接幾個案子','衣服穿好看點'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢','肝指數過高','幾天不睡覺','喝幾瓶威士忌','養幾個小三','多發幾個月年終','買幾台賓士','給你買個單']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常','不難','很輕鬆','隨便都可以','馬馬虎虎']
  const selfProductWord = ['你弱到不行','你真是可悲','你有夠可憐','你不要再鬧了','你讓人想笑']


  let taskOfJob = task[job]
  let newTask = Math.floor(Math.random() * taskOfJob.length)
  let newPhrase = Math.floor(Math.random() * phrase.length)
  let randomWord = Math.floor(Math.random() * selfProductWord.length)
  let random = Math.floor(Math.random() * 2)

  if(random){
    return `身為一個${target[job]}，${taskOfJob[newTask]}，${phrase[newPhrase]}吧??`
  } else {
    return `${target[job]}，${selfProductWord[randomWord]}`
  }
  
}

module.exports = createRandomTrashTalking