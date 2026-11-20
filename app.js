(() => {
  const assetUrl = (file) => `Assets/${encodeURIComponent(file)}`;

  const PROJECT_DOCS = [
    {
      title: 'Final Proposed Project Title',
      file: 'Mediseena_ A Digital Platform for Structured Prescription Digitization.pdf'
    },
    {
      title: 'Project Proposal (Mediseena)',
      file: 'ProjectProposal_Mediseena.pdf'
    },
    {
      title: '50% Working System & Documentation',
      file: 'Mediseena_Working System and Documentation.pdf'
    },
    {
      title: '100% Working System Final Documentation',
      file: '100% Working System Final Documentation.pdf'
    },
    {
      title: 'IEEE Research Paper',
      file: 'Mediseena_IEEE_Paper (1).pdf'
    },
    {
      title: 'Letter to Conduct Research',
      file: 'Letter-to-conduct-research (1).docx',
      downloadOnly: true
    }
  ];

  const COURSEWORK = [
    // ================= PRELIM =================
    {
      term: 'prelim',
      category: 'activity',
      typeLabel: 'Activity',
      title: 'CLO P1-1 Project Topic Conceptualization (Individual)',
      due: 'July 18, 2026',
      week: 'Week 1 · Orientation',
      score: '100 / 100',
      desc: 'Individual project topic conceptualization proposing Upskill.dev, outlining the target problem, objectives, and initial scope.',
      shots: [{ file: 'CLOP P1-1.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'Project Topic Conceptualization_Upskill.dev_Rivera.pdf', label: 'Conceptualization PDF' }],
      reflect: 'Drafting the initial concept individually helped me practice defining a clear problem statement before jumping into tools and frameworks.'
    },
    {
      term: 'prelim',
      category: 'group',
      typeLabel: 'Group Work',
      title: 'Final Proposed Project Title — Mediseena',
      due: 'July 24, 2026',
      week: 'Week 2 · Group 1 (4 students)',
      score: '95 / 100',
      desc: 'Group 1 submission finalizing our project title: "Mediseena: A Digital Platform for Structured Prescription Digitization."',
      shots: [{ file: 'Final Proposed Title.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'Mediseena_ A Digital Platform for Structured Prescription Digitization.pdf', label: 'Final Title PDF' }],
      reflect: 'Aligning as a four-person group around a real healthcare digitization problem gave us a focused direction for the entire semester.'
    },
    {
      term: 'prelim',
      category: 'quiz',
      typeLabel: 'Quiz',
      title: 'JS 1 Quiz Result — Module 1',
      due: 'July 25, 2026',
      week: 'Week 2 · Cisco JavaScript Essentials 1',
      score: '100 / 100',
      desc: 'Completed Module 1 quiz covering introduction to JavaScript and computer programming fundamentals.',
      shots: [
        { file: 'JS Module 2.jpg', label: 'Teams grade screen' },
        { file: 'Rivera_JS_Module1.jpg', label: 'Cisco Module 1 result' }
      ],
      docs: [],
      reflect: 'Starting the Cisco JavaScript Essentials track with a perfect score set a strong baseline for the rest of the prelim modules.'
    },
    {
      term: 'prelim',
      category: 'quiz',
      typeLabel: 'Quiz',
      title: 'JS 1 Quiz Result — Module 2',
      due: 'July 25, 2026',
      week: 'Week 2 · Cisco JavaScript Essentials 1',
      score: 'Submitted',
      mutedScore: true,
      desc: 'Completed Module 2 quiz on variables, data types, type casting, and comments in JavaScript.',
      shots: [
        { file: 'Quiz 1.jpg', label: 'Teams submission screen' },
        { file: 'Rivera_JS_Module2.jpg', label: 'Cisco Module 2 result' }
      ],
      docs: [],
      reflect: 'Reviewing JavaScript type coercion and data types clarified subtle behaviors that often cause bugs in frontend apps.'
    },
    {
      term: 'prelim',
      category: 'activity',
      typeLabel: 'Machine Problem',
      title: 'CL03-P1: Machine Problem 3.1',
      due: 'July 28, 2026',
      week: 'Week 3 · Client-Side Scripting',
      score: '100 / 100',
      desc: 'Hands-on JavaScript machine problem applying variables, arrays, objects, and control flow.',
      shots: [{ file: 'MachineProblem 3.1.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'machineProblem3_1_RIVERA.pdf', label: 'Machine Problem 3.1 PDF' }],
      reflect: 'Structuring student and subject data with objects and loops reinforced clean data modeling in plain JavaScript.'
    },
    {
      term: 'prelim',
      category: 'pt',
      typeLabel: 'Performance Task',
      title: 'PT ReactJS Installation',
      due: 'July 28, 2026',
      week: 'Week 2 · ReactJS Module',
      score: '10 / 10',
      desc: 'Set up Node.js, npm, and a ReactJS development environment, documented step by step in PDF.',
      shots: [{ file: 'PT ReactJS Installation.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'Rivera_ReactJS_Documentation.pdf', label: 'ReactJS Setup PDF' }],
      reflect: 'Documenting the environment setup clearly ensured a repeatable workflow before building multi-page React applications.'
    },
    {
      term: 'prelim',
      category: 'quiz',
      typeLabel: 'Quiz',
      title: 'Online Quiz 1: JavaScript Fundamentals and Control Structures',
      due: 'July 31, 2026',
      week: 'Week 3 · 1 submission allowed',
      score: '20 / 20',
      desc: 'Timed online assessment covering JavaScript syntax, operators, conditionals, and loops.',
      shots: [{ file: 'Online Quiz 1.jpg', label: 'Teams quiz score (20 / 20)' }],
      docs: [],
      reflect: 'Getting 20/20 on the first formal quiz confirmed that my core JavaScript fundamentals were solid.'
    },
    {
      term: 'prelim',
      category: 'quiz',
      typeLabel: 'Quiz',
      title: 'JS 1 Module 3 Quiz Result',
      due: 'July 31, 2026',
      week: 'Week 3 · Cisco JavaScript Essentials 1',
      score: '100 / 100',
      desc: 'Completed Module 3 quiz on operators and user interaction in JavaScript.',
      shots: [
        { file: 'JS Module 3 .jpg', label: 'Teams grade screen' },
        { file: 'Rivera_JS_Module3.jpg', label: 'Cisco Module 3 result' }
      ],
      docs: [],
      reflect: 'Practicing logical and comparison operators helped me avoid common truthy/falsy pitfalls.'
    },
    {
      term: 'prelim',
      category: 'quiz',
      typeLabel: 'Quiz',
      title: 'JS 1 Module 4 Quiz Result',
      due: 'July 31, 2026',
      week: 'Week 3 · Cisco JavaScript Essentials 1',
      score: 'Submitted',
      mutedScore: true,
      desc: 'Completed Module 4 quiz covering control flow, conditional execution, and loops.',
      shots: [
        { file: 'JS Module 4.jpg', label: 'Teams submission screen' },
        { file: 'Rivera_JS_Module4.jpg', label: 'Cisco Module 4 result' }
      ],
      docs: [],
      reflect: 'Working through nested loops and conditional branches strengthened my ability to trace execution paths cleanly.'
    },
    {
      term: 'prelim',
      category: 'pt',
      typeLabel: 'Performance Task',
      title: 'PT ReactJS Creating Pages',
      due: 'July 31, 2026',
      week: 'Week 3 · ReactJS Creating Pages',
      score: '100 / 100',
      desc: 'Built and documented multi-page navigation and reusable components in ReactJS.',
      shots: [{ file: 'PT ReactJS Creating Pages.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'Rivera_REACTJSCreatingPages_Documentation 1.pdf', label: 'Creating Pages PDF' }],
      reflect: 'Splitting views into modular components with client-side routing made the application much easier to maintain.'
    },
    {
      term: 'prelim',
      category: 'activity',
      typeLabel: 'Homework',
      title: 'Week 4 Exercise / Homework',
      due: 'August 4, 2026',
      week: 'Week 4 · Scripting Languages Part 1',
      score: '100 / 100',
      desc: 'Completed the Week 4 scripting exercise and submitted full output documentation.',
      shots: [{ file: 'Week 4 Exercise Homework.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'Rivera_Week 4 Exercise_ Homework 1.pdf', label: 'Week 4 Homework PDF' }],
      reflect: 'Testing edge cases during the exercise highlighted why input validation should be built in from the start.'
    },
    {
      term: 'prelim',
      category: 'activity',
      typeLabel: 'Exercise',
      title: 'Week 4 Exercise: JS Form Handlers',
      due: 'August 7, 2026',
      week: 'Week 4 · Scripting Languages Part 1',
      score: '20 / 20',
      desc: 'Implemented and tested JavaScript form event handlers with documented screenshots.',
      shots: [{ file: 'Week 4 Exercise JS Form.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'Rivera_Week 4 Exercise JS Form.pdf', label: 'JS Form Exercise PDF' }],
      reflect: 'Handling browser form events directly connected well to the event-driven interaction model we later used in Mediseena.'
    },
    {
      term: 'prelim',
      category: 'quiz',
      typeLabel: 'Quiz',
      title: 'JS 1 Module 5 Quiz Result',
      due: 'August 8, 2026',
      week: 'Week 4 · Cisco JavaScript Essentials 1',
      score: '100 / 100',
      desc: 'Completed Module 5 quiz on functions, callbacks, recursion, and scope.',
      shots: [
        { file: 'JS 1 Module 5 Quiz result.jpg', label: 'Teams grade screen' },
        { file: 'Rivera_Module5.jpg', label: 'Cisco Module 5 result' }
      ],
      docs: [],
      reflect: 'Understanding callbacks and lexical scope paid off immediately when working with asynchronous React handlers.'
    },
    {
      term: 'prelim',
      category: 'quiz',
      typeLabel: 'Quiz',
      title: 'JS 1 Module 6 Quiz Result',
      due: 'August 8, 2026',
      week: 'Week 4 · Cisco JavaScript Essentials 1',
      score: '93 / 100',
      desc: 'Completed Module 6 quiz on errors, exceptions, debugging, and troubleshooting.',
      shots: [
        { file: 'JS 1 Module 6 Quiz result.jpg', label: 'Teams grade screen' },
        { file: 'Rivera_JS_Module6.jpg', label: 'Cisco Module 6 result' }
      ],
      docs: [],
      reflect: 'Studying exception handling and debugging strategies helped me diagnose runtime issues faster in later lab tasks.'
    },
    {
      term: 'prelim',
      category: 'group',
      typeLabel: 'Group Work',
      title: 'Project Proposal — Mediseena',
      due: 'August 11, 2026',
      week: 'Week 5 · Group 1 (4 students)',
      score: '95 / 100',
      desc: 'Submitted the formal Mediseena project proposal detailing SDG 3 alignment, prescription digitization gaps, OCR approach, objectives, and WBS.',
      shots: [{ file: 'Project proposal.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'ProjectProposal_Mediseena.pdf', label: 'Project Proposal PDF' }],
      reflect: 'Writing the proposal forced us to define concrete system boundaries—upload, OCR, structured extraction, manual review, and export.'
    },
    {
      term: 'prelim',
      category: 'pt',
      typeLabel: 'Performance Task',
      title: 'PT ReactJS Auth',
      due: 'August 14, 2026',
      week: 'Week 4 · ReactJS Auth',
      score: '100 / 100',
      desc: 'Implemented and documented user authentication flows in ReactJS.',
      shots: [{ file: 'PT ReactJS Auth.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'PT_ReactJS_Auth_Rivera.pdf', label: 'ReactJS Auth PDF' }],
      reflect: 'Combining routing, controlled forms, and auth state prepared me directly for building protected flows in full-stack projects.'
    },
    {
      term: 'prelim',
      category: 'quiz',
      typeLabel: 'Quiz',
      title: 'JS 2 Module 1 to 3 Quiz Result',
      due: 'August 14, 2026',
      week: 'Week 5 · Cisco JavaScript Essentials 2',
      score: 'Submitted',
      mutedScore: true,
      desc: 'Completed Cisco JavaScript Essentials 2 Modules 1–3 covering classless objects, classes, inheritance, and built-in objects.',
      shots: [
        { file: 'JS 2 Module 1 to 3 Quiz Result.jpg', label: 'Teams submission screen' },
        { file: 'Rivera_JS2_Module1.png', label: 'JS 2 Module 1' },
        { file: 'Rivera_JS2_Module2.png', label: 'JS 2 Module 2' },
        { file: 'Rivera_JS2_Module3.png', label: 'JS 2 Module 3' }
      ],
      docs: [],
      reflect: 'Moving into JavaScript Essentials 2 deepened my grasp of object prototypes, classes, and built-in APIs.'
    },
    {
      term: 'prelim',
      category: 'exam',
      typeLabel: 'Practical Exam',
      title: 'Prelim Practical Examination 2026',
      due: 'August 18, 2026',
      week: 'Week 6 · Prelim Examination',
      score: '85 / 100',
      desc: 'Hands-on prelim practical exam testing client-side scripting and React implementation.',
      shots: [{ file: 'Prelim Practical Examination 2026.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'Prelim Practical Examination - Rivera 1.pdf', label: 'Prelim Practical PDF' }],
      reflect: 'Completing the practical exam under time pressure showed me where I could speed up my component and debugging workflow.'
    },
    {
      term: 'prelim',
      category: 'exam',
      typeLabel: 'Written Exam',
      title: 'Prelim Examination ITC C301 2026',
      due: 'August 18, 2026',
      week: 'Week 6 · Prelim Examination',
      score: '36 / 50',
      desc: 'Comprehensive written prelim examination covering Weeks 1–5 concepts.',
      shots: [{ file: 'Prelim Examination ITC C301 2026.jpg', label: 'Teams exam score (36 / 50)' }],
      docs: [],
      reflect: 'Scoring 36/50 highlighted the gap between hands-on coding and theoretical recall, motivating tighter review habits.'
    },

    // ================= MIDTERM =================
    {
      term: 'midterm',
      category: 'activity',
      typeLabel: 'Activity',
      title: 'Week 7 Activity Task: Transaction Manager',
      due: 'August 28, 2026',
      week: 'Week 7 · Creating and Executing Scripts',
      score: '100 / 100',
      desc: 'Built and documented the Transaction Manager web application with end-to-end screenshots.',
      shots: [{ file: 'Week 7 Activity Task.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'Week_7_Activity_TransactionManager_Rivera (1).pdf', label: 'Transaction Manager PDF' }],
      reflect: 'Connecting frontend state to transaction operations gave me a cleaner mental model of full-stack request flows.'
    },
    {
      term: 'midterm',
      category: 'pt',
      typeLabel: 'Performance Task',
      title: 'Week 8 Activity Task: PT Laravel Pages and Routes',
      due: 'September 4, 2026',
      week: 'Week 8 · Laravel Pages',
      score: '100 / 100',
      desc: 'Created Blade views and configured Laravel web routes, documented with screenshots and code outputs.',
      shots: [{ file: 'Week 8 Activity Task.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'Week 8 Activity PT Laravel pages and routes - Rivera (1).pdf', label: 'Laravel Pages & Routes PDF' }],
      reflect: 'Laravel’s declarative routing and Blade templates made server-rendered page structure feel very organized.'
    },
    {
      term: 'midterm',
      category: 'pt',
      typeLabel: 'Performance Task',
      title: 'Week 8 Laravel Built-in Authentication',
      due: 'September 4, 2026',
      week: 'Week 8 · Laravel Pages',
      score: '100 / 100',
      desc: 'Configured and verified Laravel’s built-in authentication scaffolding (registration, login, and protected routes).',
      shots: [{ file: 'Week 8 Laravel Built-in Authentication.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'Week 8 Activity PT Laravel Built in Authentication -  Rivera (1).pdf', label: 'Laravel Auth PDF' }],
      reflect: 'Seeing how Laravel handles sessions, CSRF tokens, and password hashing out of the box reinforced secure auth fundamentals.'
    },
    {
      term: 'midterm',
      category: 'activity',
      typeLabel: 'Activity',
      title: 'Week 9 Activity Task: Server-Side Scripting',
      due: 'September 8, 2026',
      week: 'Week 9 · Server-Side Scripting',
      score: '100 / 100',
      desc: 'Implemented and documented Week 9 server-side PHP scripting tasks.',
      shots: [{ file: 'Week 9 Activity Task.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'Rivera - Week 9 Activity Task (1).pdf', label: 'Week 9 Activity PDF' }],
      reflect: 'Writing plain PHP scripts clarified what happens on the server before HTML is sent back to the browser.'
    },
    {
      term: 'midterm',
      category: 'pt',
      typeLabel: 'Performance Task',
      title: 'Week 10 PT: PHP Operators and Conditional Statements',
      due: 'September 18, 2026',
      week: 'Week 10 · PHP Fundamentals',
      score: '100 / 100',
      desc: 'Applied PHP arithmetic, comparison, logical operators, and conditional branching with documented test cases.',
      shots: [{ file: 'Week 10 PT PHP Operators.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'Week 10 PT PHP Operators and Conditional Statements - Rivera (1).pdf', label: 'PHP Operators PT PDF' }],
      reflect: 'Comparing PHP’s operator behavior against JavaScript helped prevent loose-equality bugs.'
    },
    {
      term: 'midterm',
      category: 'activity',
      typeLabel: 'Lab Activity PT',
      title: 'Lab Activity PT: Building a Simple Inventory Management System (MVC)',
      due: 'September 18, 2026',
      week: 'Week 10 · MVC Architecture',
      score: '100 / 100',
      desc: 'Built a simple Inventory Management System following the Model-View-Controller pattern.',
      shots: [{ file: 'Building a Simple Inventory Management System (MVC).jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'Week 10 Activity Lab - Rivera - 302I (1).pdf', label: 'MVC Inventory Lab PDF' }],
      reflect: 'Separating data models, controllers, and views made adding and debugging inventory features noticeably cleaner.'
    },
    {
      term: 'midterm',
      category: 'pt',
      typeLabel: 'Performance Task',
      title: 'Week 11 Activity: PT Laravel CRUD',
      due: 'September 22, 2026',
      week: 'Week 11 · Laravel CRUD',
      score: '100 / 100',
      desc: 'Implemented full Create, Read, Update, and Delete functionality in Laravel with Eloquent models and migrations.',
      shots: [{ file: 'Week 11 Activity PT Laravel CRUD.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'Laravel_CRUD_Rivera (1).pdf', label: 'Laravel CRUD PDF' }],
      reflect: 'Building end-to-end CRUD in Laravel tied together routing, controllers, migrations, and form validation.'
    },
    {
      term: 'midterm',
      category: 'group',
      typeLabel: 'Group Work',
      title: 'Week 11 P: Research Paper Updates',
      due: 'September 25, 2026',
      week: 'Week 11 · Group 1 (4 students)',
      score: '85 / 100',
      desc: 'Submitted updated Mediseena research manuscript aligned with the Week 11 research template format and guide.',
      shots: [{ file: 'Research Paper Updates.jpg', label: 'Teams submission & grade' }],
      docs: [],
      reflect: 'Aligning our technical implementation with the formal IEEE template made it easier to spot undocumented assumptions.'
    },
    {
      term: 'midterm',
      category: 'quiz',
      typeLabel: 'Quiz',
      title: 'Midterm Quiz 2: PHP Fundamentals',
      due: 'October 2, 2026',
      week: 'Week 12 · Midterm Examination',
      score: '16 / 20',
      desc: 'Quiz assessing PHP syntax, superglobals, operators, and control structures.',
      shots: [{ file: 'Midterm Quiz 2 PHP Fundamentals.jpg', label: 'Teams quiz score (16 / 20)' }],
      docs: [],
      reflect: 'Scoring 16/20 showed solid command of PHP basics while pointing out a few syntax details to tighten up.'
    },
    {
      term: 'midterm',
      category: 'exam',
      typeLabel: 'Practical Exam',
      title: 'Midterm Practical Examination 2026',
      due: 'October 2, 2026',
      week: 'Week 12 · Midterm Examination',
      score: '75 / 100',
      desc: 'Midterm practical exam demonstrating Laravel registration, login, and prescription CRUD prototype.',
      shots: [{ file: 'Midterm Practical Examination 2026.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: 'ITCC3101 Midterm Practical Exam_Rivera (1).pdf', label: 'Midterm Practical PDF' }],
      reflect: 'Shipping the midterm prototype taught me to prioritize core working paths first before polishing secondary UI details.'
    },
    {
      term: 'midterm',
      category: 'exam',
      typeLabel: 'Written Exam',
      title: 'Midterm Exam 2026',
      due: 'October 9, 2026',
      week: 'Week 12 · Midterm Examination',
      score: '22 / 60',
      desc: 'Written midterm examination covering PHP, MVC architecture, and Laravel concepts.',
      shots: [{ file: 'Midterm Exam 2026.jpg', label: 'Teams exam score (22 / 60)' }],
      docs: [],
      reflect: 'This was my lowest written score of the term. It pushed me to balance hands-on building with deliberate exam preparation heading into finals.'
    },

    // ================= FINAL =================
    {
      term: 'final',
      category: 'group',
      typeLabel: 'Group Performance Task',
      title: 'Week 14 PT: 50% Working System with Documentation',
      due: 'October 17, 2026',
      week: 'Week 14 · Group 1 (4 students)',
      score: 'Submitted',
      mutedScore: true,
      desc: 'Delivered the 50% working Mediseena web application with upload, preprocessing, OCR extraction, review UI, and demo video.',
      shots: [{ file: 'Week 14 PT 50% working system with documentation.jpg', label: 'Teams submission screen' }],
      docs: [{ file: 'Mediseena_Working System and Documentation.pdf', label: '50% Working System PDF' }],
      reflect: 'Getting the core OCR-to-review pipeline working end-to-end proved the architecture was viable before final integration.'
    },
    {
      term: 'final',
      category: 'pt',
      typeLabel: 'Performance Task',
      title: 'Week 14 PT: 100% Working System with Documentation',
      due: 'October 23, 2026',
      week: 'Week 15 · 100% Web Development',
      score: 'Submitted',
      mutedScore: true,
      desc: 'Submitted the complete 100% working Mediseena system with GitHub repository, video demonstration, and final system documentation.',
      shots: [{ file: 'Week 14 PT 100% working system with documentation.jpg', label: 'Teams submission screen' }],
      docs: [{ file: '100% Working System Final Documentation.pdf', label: '100% Final Documentation PDF' }],
      reflect: 'Reaching 100% feature completion meant hardening fallback stages, review validation, and Supabase row-level security.'
    },
    {
      term: 'final',
      category: 'group',
      typeLabel: 'Group Presentation',
      title: 'Week 15 Project Presentation',
      due: 'October 23, 2026',
      week: 'Week 15 · Group 1 (4 students)',
      score: '94 / 100',
      desc: 'Presented the completed Mediseena platform, demonstrating live prescription digitization and human-in-the-loop verification.',
      shots: [{ file: 'Week 15 Project presentation.jpg', label: 'Teams submission & grade' }],
      docs: [{ file: '100% Working System Final Documentation.pdf', label: 'Final Documentation PDF' }],
      reflect: 'Scoring 94/100 validated that our demo clearly communicated both the technical pipeline and the real-world medication safety goal.'
    },
    {
      term: 'final',
      category: 'pt',
      typeLabel: 'Performance Task',
      title: 'Week 16 PT: Project Documentation (IEEE Paper & Marketing Ad)',
      due: 'October 30, 2026',
      week: 'Week 16 · Web System Documentation',
      score: 'Submitted',
      mutedScore: true,
      desc: 'Submitted the IEEE-formatted research paper ("Mediseena_IEEE_Paper.pdf") and the 30-second Mediseena marketing ad.',
      shots: [{ file: 'Week 16 PT Project Documentation.jpg', label: 'Teams submission screen' }],
      docs: [{ file: 'Mediseena_IEEE_Paper (1).pdf', label: 'Mediseena IEEE Paper PDF' }],
      reflect: 'Writing the IEEE paper honestly—separating verified mocked tests from unvalidated accuracy claims—made our research much stronger.'
    },
    {
      term: 'final',
      category: 'group',
      typeLabel: 'Group Work',
      title: 'Project Final Revision',
      due: 'November 10, 2026',
      week: 'Week 18 · Group 1 (4 students)',
      score: 'Submitted',
      mutedScore: true,
      desc: 'Deployed final revisions to mediseena.vercel.app, adding medication reminder options and calendar integration.',
      shots: [{ file: 'Project Final Revision.jpg', label: 'Teams submission screen' }],
      docs: [],
      liveUrl: 'https://mediseena.vercel.app',
      reflect: 'Shipping the final revision features on Vercel turned the feedback from our presentation into tangible user improvements.'
    },
    {
      term: 'final',
      category: 'exam',
      typeLabel: 'Final Exam',
      title: 'Final Examination and Presentation',
      due: 'November 2026',
      week: 'Week 18 · Group 1 (4 students)',
      score: '92 / 100',
      desc: 'Final course examination and defense presentation for Group 1’s Mediseena platform.',
      shots: [{ file: 'Final Examination and presentation.jpg', label: 'Teams grade screen (92 / 100)' }],
      docs: [],
      reflect: 'Finishing the course with a 92/100 on the final exam and presentation was a strong close to the semester.'
    }
  ];

  // Render Mediseena project deliverables
  const projectDocsEl = document.getElementById('projectDocs');
  PROJECT_DOCS.forEach((doc) => {
    const url = assetUrl(doc.file);
    const row = document.createElement('div');
    row.className = 'doc-row';
    row.innerHTML = `
      <div class="doc-info">
        <div class="doc-title">${doc.title}</div>
        <div class="doc-file">${doc.file}</div>
      </div>
      <div class="doc-actions">
        ${doc.downloadOnly ? '' : `<a class="action-btn" href="${url}" target="_blank" rel="noopener">View PDF ↗</a>`}
        <a class="action-btn secondary" href="${url}" download="${doc.file}">Download</a>
      </div>
    `;
    projectDocsEl.appendChild(row);
  });

  // Render coursework cards
  let activeTerm = 'all';
  let activeCat = 'all';

  const lists = {
    prelim: document.querySelector('[data-term-list="prelim"]'),
    midterm: document.querySelector('[data-term-list="midterm"]'),
    final: document.querySelector('[data-term-list="final"]')
  };

  const sections = {
    prelim: document.querySelector('[data-term-section="prelim"]'),
    midterm: document.querySelector('[data-term-section="midterm"]'),
    final: document.querySelector('[data-term-section="final"]')
  };

  const visibleCountEl = document.getElementById('visibleCount');

  function buildCard(item) {
    const card = document.createElement('article');
    card.className = 'act-card';

    const shotsHtml = item.shots.length
      ? `<div class="shot-grid">${item.shots
          .map(
            (s) => `
          <button type="button" class="shot-thumb" data-src="${assetUrl(s.file)}" data-caption="${item.title} — ${s.label}">
            <img src="${assetUrl(s.file)}" alt="${item.title} — ${s.label}" loading="lazy">
            <span class="shot-caption">${s.label} · Click to zoom</span>
          </button>`
          )
          .join('')}</div>`
      : '';

    const docsHtml =
      item.docs.length || item.liveUrl
        ? `<div class="card-actions">
            ${item.docs
              .map(
                (d) => `
              <a class="action-btn" href="${assetUrl(d.file)}" target="_blank" rel="noopener">View ${d.label} ↗</a>
              <a class="action-btn secondary" href="${assetUrl(d.file)}" download="${d.file}">Download</a>`
              )
              .join('')}
            ${item.liveUrl ? `<a class="action-btn" href="${item.liveUrl}" target="_blank" rel="noopener">Open Live App ↗</a>` : ''}
          </div>`
        : '';

    card.innerHTML = `
      <div class="act-head">
        <div>
          <h4 class="act-title">${item.title}</h4>
          <div class="act-meta">${item.typeLabel} · Due ${item.due} · ${item.week}</div>
        </div>
        <span class="score-badge${item.mutedScore ? ' muted-badge' : ''}">${item.score}</span>
      </div>
      <p class="act-desc">${item.desc}</p>
      ${shotsHtml}
      ${docsHtml}
      <div class="reflect-box">
        <strong>Reflection</strong>
        ${item.reflect}
      </div>
    `;
    return card;
  }

  function render() {
    let totalShown = 0;

    ['prelim', 'midterm', 'final'].forEach((term) => {
      const container = lists[term];
      const section = sections[term];
      container.innerHTML = '';

      if (activeTerm !== 'all' && activeTerm !== term) {
        section.hidden = true;
        return;
      }

      const items = COURSEWORK.filter(
        (item) => item.term === term && (activeCat === 'all' || item.category === activeCat)
      );

      if (items.length === 0) {
        if (activeTerm === 'all') {
          section.hidden = true;
        } else {
          section.hidden = false;
          container.innerHTML = '<div class="empty-state">No items match this filter in this term.</div>';
        }
        return;
      }

      section.hidden = false;
      items.forEach((item) => container.appendChild(buildCard(item)));
      totalShown += items.length;
    });

    visibleCountEl.textContent = `Showing ${totalShown} ${totalShown === 1 ? 'item' : 'items'}`;
  }

  // Term tabs
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeTerm = btn.dataset.term;
      document.querySelectorAll('.tab-btn').forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle('is-active', isActive);
        b.setAttribute('aria-selected', String(isActive));
      });
      render();
    });
  });

  // Category pills
  document.querySelectorAll('.pill-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCat = btn.dataset.cat;
      document.querySelectorAll('.pill-btn').forEach((b) => b.classList.toggle('is-active', b === btn));
      render();
    });
  });

  // Top nav jump links ensure target term is visible
  document.querySelectorAll('[data-jump-term]').forEach((link) => {
    link.addEventListener('click', () => {
      if (activeTerm !== 'all' && activeTerm !== link.dataset.jumpTerm) {
        activeTerm = 'all';
        document.querySelectorAll('.tab-btn').forEach((b) => {
          const isAll = b.dataset.term === 'all';
          b.classList.toggle('is-active', isAll);
          b.setAttribute('aria-selected', String(isAll));
        });
        render();
      }
    });
  });

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  document.addEventListener('click', (e) => {
    const thumb = e.target.closest('.shot-thumb');
    if (!thumb) return;
    lightboxImg.src = thumb.dataset.src;
    lightboxImg.alt = thumb.dataset.caption;
    lightboxCaption.textContent = thumb.dataset.caption;
    lightbox.hidden = false;
  });

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImg.src = '';
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });

  // Theme toggle (dark default matching miggyrivera.tech, light paper toggle)
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light') {
    root.setAttribute('data-theme', 'light');
    themeToggle.textContent = 'Dark';
  }

  themeToggle.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    if (isLight) {
      root.removeAttribute('data-theme');
      localStorage.setItem('portfolio-theme', 'dark');
      themeToggle.textContent = 'Light';
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('portfolio-theme', 'light');
      themeToggle.textContent = 'Dark';
    }
  });

  render();
})();
