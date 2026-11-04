(() => {
  const data = window.EXAM_SUPPLEMENTS = window.EXAM_SUPPLEMENTS || {};
  const row = (n, A, B, C, D) => ({n, choices: {A, B, C, D}});
  const upsertRows = (year, rows) => {
    data[year] = data[year] || {cloze: {passage: "", options: []}};
    data[year].cloze = data[year].cloze || {passage: "", options: []};
    const replacements = new Map(rows.map(item => [item.n, item]));
    data[year].cloze.options = (data[year].cloze.options || []).filter(item => !replacements.has(item.n)).concat(rows).sort((a, b) => a.n - b.n);
  };

  upsertRows("2010", [
    row(16, "duly", "accidentally", "unpredictably", "suddenly"),
    row(17, "failed", "ceased", "started", "continued"),
    row(18, "Therefore", "Furthermore", "However", "Meanwhile"),
    row(19, "attempted", "tended", "chose", "intended"),
    row(20, "breaking", "climbing", "surpassing", "hitting")
  ]);
  data["2010"].cloze.answers = "ABCBCBDACDCAADBADCBD".split("");

  upsertRows("2020", [
    row(11, "insufficient", "bound", "likely", "slow"),
    row(19, "promise", "experience", "campaign", "competition")
  ]);

  data["2021"] = data["2021"] || {cloze: {passage: "", options: []}};
  data["2021"].cloze = {
    passage: "",
    options: [
      row(1,"pauses","returns","peaks","fades"), row(2,"alternatively","formally","accidentally","generally"),
      row(3,"while","since","once","until"), row(4,"detection","accumulation","consumption","separation"),
      row(5,"possibility","decision","goal","requirement"), row(6,"delay","ensure","seek","utilize"),
      row(7,"modified","supported","included","predicted"), row(8,"devoted","compared","converted","applied"),
      row(9,"with","above","by","against"), row(10,"lived","managed","scored","played"),
      row(11,"ran out","set off","drew in","went by"), row(12,"superior","attributable","parallel","resistant"),
      row(13,"restored","isolated","involved","controlled"), row(14,"alter","spread","remove","explain"),
      row(15,"compensations","symptoms","demands","treatments"), row(16,"Likewise","Meanwhile","Therefore","Instead"),
      row(17,"change","watch","count","take"), row(18,"well-being","process","formation","coordination"),
      row(19,"level","love","knowledge","space"), row(20,"design","routine","diet","prescription")
    ],
    answers: "CDABAACBACDBCDDCDAAC".split("")
  };
  delete data["2021"].translationPages;
  delete data["2021"].writingPages;
  data["2021"].translationAnswers = [
    "战后，这些社会的高校入学率仍大致维持在战前几十年相关年龄群体的3%至5%。",
    "这些社会对接受高等教育的需求也扩展到了战前从未想过上大学的群体和社会阶层。",
    "二十世纪六十年代，许多西欧国家的高校学生人数每五年翻一番；到七十年代中期，又在七年、八年或十年内再翻一番。",
    "当新教职员主要是刚完成研究生学习的年轻人时，他们在很大程度上会界定该院系的学术生活规范。",
    "高增长率增加了学术创新的机会，也削弱了在稳定或缓慢增长时期让教师和学生融入学术共同体的形式与过程。"
  ];
  data["2021"].writingAnswers = {
    partA: "Dear Jack,\nCongratulations on your graduation. If you plan to find a job in China, I suggest that you first learn about the industries and cities that match your interests. Prepare a concise résumé in both English and Chinese, and emphasize practical skills, internships and teamwork. It is also helpful to use reliable recruitment websites and attend job fairs. Before each interview, research the employer and practise answering common questions. Basic Chinese will make communication and daily life much easier.\nI hope you will soon find a satisfying position.\nYours,\nLi Ming",
    partB: "The drawing presents a conversation between a father and his child. The child says that many classmates find learning traditional opera boring, while the father asks whether the child personally enjoys it and replies that this alone is enough.\nThe picture stresses the importance of independent judgment. When making choices, young people are easily influenced by popular opinions or the preferences of their peers. Yet genuine interest provides lasting motivation and allows a person to develop distinctive strengths. Blindly following others may bring temporary acceptance, but it often causes people to abandon what truly matters to them.\nWe should listen to reasonable advice without surrendering our own judgment. If an interest is healthy and meaningful, we ought to explore it patiently, even when it is not fashionable. Respecting personal passion is often the first step toward confidence, persistence and real achievement."
  };

  data["2023"] = data["2023"] || {cloze: {passage: "", options: []}};
  data["2023"].cloze = {
    passage: "",
    options: [
      row(1,"displayed","occupied","located","equipped"), row(2,"privately","regularly","respectively","permanently"),
      row(3,"definition","transition","substitution","combination"), row(4,"classify","record","describe","connect"),
      row(5,"apart from","instead of","such as","along with"), row(6,"construction","restoration","impression","evaluation"),
      row(7,"doubted","faced","accepted","reduced"), row(8,"assigned","subjected","accustomed","opposed"),
      row(9,"so that","even if","now that","in case"), row(10,"talking","starting","breaking","meeting"),
      row(11,"By the way","On occasion","In comparison","As a result"), row(12,"heritage","revival","exchange","status"),
      row(13,"with regard to","in spite of","as well as","in line with"), row(14,"completing","influencing","resuming","pioneering"),
      row(15,"aided","invested","failed","competed"), row(16,"Rather","Indeed","Otherwise","However"),
      row(17,"go in for","stand up for","close in on","stock up on"), row(18,"believed","predicted","recalled","implied"),
      row(19,"until","because","unless","although"), row(20,"ruins","debt","fashion","series")
    ],
    answers: "CADCCABBADDCCBABDADA".split("")
  };
  data["2023"].translationAnswers = [
    "人工智能还可以识别顾客在爱好、喜爱名人、音乐和时尚方面的生活方式选择，从而为通过社交媒体发布的营销信息提供独特内容。",
    "有些人认为，人工智能通过削弱创造力和取消职位而对营销人员的角色产生负面影响，但他们也意识到它能降低成本并创造新信息。",
    "用于模拟人类互动的算法正引发许多这类担忧，尤其是因为没有人真正确定利用人工智能与顾客互动会产生什么结果。",
    "如果顾客不愿共享数据，人工智能就会缺少必要信息，无法有效运行，也无法运用机器学习改进营销内容和沟通。",
    "以顾及目标顾客需求的非侵扰方式传递营销信息，是数字营销人员面临的关键挑战之一。"
  ];
  data["2023"].writingAnswers = {
    partA: "NOTICE\nStudent Assistant Wanted\nProfessor Smith is looking for a student assistant for a research project on campus sports activities. The assistant will help design questionnaires, interview students, organize survey data and prepare a brief project report.\nApplicants should be responsible, patient and interested in sports. Good communication skills and basic ability to use office software are required. Previous experience in surveys or data processing will be an advantage. The work will take about five hours each week for one month.\nPlease send a short résumé to sportsproject@university.edu before Friday.\nLi Ming"
  };

  data["2025"] = data["2025"] || {cloze: {passage: "", options: []}};
  data["2025"].cloze = {
    passage: "",
    options: [
      row(1,"relevant","prone","available","alien"), row(2,"accidentally","frequently","gradually","temporarily"),
      row(3,"disguised","submerged","relocated","isolated"), row(4,"legends","programs","remains","surroundings"),
      row(5,"across","off","under","via"), row(6,"currents","rivers","seasons","winds"),
      row(7,"elevated","separated","comprised","protected"), row(8,"gathering","restoring","updating","supplying"),
      row(9,"when","until","after","once"), row(10,"belongings","resources","products","structures"),
      row(11,"preserve","select","display","examining"), row(12,"Despite","Unlike","Besides","Among"),
      row(13,"unchallenged","unknown","unorganized","undisturbed"), row(14,"suspended","transferred","resumed","canceled"),
      row(15,"policies","theories","documents","techniques"), row(16,"ordered","provided","employed","adjusted"),
      row(17,"effect","light","reality","mind"), row(18,"crossed","connected","blocked","altered"),
      row(19,"expecting","suggesting","predicting","recalling"), row(20,"robust","diverse","marginal","dependent")
    ],
    answers: "BCBCBADAADDADCDCBBBA".split("")
  };

  window.CLOZE_TRANSLATIONS = {
    "2021": {
      pauses:"暂停", returns:"返回", peaks:"达到顶峰", fades:"逐渐减弱", alternatively:"作为另一种选择", formally:"正式地", accidentally:"偶然地", generally:"通常；总体上",
      while:"虽然；尽管", since:"由于；自从", once:"一旦；曾经", until:"直到", detection:"检测", accumulation:"积累；堆积", consumption:"消耗", separation:"分离",
      possibility:"可能性", decision:"决定", goal:"目标", requirement:"要求", delay:"延缓", ensure:"确保", seek:"寻求", utilize:"利用",
      modified:"修改了的", supported:"支持了的", included:"包含了的", predicted:"预测了的", devoted:"投入于", compared:"把……作比较", converted:"转化", applied:"应用",
      with:"具有；带有", above:"在……之上", by:"通过；靠", against:"反对；倚着", lived:"生活", managed:"设法完成", scored:"得分；取得……结果", played:"发挥；玩",
      "ran out":"耗尽", "set off":"出发；引发", "drew in":"吸引；临近", "went by":"流逝；过去", superior:"更优越的", attributable:"可归因于……的", parallel:"平行的；相似的", resistant:"抵抗的",
      restored:"恢复的", isolated:"孤立的", involved:"涉及的；参与其中的", controlled:"受控制的", alter:"改变", spread:"传播", remove:"移除", explain:"解释",
      compensations:"补偿", symptoms:"症状", demands:"要求；需求", treatments:"治疗方法；应对措施", likewise:"同样地", meanwhile:"与此同时", therefore:"因此", instead:"反而；代替",
      change:"改变", watch:"观察", count:"计数；重要", take:"采取；进行", "well-being":"身心健康", process:"过程", formation:"形成", coordination:"协调",
      level:"水平；程度", love:"热爱", knowledge:"知识", space:"空间", design:"设计", routine:"常规；惯例", diet:"饮食", prescription:"处方"
    },
    "2023": {
      displayed:"展示", occupied:"占据；使用", located:"坐落于", equipped:"配备", privately:"由私人出资地", regularly:"定期地", respectively:"分别地", permanently:"永久地",
      definition:"定义", transition:"转变", substitution:"替代", combination:"组合", classify:"分类", record:"记录", describe:"描述；称作", connect:"连接",
      "apart from":"除……之外", "instead of":"而不是", "such as":"例如", "along with":"连同；以及", construction:"建造", restoration:"修复", impression:"印象", evaluation:"评估",
      doubted:"怀疑", faced:"面临", accepted:"接受", reduced:"减少", assigned:"分派", subjected:"使遭受", accustomed:"使习惯于", opposed:"反对",
      "so that":"以便；因此", "even if":"即使", "now that":"既然", "in case":"以防", talking:"交谈", starting:"开始", breaking:"打破", meeting:"会合；聚集",
      "by the way":"顺便说", "on occasion":"有时", "in comparison":"相比之下", "as a result":"因此", heritage:"遗产", revival:"复兴", exchange:"交流", status:"地位；状态",
      "with regard to":"关于", "in spite of":"尽管", "as well as":"以及；同时", "in line with":"与……一致", completing:"完成", influencing:"影响", resuming:"恢复", pioneering:"开创",
      aided:"帮助；促进", invested:"投资", failed:"失败", competed:"竞争", rather:"而是；相反", indeed:"确实；事实上", otherwise:"否则", however:"然而",
      "go in for":"参加；从事", "stand up for":"支持；维护", "close in on":"逼近", "stock up on":"储备", believed:"认为；相信", predicted:"预测", recalled:"回忆", implied:"暗示",
      until:"直到", because:"因为", unless:"除非", although:"尽管", ruins:"废墟", debt:"债务", fashion:"时尚；方式", series:"系列"
    },
    "2025": {
      relevant:"相关的；切题的", prone:"易于……的；有……倾向的", available:"可获得的；可利用的", alien:"陌生的；外来的",
      accidentally:"偶然地；意外地", frequently:"频繁地；经常", gradually:"逐渐地", temporarily:"暂时地",
      disguised:"伪装的；掩饰的", submerged:"被淹没的；浸没的", relocated:"迁移的；重新安置的", isolated:"孤立的；隔绝的",
      legends:"传说；传奇故事", programs:"项目；计划", remains:"遗迹；残留物", surroundings:"周围环境",
      across:"横穿；遍及", off:"离开；脱离", under:"在……之下", via:"经由；通过",
      currents:"洋流；水流", rivers:"河流", seasons:"季节", winds:"风；气流",
      elevated:"抬高的；升高的", separated:"分离的；隔开的", comprised:"由……构成的", protected:"受保护的",
      gathering:"收集；聚集", restoring:"修复；恢复", updating:"更新", supplying:"供应；提供",
      when:"当……时", until:"直到", after:"在……之后", once:"一旦；曾经",
      belongings:"财物；随身物品", resources:"资源", products:"产品；制品", structures:"建筑物；结构",
      preserve:"保护；保存", select:"选择；挑选", display:"展示；陈列", examining:"检查；研究",
      despite:"尽管", unlike:"不像；与……不同", besides:"此外；除……之外", among:"在……之中",
      unchallenged:"未受挑战的", unknown:"未知的", unorganized:"未组织的", undisturbed:"未被扰动的；保持原状的",
      suspended:"暂停的；中止的", transferred:"转移的；调动的", resumed:"恢复的；重新开始的", canceled:"取消的",
      policies:"政策；方针", theories:"理论", documents:"文件；文献", techniques:"技术；方法",
      ordered:"命令；排序", provided:"提供；供给", employed:"采用；使用", adjusted:"调整；校准",
      effect:"影响；效果", light:"光线；光", reality:"现实；实际情况", mind:"思维；头脑",
      crossed:"穿越；横跨", connected:"连接；联系", blocked:"阻挡；封锁", altered:"改变；改动",
      expecting:"预期；期待", suggesting:"表明；暗示", predicting:"预测", recalling:"回忆；记起",
      robust:"强健的；稳固的", diverse:"多样的；不同的", marginal:"边缘的；微小的", dependent:"依赖的；取决于……的"
    }
  };
  window.CLOZE_FALLBACK_TRANSLATIONS = {
    "peculiar to":"为……所特有", breaking:"打破；破坏", stabilizing:"使稳定", compromised:"妥协；受损",
    grants:"授予；给予", rated:"评价；评定等级", circumstances:"情况；环境", slower:"更慢的", faster:"更快的",
    guiding:"引导；指导", "n egative":"否定的；负面的", "consisted of":"由……组成", "hinted at":"暗示",
    "extended in":"在……方面延伸", adapting:"适应；调整", forming:"形成", attaching:"附加；依附", exposing:"暴露",
    "held on":"坚持；继续", "started out":"开始；起初", "settled down":"安定下来", "went by":"过去；流逝",
    "adapting to":"适应", "deriving from":"源自", "relying on":"依靠", "pointing at":"指向"
  };
})();
