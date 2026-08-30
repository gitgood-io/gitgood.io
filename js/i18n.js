(function () {
  'use strict';

  var STORAGE_KEY = 'gitgood-lang';

  var dict = {
    ar: {
      'skip': 'تخطَّ إلى المحتوى',
      'brand-aria': 'GitGood — الرئيسية',
      'footer-brand-aria': 'GitGood — العودة إلى الأعلى',
      'nav.home': 'الرئيسية',
      'nav.about': 'من نحن',
      'nav.services': 'خدماتنا',
      'nav.skills': 'المهارات',
      'nav.projects': 'المشاريع',
      'nav.events': 'الفعاليات',
      'work-with-us': 'اعمل معنا',
      'notice.flag': '📢 فعالية جديدة',
      'notice.title': 'DataGood — معسكر أدوات البيانات والذكاء الاصطناعي',
      'notice.detail': 'كل سبت من سبتمبر 2026 · مركز المهارات — سطيف · 14:00',
      'notice.register': 'سجّل الآن',
      'notice.close': 'إخفاء الإعلان',
      'hero-kicker': 'البرمجيات · الذكاء الاصطناعي · البيانات · التعليم',
      'hero-title': 'نبني. نعلِّم. <em>نتطوّر.</em>',
      'hero-sub': 'GitGood علامة تقنية تركّز على البرمجيات والذكاء الاصطناعي والبيانات والتعليم التقني العملي.',
      'explore-our-work': 'استكشف أعمالنا',
      'panel-cmd': '> تعلّم. ابنِ. تطوّر.',
      'about-kicker': 'من نحن',
      'about-title': 'ما هو GitGood؟',
      'about-p1': 'GitGood مبادرة تقنية قائمة على تطوير البرمجيات والذكاء الاصطناعي والبيانات والتعليم.',
      'about-p2': 'نبنِي مشاريع، ونقدّم تدريبًا عمليًا، وننظّم فعاليات تقنية، ونستكشف تقنيات جديدة.',
      'about-p3': 'التقنية والتعلّم والبناء الحقيقي — متّصلة.',
      'mascot-foxy-desc': 'البرمجة وثقافة المطورين',
      'mascot-owlix-desc': 'الذكاء الاصطناعي والبيانات والمعرفة',
      'svc-kicker': 'خدماتنا',
      'svc-title': 'ماذا نفعل؟',
      'svc-sub': 'من بناء البرمجيات إلى تعليم التقنيات التي تقف خلفها، تحوّل GitGood المعرفة التقنية إلى حلول عملية.',
      'svc1-tag': '01 · تطوير البرمجيات',
      'svc1-title': 'تطوير البرمجيات',
      'svc1-desc': 'نصمّم ونطوّر تطبيقات برمجية حديثة وحلولًا رقمية.',
      'svc1-l1': 'تطوير الويب',
      'svc1-l2': 'تطبيقات سطح المكتب',
      'svc1-l3': 'الأتمتة',
      'svc1-l4': 'هندسة البرمجيات',
      'svc2-tag': '02 · الذكاء الاصطناعي',
      'svc2-title': 'الذكاء الاصطناعي',
      'svc2-desc': 'نستكشف ونبني حلولًا عملية في الذكاء الاصطناعي.',
      'svc2-l1': 'التعلّم الآلي',
      'svc2-l2': 'الرؤية الحاسوبية',
      'svc2-l3': 'معالجة اللغة الطبيعية',
      'svc2-l4': 'تجارب ذكاء اصطناعي',
      'svc2-l5': 'تطبيقات ذكاء اصطناعي',
      'svc3-tag': '03 · البيانات والتحليلات',
      'svc3-title': 'البيانات والتحليلات',
      'svc3-desc': 'نحوّل البيانات إلى رؤى مفيدة وتجارب تفاعلية.',
      'svc3-l1': 'تحليل البيانات',
      'svc3-l2': 'تصوير البيانات',
      'svc3-l3': 'ذكاء الأعمال',
      'svc3-l4': 'التعلّم الآلي',
      'svc3-l5': 'علم البيانات',
      'svc4-tag': '04 · التدريب التقني',
      'svc4-title': 'التدريب التقني',
      'svc4-desc': 'تعليم تقني عملي مصمّم حول أدوات حقيقية ومشاريع.',
      'svc4-l1': 'البرمجة',
      'svc4-l2': 'الذكاء الاصطناعي',
      'svc4-l3': 'البيانات',
      'svc4-l4': 'أدوات المطورين',
      'svc4-l5': 'ورش العمل',
      'svc4-l6': 'المعسكرات',
      'svc5-tag': '05 · الورش والفعاليات',
      'svc5-title': 'الورش والفعاليات',
      'svc5-desc': 'ننظّم فعاليات تقنية تجمع الطلاب وعشّاق التقنية.',
      'svc5-l1': 'ورش عمل تقنية',
      'svc5-l2': 'معسكرات',
      'svc5-l3': 'محاضرات',
      'svc5-l4': 'جلسات تطبيقية',
      'svc5-l5': 'فعاليات طلابية',
      'sk-kicker': 'المهارات والتقنيات',
      'sk-title': 'التقنيات التي نعمل بها',
      'sk-sub': 'اللغات والمكتبات والأدوات التي تقف خلف مشاريعنا وتدريبنا.',
      'sk-cat-programming': 'البرمجة',
      'sk-cat-ai': 'الذكاء الاصطناعي والتعلّم الآلي',
      'sk-cat-data': 'البيانات',
      'sk-cat-web': 'الويب',
      'sk-cat-tools': 'الأدوات',
      'pj-kicker': 'المشاريع',
      'pj-title': 'ما بنيناه',
      'pj-sub': 'نؤمن بأن أفضل طريقة لفهم التقنية هي أن تبنيها بنفسك.',
      'pj-empty-tag': 'قريبًا',
      'pj-empty-title': 'ستُعرض مشاريعنا هنا قريبًا',
      'pj-empty-desc': 'نعمل حاليًا على البناء والتجريب وتحضير أعمالنا. عُد إلينا لاحقًا.',
      'ev-kicker': 'الفعاليات والتدريب',
      'ev-title': 'الفعاليات والتدريب',
      'ev-sub': 'نقرّب التقنية من الطلاب عبر ورش عمل عملية ومعسكرات وتجارب تعلّم تطبيقية.',
      'ev-badge': 'معسكر',
      'ev-date': 'سبتمبر 2026',
      'ev-location': 'مركز المهارات — سطيف',
      'ev-feature-title': 'DataGood — معسكر أدوات البيانات والذكاء الاصطناعي',
      'ev-desc': 'معسكر عملي يقدّم للطلاب أدوات حديثة لتحليل البيانات وتصويرها وعلم البيانات والتعلّم الآلي.',
      'session-1': 'الجلسة 01',
      'session-2': 'الجلسة 02',
      'session-3': 'الجلسة 03',
      'session-4': 'الجلسة 04',
      's1-desc': 'تحليل البيانات ولوحات المعلومات التفاعلية',
      's2-desc': 'علم البيانات والتعلّم الآلي',
      's3-desc': 'تصوير البيانات والتقارير التفاعلية',
      's4-desc': 'التعلّم الآلي وتقييم النماذج',
      'view-events': 'عرض الفعاليات',
      'ap-kicker': 'نهجنا',
      'ap-title': 'تعلّم. ابنِ. <span class="accent">تطوّر.</span>',
      'ap-sub': 'فلسفة بسيطة تربط ما نبنيه وما نعلّمه وما نستكشفه.',
      'ap1-title': 'تعلّم',
      'ap1-desc': 'افهم التقنية.',
      'ap2-title': 'ابنِ',
      'ap2-desc': 'حوّل المعرفة إلى مشاريع حقيقية.',
      'ap3-title': 'تطوّر',
      'ap3-desc': 'جرّب، وكرّر، واستمر في التحسّن.',
      'why-kicker': 'لماذا GitGood',
      'why-title': 'لماذا GitGood؟',
      'why-sub': 'ما الذي يميّز GitGood؟',
      'why1-tag': '01 · عملي',
      'why1-title': 'عملي',
      'why1-desc': 'نركّز على الأدوات الحقيقية والمشاريع والتجربة العملية.',
      'why2-tag': '02 · تقني',
      'why2-title': 'تقني',
      'why2-desc': 'عملنا مبنيّ على هندسة البرمجيات والذكاء الاصطناعي والبيانات وعلوم الحاسوب.',
      'why3-tag': '03 · موجّه للطلاب',
      'why3-title': 'موجّه للطلاب',
      'why3-desc': 'نجعل التقنية في متناول الطلاب والمطورين الشباب.',
      'why4-tag': '04 · الفضول',
      'why4-title': 'فضولي',
      'why4-desc': 'نجرّب تقنيات جديدة ونستكشف دائمًا ما هو قادم.',
      'cta-title': 'لديك فكرة؟',
      'cta-sub': 'لنبنِ شيئًا بالتقنية.',
      'footer-tagline': 'تعلّم. ابنِ. تطوّر.',
      'footer-follow': 'تابعنا',
      'copyright': '© 2026 GitGood. جميع الحقوق محفوظة.',
      'home.page-title': 'GitGood — نبني. نعلِّم. نتطوّر.',
      'home.page-desc': 'GitGood علامة تقنية تركّز على تطوير البرمجيات والذكاء الاصطناعي والبيانات والتعليم التقني العملي — نبني المشاريع، ونعلّم، ونستكشف الجديد.',
      'datagood.page-title': 'DataGood — معسكر أدوات البيانات والذكاء الاصطناعي',
      'datagood.page-desc': 'معسكر عملي في أدوات البيانات والذكاء الاصطناعي تنظّمه GitGood.io — Power BI وKNIME وLooker Studio وOrange Data Mining.',
      'dg.all-events': 'كل الفعاليات',
      'dg.hero-title': 'DataGood — معسكر أدوات البيانات والذكاء الاصطناعي',
      'dg.hero-desc': 'معسكر تطبيقي يعرّف الطلاب والمعنيين بالمجال التقني على الأدوات العملية المستخدمة في تحليل البيانات والتصوير وعلم البيانات والتعلّم الآلي.',
      'dg.hero-tagline': 'حوّل البيانات إلى رؤى. حوّل الرؤى إلى مهارات.',
      'dg.about-kicker': 'ما هو DataGood؟',
      'dg.about-title': 'ما هو DataGood؟',
      'dg.about-p1': 'DataGood هو برنامج تدريبي من أربع جلسات تركّز على أربع أدوات مختلفة:',
      'dg.about-t1': 'Power BI — تحليل البيانات ولوحات المعلومات التفاعلية',
      'dg.about-t2': 'KNIME — علم البيانات وسير العمل البصري',
      'dg.about-t3': 'Looker Studio — تصوير البيانات والتقارير التفاعلية',
      'dg.about-t4': 'Orange Data Mining — التعلّم الآلي والتنقيب في البيانات',
      'dg.about-p2': 'معًا، توفّر هذه الجلسات مدخلاً إلى عدة أجزاء مهمة من سير عمل البيانات الحديث: تحليل البيانات، وتحويلها، وتصويرها، وبناء سير العمل، والتجريب مع التعلّم الآلي.',
      'dg.about-p3': 'اختيرت الأدوات تحديدًا لمنح المبتدئين تعرّفًا على أساليب مختلفة للعمل مع البيانات — من ذكاء الأعمال ولوحات المعلومات إلى علم البيانات البصري والتعلّم الآلي.',
      'dg.goal-label': 'الهدف بسيط:',
      'dg.goal-l1': 'تعلّم الأدوات.',
      'dg.goal-l2': 'اعمل مع بيانات حقيقية.',
      'dg.goal-l3': 'ابنِ مهارات عملية.',
      'dg.sessions-kicker': 'البرنامج',
      'dg.sessions-title': 'الجلسات الأربع',
      'dg.sessions-sub': 'كل سبت يقدّم أداة جديدة، من لوحات المعلومات إلى التعلّم الآلي.',
      'dg.s1-num': 'الجلسة 01',
      'dg.s1-title': 'Power BI',
      'dg.s1-desc': 'تحليل البيانات ولوحات المعلومات التفاعلية',
      'dg.s1-para': 'تقدّم الجلسة الأولى للمشاركين أداة Power BI وأساسيات تحويل البيانات الخام إلى معلومات بصرية مفيدة. تركّز الجلسة بشكل أساسي على تصوير البيانات، بما في ذلك:',
      'dg.s1-b1': 'المخططات العمودية والشريطية',
      'dg.s1-b2': 'المخططات الخطية والمساحية',
      'dg.s1-b3': 'المخططات الشائعة',
      'dg.s1-b4': 'مخططات الخرائط',
      'dg.s1-b5': 'المخططات غير المألوفة',
      'dg.s1-b6': 'الجداول',
      'dg.s1-b7': 'البطاقات',
      'dg.s1-b8': 'أدوات التقطيع (Slicers)',
      'dg.s1-b9': 'الأزرار والإشارات المرجعية (Bookmarks)',
      'dg.s1-b10': 'لوحات المعلومات التفاعلية',
      'dg.s1-note': 'الهدف هو مساعدة المشاركين على فهم كيف يمكن تحويل البيانات إلى لوحات معلومات واضحة وتفاعلية توصل الرؤى بفعالية. وPower BI مفيدة بشكل خاص لذكاء الأعمال والتقارير، ما يجعلها أداة قيّمة للطلاب المهتمين بتحليل البيانات.',
      'dg.s2-num': 'الجلسة 02',
      'dg.s2-title': 'KNIME',
      'dg.s2-desc': 'علم البيانات وسير العمل البصري',
      'dg.s2-para': 'تقدّم الجلسة الثانية أداة KNIME، وهي منصة بصرية ومنخفضة/بدون كود لبناء سير عمل البيانات. تتيح KNIME للمستخدمين ربط العمليات المختلفة بصريًا، ما يجعل العمل مع البيانات ممكنًا دون كتابة كميات كبيرة من الأكواد.',
      'dg.s2-explore': 'سيكتشف المشاركون مفاهيم مثل:',
      'dg.s2-b1': 'إعداد البيانات',
      'dg.s2-b2': 'تحويل البيانات',
      'dg.s2-b3': 'سير العمل البصري',
      'dg.s2-b4': 'استكشاف البيانات',
      'dg.s2-b5': 'ربط العمليات المختلفة',
      'dg.s2-b6': 'مدخل إلى التعلّم الآلي',
      'dg.s2-b7': 'بناء سير عمل بيانات عملية',
      'dg.s2-note': 'الهدف هو إظهار أن علم البيانات لا يجب أن يبدأ دائمًا بمئات الأسطر من الأكواد.',
      'dg.s3-num': 'الجلسة 03',
      'dg.s3-title': 'Looker Studio',
      'dg.s3-desc': 'تصوير البيانات والتقارير التفاعلية',
      'dg.s3-para': 'تركّز الجلسة الثالثة على Looker Studio، وهي أداة تقارير وتصوير تعتمد على الويب. سيتعلّم المشاركون كيفية العمل مع مصادر البيانات وتحويلها إلى تقارير ولوحات معلومات تفاعلية.',
      'dg.s3-explore': 'تغطي الجلسة أفكارًا مثل:',
      'dg.s3-b1': 'ربط البيانات',
      'dg.s3-b2': 'إنشاء التصويرات',
      'dg.s3-b3': 'تصميم التقارير',
      'dg.s3-b4': 'المخططات التفاعلية',
      'dg.s3-b5': 'الفلاتر وأدوات التحكم',
      'dg.s3-b6': 'عرض الرؤى',
      'dg.s3-b7': 'مشاركة التقارير',
      'dg.s3-note': 'صُمّمت Looker Studio حول إنشاء تقارير ولوحات معلومات قابلة للمشاركة والتخصيص، ما يجعلها أداة مفيدة لتوصيل المعلومات بصريًا.',
      'dg.s3-note2': 'ملاحظة: أعادت Google تسمية المنتج إلى Data Studio في أبريل 2026، رغم أن كثيرين ما يزالون يعرفونه باسم Looker Studio.',
      'dg.s4-num': 'الجلسة 04',
      'dg.s4-title': 'Orange Data Mining',
      'dg.s4-desc': 'التعلّم الآلي والتنقيب في البيانات',
      'dg.s4-para': 'تقدّم الجلسة الأخيرة Orange Data Mining، وهي منصة برمجة بصرية للتنقيب في البيانات والتعلّم الآلي وتصويرها. تعتمد Orange على نهج سير عمل بصري حيث يضع المستخدمون عناصر (Widgets) على اللوحة ويربطونها معًا لإنشاء سير عمل لمعالجة البيانات والتعلّم الآلي — كل ذلك دون كتابة أكواد.',
      'dg.s4-explore': 'سيستكشف المشاركون:',
      'dg.s4-b1': 'إعداد البيانات',
      'dg.s4-b2': 'استكشاف البيانات',
      'dg.s4-b3': 'تصوير البيانات',
      'dg.s4-b4': 'بناء سير عمل التعلّم الآلي',
      'dg.s4-b5': 'تدريب النماذج',
      'dg.s4-b6': 'مقارنة النماذج',
      'dg.s4-b7': 'تقييم النماذج',
      'dg.s4-note': 'توفّر هذه الجلسة مدخلاً ملائمًا للمبتدئين إلى سير عمل التعلّم الآلي، ما يسمح للمشاركين بفهم المراحل المختلفة من مجموعة البيانات إلى نموذج مدرَّب.',
      'dg.beg-kicker': 'للمبتدئين',
      'dg.beg-title': 'هل DataGood مناسب للمبتدئين؟',
      'dg.beg-p1': 'نعم. صُمّم DataGood مع وضع المبتدئين في الاعتبار. لست بحاجة إلى أن تكون عالم بيانات أو مهندس تعلّم آلي للمشاركة.',
      'dg.beg-p2': 'الشرط الأساسي ببساطة هو:',
      'dg.beg-l1': 'اهتمامٌ بالبيانات.',
      'dg.beg-p3': 'يُستحسن أيضًا إحضار حاسوب محمول، لأن المشاركين يمكنهم المتابعة والتطبيق خلال الجلسات.',
      'dg.beg-p4': 'الفكرة ليست أن يتوقّع أن يعرف المشاركون كل شيء مسبقًا — بل صُمّم المعسكر لمساعدتهم على اكتشاف هذه الأدوات خطوة بخطوة.',
      'dg.diff-kicker': 'لماذا مختلف؟',
      'dg.diff-title': 'ما الذي يجعل DataGood مختلفًا؟',
      'dg.diff-sub': 'ليس DataGood مجرد تدريب نظري بحت. التركيز على التطبيق — تُقدَّم الأدوات من خلال أمثلة عملية وسير عمل حقيقية.',
      'dg.diff-a1': 'تحليل وتصوير',
      'dg.diff-a1-d': 'حوّل البيانات الخام إلى لوحات معلومات تفاعلية ورؤى بصرية واضحة.',
      'dg.diff-a2': 'إعداد وبناء سير العمل',
      'dg.diff-a2-d': 'اربط العمليات بصريًا لإعداد البيانات وتحويلها دون أكواد معقدة.',
      'dg.diff-a3': 'تصوير وإصدار التقارير',
      'dg.diff-a3-d': 'ابنِ تقارير ولوحات معلومات تفاعلية توصل المعلومات بوضوح.',
      'dg.diff-a4': 'النمذجة والتقييم',
      'dg.diff-a4-d': 'أنشئ ودرّب وقارن نماذج التعلّم الآلي بصريًا.',
      'dg.diff-closing': 'وهذا يخلق مقدّمة متنوعة وإن كانت صغيرة إلى منظومة البيانات.',
      'dg.instructor-kicker': 'المدرّب',
      'dg.instructor-name': 'عبد الجليل هاني',
      'dg.instructor-role': 'مهندس ذكاء اصطناعي وعالم بيانات · طالب دكتوراه متخصص في الذكاء الاصطناعي وتطبيقاته',
      'dg.instructor-p': 'يقدّم التدريب عبد الجليل هاني، مهندس ذكاء اصطناعي وعالم بيانات وطالب دكتوراه متخصص في الذكاء الاصطناعي وتطبيقاته. صُمّمت الجلسات لتكون عملية وسهلة الوصول، بهدف مساعدة المشاركين على فهم الأدوات بدلاً من مجرد عرض ميزاتها.',
      'dg.schedule-kicker': 'الجدول الزمني',
      'dg.schedule-title': 'الجدول الزمني',
      'dg.schedule-desc': 'تُعقد فعاليات DataGood عبر أربعة سبتات من سبتمبر 2026.',
      'dg.sc-session': 'الجلسة',
      'dg.sc-tool': 'الأداة',
      'dg.sc-date': 'التاريخ',
      'dg.sc-time': 'الوقت',
      'dg.sc1-num': '01',
      'dg.sc1-tool': 'Power BI',
      'dg.sc1-date': '05 سبتمبر 2026',
      'dg.sc1-time': '14:00',
      'dg.sc2-num': '02',
      'dg.sc2-tool': 'KNIME',
      'dg.sc2-date': '12 سبتمبر 2026',
      'dg.sc2-time': '14:00',
      'dg.sc3-num': '03',
      'dg.sc3-tool': 'Looker Studio',
      'dg.sc3-date': '19 سبتمبر 2026',
      'dg.sc3-time': '14:00',
      'dg.sc4-num': '04',
      'dg.sc4-tool': 'Orange Data Mining',
      'dg.sc4-date': '26 سبتمبر 2026',
      'dg.sc4-time': '14:00',
      'dg.loc-kicker': 'الموقع',
      'dg.loc-title': 'مركز المهارات — سطيف',
      'dg.loc-p': 'يصف مركز المهارات في سطيف نفسه بأنه مركز تطبيقي يدعم المسارات الرقمية واستكشاف المشاريع الناشئة، بمرافق تشمل مختبرات برمجة وفضاءات ابتكار وقاعات فعاليات.',
      'dg.loc-title2': 'مركز المهارات — سطيف',
      'dg.loc-detail': 'كل سبت من سبتمبر 2026 · 14:00 · سطيف، الجزائر',
      'dg.loc-cta': 'افتح في خرائط Google',
      'dg.get-kicker': 'المخرجات',
      'dg.get-title': 'ماذا سيحصل عليه المشاركون من DataGood',
      'dg.get-p': 'بحلول نهاية المعسكر، سيحصل المشاركون على:',
      'dg.get-l1': 'مدخل إلى عدة أدوات بيانات شائعة',
      'dg.get-l2': 'فهم أفضل لسير عمل البيانات',
      'dg.get-l3': 'تجربة في إنشاء التصويرات ولوحات المعلومات',
      'dg.get-l4': 'تجربة في العمل مع سير عمل البيانات البصرية',
      'dg.get-l5': 'مدخل إلى سير عمل التعلّم الآلي',
      'dg.get-l6': 'تعرّف عملي على مناهج بدون/منخفضة الكود',
      'dg.get-l7': 'فهم أفضل لأدوات البيانات التي قد تناسب مشاريعهم المستقبلية',
      'dg.get-l8': 'أساس لمواصلة التعلّم في علم البيانات وذكاء الأعمال والذكاء الاصطناعي',
      'dg.get-closing': 'والأهم أن المشاركين يغادرون بتجربة تطبيقية وليس فقط معرفة نظرية.',
      'dg.org-kicker': 'برعاية GitGood.io',
      'dg.org-title': 'برعاية GitGood.io',
      'dg.org-p': 'يُنظَّم DataGood بواسطة GitGood.io، في إطار هدف GitGood المتمثل في خلق تعليم تقني عملي ومتاح للطلاب والمطورين الشباب. تركّز منظومة GitGood الأوسع على البرمجة والذكاء الاصطناعي والبيانات وتطوير البرمجيات والتقنيات الحديثة — مع تركيز على التعلّم بالبناء والتجريب.',
      'brand-go': 'انتقل إلى GitGood',
      'dg.phi-kicker': 'فلسفة DataGood',
      'dg.phi-title': 'تعلّم. طبّق. ابنِ.',
      'dg.phi-p': 'يمكن تلخيص DataGood في ثلاث كلمات. لست بحاجة إلى أن تكون خبيرًا، ولا إلى سنوات من الخبرة — كل ما تحتاجه هو الفضول تجاه البيانات والرغبة في التعلّم.',
      'dg.phi-w1': 'تعلّم.',
      'dg.phi-w2': 'طبّق.',
      'dg.phi-w3': 'ابنِ.',
      'dg.cta-title': 'مستعد لتحويل البيانات إلى رؤى؟',
      'dg.cta-sub': 'انضم إلى DataGood واكتسب خبرة عملية مع أدوات سير عمل البيانات الحديث.'
    }
  };

  var root = document.documentElement;
  var page = root.getAttribute('data-i18n-page') || 'home';
  var toggles = Array.prototype.slice.call(document.querySelectorAll('[data-lang-toggle]'));
  var lang = 'en';

  function readStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function writeStored(l) {
    try { localStorage.setItem(STORAGE_KEY, l); } catch (e) {}
  }

  var originals = {};
  var textEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var htmlEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n-html]'));
  var attrEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n-attr]'));

  textEls.forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (!(key in originals)) originals[key] = el.textContent;
  });
  htmlEls.forEach(function (el) {
    var key = el.getAttribute('data-i18n-html');
    if (!(key in originals)) originals[key] = el.innerHTML;
  });
  attrEls.forEach(function (el) {
    var attr = el.getAttribute('data-i18n-attr');
    var key = el.getAttribute('data-i18n-attr-key');
    if (key && !(key in originals)) originals[key] = el.getAttribute(attr) || '';
  });

  originals[page + '.page-title'] = document.title;
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) originals[page + '.page-desc'] = metaDesc.getAttribute('content');

  function value(key) {
    if (lang === 'en') return originals[key] !== undefined ? originals[key] : key;
    if (dict[lang] && dict[lang][key] !== undefined) return dict[lang][key];
    return originals[key] !== undefined ? originals[key] : key;
  }

  function apply() {
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    textEls.forEach(function (el) {
      el.textContent = value(el.getAttribute('data-i18n'));
    });
    htmlEls.forEach(function (el) {
      el.innerHTML = value(el.getAttribute('data-i18n-html'));
    });
    attrEls.forEach(function (el) {
      var attr = el.getAttribute('data-i18n-attr');
      var key = el.getAttribute('data-i18n-attr-key');
      el.setAttribute(attr, value(key));
    });

    document.title = value(page + '.page-title');
    if (metaDesc) metaDesc.setAttribute('content', value(page + '.page-desc'));

    toggles.forEach(function (t) {
      if (lang === 'ar') {
        t.textContent = 'EN';
        t.setAttribute('aria-label', 'English language');
      } else {
        t.textContent = 'العربية';
        t.setAttribute('aria-label', 'اللغة العربية');
      }
    });
  }

  toggles.forEach(function (t) {
    t.addEventListener('click', function () {
      lang = lang === 'ar' ? 'en' : 'ar';
      apply();
      writeStored(lang);
    });
  });

  var stored = readStored();
  if (stored === 'ar' || stored === 'en') {
    lang = stored;
  } else if (navigator.language && navigator.language.toLowerCase().indexOf('ar') === 0) {
    lang = 'ar';
    writeStored('ar');
  }

  apply();
})();