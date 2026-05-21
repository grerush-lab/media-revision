const questions = [
// ═══════════════════════════════════════════════════════════
// COMPONENT 1 — SECTION A
// ═══════════════════════════════════════════════════════════
{id:'c1_2019_1a',year:2019,comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(a)',product:'GQ magazine front cover',texts:['GQ'],
 question:'Explore how the GQ magazine front cover uses media language to communicate meanings through <strong>images</strong>.',
 must:[],
 points:['The medium close-up of "The Rock" emphasises his masculinity with his muscular arm filling a large proportion of the frame.',
  'The cover star makes direct mode of address with the reader, creating a personal relationship.',
  'His serious facial gesture codes are stereotypically masculine and offer a sense of challenge/aspiration for the male reader.',
  'The gesture code of the raised arm and clenched fist connotes defensiveness and power.',
  'The bull\'s skull iconography at the bottom of the exclamation mark links to the tattoo in the same design that "The Rock" has on his bicep.'],
 levels:[['5','Excellent, detailed analysis. Consistent focus on the connotations or intended meanings of specific elements.'],
  ['4','Good, reasonably detailed analysis. Focus on connotations or intended meanings.'],
  ['3','Satisfactory analysis. General focus on connotations, but lapses into description.'],
  ['2','Basic analysis. Limited focus on connotations; tendency to describe.'],
  ['1','Minimal, if any, analysis. Brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'c1_2019_1b',year:2019,comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(b)',product:'GQ magazine front cover',texts:['GQ'],
 question:'Explore how the GQ magazine front cover uses media language to communicate meanings through <strong>text/written language</strong>.',
 must:[],
 points:['Conventional use of cover lines creates enigmas (Barthes) that encourage readers to buy the magazine.',
  'Use of conventional buzzwords ("special", "exclusive", "new") to give the magazine a point of difference.',
  'Use of a pun ("rebooted") and direct address ("it\'s not as hard as you think") creates a colloquial, personal tone.',
  'Language suggesting a less stereotypically masculine representation of men — references to "mind, body", "wellness", "style", "fashion".',
  'The more serious tone of the bottom strapline binary opposes the "man up!" imperative further up the page.'],
 levels:[['5','Excellent, detailed analysis. Consistent focus on connotations.'],['4','Good, reasonably detailed.'],
  ['3','Satisfactory — lapses into description.'],['2','Basic — tendency to describe.'],['1','Minimal, brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'c1_2019_1c',year:2019,comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(c)',product:'GQ magazine front cover',texts:['GQ'],
 question:'Explore how the GQ magazine front cover uses media language to communicate meanings through <strong>layout and design</strong>.',
 must:[],
 points:['The size and central composition of the main image creates reader identity with the cover star.',
  'The font size of "The Rock!" compared to his actual name connotes his persona is more famous than the man himself.',
  'The colour palette is stereotypically masculine with connotations of strength and power.',
  'The magazine\'s masthead is layered on top of his image, giving connotations of the importance/power of the brand.',
  'A conventional "Z-line" takes the reader\'s eye from the masthead through aspirational teases ("best watch", "fashion guide", "bankable star").',
  'A mixture of serif and sans serif fonts highlights articles\' different tones.'],
 levels:[['5','Excellent, detailed analysis.'],['4','Good, reasonably detailed.'],
  ['3','Satisfactory — lapses into description.'],['2','Basic — tendency to describe.'],['1','Minimal, brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'c1_2019_2a',year:2019,comp:1,sec:'A',topic:'Context',marks:5,ao:'AO1 2a/2b',
 qnum:'Q2(a)',product:'Quality Street print advertisement (1956)',texts:['Quality Street'],
 question:'Explain how <strong>historical context</strong> influences print advertisements. Refer to the print advertisement for Quality Street (1956) to support your points.',
 must:[],
 points:['Post-war prosperity in the 1950s — people becoming more able to afford luxury items such as chocolate.',
  '1950s consumers were being presented with more choice (linking to the advert\'s emphasis on "18" types of chocolate).',
  'The 1950s as a period of second-wave feminism following changes to women\'s roles during WWII.',
  'The dominant messages reinforce patriarchal ideologies — the man as "provider", bringing home the chocolate, with the characters of "Major Quality" and "Miss Sweetly".',
  'These theatrical characters also act as a reference back to the Regency era of British art and history.',
  'Social changes including the rise of wealthier "middle classes" could be linked to the central characters\' dress codes.'],
 levels:[['5','Excellent, detailed and accurate knowledge. Highly appropriate reference to the set product.'],
  ['4','Good, accurate knowledge. Appropriate reference to the set product.'],
  ['3','Satisfactory, generally accurate. Some reference to the set product.'],
  ['2','Basic knowledge. Limited reference to the set product.'],
  ['1','Minimal knowledge. Minimal reference; brief or incomplete.']],
 tip:["Only spend 5 minutes on this \u2014 it is worth 5 marks.", "Give a brief example from the set text to support each point.", "Focus on the specific type of context named in the question (historical, social, political, cultural).", "You do not need to analyse media language here \u2014 this is about context."]},

{id:'c1_2019_2b',year:2019,comp:1,sec:'A',topic:'Representation',marks:25,ao:'AO2 1a/1b',
 qnum:'Q2(b)',product:'Quality Street (1956) & Axe Peace print advertisements',texts:['Quality Street'],
 question:'Compare the <strong>representations of gender</strong> in the Quality Street and Axe Peace print advertisements.',
 must:['How representations of gender are constructed','How far the representations of gender are similar in the two advertisements','How far the representations of gender are different in the two advertisements'],
 points:['Use representation theory: selected, constructed and mediated nature of representations; stereotypes of gender; messages and values; feminist perspectives.',
  'QUALITY STREET — The central man holds the tin of sweets and thus has control over this luxury item. The women are framed either side of him, connoting that choosing between them is also part of the "delightfully delicious dilemma".',
  'QUALITY STREET — Men are represented as a heroic central character — the "provider" — and women as objects of desire who are dependent on the man\'s choice.',
  'QUALITY STREET — The conservative dress codes, theatrical iconography and patriarchal narrative link to 1950s British society.',
  'AXE PEACE — The men are not visually linked with the product at all — prior audience knowledge is needed to understand the brand.',
  'AXE PEACE — The women in the Axe advertisement are represented much more sexually than those in the Quality Street advertisement through revealing dress codes.',
  'AXE PEACE — Men and women are represented through narratives, dress and gesture codes more obviously referring to romantic/sexual relationships.',
  'SIMILARITY — Men have dominance and women are subservient in both adverts, despite the different historical contexts.',
  'SIMILARITY — The style of both adverts\' images is artistic rather than realistic, representing "idealistic" men and women.',
  'DIFFERENCE — The more conservative dress codes and ideologies of the Quality Street advert compared to the more explicit Axe advert perhaps reflect changes in audiences\' attitudes over time.',
  'CONCLUSION — Both adverts represent men and women as needing the product to help them form relationships with the opposite sex.'],
 levels:[['21–25','Excellent, detailed analysis of both products. Excellent comparisons. Consistent use of the theoretical framework and terminology. Well-reasoned judgements and conclusions.'],
  ['16–20','Good, reasonably detailed analysis. Good comparisons. Good use of theoretical framework. Reasoned judgements.'],
  ['11–15','Satisfactory analysis. Satisfactory comparisons (may favour one product). Satisfactory use of theoretical framework.'],
  ['6–10','Basic analysis, tending to describe. Basic comparisons, mainly one product.'],
  ['1–5','Minimal, if any, analysis; largely descriptive. Minimal use of theoretical framework.']],
 tip:["This is an extended response \u2014 you need an introduction, sustained discussion, and conclusion.", "Spend 10 minutes studying the unseen resource and comparing it to the set text BEFORE writing.", "Structure around similarities AND differences \u2014 use the bullet points in the question to guide you.", "Apply representation theory: selection, construction and mediation; stereotypes; messages and values.", "Both texts must be covered \u2014 responses mainly on one product will be capped at band 3.", "Make clear judgements and draw a reasoned conclusion at the end."]},

{id:'c1_2020_1a',year:2020,comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(a)',product:'The Guardian newspaper front page',texts:['Guardian'],
 question:'Explore how The Guardian newspaper front page uses media language to create meanings through <strong>images</strong>.',
 must:[],
 points:['The camera shot of the two boys is at their eye level, allowing the audience to more closely associate with them.',
  'The main image represents the two boys as typical little boys — the human interest angle.',
  'The boys\' bright, colourful dress codes create a binary opposition with the seriousness of the tragedy they\'ve been involved in.',
  'The younger brother\'s smiling face reinforces this binary opposition.',
  'Other images include iconic images of C-3PO and R2D2, along with Woody Allen and Emma Stone — placed top left where the audience would see them first, contrasting with the serious lead story.',
  'The yellow smiling face icon linked to the "Aciiid"/rave culture story works in a similar way.'],
 levels:[['5','Excellent, detailed analysis. Consistent focus on connotations.'],['4','Good, reasonably detailed.'],
  ['3','Satisfactory — lapses into description.'],['2','Basic — tendency to describe.'],['1','Minimal, brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'c1_2020_1b',year:2020,comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(b)',product:'The Guardian newspaper front page',texts:['Guardian'],
 question:'Explore how The Guardian newspaper front page uses media language to create meanings through <strong>text/written language</strong>.',
 must:[],
 points:['The tone of the headline frames the story as accidental and avoidable.',
  'The headline\'s use of a personal pronoun (a direct quote from the boys\' father) gives the story a conventional human interest angle.',
  'The lead article\'s emotive language creates audience empathy.',
  '"PM bows to pressure" represents David Cameron negatively — typical of The Guardian\'s more liberal political leaning.',
  'The light-hearted above-masthead text (including the pun "Barack and Grylls go up a hill") creates a binary opposition with the main stories.',
  'Above-masthead section includes exclamatives and references to people with whom the audience are expected to be familiar ("Jamie").'],
 levels:[['5','Excellent, detailed analysis.'],['4','Good, reasonably detailed.'],
  ['3','Satisfactory — lapses into description.'],['2','Basic — tendency to describe.'],['1','Minimal, brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'c1_2020_1c',year:2020,comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(c)',product:'The Guardian newspaper front page',texts:['Guardian'],
 question:'Explore how The Guardian newspaper front page uses media language to create meanings through <strong>layout and design</strong>.',
 must:[],
 points:['The size and central composition of the main image creates audience empathy and frames the story around its human interest angle.',
  'The caption beneath the central image anchors its meaning.',
  'Conventional use of bullet point subheadings adds context and detail to the main headline.',
  'The colour and font of The Guardian\'s masthead marks it out as different to other serious newspapers with a more informal style.',
  'Conventional placement of the support story — linked to the main story and develops the political dimension.',
  'Listing of other content above the masthead acts as a conventional "tease" for the newspaper\'s other sections.'],
 levels:[['5','Excellent, detailed analysis.'],['4','Good, reasonably detailed.'],
  ['3','Satisfactory — lapses into description.'],['2','Basic — tendency to describe.'],['1','Minimal, brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'c1_2020_2a',year:2020,comp:1,sec:'A',topic:'Context',marks:5,ao:'AO1 2a/2b',
 qnum:'Q2(a)',product:'The Man With The Golden Gun film poster (1974)',texts:['Golden Gun'],
 question:'Explain how <strong>cultural context</strong> influences film posters. Refer to The Man With The Golden Gun film poster (1974) to support your points.',
 must:[],
 points:['High levels of intertextuality to other films in the franchise, even though this was only Moore\'s second film as Bond.',
  'Prior to the 1990s, illustrated posters were common — this poster reflects that cultural norm.',
  'This film was set during the 1973 energy crisis (links to the power plant and energy beam directed at Bond in the poster).',
  'Kung Fu films were popular at the time, so the poster includes martial arts iconography and Asian locations.',
  '1970s society was moving towards racial equality but stereotypes of minority ethnic groups are still at work in the poster.',
  'The poster reinforces stereotypically sexualised representations of women, reflecting 1970s societal attitudes.'],
 levels:[['5','Excellent, detailed and accurate knowledge. Highly appropriate reference to the set product.'],
  ['4','Good, accurate knowledge. Appropriate reference.'],['3','Satisfactory, generally accurate. Some reference.'],
  ['2','Basic knowledge. Limited reference.'],['1','Minimal knowledge. Minimal reference.']],
 tip:["Only spend 5 minutes on this \u2014 it is worth 5 marks.", "Give a brief example from the set text to support each point.", "Focus on the specific type of context named in the question (historical, social, political, cultural).", "You do not need to analyse media language here \u2014 this is about context."]},

{id:'c1_2020_2b',year:2020,comp:1,sec:'A',topic:'Representation',marks:25,ao:'AO2 1a/1b',
 qnum:'Q2(b)',product:'The Man With The Golden Gun & Holding The Man film posters',texts:['Golden Gun'],
 question:'Compare the <strong>representation of men</strong> in the film posters for The Man With The Golden Gun and Holding The Man.',
 must:['The choices producers have made about how to represent men','How far the representation of men is similar in the two film posters','How far the representation of men is different in the two film posters'],
 points:['Use representation theory — selected, constructed and mediated nature; stereotypes; messages and values; theoretical perspectives.',
  'GOLDEN GUN — Bond is represented as powerful, heterosexually dominant and action-oriented. His tuxedo, gun and confident pose connote status and control. The two women flanking him reinforce his desirability.',
  'GOLDEN GUN — The male villain (Scaramanga) is given equal billing at the top of the poster, creating a binary opposition between hero and villain — a typical masculine narrative structure.',
  'HOLDING THE MAN — Men are represented through romantic/emotional attachment to another man, which is unconventional compared to dominant representations of masculinity in mainstream cinema posters.',
  'HOLDING THE MAN — The two men are presented in close physical proximity and with gesture codes suggesting tenderness and vulnerability — quite different to the dominant/powerful representation in the Bond poster.',
  'SIMILARITY — Both posters represent men as central to the narrative and as objects of audience attention.',
  'DIFFERENCE — The 1974 Bond poster represents men within dominant, heterosexual norms; Holding The Man challenges these through its representation of a gay relationship.',
  'DIFFERENCE — The historical and cultural contexts are very different — 1970s mainstream cinema vs a 2015 film dealing with LGBTQ+ identity and the AIDS crisis.',
  'CONCLUSION — Both posters use male representation to signal the type of relationship/narrative at the heart of the film, but draw on very different ideological frameworks to do so.'],
 levels:[['21–25','Excellent, detailed analysis of both products. Excellent comparisons. Consistent use of the theoretical framework. Well-reasoned judgements and conclusions.'],
  ['16–20','Good, reasonably detailed analysis. Good comparisons. Good use of theoretical framework.'],
  ['11–15','Satisfactory analysis. Satisfactory comparisons. Satisfactory use of theoretical framework.'],
  ['6–10','Basic analysis, tending to describe. Basic comparisons, mainly one product.'],
  ['1–5','Minimal, if any, analysis; largely descriptive.']],
 tip:["This is an extended response \u2014 you need an introduction, sustained discussion, and conclusion.", "Spend 10 minutes studying the unseen resource and comparing it to the set text BEFORE writing.", "Structure around similarities AND differences \u2014 use the bullet points in the question to guide you.", "Apply representation theory: selection, construction and mediation; stereotypes; messages and values.", "Both texts must be covered \u2014 responses mainly on one product will be capped at band 3.", "Make clear judgements and draw a reasoned conclusion at the end."]},

{id:'c1_2021_1a',year:2021,comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(a)',product:'The Man with the Golden Gun film poster',texts:['Golden Gun'],
 question:'Explore how The Man with the Golden Gun film poster creates meanings through the use of <strong>colour</strong>.',
 must:[],
 points:['The colour of the gun connotes wealth and status — gold is associated with the most expensive metal.',
  'The "golden" colour palette is referenced frequently throughout the poster to link with the film\'s title and establish its central motif.',
  'Bond\'s tuxedo is the darkest colour and at the centre of the frame, drawing the audience\'s eye towards the hero and making him stand out.',
  'The text at the top and bottom of the page has a consistent colour palette, linking the actor, the character and the film\'s title together as a unified brand.',
  'The colours of the two female characters\' bikinis could connote that one is a heroine (red bikini) and one is a villain (black bikini), using colour to signal character function.',
  'Overall, the colour palette includes many of the codes and conventions of the action adventure genre (red, black, orange) with elements of the science fiction genre (the silver of the \'laboratory\' background).'],
 levels:[['5','Excellent, detailed analysis. Consistent focus on connotations created by the colour palette.'],
  ['4','Good, reasonably detailed.'],['3','Satisfactory — lapses into description.'],
  ['2','Basic — tendency to describe.'],['1','Minimal, brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'c1_2021_1b',year:2021,comp:1,sec:'A',topic:'Media Language',marks:10,ao:'AO2 1a',
 qnum:'Q1(b)',product:'The Man with the Golden Gun film poster',texts:['Golden Gun'],
 question:'Explore how The Man with the Golden Gun film poster creates meanings through the use of <strong>genre conventions</strong>.',
 must:[],
 points:['Character roles: the central image is a mid-shot of James Bond, smartly dressed and holding a gun across his body. The dominance of his image suggests he is the film\'s protagonist — according to Propp\'s theory, he would be considered the \'hero\'.',
  'Bond\'s attire connotes business and professionalism, and the gun — an iconic part of Bond\'s \'uniform\' — signifies the danger and action his character will be involved in.',
  'Bond is looking directly at the audience, seemingly making eye contact. The intensity of his stare and lack of a smile connote how seriously he expects to be taken, and that he appears calm despite the chaos surrounding him — a conventional strength of a genre hero.',
  'The hand of the character holding the gun creates an enigma code as to who they are. According to Propp, this character is likely to be the antagonist or villain.',
  'Intertextuality: typical of Bond films, the protagonist is flanked by females wearing very few clothes — two of these women are highly sexualised, bikini-clad with perfect hourglass figures and long flowing hair.',
  'Unconventionally, multiple images are used, suggesting elements of the film\'s narrative so the reader is expected to work through the images to understand the plot.',
  'The conventional narrative of attempted assassination is suggested by Bond\'s \'code name\' being engraved on the bullet.',
  'Conventional images of destruction and explosions are codes that signify to the audience this is from the action/thriller genre.',
  'Other conventional aspects include that Bond has female allies and enemies yet they all look the same, making it hard for him to distinguish between them.'],
 levels:[['9–10','Excellent, detailed analysis. Consistent focus on how specific genre conventions create meaning. Highly appropriate use of terminology.'],
  ['7–8','Good, reasonably detailed. Appropriate use of terminology.'],
  ['5–6','Satisfactory — general focus, lapses into description.'],
  ['3–4','Basic — limited focus, tendency to describe.'],['1–2','Minimal, brief, descriptive.']],
 tip:["You have 10 minutes for this \u2014 plan 4\u20135 substantial analytical points.", "Each point needs a specific example from the text AND a clear explanation of meaning.", "Responses that consistently explain connotations rather than describing will reach the higher bands.", "No intro/conclusion needed \u2014 sustained analytical paragraphs are fine."]},

{id:'c1_2022_1a',year:2022,comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(a)',product:'This Girl Can print advertisement',texts:['This Girl Can'],
 question:'Explore how the print advertisement for This Girl Can uses media language to create meanings through <strong>text/written language</strong>.',
 must:[],
 points:['"This Girl Can" — a declarative, positive statement connoting determination and empowerment. The declarative form asserts confidence rather than asking permission.',
  'The funding bodies\' logos (Sport England etc.) create a sense of endorsement, authority and legitimacy.',
  'Direct address ("This Girl Can") creates a personal relationship with the audience — the audience is invited to identify with the "girl".',
  'The inclusive, non-elite language broadens the appeal of the advert — "girl" rather than "woman" suggests accessibility.',
  'Use of informal language and colloquialisms creates a friendly, approachable tone that contrasts with conventional sports advertising.',
  'Typography choices (bold, chunky font) reinforce the campaign\'s empowering message — strength through simplicity.'],
 levels:[['5','Excellent, detailed analysis. Consistent focus on connotations or meanings created by the text.'],
  ['4','Good, reasonably detailed.'],['3','Satisfactory — lapses into description.'],
  ['2','Basic — tendency to describe.'],['1','Minimal, brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'c1_2023_1a',year:2023,comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(a)',product:'Spectre film poster',texts:['Spectre'],
 question:'How does the Spectre film poster communicate meaning through <strong>narrative</strong>?',
 must:[],
 points:['The iconography of the gun and Bond\'s code of gesture give clues to the narrative — his posture is both powerful (with the gun) and contemplative, suggesting a complex hero.',
  'The shadow/dark figure behind Bond creates enigmas (Barthes) — the villain\'s identity is concealed, inviting the audience into the narrative.',
  'The composition positions Bond as the protagonist/hero (Propp), with the antagonist looming behind him, suggesting threat and danger.',
  'The visual narrative suggests a story of pursuit, concealed identity and moral ambiguity — typical of the Bond franchise.',
  'The tagline and title work together to anchor the narrative meaning of the image — "Spectre" as a shadowy, threatening presence.',
  'Intertextuality with previous Bond films shapes audience expectations about the type of narrative — action, espionage, romance.'],
 levels:[['5','Excellent, detailed analysis of how narrative communicates meaning. Consistent focus on connotations of specific elements.'],
  ['4','Good, reasonably detailed.'],['3','Satisfactory — lapses into description.'],
  ['2','Basic — limited focus on narrative, tendency to describe.'],['1','Minimal, brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'c1_2024_1a',year:2024,comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(a)',product:'The Guardian front cover (18 Jan 2022)',texts:['Guardian'],
 question:'Explore how The Guardian newspaper front page (18 Jan 2022) uses media language to communicate meanings through <strong>layout and design</strong>.',
 must:[],
 points:['Large dominant image of Boris Johnson, providing anchorage to the Partygate issue — the image is the story.',
  'Formal column layout with clear cover lines followed by detailed copy, each leading to pages within the cover — typical broadsheet structure.',
  'G2 skyline/cover line offering a colourful contrast to the serious main stories — appeals to cultural and leisure audiences alongside news readers.',
  'Traditional structure and design, including a clear identifiable masthead — signals credibility and quality journalism.',
  'Higher balance of copy to image, aligning with typical broadsheet features and appealing to the news enthusiast.',
  'House style adhered to throughout — consistent colours, layout, bylines and price reinforce brand identity.'],
 levels:[['5','Excellent, detailed analysis. Consistent focus on connotations or meanings created by layout/design.'],
  ['4','Good, reasonably detailed.'],['3','Satisfactory — lapses into description.'],
  ['2','Basic — tendency to describe.'],['1','Minimal, brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'c1_2025_1a',year:2025,comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(a)',product:'Quality Street print advertisement',texts:['Quality Street'],
 question:'Explore how the print advertisement for Quality Street uses media language to communicate meanings through <strong>layout and design</strong>.',
 must:[],
 points:['The size and central composition of the main characters ("Major Quality" and "Miss Sweetly") creates reader identity at the time the advert was produced.',
  'Typical triangular geometric composition helps anchorage of the product — the eye is drawn to the characters and then to the chocolates.',
  'Font sizes across the advert: small print for product information, larger fonts for taglines — hierarchy of information.',
  'The colour palette is rich in primary and secondary colours with connotations of vibrancy, luxury and richness.',
  'Foreground inserts of the chocolates ("pack shot") connect their colours to the characters in the advert — product is always visible.',
  'The golden halo of the frame above the central characters links to brand identity — "Quality Street" as aspirational and theatrical.',
  'Hand-drawn design like an animation or piece of art — links to post-war consumer culture and depicts key figures of the "house".'],
 levels:[['5','Excellent, detailed analysis. Consistent focus on connotations or meanings created by layout/design.'],
  ['4','Good, reasonably detailed.'],['3','Satisfactory — lapses into description.'],
  ['2','Basic — tendency to describe.'],['1','Minimal, brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'c1_2025_1b',year:2025,comp:1,sec:'A',topic:'Media Language',marks:10,ao:'AO2 1a',
 qnum:'Q1(b)',product:'Quality Street print advertisement',texts:['Quality Street'],
 question:'Explore how the print advertisement for Quality Street uses media language to communicate meanings through <strong>images</strong>.',
 must:[],
 points:['The central characters ("Major Quality" and "Miss Sweetly") are dressed in Regency-era period costume, connoting a sense of history, tradition and British heritage.',
  'The theatrical, pantomime-like pose and gesture codes of the characters suggest performance and fun, inviting the audience to enjoy the advert as entertainment.',
  'The foreground placement of the product (the chocolates) gives it primacy and positions it as the object of desire in the scene.',
  'The colour and detail of the costumes echo the bright colours of the sweet wrappers, creating visual coherence between the brand characters and the product.',
  'The warm, inviting colour palette connotes luxury, indulgence and pleasure — core values of the confectionery brand.',
  'The style of the illustration anchors the product in a specific historical period with aspirational, class-based connotations — the Regency era as glamorous and refined.'],
 levels:[['9–10','Excellent, detailed analysis. Consistent focus on connotations or intended meanings created by the images. Highly appropriate use of subject-specific terminology.'],
  ['7–8','Good, reasonably detailed. Focus on connotations. Appropriate use of terminology.'],
  ['5–6','Satisfactory — general focus, lapses into description.'],
  ['3–4','Basic — limited focus, tendency to describe.'],['1–2','Minimal, brief, descriptive.']],
 tip:["You have 10 minutes for this \u2014 plan 4\u20135 substantial analytical points.", "Each point needs a specific example from the text AND a clear explanation of meaning.", "Responses that consistently explain connotations rather than describing will reach the higher bands.", "No intro/conclusion needed \u2014 sustained analytical paragraphs are fine."]},

// ═══════════════════════════════════════════════════════════
// COMPONENT 1 — SECTION B
// ═══════════════════════════════════════════════════════════
{id:'c1_2019_3a',year:2019,comp:1,sec:'B',topic:'Industry',marks:1,ao:'AO1 1a',
 qnum:'Q3(a)',product:'Radio industry',texts:[],
 question:'Name the organisation that <strong>regulates radio</strong> in the UK.',
 must:[],points:['Ofcom / The Office of Communications'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'c1_2019_3b',year:2019,comp:1,sec:'B',topic:'Industry',marks:4,ao:'AO1 1a/1b',
 qnum:'Q3(b)',product:'Radio industry',texts:[],
 question:'Briefly explain the difference between how <strong>public service radio</strong> and <strong>commercial radio</strong> are funded.',
 must:[],
 points:['Public service broadcasters are funded by public money — e.g. directly from government or through a tax such as the licence fee.',
  'For PSBs, acquiring this funding is usually linked to the type of content they must produce and the audiences they must reach.',
  'Commercial broadcasters are funded by the sale of advertising and sponsorship slots.',
  'The BBC is the main PSB in the UK; commercial stations include Heart, Capital and Talk Radio.'],
 levels:[['4','Excellent, detailed and accurate knowledge of the difference in funding.'],
  ['3','Good, accurate knowledge.'],['2','Satisfactory, generally accurate knowledge.'],['1','Basic knowledge.']],
 tip:["If the question says 'explain', give your point AND a reason \u2014 not just a statement.", "If the question says 'refer to', you MUST give specific examples from the set text.", "2 marks per point: one for identifying, one for developing/explaining.", "1 mark = 1 minute writing. Keep your answer focused and don't over-run.", "Read all Section B questions together before starting \u2014 some parts relate to each other."]},

{id:'c1_2019_3c',year:2019,comp:1,sec:'B',topic:'Industry',marks:12,ao:'AO1 1a/1b',
 qnum:'Q3(c)',product:'The Archers (BBC Radio 4)',texts:['Archers'],
 question:'Explain how radio programmes use <strong>technologies to reach audiences</strong>. Refer to <em>The Archers</em> to support your points.',
 must:[],
 points:['The Archers is the world\'s longest running radio soap opera with 5 million listeners.',
  'The main broadcast on Radio 4 via FM reaches its core audience; simultaneous broadcast via DAB broadens this.',
  'Radio 4 Extra repeats episodes, allowing audiences to catch up — extending the programme\'s reach beyond its original broadcast slot.',
  'The BBC website and The Archers\' own website offer multimedia content (behind-the-scenes videos, character guides, episode synopses) and encourage more active audiences.',
  'BBC Sounds and BBC iPlayer allow audiences to listen at convenient times, outside of conventional broadcast scheduling — appealing to younger, on-demand audiences.',
  'Facebook and Twitter/X pages allow the programme to reach a global audience beyond a national context — The Archers has international listeners.',
  'Digital technologies allow audiences to interact with the programme, engage with storylines and engage with fellow fans online.',
  'The BBC\'s public service remit to reach a wide range of audiences is fulfilled through The Archers\' use of digital technologies.'],
 levels:[['10–12','Excellent, detailed and accurate knowledge of how radio programmes use technologies to reach audiences. Excellent reference to The Archers. Highly appropriate use of subject-specific terminology.'],
  ['7–9','Good, accurate knowledge. Good reference to the set product. Appropriate terminology.'],
  ['4–6','Satisfactory, generally accurate knowledge. Satisfactory reference to the set product.'],
  ['1–3','Basic knowledge. Basic, if any, reference to the set product.']],
 tip:["Often a two-strand question: show knowledge of the topic AND apply it to the set text.", "Include a range of specific examples from your set text.", "1 mark = 1 minute. 12-mark question = 12 minutes of writing.", "Apply relevant theory where appropriate (e.g. Uses and Gratifications, Hall's Reception Theory).", "Higher band responses draw together knowledge from across the full theoretical framework."]},

{id:'c1_2019_4a',year:2019,comp:1,sec:'B',topic:'Industry',marks:1,ao:'AO1 1a',
 qnum:'Q4(a)',product:'The Sun',texts:['The Sun'],
 question:'What type of newspaper is <em>The Sun</em>?',
 must:[],points:['Tabloid newspaper / "red top" / daily / mass market / right wing / conservative'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'c1_2019_4b',year:2019,comp:1,sec:'B',topic:'Audience',marks:1,ao:'AO1 1a',
 qnum:'Q4(b)',product:'The Sun website',texts:['The Sun'],
 question:'Identify <strong>one audience</strong> for The Sun website.',
 must:[],
 points:['Working social classes / largely C2DE demographic.',
  'Younger audiences interested in TV, films, music.',
  'Men attracted by coverage of sport.',
  'Women (who make up the majority of website users).',
  'Adults with weaker literacy / wanting a fast/easy read.',
  'A politically conservative / right-leaning audience.'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'c1_2019_4c',year:2019,comp:1,sec:'B',topic:'Audience',marks:4,ao:'AO1 1a/1b',
 qnum:'Q4(c)',product:'The Sun website',texts:['The Sun'],
 question:'Briefly explain how the content of <em>The Sun</em> website appeals to the audience you identified in 4(b).',
 must:[],
 points:['Stories critical of "elite" groups framed around issues affecting "normal" families might appeal to working social classes.',
  'The "TV & Showbiz" section and its central positioning might appeal to younger audiences interested in media entertainment.',
  'The "Money" section might appeal to the two thirds of the newspaper\'s readers who are over 35.',
  'The "Sport" section (particularly football coverage) might appeal to the stereotypically male sports fan.',
  'Short-form stories and easily scrollable layout appeals to those wanting a fast/easy read.',
  'Political stories support the paper\'s and readers\' conservative/right-leaning bias.'],
 levels:[['4','Excellent, detailed and accurate knowledge of how the content appeals to the identified audience.'],
  ['3','Good, accurate knowledge.'],['2','Satisfactory, generally accurate knowledge.'],['1','Basic knowledge.']],
 tip:["If the question says 'explain', give your point AND a reason \u2014 not just a statement.", "If the question says 'refer to', you MUST give specific examples from the set text.", "2 marks per point: one for identifying, one for developing/explaining.", "1 mark = 1 minute writing. Keep your answer focused and don't over-run.", "Read all Section B questions together before starting \u2014 some parts relate to each other."]},

{id:'c1_2019_4d',year:2019,comp:1,sec:'B',topic:'Audience',marks:12,ao:'AO1 1a/1b',
 qnum:'Q4(d)',product:'The Sun',texts:['The Sun'],
 question:'Explain why audiences may interpret the same media product in <strong>different ways</strong>. Refer to <em>The Sun</em> to support your points.',
 must:[],
 points:['Hall\'s Reception Theory — audiences can make preferred readings (accepting The Sun\'s right-wing ideology), negotiated readings (accepting some but not all of its positions) or oppositional readings (rejecting its ideology entirely).',
  'The role of political bias — audiences are likely to buy newspapers that align with their own political leanings, so a Labour voter may read The Sun very differently from a Conservative voter.',
  'How audiences interpret different sections differently — e.g. sports fans may read the sports coverage uncritically but reject the paper\'s political coverage.',
  'The importance of identity — audiences use media to reinforce or challenge their own sense of self.',
  'Active audience interpretations encouraging social interaction — Uses and Gratifications Theory: people discuss and debate The Sun\'s stories with others.',
  'The Sun uses language and mode of address to frame stories in particular ways — e.g. its emotive tabloid language may create different emotional responses in different readers.',
  'The Sun\'s representations of social groups (e.g. immigrants, politicians) may be interpreted very differently by people within and outside those groups.',
  'Higher bands — draw together knowledge from across the theoretical framework: Media Language, Industry, Contexts.'],
 levels:[['10–12','Excellent, detailed and accurate knowledge of audiences. Excellent understanding of why they interpret The Sun differently. Detailed reference to theoretical perspectives and excellent subject-specific terminology.'],
  ['7–9','Good, accurate knowledge. Good understanding. Accurate reference to theoretical perspectives.'],
  ['4–6','Satisfactory, generally accurate knowledge. Satisfactory understanding.'],
  ['1–3','Basic knowledge. Basic understanding of different audience interpretations.']],
 tip:["Often a two-strand question: show knowledge of the topic AND apply it to the set text.", "Include a range of specific examples from your set text.", "1 mark = 1 minute. 12-mark question = 12 minutes of writing.", "Apply relevant theory where appropriate (e.g. Uses and Gratifications, Hall's Reception Theory).", "Higher band responses draw together knowledge from across the full theoretical framework."]},

{id:'c1_2020_3a',year:2020,comp:1,sec:'B',topic:'Industry',marks:1,ao:'AO1 1a',
 qnum:'Q3(a)',product:'Video games industry',texts:[],
 question:'Name the organisation that <strong>regulates video games in Europe</strong>.',
 must:[],points:['PEGI / Pan European Game Information'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'c1_2020_3b',year:2020,comp:1,sec:'B',topic:'Industry',marks:4,ao:'AO1 1a/1b',
 qnum:'Q3(b)',product:'Pokémon Go',texts:['Pokemon'],
 question:'Briefly explain the <strong>effect of regulation</strong> on Pokémon Go.',
 must:[],
 points:['PEGI rating of 7+ allows the game to be marketed to younger audiences and families — shapes advertising and distribution.',
  'Age ratings affect how the game can be promoted and advertised — it cannot be promoted on adult-only platforms.',
  'Regulation around data privacy (GDPR) affected how Pokémon Go could collect and use player data, particularly for under-13s.',
  'The PEGI rating shapes what type of content can appear in the game and its updates — no violent or adult content.',
  'Regulation may have prompted changes to gameplay mechanics — Niantic adjusted the game after concerns about players trespassing in dangerous areas (e.g. Holocaust memorials, military sites).'],
 levels:[['4','Excellent, detailed and accurate knowledge of the effect of regulation on Pokémon Go.'],
  ['3','Good, accurate knowledge.'],['2','Satisfactory, generally accurate knowledge.'],['1','Basic knowledge.']],
 tip:["If the question says 'explain', give your point AND a reason \u2014 not just a statement.", "If the question says 'refer to', you MUST give specific examples from the set text.", "2 marks per point: one for identifying, one for developing/explaining.", "1 mark = 1 minute writing. Keep your answer focused and don't over-run.", "Read all Section B questions together before starting \u2014 some parts relate to each other."]},

{id:'c1_2020_4c',year:2020,comp:1,sec:'B',topic:'Audience',marks:12,ao:'AO1 1a/1b',
 qnum:'Q4(c)',product:'The Archers',texts:['Archers'],
 question:'Explain how audiences use radio programmes to <strong>meet their needs</strong>. Refer to <em>The Archers</em> and audience theory to support your points.',
 must:[],
 points:['DIVERSION — Audiences use The Archers as an escape from everyday life; the fictional world of Ambridge provides an alternative reality. The soap opera format provides ongoing escapism.',
  'SURVEILLANCE — The Archers covers issues like rural life, agriculture, farming policy, domestic abuse and family relationships — audiences gain information and knowledge applicable to their own lives.',
  'PERSONAL IDENTITY — The long-running complex characters allow audiences to compare their own values, relationships and life experiences with those of the characters, helping them understand their own identity.',
  'PERSONAL RELATIONSHIPS / SOCIAL INTEGRATION — The Archers can be a "water cooler" programme — discussed with friends, family and online communities, building social bonds around shared consumption.',
  'The podcast/iPlayer format allows audiences to build listening into their personal routine — meeting the need for diversion during commuting, exercise etc.',
  'Apply Blumler and Katz\'s Uses and Gratifications theory — link each of the four gratifications to specific aspects of The Archers.'],
 levels:[['10–12','Excellent, detailed and accurate knowledge of how audiences use radio programmes to meet their needs. Excellent reference to The Archers. Highly appropriate use of subject-specific terminology.'],
  ['7–9','Good, accurate knowledge. Good reference to the set product.'],
  ['4–6','Satisfactory, generally accurate knowledge. Satisfactory reference to the set product.'],
  ['1–3','Basic knowledge. Basic reference to the set product.']],
 tip:["Often a two-strand question: show knowledge of the topic AND apply it to the set text.", "Include a range of specific examples from your set text.", "1 mark = 1 minute. 12-mark question = 12 minutes of writing.", "Apply relevant theory where appropriate (e.g. Uses and Gratifications, Hall's Reception Theory).", "Higher band responses draw together knowledge from across the full theoretical framework."]},

{id:'c1_2021_3a',year:2021,comp:1,sec:'B',topic:'Industry',marks:1,ao:'AO1 1a',
 qnum:'Q3(a)',product:'Fortnite',texts:['Fortnite'],
 question:'Name the company that produces <em>Fortnite</em>.',
 must:[],points:['Epic Games'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'c1_2021_3b',year:2021,comp:1,sec:'B',topic:'Industry',marks:4,ao:'AO1 1a/1b',
 qnum:'Q3(b)',product:'Fortnite',texts:['Fortnite'],
 question:'Explain how <strong>video games are marketed</strong>. Refer to Fortnite to support your points.',
 must:[],
 points:['Marketing linked to synergy and cross-media convergence — more than one media brand or form joining to promote each other. Fortnite is a notable example, collaborating with Marvel Studios (Avengers: Infinity War segment), Godzilla, and other franchises.',
  'The unique nature of marketing online — Fortnite is the most viewed game on YouTube, and its producers have also used streaming platforms like Twitch (owned by Amazon) to broadcast live competitions.',
  'Marketing that encourages active audience engagement — Epic Games use an operating system called Unreal Engine to develop Fortnite; they have made this available on their website and encourage the audience to use it.',
  'Marketing techniques incorporating other media brands and franchises — collaborations keep Fortnite in the news and on social media, reaching new audiences.',
  'Epic Games encourage films, TV shows and sports to use Fortnite in order to market their brands to its 20 million+ players; these brands then cross-promote Fortnite in return.',
  'Epic Games has a good relationship with non-gaming celebrities such as Drake and basketball star Ben Simmons; marketing campaigns have been built from these relationships to make the game recognisable beyond the traditional gaming market.'],
 levels:[['4','Excellent, detailed and accurate knowledge of how video games are marketed.'],
  ['3','Good, accurate knowledge.'],['2','Satisfactory, generally accurate knowledge.'],['1','Basic knowledge.']],
 tip:["If the question says 'explain', give your point AND a reason \u2014 not just a statement.", "If the question says 'refer to', you MUST give specific examples from the set text.", "2 marks per point: one for identifying, one for developing/explaining.", "1 mark = 1 minute writing. Keep your answer focused and don't over-run.", "Read all Section B questions together before starting \u2014 some parts relate to each other."]},

{id:'c1_2022_3a',year:2022,comp:1,sec:'B',topic:'Industry',marks:1,ao:'AO1 1a',
 qnum:'Q3(a)',product:'Spectre (film)',texts:['Spectre'],
 question:'Name one of the companies that produced <em>Spectre</em>.',
 must:[],points:['Eon Productions / Metro-Goldwyn-Mayer (MGM) / Columbia Pictures / Sony Pictures'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'c1_2022_3b',year:2022,comp:1,sec:'B',topic:'Industry',marks:2,ao:'AO1 1a/1b',
 qnum:'Q3(b)',product:'Media industry',texts:[],
 question:'Briefly explain what a <strong>media conglomerate</strong> is.',
 must:[],
 points:['A media conglomerate is a large company that owns many smaller subsidiary companies across different media sectors.',
  'E.g. Disney owns Marvel, Pixar, Lucasfilm, ABC and ESPN — controlling film production, TV broadcasting and streaming (Disney+).'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'c1_2022_3c',year:2022,comp:1,sec:'B',topic:'Industry',marks:2,ao:'AO1 1a/1b',
 qnum:'Q3(c)',product:'Spectre website',texts:['Spectre'],
 question:'Briefly explain what <strong>convergence</strong> is and give an example from the Spectre website.',
 must:[],
 points:['Convergence is when different media platforms and technologies come together in one place or product.',
  'The Spectre website is an example of convergence — it includes print content, moving image trailers, social media links and interactive features all in one digital space.'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'c1_2023_3a',year:2023,comp:1,sec:'B',topic:'Industry',marks:1,ao:'AO1 1a',
 qnum:'Q3(a)',product:'The Archers',texts:['Archers'],
 question:'Name the radio station that broadcasts <em>The Archers</em>.',
 must:[],points:['BBC Radio 4'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'c1_2023_3b',year:2023,comp:1,sec:'B',topic:'Industry',marks:4,ao:'AO1 1a/1b',
 qnum:'Q3(b)',product:'The Archers',texts:['Archers'],
 question:'Briefly explain the difference between a <strong>public service radio broadcaster</strong> and a <strong>commercial broadcaster</strong>.',
 must:[],
 points:['Public service broadcasters (e.g. the BBC) are funded by public money — typically through the licence fee — and have a remit to serve all audiences regardless of commercial viability.',
  'Commercial broadcasters are funded by advertising and sponsorship and are primarily driven by profit.',
  'PSBs must fulfil specific obligations (e.g. news, education, accessibility, impartiality); commercial broadcasters have more freedom to programme for the most popular/profitable audiences.',
  'BBC Radio 4 (which broadcasts The Archers) is a PSB; commercial equivalents include Global\'s radio stations.'],
 levels:[['4','Excellent, detailed and accurate knowledge and understanding.'],['3','Good, accurate knowledge.'],
  ['2','Satisfactory, generally accurate knowledge.'],['1','Basic knowledge.']],
 tip:["If the question says 'explain', give your point AND a reason \u2014 not just a statement.", "If the question says 'refer to', you MUST give specific examples from the set text.", "2 marks per point: one for identifying, one for developing/explaining.", "1 mark = 1 minute writing. Keep your answer focused and don't over-run.", "Read all Section B questions together before starting \u2014 some parts relate to each other."]},

{id:'c1_2023_4c',year:2023,comp:1,sec:'B',topic:'Audience',marks:12,ao:'AO1 1a/1b',
 qnum:'Q4(c)',product:'The Sun newspaper',texts:['The Sun'],
 question:'Explain why audiences read <strong>print newspapers</strong>. Refer to <em>The Sun</em> and audience theory to support your points.',
 must:[],
 points:['DIVERSION — Audiences use The Sun to be entertained and diverted by celebrity gossip, sport and human interest stories — the tabloid format prioritises entertainment.',
  'SURVEILLANCE — Audiences use The Sun to keep informed about current events and news, though the paper frames stories through a specific ideological lens that aligns with its readership\'s worldview.',
  'PERSONAL IDENTITY — Readers use The Sun to reinforce their own values and worldview; the paper\'s right-leaning politics appeals to audiences who share this outlook.',
  'PERSONAL RELATIONSHIPS — Stories in The Sun (particularly sport and showbiz) can be discussed with others, building a sense of community and shared cultural reference.',
  'The ritualistic nature of newspaper reading — many readers buy The Sun as part of a daily routine, giving structure to their day.',
  'Apply Blumler and Katz\'s Uses and Gratifications theory throughout — link each of the four gratifications to specific content in The Sun.'],
 levels:[['10–12','Excellent, detailed and accurate knowledge. Excellent reference to the set product and theoretical perspectives. Highly appropriate use of subject-specific terminology.'],
  ['7–9','Good, accurate knowledge. Good reference to the set product and theory.'],
  ['4–6','Satisfactory, generally accurate knowledge. Satisfactory reference to the set product and theory.'],
  ['1–3','Basic knowledge. Basic reference to the set product. Basic, if any, use of theory.']],
 tip:["Often a two-strand question: show knowledge of the topic AND apply it to the set text.", "Include a range of specific examples from your set text.", "1 mark = 1 minute. 12-mark question = 12 minutes of writing.", "Apply relevant theory where appropriate (e.g. Uses and Gratifications, Hall's Reception Theory).", "Higher band responses draw together knowledge from across the full theoretical framework."]},

{id:'c1_2024_3a',year:2024,comp:1,sec:'B',topic:'Industry',marks:1,ao:'AO1 1a',
 qnum:'Q3(a)',product:'The Archers',texts:['Archers'],
 question:'Name the organisation that produces <em>The Archers</em>.',
 must:[],points:['The BBC (British Broadcasting Corporation)'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'c1_2024_3b',year:2024,comp:1,sec:'B',topic:'Industry',marks:1,ao:'AO1 1a',
 qnum:'Q3(b)',product:'Radio industry',texts:[],
 question:'Name the organisation that <strong>regulates the radio industry</strong> in the UK.',
 must:[],points:['Ofcom / The Office of Communications'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'c1_2024_3c',year:2024,comp:1,sec:'B',topic:'Industry',marks:4,ao:'AO1 1a/1b',
 qnum:'Q3(c)',product:'Radio industry',texts:[],
 question:'Briefly explain the <strong>different types of funding</strong> for radio in the UK.',
 must:[],
 points:['The BBC is publicly funded through the TV licence fee and has a public service remit — it must provide content for all audiences.',
  'Commercial radio stations (e.g. Heart, Capital, Talk Radio) are funded by advertising and sponsorship and are primarily profit-driven.',
  'Some community and local radio stations receive grants, Arts Council funding or government support and rely partly on voluntary contributions.',
  'The type of funding affects the content produced — PSBs must serve all audiences; commercial stations programme for the largest possible audience to attract advertisers.'],
 levels:[['4','Excellent, detailed and accurate knowledge of the different types of funding.'],
  ['3','Good, accurate knowledge.'],['2','Satisfactory, generally accurate knowledge.'],['1','Basic knowledge.']],
 tip:["If the question says 'explain', give your point AND a reason \u2014 not just a statement.", "If the question says 'refer to', you MUST give specific examples from the set text.", "2 marks per point: one for identifying, one for developing/explaining.", "1 mark = 1 minute writing. Keep your answer focused and don't over-run.", "Read all Section B questions together before starting \u2014 some parts relate to each other."]},

{id:'c1_2025_3a',year:2025,comp:1,sec:'B',topic:'Industry',marks:1,ao:'AO1 1a',
 qnum:'Q3(a)',product:'Film industry',texts:[],
 question:'Name the organisation that regulates <strong>film</strong> in the UK.',
 must:[],points:['BBFC / British Board of Film Classification'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'c1_2025_3b',year:2025,comp:1,sec:'B',topic:'Industry',marks:4,ao:'AO1 1a/1b',
 qnum:'Q3(b)',product:'Film industry',texts:[],
 question:'Briefly explain the <strong>advantages of vertical integration</strong> for the film industry.',
 must:[],
 points:['A company can control multiple stages of the production and distribution process — e.g. a studio that owns production, distribution and exhibition (cinemas).',
  'This gives conglomerates greater control over profits and reduces reliance on third parties.',
  'A studio that also owns cinemas and a streaming platform (e.g. Disney owning Disney+) can maximise revenue from a single film across multiple windows.',
  'Vertical integration reduces risk by spreading costs and profits across multiple business arms.',
  'It allows companies to coordinate marketing and release strategies more effectively across all platforms they own.'],
 levels:[['4','Excellent, detailed and accurate knowledge of the advantages of vertical integration. Highly appropriate use of subject-specific terminology.'],
  ['3','Good accurate knowledge. Appropriate use of terminology.'],
  ['2','Satisfactory, generally accurate knowledge.'],['1','Basic knowledge and understanding.']],
 tip:["If the question says 'explain', give your point AND a reason \u2014 not just a statement.", "If the question says 'refer to', you MUST give specific examples from the set text.", "2 marks per point: one for identifying, one for developing/explaining.", "1 mark = 1 minute writing. Keep your answer focused and don't over-run.", "Read all Section B questions together before starting \u2014 some parts relate to each other."]},

// ═══════════════════════════════════════════════════════════
// COMPONENT 2 — SECTION A: Television
// ═══════════════════════════════════════════════════════════
{id:'c2_2019_1a',year:2019,comp:2,sec:'A',topic:'Television',marks:8,ao:'AO2 1a',
 qnum:'Q1(a)',product:'Luther / The IT Crowd extract',texts:['Luther','IT Crowd'],
 question:'Choose <strong>two camera shots</strong> used in this extract. Explore <strong>why</strong> they are used. (4 marks per shot)',
 must:[],
 points:['LUTHER — Low angle tracking shot used to establish the factory location — makes it look intimidating and isolated, typical of crime drama settings.',
  'LUTHER — High angle shot inside the location makes the character running look small and vulnerable — connotes danger and powerlessness.',
  'LUTHER — Medium close-up shots of Henry denote his emotions (scared, panicked) — gives the audience access to character interiority.',
  'LUTHER — Over-the-shoulder tracking shot of the pursuer creates enigmas (we don\'t see his face) and positions the audience with the "villain" tracking the "victim".',
  'LUTHER — Extreme close-ups of the two characters\' eyes at the climax connote the intensity of their rivalry and the emotional stakes.',
  'LUTHER — High angle shot of Luther looking over Henry at the end emphasises his dominance and signals the resolution of the chase.',
  'IT CROWD — Wide pan shot tracks Roy and connotes we\'re joining him in the middle of his explanation — creates intimacy with the characters.',
  'IT CROWD — Medium low angle shot associates the audience with Maurice\'s perspective.',
  'IT CROWD — Close up of Douglas opening the door a second time to check Jen has gone creates comedy through timing and suspense.'],
 levels:[['4 (per shot)','Excellent, detailed analysis of a camera shot. Consistent focus on why the shot is used.'],
  ['3','Good, reasonably detailed analysis. Focus on why the shot is used.'],
  ['2','Satisfactory analysis. General focus on why the shot is used, lapses into description.'],
  ['1','Basic, if any, analysis. Tends to list shots in a generalised way.']],
 tip:["Make detailed notes during both viewings \u2014 write down specific examples and their meanings.", "You have 2 minutes to read the questions BEFORE the extract is shown \u2014 use this to know what to look for.", "Focus on the specific extract shown in the exam, not the episode in general.", "If asked to write about two characters, divide your time equally \u2014 marks are awarded for each.", "Make detailed notes and write down specific examples and the meanings they communicate."]},

{id:'c2_2019_1b',year:2019,comp:2,sec:'A',topic:'Television',marks:12,ao:'AO2 1a/1b',
 qnum:'Q1(b)',product:'Luther / The IT Crowd extract',texts:['Luther','IT Crowd'],
 question:'How far are the <strong>settings</strong> in this extract <strong>typical of the genre</strong>? Explore examples from the extract to support your points.',
 must:[],
 points:['LUTHER — The establishing shot of an isolated location is typical and immediately generates enigmas, something which is conventional of the crime genre.',
  'LUTHER — The dangers that settings pose to characters are typical of a crime drama — the barbed wire, the rickety walkway, the deserted factory all connote threat.',
  'LUTHER — Binary oppositions between the characters\' formal dress codes and the factory setting connote they don\'t belong there — typical crime drama shorthand.',
  'LUTHER — The factory location forms a "dead end" in which Henry is trapped, creating a conventional hero/villain standoff.',
  'LUTHER — The more mundane suburban street and house locations emphasise that this crime drama, like most others, is grounded in "real life".',
  'LUTHER — The settings all appear to involve filming on location and at night — connotes the programme\'s typically high production values.',
  'IT CROWD — The basement setting is cluttered with stereotypically "nerdy" iconography (comic book posters, action figures, games, stickers) — gives the audience a shorthand way of understanding the characters.',
  'IT CROWD — The basement setting connotes the low status of Jen, Roy and Moss: Roy\'s desk is below a dusty air duct and the door has a "danger of death" sign.',
  'IT CROWD — The upstairs corridor is more corporate, emphasising the binary opposition between characters working at the "bottom" and "top" of the company.',
  'IT CROWD — The basement and corridor settings are framed to place the home audience with the studio audience — the "fourth wall" is not broken, which is conventional of sitcoms.'],
 levels:[['10–12','Excellent, detailed analysis of the settings. Highly appropriate judgements and conclusions regarding how far the settings are typical of the genre.'],
  ['7–9','Good, reasonably detailed analysis. Appropriate judgements and conclusions.'],
  ['4–6','Satisfactory analysis. Generally appropriate judgements.'],
  ['1–3','Basic, if any, analysis. Basic, if any, judgements.']],
 tip:["This is a 'how far' or 'to what extent' question \u2014 you must make clear judgements, not just analyse.", "Back your argument up with specific examples from the extract.", "Use the 6-minute break between viewings to make detailed notes and plan your response.", "Reference to genre conventions or relevant contexts will push your answer into the higher bands.", "End with a clear, reasoned conclusion that directly answers the 'how far' question."]},

{id:'c2_2019_2',year:2019,comp:2,sec:'A',topic:'Television',marks:10,ao:'AO1 1a/1b',
 qnum:'Q2',product:'Luther / The IT Crowd',texts:['Luther','IT Crowd'],
 question:'How does <strong>Uses and Gratifications theory</strong> explain why audiences watch crime dramas or sitcoms? Refer to <em>Luther</em> or <em>The IT Crowd</em> to support your response.',
 must:[],
 points:['LUTHER — DIVERSION: crime dramas contain multiple enigmas and working to solve these helps audiences escape everyday problems. The "whodunnit"/"howdunnit" narrative encourages audiences to identify with the hero.',
  'LUTHER — SURVEILLANCE: Luther gives audiences information about how a modern detective might operate, the types of crimes they might solve and the effects the job has on detectives themselves.',
  'LUTHER — PERSONAL RELATIONSHIPS: Luther can be a "water cooler" programme — audiences are likely to discuss narrative arcs, enigmas and twists with friends, family, colleagues and online.',
  'LUTHER — PERSONAL IDENTITY: Luther offers the conventional "flawed hero" and strong female characters like Alice, reflecting changing gender roles in society.',
  'IT CROWD — DIVERSION: the primary function of a sitcom is entertainment; The IT Crowd uses multiple conventions (humorous situations, jokes, comedic characters) to achieve this.',
  'IT CROWD — DIVERSION: the conventional sitcom structure (central problem resolved by the end of the episode) appeals to time-poor audiences — no need to watch in order.',
  'IT CROWD — SURVEILLANCE: The IT Crowd represents "thirtysomething" characters — audiences could use the situations these characters face as a comparison to their own lives.',
  'IT CROWD — PERSONAL IDENTITY: The IT Crowd\'s representations of IT workers / "nerd/geek" characters appeal to audiences with direct experience of those environments.'],
 levels:[['9–10','Excellent, detailed and accurate knowledge of audiences. Excellent understanding of Uses and Gratifications theory — highly appropriate links between aspects of the theory and specific aspects of the set product.'],
  ['7–8','Good, accurate knowledge. Good understanding of the theory — appropriate links to the set product.'],
  ['5–6','Satisfactory, generally accurate knowledge. Satisfactory understanding of the theory — links made but may be undeveloped.'],
  ['3–4','Basic knowledge. Basic, if any, understanding of the theory — links between theory and product unlikely to be made.'],
  ['1–2','Minimal knowledge. Links between theory and set product not made; brief or incomplete.']],
 tip:["This question could be on industries, audiences OR media contexts \u2014 read it carefully.", "You must refer directly to Luther and/or The Sweeney depending on what the question asks.", "Apply relevant theory \u2014 Uses and Gratifications, Hall's Reception Theory, production context.", "Include a range of specific examples from your set products.", "Higher band responses link knowledge across different areas of the theoretical framework."]},

{id:'c2_2020_1a',year:2020,comp:2,sec:'A',topic:'Television',marks:8,ao:'AO2 1a',
 qnum:'Q1(a)',product:'Luther / The IT Crowd extract',texts:['Luther','IT Crowd'],
 question:'Explore how <strong>media language</strong> is used in this extract to show the <strong>roles of two characters</strong>. (4 marks per character)',
 must:[],
 points:['LUTHER — Luther can function as an anti-hero: his dialogue ("Come on!") and actions (lighting the blow torch) sometimes lack the morality of a conventional hero.',
  'LUTHER — Luther fulfils the role of detective: his conversation with DSU Rose Teller in her office makes this explicit. His dialogue ("I told you, boss") shows him as a determined, talented detective.',
  'LUTHER — The action of lighting the blow torch as Luther leaves the office shows his role as maverick detective — hinting at the anger issues that define the flawed hero archetype.',
  'LUTHER — The tracking shot following Luther as he walks to Alice\'s flat positions the audience to see his role as protagonist/hero driving the narrative.',
  'LUTHER — Luther breaking into Alice\'s flat confirms his role as "flawed" hero — willing to break the rules to solve the case (Propp\'s hero function).',
  'IT CROWD — Roy\'s extended explanation about the window cleaner establishes his role as the group\'s everyman/comic protagonist.',
  'IT CROWD — Douglas fulfils the role of antagonist/obstacle in the narrative — his bizarre behaviour creates the episode\'s central mystery.'],
 levels:[['4 (per character)','Excellent, detailed analysis of the character\'s role. Consistent focus on specific aspects of media language.'],
  ['3','Good, reasonably detailed analysis. Focus on specific aspects of media language.'],
  ['2','Satisfactory analysis — tendency to describe.'],
  ['1','Basic, if any, analysis — descriptive, brief or incomplete.']],
 tip:["Make detailed notes during both viewings \u2014 write down specific examples and their meanings.", "You have 2 minutes to read the questions BEFORE the extract is shown \u2014 use this to know what to look for.", "Focus on the specific extract shown in the exam, not the episode in general.", "If asked to write about two characters, divide your time equally \u2014 marks are awarded for each.", "Make detailed notes and write down specific examples and the meanings they communicate."]},

{id:'c2_2021_1a',year:2021,comp:2,sec:'A',topic:'Television',marks:10,ao:'AO2 1a',
 qnum:'Q1(a)',product:'Luther / The IT Crowd extract',texts:['Luther','IT Crowd'],
 question:'Explore how the <strong>settings</strong> in this extract construct a <strong>representation of reality</strong>.',
 must:[],
 points:['LUTHER — The setting at Zoe\'s house constructs a realistic version of a middle-class London home. The lighting, furniture and red front door (as Luther leaves) all work to offer a sense of verisimilitude.',
  'LUTHER — The setting is used as part of the action when Luther smashes the door panels, adding to the representation of reality. The domestic context is necessary to represent Luther\'s personal life.',
  'LUTHER — The scene where Luther leaves the house uses a real location to construct the reality of a London residential street at night — very important for realism. The low-key lighting establishes the late-night setting and selective focus connotes the distance between Luther and his home/marriage.',
  'LUTHER — The real location of a London pub is used in the scene where Luther meets Ian Reid. The long shot inside the pub, showing the bar, stools, beer pumps and a bartender, represents a relatable version of a traditional London pub.',
  'LUTHER — The city shot of London at night at the beginning of the scene at Alice\'s apartment establishes a realistic representation of the city with recognisable buildings behind her reflection, constructing a contemporary urban reality.',
  'LUTHER — The setting inside Alice\'s apartment constructs a version of contemporary urban reality through its high-rise position and modern design with desk and laptop computer as the main focus.',
  'IT CROWD — The long shot of the IT office is very important in constructing a version of reality in the first scene. The desks and computers represent a recognisable office setting, but the stickers and pictures create a comic version of reality reflecting the characters of Roy and Moss.',
  'IT CROWD — The non-matching furniture and basement location are important in constructing the lower status of the characters, an essential part of the sitcom\'s comedy.',
  'IT CROWD — The establishing shot of the office block constructs a version of reality as it reinforces the city setting but contrasts with the club inside the building, which sets up the comedy of the situation.',
  'IT CROWD — The 8+ club scene constructs a recognisable but exaggerated representation of reality. The setting establishes a typical nightclub scene with bar, low-key lighting and booths, made comedic through references to Countdown, the dress codes and drinks choices.'],
 levels:[['9–10','Excellent, detailed analysis of how a representation of reality is constructed. Consistent focus on the settings in the extract.'],
  ['7–8','Good, reasonably detailed analysis. Focus on the settings.'],
  ['5–6','Satisfactory analysis. General focus on the settings.'],
  ['3–4','Basic analysis. Lacks focus on settings, tends to describe.'],
  ['1–2','Minimal, if any, analysis. Brief, descriptive or incomplete.']],
 tip:["Make detailed notes during both viewings \u2014 write down specific examples and their meanings.", "You have 2 minutes to read the questions BEFORE the extract is shown \u2014 use this to know what to look for.", "Focus on the specific extract shown in the exam, not the episode in general.", "If asked to write about two characters, divide your time equally \u2014 marks are awarded for each.", "Make detailed notes and write down specific examples and the meanings they communicate."]},

{id:'c2_2022_1a',year:2022,comp:2,sec:'A',topic:'Television',marks:8,ao:'AO2 1a',
 qnum:'Q1(a)',product:'Luther / The IT Crowd extract',texts:['Luther','IT Crowd'],
 question:'Explore how <strong>sound</strong> is used in this extract.',
 must:[],
 points:['LUTHER — Non-diegetic score creates tension and builds atmosphere — the sparse, electronic score is typical of the crime drama genre and connotes psychological threat.',
  'LUTHER — Diegetic sound (dialogue, ambient noise, footsteps echoing in the factory) grounds the scene in a realistic setting and adds to the atmosphere of danger.',
  'LUTHER — Use of silence or reduction in score at key dramatic moments (e.g. before a revelation) is used to create suspense — the audience is made to wait.',
  'LUTHER — The contrast between the quiet domestic sounds of the suburban scenes and the tense factory chase sounds emphasises the binary opposition between "everyday life" and criminal danger.',
  'IT CROWD — The laugh track/studio audience reinforces comedy moments and invites the home audience to laugh along — a convention of the traditional sitcom format.',
  'IT CROWD — Diegetic dialogue between Roy and Moss establishes the comedy of their relationship through the content and delivery of their lines.',
  'IT CROWD — Non-diegetic theme music signals the show\'s genre and tone at the start of the sequence.'],
 levels:[['7–8','Excellent, detailed analysis of the use of sound. Consistent focus on the specific effects of the sound used.'],
  ['5–6','Good, reasonably detailed analysis. Focus on the specific effects.'],
  ['3–4','Satisfactory analysis. General focus on effects, lapses into description.'],
  ['1–2','Basic, if any, analysis. Tends to describe aspects of the sound.']],
 tip:["Make detailed notes during both viewings \u2014 write down specific examples and their meanings.", "You have 2 minutes to read the questions BEFORE the extract is shown \u2014 use this to know what to look for.", "Focus on the specific extract shown in the exam, not the episode in general.", "If asked to write about two characters, divide your time equally \u2014 marks are awarded for each.", "Make detailed notes and write down specific examples and the meanings they communicate."]},

{id:'c2_2023_1a',year:2023,comp:2,sec:'A',topic:'Television',marks:10,ao:'AO2 1a',
 qnum:'Q1(a)',product:'Luther / The IT Crowd extract',texts:['Luther','IT Crowd'],
 question:'Explore how <strong>costumes</strong> create meaning in this extract.',
 must:[],
 points:['LUTHER — Luther\'s dark, formal overcoat and suit connote authority, seriousness and a detachment from conventional police procedure — he dresses as a detective, not a uniformed officer.',
  'LUTHER — The costume creates a visual binary opposition between Luther\'s dark professionalism and the more casual clothes of the civilians he encounters.',
  'LUTHER — Supporting police characters\' more conventional attire creates a contrast with Luther, reinforcing his maverick, individual status within the institution.',
  'LUTHER — Suspects/victims in civilian clothing connote vulnerability and ordinariness against Luther\'s imposing presence.',
  'IT CROWD — Roy and Moss\'s casual, stereotypically "geeky" clothing (graphic tees, untidy appearance) connotes their low status, their interests and their disconnection from corporate norms.',
  'IT CROWD — Jen\'s more professional, stylish clothing marks her out as different from Roy and Moss — she belongs to (and aspires to belong to) the corporate world upstairs.',
  'IT CROWD — Douglas\'s formal but eccentric clothing connotes his management status while also signalling his bizarre, unpredictable character.',
  'Costumes are part of mise-en-scène — they are a form of visual shorthand helping audiences quickly understand character roles, social status and relationships.'],
 levels:[['9–10','Excellent, detailed analysis of costumes. Consistent focus on how specific examples create meaning. Consistently appropriate use of subject-specific terminology.'],
  ['7–8','Good, reasonably detailed analysis. Focus on how specific examples create meaning.'],
  ['5–6','Satisfactory analysis — general focus, lapses into description.'],
  ['3–4','Basic analysis. Tends to describe costumes in a generalised way.'],
  ['1–2','Minimal, if any, analysis. Brief, descriptive or incomplete.']],
 tip:["Make detailed notes during both viewings \u2014 write down specific examples and their meanings.", "You have 2 minutes to read the questions BEFORE the extract is shown \u2014 use this to know what to look for.", "Focus on the specific extract shown in the exam, not the episode in general.", "If asked to write about two characters, divide your time equally \u2014 marks are awarded for each.", "Make detailed notes and write down specific examples and the meanings they communicate."]},

{id:'c2_2024_1a',year:2024,comp:2,sec:'A',topic:'Television',marks:10,ao:'AO2 1a',
 qnum:'Q1(a)',product:'Luther / Man Like Mobeen / Modern Family extract',texts:['Luther','Mobeen','Modern Family'],
 question:'Explore the <strong>representations of gender</strong> in this extract.',
 must:[],
 points:['LUTHER — Luther is presented as conventionally masculine (physically imposing, emotionally driven) but his complex relationships with female characters like Alice subvert some stereotypes.',
  'LUTHER — Alice Morgan is represented as highly intelligent and equal to Luther in terms of wit and narrative agency — an unconventional female role in crime drama.',
  'MAN LIKE MOBEEN — Mobeen navigates traditional masculine expectations (as the protective older brother/father figure) alongside more vulnerable, emotional moments.',
  'MAN LIKE MOBEEN — Khadijah is represented as assertive and capable, challenging stereotypical representations of Muslim women as passive or oppressed.',
  'MODERN FAMILY — Phil is represented as a well-meaning but bumbling father figure — a common sitcom subversion of the traditionally authoritative patriarch.',
  'MODERN FAMILY — Female characters may be represented in ways that both reinforce and challenge traditional domestic roles.',
  'Apply representation theory — how gender is selected, constructed and mediated differently across the three programmes.',
  'Consider whether representations reinforce or challenge dominant ideologies of gender — and how social/cultural context shapes this.',
  'Reference feminist perspectives on representation (e.g. van Zoonen) where appropriate.'],
 levels:[['9–10','Excellent, detailed analysis of specific examples. Consistent focus on how representations of gender are constructed.'],
  ['7–8','Good, reasonably detailed analysis. Focus on how representations of gender are constructed.'],
  ['5–6','Satisfactory analysis. General focus, lapses into description.'],
  ['3–4','Basic analysis. Tends to describe representations of gender.'],
  ['1–2','Minimal, if any, analysis. Brief, descriptive or incomplete.']],
 tip:["Make detailed notes during both viewings \u2014 write down specific examples and their meanings.", "You have 2 minutes to read the questions BEFORE the extract is shown \u2014 use this to know what to look for.", "Focus on the specific extract shown in the exam, not the episode in general.", "If asked to write about two characters, divide your time equally \u2014 marks are awarded for each.", "Make detailed notes and write down specific examples and the meanings they communicate."]},

{id:'c2_2024_2',year:2024,comp:2,sec:'A',topic:'Television',marks:10,ao:'AO1 1a/1b',
 qnum:'Q2',product:'Luther / Man Like Mobeen / Modern Family',texts:['Luther','Mobeen','Modern Family'],
 question:'Explain how <strong>digital technologies</strong> change the ways in which audiences <strong>consume television</strong>.',
 must:[],
 points:['Crime dramas and sitcoms released as DVD box sets encourage audiences to "binge-watch" entire series — changing viewing from a scheduled, weekly experience to an on-demand one.',
  'Streaming platforms (BBC iPlayer, Disney+, All4) allow audiences to watch programmes at any time and on any device — Luther, Man Like Mobeen and Modern Family are all available on streaming services.',
  'Audiences can consume programmes on portable devices (laptops, tablets, smartphones) in different locations — changing television from a domestic, shared activity.',
  'Audiences have become more fragmented due to changes in technology, affecting television viewing as a shared or social activity — "water cooler" TV is less common when everyone watches at different times.',
  'Websites and social media have affected audience consumption — audiences interact with programmes online through fan communities, social media discussions and official accounts.',
  'Apply Blumler and Katz\'s Uses and Gratifications theory — how have digital technologies expanded the ways audiences can fulfil their needs through television?'],
 levels:[['9–10','Excellent, detailed and accurate knowledge of how digital technologies influence audience consumption. Excellent use of the set products. Highly appropriate use of subject-specific terminology.'],
  ['7–8','Good, accurate knowledge. Good use of the set products.'],
  ['5–6','Satisfactory, generally accurate knowledge. Satisfactory use of the set products.'],
  ['3–4','Basic knowledge. Basic use of the set products.'],
  ['1–2','Minimal knowledge. Minimal use of the set products; brief or incomplete.']],
 tip:["This question could be on industries, audiences OR media contexts \u2014 read it carefully.", "You must refer directly to Luther and/or The Sweeney depending on what the question asks.", "Apply relevant theory \u2014 Uses and Gratifications, Hall's Reception Theory, production context.", "Include a range of specific examples from your set products.", "Higher band responses link knowledge across different areas of the theoretical framework."]},

// ═══════════════════════════════════════════════════════════
// COMPONENT 2 — SECTION B: Music
// ═══════════════════════════════════════════════════════════
{id:'c2_2019_3',year:2019,comp:2,sec:'B',topic:'Music',marks:20,ao:'AO2 1a/1b',
 qnum:'Q3',product:'Music websites — Katy Perry / Taylor Swift / Bruno Mars',texts:['Katy Perry','Taylor Swift','Bruno Mars'],
 question:'How far do the <strong>representations</strong> in music websites <strong>reinforce particular messages and values</strong>?',
 must:['Explore examples from the two websites you have studied','Refer to relevant media contexts','Make judgements and draw conclusions'],
 points:['KATY PERRY WEBSITE — Representations are consistently built around Perry as a brand linked to the latest album/single. During the Witness campaign, the website reinforced ideologies of Perry as a "normal", accessible star — galleries show her falling over and being hit by basketballs in the Swish Swish video.',
  'KATY PERRY WEBSITE — Values of altruism: the website promotes Perry\'s charity work (Boys & Girls Club of America) alongside commercial values (store tab linking to merch, fragrances and Cover Girl).',
  'KATY PERRY WEBSITE — Messages of success: promotion of high-profile collaborations (Nicki Minaj), news such as "Witness debuts at #1 on Billboard 200".',
  'TAYLOR SWIFT WEBSITE — Messages and values are constructed to link to the current album. The Reputation album was represented by a stark black and white colour palette and "gothic"-style fonts, reinforcing the more serious, self-referential ideas of the album.',
  'TAYLOR SWIFT WEBSITE — The viewpoint that Swift is a valuable brand is evident through stories detailing her links with UPS and Target.',
  'TAYLOR SWIFT WEBSITE — The website promotes the belief that Swift is connected with her fans — "Listen to songs Taylor loves on Spotify!" and links to fan interaction.',
  'BRUNO MARS WEBSITE — Messages and values linked to Mars as a "current" star — each new single prompts a website rebrand. The Versace on the Floor promotion linked to Mars as a "modern retro" star (heavy use of neon, retro dress codes, Mars at a piano).',
  'Apply representation theory — how are the artists selected, constructed and mediated across these websites? What messages and values are reinforced or challenged?',
  'Link to relevant contexts — social context of celebrity culture, cultural context of digital convergence, commercial context of the music industry.'],
 levels:[['17–20','Excellent, detailed analysis of both products. Excellent, consistent use of the theoretical framework and terminology. Excellent, well-reasoned judgements and conclusions.'],
  ['13–16','Good, reasonably detailed analysis. Good use of the theoretical framework. Good judgements.'],
  ['9–12','Satisfactory analysis. Satisfactory use of the theoretical framework. Generally reasoned judgements.'],
  ['5–8','Basic analysis, tending to describe. Basic use of the theoretical framework.'],
  ['1–4','Minimal analysis. Minimal use of the theoretical framework.']],
 tip:["You will NOT be shown an extract for Section B \u2014 thorough revision of all MIRAC areas is essential.", "Depending on what Q1 assessed, this will be either Media Language or Representation.", "Use any bullet points in the question to guide your structure \u2014 cover all of them.", "This is a 20-mark extended response \u2014 you need an introduction, sustained discussion and conclusion.", "Both set texts must be covered \u2014 responses on only one text will be marked out of half marks.", "Link your analysis to relevant social, cultural, historical or political contexts.", "Make clear judgements and draw a reasoned conclusion."]},

{id:'c2_2020_3',year:2020,comp:2,sec:'B',topic:'Music',marks:20,ao:'AO2 1a/1b',
 qnum:'Q3',product:'Music artists\' social media — Katy Perry / Taylor Swift / Bruno Mars / Pharrell',texts:['Katy Perry','Taylor Swift','Bruno Mars','Pharrell'],
 question:'How far are these two artists able to <strong>represent themselves through social media</strong>?',
 must:['Explore examples from the social media of the two artists','Refer to relevant media contexts','Make judgements and draw conclusions'],
 points:['All images used in online media are constructed representations — the artist we see is the star persona, carefully managed and monitored by social media managers.',
  'KATY PERRY — Many positive representations of Perry as a "real" person across a range of online media. A link on her website to a YouTube video of Perry performing in the finale of American Idol represents her as a mentor and aspirational role model.',
  'KATY PERRY — The KatyCats.com fan site invites members to be part of an interactive online community — represents Perry as connected to and caring about her fans.',
  'TAYLOR SWIFT — Social media enables Swift to represent personal beliefs alongside her constructed star persona — e.g. political statements, support for causes, personal posts.',
  'TAYLOR SWIFT — Swift\'s "Connect with Taylor" social media links promote the belief that she is closely connected with her fans — though this is itself a carefully constructed representation.',
  'PHARRELL WILLIAMS — Social media offers a platform for Pharrell to represent his political views and campaigns (e.g. his support for Black Lives Matter and social justice causes).',
  'LIMITATION — Social media representations are still mediated and constructed — convergence across platforms creates a consistent brand identity that is managed rather than spontaneous.',
  'Apply representation theory — the selected, constructed and mediated nature of even "authentic" social media posts.',
  'Link to contexts — cultural context of selfie culture and celebrity; social context of digital technologies changing artist-audience relationships.'],
 levels:[['17–20','Excellent, detailed analysis. Excellent use of the theoretical framework. Excellent linking of products to contexts. Excellent judgements.'],
  ['13–16','Good, reasonably detailed analysis. Good use of the theoretical framework. Good linking to contexts.'],
  ['9–12','Satisfactory analysis. Satisfactory use of the theoretical framework. Some linking to contexts.'],
  ['5–8','Basic analysis, tending to describe. Basic use of the theoretical framework.'],
  ['1–4','Minimal analysis. Minimal use of the theoretical framework.']],
 tip:["You will NOT be shown an extract for Section B \u2014 thorough revision of all MIRAC areas is essential.", "Depending on what Q1 assessed, this will be either Media Language or Representation.", "Use any bullet points in the question to guide your structure \u2014 cover all of them.", "This is a 20-mark extended response \u2014 you need an introduction, sustained discussion and conclusion.", "Both set texts must be covered \u2014 responses on only one text will be marked out of half marks.", "Link your analysis to relevant social, cultural, historical or political contexts.", "Make clear judgements and draw a reasoned conclusion."]},

{id:'c2_2021_3',year:2021,comp:2,sec:'B',topic:'Music',marks:20,ao:'AO2 1a/1b',
 qnum:'Q3',product:'Music videos — Katy Perry (Roar) / Taylor Swift (Bad Blood)',texts:['Katy Perry','Taylor Swift'],
 question:'How <strong>typical</strong> are the <strong>narratives</strong> of the two music videos you have studied?',
 must:['Explore the narratives of the two music videos you have studied','Make links to relevant media contexts','Make judgements and draw conclusions'],
 points:['ROAR — The video constructs a linear narrative depicting Perry\'s journey of self-discovery from passive female to empowered queen of the jungle ("from zero to hero"). This "arc of transformation" is a typical narrative element (Todorov\'s equilibrium disrupted then restored at a higher level).',
  'ROAR — Intertextual references to Tarzan, Muhammad Ali ("floating like a butterfly") and Helen Reddy ("hear me roar") add layers of meaning and are typical of music video narratives.',
  'ROAR — The leopard print fabric acts as a symbolic motif representing Perry\'s empowerment — it starts as a scarf, becomes a belt, then part of her spear, then a bra top. Use of symbolic motifs is a typical element of narratives.',
  'ROAR — An application of Propp reveals the male character begins as the apparent hero but is quickly revealed as a "false hero" — Perry herself is the real protagonist. This makes the narrative less typical.',
  'ROAR — The narrative reflects the social context of female empowerment and the personal context of Perry\'s split from Russell Brand — autobiographical elements are often typical of music video narratives.',
  'BAD BLOOD — The video uses film conventions including a pre-title action sequence — establishing characters before the song begins is typical of action films but less typical of music video narratives.',
  'BAD BLOOD — Women are represented as violent action heroes — a less typical character function. The action hero role is constructed through shots of weaponry, fighting, riding motorbikes and boxing.',
  'BAD BLOOD — Wide range of intertextual references to action and sci-fi films (Tron, The Fifth Element, The Hunger Games) — typical of music video narratives.',
  'BAD BLOOD — The split screen showing Swift and Lamar side by side constructs a sense of equality in terms of gender and ethnicity — less typical in music video narratives.',
  'BAD BLOOD — No clear resolution at the end of the narrative — a disruption to Todorov\'s theory that makes the narrative less conventional.'],
 levels:[['17–20','Excellent, detailed analysis engaging fully with complex aspects of narratives. Excellent use of the theoretical framework. Excellent linking to contexts. Excellent judgements.'],
  ['13–16','Good, reasonably detailed analysis. Good use of the theoretical framework. Good linking to contexts.'],
  ['9–12','Satisfactory analysis. Satisfactory use of the theoretical framework. Some linking to contexts.'],
  ['5–8','Basic analysis, tending to describe. Basic use of the theoretical framework.'],
  ['1–4','Minimal analysis. Minimal use of the theoretical framework.']],
 tip:["You will NOT be shown an extract for Section B \u2014 thorough revision of all MIRAC areas is essential.", "Depending on what Q1 assessed, this will be either Media Language or Representation.", "Use any bullet points in the question to guide your structure \u2014 cover all of them.", "This is a 20-mark extended response \u2014 you need an introduction, sustained discussion and conclusion.", "Both set texts must be covered \u2014 responses on only one text will be marked out of half marks.", "Link your analysis to relevant social, cultural, historical or political contexts.", "Make clear judgements and draw a reasoned conclusion."]},

{id:'c2_2022_3',year:2022,comp:2,sec:'B',topic:'Music',marks:20,ao:'AO2 1a/1b',
 qnum:'Q3',product:'Music videos — Katy Perry (Roar) / Taylor Swift (Bad Blood) / Bruno Mars (Uptown Funk) / Pharrell Williams (Freedom)',texts:['Katy Perry','Taylor Swift','Bruno Mars','Pharrell'],
 question:'How far do these two music videos <strong>reinforce gender stereotypes</strong>?',
 must:['Explore representations of gender in the two music videos you have studied','Refer to relevant media contexts','Make judgements and draw conclusions'],
 points:['ROAR — At the beginning of the video, the male takes selfies — a subversion of the typical stereotype of females as vain. His gesture codes connote he is vain and self-obsessed.',
  'ROAR — The female character is initially submissive and inferior to the male, but once he is out of the picture she grows stronger — finding an inner strength she didn\'t realise she possessed.',
  'ROAR — There is a potential binary opposition between the video\'s feminist message and its visual representations (scantily clad, sexualised dress codes) — is this empowerment or objectification?',
  'BAD BLOOD — Powerful female representations — direct mode of address, dress codes, gesture codes. Action heroines dominant in physical fighting scenes.',
  'BAD BLOOD — Sexual objectification through tight-fitting leather and lycra clothing. Swift as a "femme fatale" and the gender stereotypes associated with this archetype.',
  'BAD BLOOD — Link to feminist perspectives — both strong but also reinforcing stereotypes of women in conflict (the song\'s allegedly about the "war" between Swift and Katy Perry).',
  'BAD BLOOD — Men are represented as weak (defeated in opening scenes) and less important than the female characters — Kendrick Lamar\'s role is limited to single, static locations.',
  'UPTOWN FUNK — Masculinity represented as (hetero)sexually predatory and full of bravado. Men are dominant — make direct mode of address, dominate the frame.',
  'UPTOWN FUNK — "Ideal" women shown in shots of body parts (legs, bottoms) — stereotypically attractive, given no characterisation.',
  'UPTOWN FUNK — Stereotypes of masculinity are undercut by less stereotypical images of men at the salon in curlers — reflecting the "metrosexual" male.',
  'FREEDOM — Earnest, selfless, message-led music video relatively non-stereotypical of a male artist. Women are not objectified — shown in working roles.',
  'Apply feminist perspectives — Mulvey\'s male gaze, van Zoonen\'s feminist media studies. Link to social and cultural contexts.'],
 levels:[['17–20','Excellent, detailed analysis engaging fully with complex aspects of gender representation. Excellent use of the theoretical framework including theoretical perspectives. Excellent linking to contexts. Excellent judgements.'],
  ['13–16','Good, reasonably detailed analysis. Good use of the theoretical framework. Good linking to contexts.'],
  ['9–12','Satisfactory analysis. Satisfactory use of the theoretical framework. Some linking to contexts.'],
  ['5–8','Basic analysis, tending to describe. Basic use of the theoretical framework.'],
  ['1–4','Minimal analysis. Minimal use of the theoretical framework.']],
 tip:["You will NOT be shown an extract for Section B \u2014 thorough revision of all MIRAC areas is essential.", "Depending on what Q1 assessed, this will be either Media Language or Representation.", "Use any bullet points in the question to guide your structure \u2014 cover all of them.", "This is a 20-mark extended response \u2014 you need an introduction, sustained discussion and conclusion.", "Both set texts must be covered \u2014 responses on only one text will be marked out of half marks.", "Link your analysis to relevant social, cultural, historical or political contexts.", "Make clear judgements and draw a reasoned conclusion."]},

{id:'c2_2023_3',year:2023,comp:2,sec:'B',topic:'Music',marks:20,ao:'AO2 1a/1b',
 qnum:'Q3',product:'Music videos — Justin Bieber (Intentions) / Uptown Funk (Bruno Mars) / Taylor Swift (Bad Blood) / Katy Perry (Roar)',texts:['Intentions','Bruno Mars','Taylor Swift','Katy Perry'],
 question:'How <strong>stereotypical</strong> is the <strong>representation of ethnicity</strong> in the two music videos you have studied?',
 must:['Explore representations of ethnicity in the two music videos you have studied','Refer to relevant media contexts','Make judgements and draw conclusions'],
 points:['INTENTIONS — Positive representation of women from different ethnic groups as a supportive, diverse community — shown through the wide shot of Bhari in the centre of a line of girls from the shelter.',
  'INTENTIONS — Stereotypical representation of black women and children as victims in need. However, in the context of Intentions, the representation is empowering as they are on a journey towards stability and independence.',
  'INTENTIONS — Shot of Bieber and Quavo hugging near the end represents them as supportive and caring, reinforcing the message of racial harmony.',
  'INTENTIONS — Through its support of Alexandria House, the video reflects the social context of campaigning for racial equality. Bieber used Instagram to post images in support of #BlackLivesMatter.',
  'UPTOWN FUNK — Stereotypical representations of black culture such as the "hood", gold chains and "bling".',
  'UPTOWN FUNK — The theme of community between the "brothers" is stereotypical and represented through the settings of the barber shop and jazz club.',
  'UPTOWN FUNK — The issue of racial oppression is addressed through the shoe shine scene which reflects historical contexts and subverts them to challenge traditional racial stereotypes.',
  'UPTOWN FUNK — The women in the video are sexually objectified — a stereotypical representation of young black women in music videos.',
  'BAD BLOOD — Taylor Swift represented as a stereotypical white, blonde female, in opposition to Lamar who is represented in stereotypical dress codes relating to black culture (sunglasses, cap and hoodie).',
  'BAD BLOOD — Asian character Trinity is represented stereotypically as a technology expert.',
  'BAD BLOOD — The range of representations of ethnicity in the video could be seen as challenging stereotypes and reflecting the social context of cultural diversity.',
  'ROAR — There is a lack of ethnic minority characters in the video — this under-representation could be described as typical for white music artists.',
  'ROAR — The references to Perry as Mowgli are an example of cultural whitewashing, appropriating a non-white narrative for a predominantly white audience.',
  'Apply relevant theoretical perspectives — Said\'s concept of Orientalism; Stuart Hall\'s ideas about stereotyping and power.'],
 levels:[['17–20','Excellent, detailed analysis engaging fully with complex aspects of representation. Excellent use of the theoretical framework and terminology. Excellent linking to contexts. Excellent judgements.'],
  ['13–16','Good, reasonably detailed analysis. Good use of the theoretical framework. Good linking to contexts.'],
  ['9–12','Satisfactory analysis. Satisfactory use of the theoretical framework. Some linking to contexts.'],
  ['5–8','Basic analysis, tending to describe. Basic use of the theoretical framework.'],
  ['1–4','Minimal analysis. Minimal use of the theoretical framework.']],
 tip:["You will NOT be shown an extract for Section B \u2014 thorough revision of all MIRAC areas is essential.", "Depending on what Q1 assessed, this will be either Media Language or Representation.", "Use any bullet points in the question to guide your structure \u2014 cover all of them.", "This is a 20-mark extended response \u2014 you need an introduction, sustained discussion and conclusion.", "Both set texts must be covered \u2014 responses on only one text will be marked out of half marks.", "Link your analysis to relevant social, cultural, historical or political contexts.", "Make clear judgements and draw a reasoned conclusion."]},

{id:'c2_2024_3',year:2024,comp:2,sec:'B',topic:'Music',marks:20,ao:'AO2 1a/1b',
 qnum:'Q3',product:'Music videos — Lizzo (Good as Hell) / Taylor Swift (Bad Blood) / Bruno Mars (Uptown Funk)',texts:['Lizzo','Taylor Swift','Bruno Mars'],
 question:'How far are the two music videos you have studied <strong>typical in their use of codes and conventions</strong>?',
 must:['Explore the use of codes and conventions in the two music videos you have studied','Refer to relevant media contexts','Make judgements and draw conclusions'],
 points:['GOOD AS HELL — MORE CONVENTIONAL: largely performance-based, featuring Lizzo singing and dancing alongside a large cast — following music video conventions.',
  'GOOD AS HELL — MORE CONVENTIONAL: Lizzo\'s gold costume reflects her star persona, connoting glamour and success. Many shots show Lizzo centred in the frame, establishing her as the star.',
  'GOOD AS HELL — MORE CONVENTIONAL: There is a strong narrative with three strands, each following one of the female students as the hero on their narrative journey (Propp).',
  'GOOD AS HELL — LESS CONVENTIONAL: Lizzo first appears at 00.43 — the three young women are introduced first. The first shot of Lizzo shows her from behind, skipping into position.',
  'GOOD AS HELL — LESS CONVENTIONAL: Diegetic sound is used during the last shot — an "outtake" style panning shot capturing students cheering and dancing after band practice.',
  'GOOD AS HELL — LESS CONVENTIONAL: Lizzo is represented as a successful black plus-size woman who is confident and proud of her body — challenging stereotypical representations of females in music videos which have upheld western beauty ideals.',
  'GOOD AS HELL — LESS CONVENTIONAL: The entirely black cast and HBCU setting represent black empowerment and success — linking to social contexts including #BlackLivesMatter.',
  'BAD BLOOD — MORE CONVENTIONAL: Swift and her friends are arguably objectified for the male gaze through costume codes (stiletto heels, thigh-length boots, slim, long-legged figures).',
  'BAD BLOOD — MORE CONVENTIONAL: The video uses the conventions of performance — Swift sings the song and addresses the audience directly.',
  'BAD BLOOD — LESS CONVENTIONAL: No conventional dance routines — the video features acrobatic fight sequences instead.',
  'BAD BLOOD — LESS CONVENTIONAL: Technical codes used are more conventional for action movies than music videos — balletic fight scenes, slow motion, special effects.',
  'Apply theoretical perspectives: Propp\'s character functions, Neale\'s "repetition and difference", Goodwin\'s music video theory.'],
 levels:[['17–20','Excellent, detailed analysis engaging fully with complex aspects of codes and conventions. Excellent use of the theoretical framework. Excellent linking to contexts. Excellent judgements.'],
  ['13–16','Good, reasonably detailed analysis. Good use of the theoretical framework. Good linking to contexts.'],
  ['9–12','Satisfactory analysis. Satisfactory use of the theoretical framework. Some linking to contexts.'],
  ['5–8','Basic analysis, tending to describe. Basic use of the theoretical framework.'],
  ['1–4','Minimal analysis. Minimal use of the theoretical framework.']],
 tip:["You will NOT be shown an extract for Section B \u2014 thorough revision of all MIRAC areas is essential.", "Depending on what Q1 assessed, this will be either Media Language or Representation.", "Use any bullet points in the question to guide your structure \u2014 cover all of them.", "This is a 20-mark extended response \u2014 you need an introduction, sustained discussion and conclusion.", "Both set texts must be covered \u2014 responses on only one text will be marked out of half marks.", "Link your analysis to relevant social, cultural, historical or political contexts.", "Make clear judgements and draw a reasoned conclusion."]}
,


{id:'sams1_c1_1a',year:'SAM 1',comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',qnum:'Q1(a)',
 product:'The Man With The Golden Gun film poster',texts:['Golden Gun'],
 question:'Explore how the film poster for <em>The Man With The Golden Gun</em> uses codes and conventions. Analyse: <strong>(a) character roles</strong>. [5]',
 must:[],
 points:['Bond is centrally placed in the foreground, connoting his status as the hero and protagonist','The villain is smaller and positioned behind Bond, connoting threat but also Bond\'s ultimate superiority','The Bond girls are represented as passive objects of visual pleasure, conforming to genre conventions of the spy film','The golden gun prop connotes danger and the villain\'s wealth and power','Characters\' costumes (tuxedo, villain\'s suit) connote sophistication and the glamorous world of spy films'],
 levels:[{band:5,marks:'5',desc:'Excellent, detailed analysis. Consistent focus on connotations or intended messages created by character roles.'},{band:4,marks:'4',desc:'Good, reasonably detailed analysis.'},{band:3,marks:'3',desc:'Satisfactory analysis, some description.'},{band:2,marks:'2',desc:'Basic analysis.'},{band:1,marks:'1',desc:'Minimal analysis.'}],
 tip:['5-mark question - 5-6 minutes maximum','Analyse what each character\'s placement, costume and props connote','Focus on the ROLES implied: hero, villain, love interest, threat','Strong: explains how character roles follow or challenge genre conventions']},
{id:'sams1_c1_1b',year:'SAM 1',comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(b)',product:'The Man With The Golden Gun film poster',texts:['Golden Gun'],
 question:'Explore how the film poster for The Man With The Golden Gun uses codes and conventions. Analyse <strong>narrative</strong>.',
 must:[],
 points:['The conventional narrative of the hero in danger connoted by the "golden gun" being aimed directly at Bond.',
  'Connotations of the colour gold linked to status and the villain’s power.',
  'Conventional enigma codes linked to the unseen "villain" — who is trying to kill Bond, and where the threat is from.',
  'The use of conventional action codes such as the stunts, destruction and explosions suggested by the poster’s imagery.',
  'The conventional roles each of the main female characters play in the suggested narratives (one pointing at Bond, one with her arm across him).'],
 levels:[['5','Excellent, detailed analysis. Consistent focus on how specific codes and conventions are used.'],
  ['4','Good, reasonably detailed analysis.'],['3','Satisfactory analysis. Lapses into description.'],
  ['2','Basic analysis. Tendency to describe.'],['1','Minimal, if any, analysis. Brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'sams1_c1_1c',year:'SAM 1',comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(c)',product:'The Man With The Golden Gun film poster',texts:['Golden Gun'],
 question:'Explore how the film poster for The Man With The Golden Gun uses codes and conventions. Analyse <strong>intertextuality</strong>.',
 must:[],
 points:['The use of the producers’ names and Roger Moore’s name conventionally positioned at the top of the poster, creating intertextuality with other texts (earlier Bond films, The Saint).',
  'The conventional "Bondian" iconography such as his dress codes, the gun, the "007" logo, the exotic locations.',
  'The colour gold referring to Goldfinger, an earlier Bond film which established many of the franchise’s codes and conventions.',
  'The "kung-fu" characters linking to the popularity of martial arts films in the 1970s.',
  'Conventional Bond character roles established in other franchise texts — the "Bond Girl", the eccentric villain.',
  'The use of the author’s name before the film’s title linking to the original Ian Fleming novel and other Bond novels.'],
 levels:[['5','Excellent, detailed analysis. Consistent focus on how specific codes and conventions are used.'],
  ['4','Good, reasonably detailed analysis.'],['3','Satisfactory analysis. Lapses into description.'],
  ['2','Basic analysis. Tendency to describe.'],['1','Minimal, if any, analysis. Brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'sams1_c1_2a',year:'SAM 1',comp:1,sec:'A',topic:'Context',marks:5,ao:'AO1 2a/2b',
 qnum:'Q2(a)',product:'The Sun newspaper front page (18 December 2013)',texts:['The Sun'],
 question:'Explain how <strong>political context</strong> affects newspapers. Refer to the front page of <em>The Sun</em> newspaper (18th December 2013) to support your points.',
 must:[],
 points:['The effect of ownership on newspapers — the influence Rupert Murdoch’s News Corp. may have over The Sun.',
  'The effect of political bias on newspapers — the focus on immigration issues and a sense of "right-leaning" or "conservative" political bias in The Sun’s front page lead story.',
  'The influence of newspapers in contemporary society — the need for the government to have the support of the UK’s biggest-selling newspaper and the implications of the "or else" part of The Sun’s headline.',
  'The focus on immigration as an important issue to readers of The Sun and one that would go on to define stories around "Brexit".',
  'More general references to The Sun’s historical support of whichever government is in power and the associated influence the newspaper could then be argued to wield.'],
 levels:[['5','Excellent, detailed and accurate knowledge of how political context affects newspapers. Highly appropriate reference to The Sun front page.'],
  ['4','Good, accurate knowledge. Appropriate reference to The Sun.'],
  ['3','Satisfactory, generally accurate knowledge. Some reference to The Sun.'],
  ['2','Basic knowledge. Limited reference to The Sun.'],
  ['1','Minimal knowledge. Minimal reference; brief or incomplete.']],
 tip:["Only spend 5 minutes on this \u2014 it is worth 5 marks.", "Give a brief example from the set text to support each point.", "Focus on the specific type of context named in the question (historical, social, political, cultural).", "You do not need to analyse media language here \u2014 this is about context."]},

{id:'sams1_c1_2b',year:'SAM 1',comp:1,sec:'A',topic:'Representation',marks:25,ao:'AO2 1a/1b',
 qnum:'Q2(b)',product:'The Sun & The Daily Mirror newspaper front pages',texts:['The Sun'],
 question:'Compare the <strong>representation of issues</strong> in <em>The Sun</em> newspaper front page and <em>The Daily Mirror</em> front page.',
 must:['How representations convey particular viewpoints and messages','How far the representation of issues is similar in the two front pages','How far the representation of issues is different in the two front pages'],
 points:['Use representation theory — the selected, constructed and mediated nature of representations; stereotypes of politicians; messages, values and points of view inherent in representations of issues.',
  'THE SUN — David Cameron looking anxious/under pressure, with the connotation that The Sun and its readers are the cause of this through their immigration demands ("or else!").',
  'THE SUN — The direct editorial intervention ("The Sun Says…") makes The Sun’s political position explicit. The use of an explicit threat is distinctive.',
  'THE DAILY MIRROR — Teresa May’s mouth is central to the frame, tying together the headline, her quotes and the paper’s viewpoint on the validity of these quotes.',
  'THE DAILY MIRROR — The issue (public sector pay) is framed around workers as victims, reflecting the paper’s more left-leaning political position.',
  'SIMILARITY — Both newspapers represent issues as problems needing solutions. Both are critical of Conservative Prime Ministers.',
  'SIMILARITY — Both front pages are picture-heavy — political issues are represented as influencing individual people rather than as wider abstract concepts.',
  'SIMILARITY — Both newspapers use direct and inclusive modes of address — pose, eye contact with reader, use of first person pronouns, a sense of shared political concerns.',
  'DIFFERENCE — The Sun represents readers as demanding something from the PM; The Daily Mirror’s readers are less directly involved.',
  'DIFFERENCE — The Sun focuses on immigration/Britain’s relationship with Europe; The Daily Mirror focuses on public sector pay — reflecting their different political orientations.',
  'CONCLUSION — Rather than factual reporting, bias and an attempt to influence readers’ opinions is evident on both front pages, although the political leanings differ significantly.'],
 levels:[['21–25','Excellent, detailed analysis of both products. Excellent comparisons. Consistent use of the theoretical framework and terminology. Well-reasoned judgements and conclusions.'],
  ['16–20','Good, reasonably detailed analysis. Good comparisons. Good use of theoretical framework.'],
  ['11–15','Satisfactory analysis. Satisfactory comparisons (may favour one product). Satisfactory use of theoretical framework.'],
  ['6–10','Basic analysis, tending to describe. Basic comparisons, mainly one product.'],
  ['1–5','Minimal, if any, analysis; largely descriptive. Minimal use of theoretical framework.']],
 tip:["This is an extended response \u2014 you need an introduction, sustained discussion, and conclusion.", "Spend 10 minutes studying the unseen resource and comparing it to the set text BEFORE writing.", "Structure around similarities AND differences \u2014 use the bullet points in the question to guide you.", "Apply representation theory: selection, construction and mediation; stereotypes; messages and values.", "Both texts must be covered \u2014 responses mainly on one product will be capped at band 3.", "Make clear judgements and draw a reasoned conclusion at the end."]},

{id:'sams1_c1_3a',year:'SAM 1',comp:1,sec:'B',topic:'Industry',marks:1,ao:'AO1 1a',
 qnum:'Q3(a)',product:'The Sun',texts:['The Sun'],
 question:'Name the organisation that <strong>publishes</strong> <em>The Sun</em> newspaper.',
 must:[],points:['News Corporation / News Corp. / News International'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'sams1_c1_3b',year:'SAM 1',comp:1,sec:'B',topic:'Industry',marks:2,ao:'AO1 1a',
 qnum:'Q3(b)',product:'The Sun',texts:['The Sun'],
 question:'<em>The Sun</em> is a national tabloid newspaper. Give <strong>two other examples</strong> of national tabloid newspapers in the UK.',
 must:[],
 points:['The Daily Express / The Daily Mail / The Daily Mirror / The Daily Star / The Sun on Sunday / The Sunday Mirror / The Sunday People / The Daily Sport'],
 levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'sams1_c1_3c',year:'SAM 1',comp:1,sec:'B',topic:'Industry',marks:4,ao:'AO1 1b',
 qnum:'Q3(c)',product:'Newspapers industry',texts:[],
 question:'Briefly explain <strong>two differences</strong> between tabloid newspapers and broadsheet newspapers.',
 must:[],
 points:['SIZE — Tabloids are smaller and more compact in size than broadsheets.',
  'CONTENT — Broadsheets publish more serious, highbrow news; tabloids focus on lighter, more populist content such as celebrity gossip, sport and human interest stories.',
  'LANGUAGE — Broadsheets use more formal, complex language; tabloids use more colloquial language, puns and alliteration.',
  'FRONT PAGE — Broadsheets are more text-heavy with multiple front page stories; tabloids are picture-heavy with short, punchy headlines.',
  'MODE OF ADDRESS — Broadsheets have a more formal, less sensationalist mode of address; tabloids have a more direct, engaging mode of address.',
  'PRICE — Broadsheets tend to be more expensive; tabloids are typically cheaper and often highlight their low prices on their front pages.'],
 levels:[['4','Excellent — 2 marks per valid explanation.'],['2','1 mark per valid explanation stated only.']],
 tip:["If the question says 'explain', give your point AND a reason \u2014 not just a statement.", "If the question says 'refer to', you MUST give specific examples from the set text.", "2 marks per point: one for identifying, one for developing/explaining.", "1 mark = 1 minute writing. Keep your answer focused and don't over-run.", "Read all Section B questions together before starting \u2014 some parts relate to each other."]},

{id:'sams1_c1_3d',year:'SAM 1',comp:1,sec:'B',topic:'Industry',marks:10,ao:'AO1 1a/1b',
 qnum:'Q3(d)',product:'The Sun website (thesun.co.uk)',texts:['The Sun'],
 question:'Explain why newspapers have websites. Refer to <strong>www.thesun.co.uk</strong> to support your points.',
 must:[],
 points:['The Sun as the biggest selling newspaper in the UK — thesun.co.uk has around 1 million browsers per day.',
  'How the website reinforces and develops aspects of The Sun’s brand identity.',
  'The impact of the convergent nature of media industries across different platforms (print and online media).',
  'The increasing pressures faced by all newspapers to attract advertisers as print sales decline — websites offer a new advertising revenue stream.',
  'The relationship between newspaper websites and their audiences — online platforms offer multimedia content and encourage more active audiences.',
  'The potential websites offer newspapers to develop their brand beyond a national context to reach a global audience.',
  'The synergies and cost savings newspaper websites offer — sharing reporting resources, sharing content, cross-promotion.',
  'Mention of The Sun abandoning a "paywall" subscription service to better compete in the online newspaper space (particularly with rivals such as The Mail Online).'],
 levels:[['9–10','Excellent, detailed and accurate knowledge of why newspapers have websites. Excellent reference to thesun.co.uk. Highly appropriate use of subject-specific terminology.'],
  ['7–8','Good, accurate knowledge. Good reference to the set product.'],
  ['5–6','Satisfactory, generally accurate knowledge. Satisfactory reference to the set product.'],
  ['3–4','Basic knowledge. Limited reference to the set product.'],
  ['1–2','Minimal knowledge. Minimal reference to the set product.']],
 tip:["Often a two-strand question: show knowledge of the topic AND apply it to the set text.", "Include a range of specific examples from your set text.", "1 mark = 1 minute. 12-mark question = 12 minutes of writing.", "Apply relevant theory where appropriate (e.g. Uses and Gratifications, Hall's Reception Theory).", "Higher band responses draw together knowledge from across the full theoretical framework."]},

{id:'sams1_c1_4a',year:'SAM 1',comp:1,sec:'B',topic:'Industry',marks:1,ao:'AO1 1a',
 qnum:'Q4(a)',product:'Pokémon Go',texts:['Pokemon'],
 question:'What type of game is Pokémon Go?',
 must:[],points:['Mobile app / augmented reality game'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'sams1_c1_4b',year:'SAM 1',comp:1,sec:'B',topic:'Audience',marks:2,ao:'AO1 1a',
 qnum:'Q4(b)',product:'Pokémon Go',texts:['Pokemon'],
 question:'Identify <strong>two different target audiences</strong> for Pokémon Go.',
 must:[],
 points:['Young boys / young men / teenagers / 18–24 year olds.',
  'Fans of the Pokémon franchise in other media forms — the film, the TV show, the trading cards.',
  'Fans of Nintendo / fans of mobile app games / fans of social networking.',
  'Fans of new technologies such as virtual reality.',
  'Fans of brands linked to Pokémon Go as sponsored locations (such as McDonald’s).'],
 levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'sams1_c1_4c',year:'SAM 1',comp:1,sec:'B',topic:'Audience',marks:4,ao:'AO1 1b',
 qnum:'Q4(c)',product:'Pokémon Go',texts:['Pokemon'],
 question:'Choose one audience. Briefly explain <strong>two marketing strategies</strong> the producers of Pokémon Go have used to target this audience.',
 must:[],
 points:['Online marketing — targeting existing Nintendo and Pokémon fans through social media and YouTube.',
  'Word of mouth or "buzz" marketing targeting younger audiences who are heavy users of social media.',
  'Online teaser trailers and full trailers targeting social media users.',
  'Use of events such as E3 targeting core audience of gamers.',
  'Promotion on app stores — being available as a free download targeting mobile app fans and younger/less wealthy audiences.',
  'Limited time, in-game events (e.g. Halloween) targeting gamers and fans of new technologies.',
  'Sponsored locations in the game targeting fans of those linked brands.'],
 levels:[['4','2 marks per valid detailed explanation.'],['2','1 mark per valid strategy stated only.']],
 tip:["If the question says 'explain', give your point AND a reason \u2014 not just a statement.", "If the question says 'refer to', you MUST give specific examples from the set text.", "2 marks per point: one for identifying, one for developing/explaining.", "1 mark = 1 minute writing. Keep your answer focused and don't over-run.", "Read all Section B questions together before starting \u2014 some parts relate to each other."]},

{id:'sams1_c1_4d',year:'SAM 1',comp:1,sec:'B',topic:'Audience',marks:11,ao:'AO1 1a/1b',
 qnum:'Q4(d)',product:'Pokémon Go',texts:['Pokemon'],
 question:'Explain how players of Pokémon Go can be described as <strong>‘active audiences’</strong>. Refer to theoretical perspectives on audience in your response.',
 must:[],
 points:['The role of media technologies in reaching the audience — digital mobile forms for gaming, the impact of convergence and cross-platform opportunities for audiences to use the game.',
  'Ideas of fandom and a community of loyal fans of Pokémon who have invested in the brand over many years and are active as "experts" within its community.',
  'The role and pleasures of mobile gaming / augmented reality and how it can fit into audiences’ lives in a variety of ways, including portability, ease of access.',
  'The importance of identity and being an active part of an online community that is also visible in the "real"/offline world as players gather at Pokéstops.',
  'Active social interaction (Uses and Gratifications) — players compete, share knowledge about the game, the locations of valuable Pokémon via social media platforms.',
  'The active nature of the audience begins with them choosing to download the free app and continues with paid-for in-app upgrades.',
  'How Pokémon Go uses augmented reality in an innovative way — engaging active audiences through typicality, variation and a repertoire of elements.',
  'The historical context of Pokémon and its social and cultural significance for audiences as a brand that has existed across multiple media platforms.'],
 levels:[['10–11','Excellent, detailed and accurate knowledge of audiences. Excellent understanding of active audiences and why they use Pokémon Go. Detailed and accurate reference to theoretical perspectives and highly appropriate use of subject-specific terminology.'],
  ['7–9','Good, accurate knowledge. Good understanding. Accurate reference to theoretical perspectives.'],
  ['4–6','Satisfactory, generally accurate knowledge. Satisfactory understanding. Generally accurate reference to theoretical perspectives.'],
  ['1–3','Basic knowledge. Basic, if any, understanding of active audiences. Basic reference to theoretical perspectives.']],
 tip:["Often a two-strand question: show knowledge of the topic AND apply it to the set text.", "Include a range of specific examples from your set text.", "1 mark = 1 minute. 12-mark question = 12 minutes of writing.", "Apply relevant theory where appropriate (e.g. Uses and Gratifications, Hall's Reception Theory).", "Higher band responses draw together knowledge from across the full theoretical framework."]},

// ─── SAMS 1 COMPONENT 2 ─────────────────────────────────────────────────────
{id:'sams1_c2_1a',year:'SAM 1',comp:2,sec:'A',topic:'Television',marks:10,ao:'AO2 1a',
 qnum:'Q1(a)',product:'Luther / The IT Crowd extract',texts:['Luther','IT Crowd'],
 question:'How does this extract <strong>represent a version of reality</strong>? Explore specific aspects of media language in your response.',
 must:[],
 points:['LUTHER — Both scenes appear to have been filmed on location, anchoring the text in "real" life.',
  'LUTHER — Subdued artificial lighting on the stairwell and natural lighting on the bridge adds to the "realism" but frames the scenes within the gritty crime genre.',
  'LUTHER — A long shot of the London skyline establishes Luther walking on to the bridge, reinforcing that this is a real location.',
  'LUTHER — Background action (pedestrians, vehicles) places the hero and villain in the real world; diegetic sounds associated with these are also used.',
  'LUTHER — The version of reality established at the start is sidelined as the drama increases — the melodramatic non-diegetic music and dramatic devices (the detective leaving just before the villain arrives home) undercut the realism.',
  'LUTHER — Medium close-ups of conversation and close-ups of the knife pressing into Luther’s stomach create something more "hyper real".',
  'IT CROWD — The high-key, "natural" lighting coming through the window connotes this is a "real" location.',
  'IT CROWD — Elements of mise-en-scène connote the reality of the location: the furniture, jug of water, box of tissues and bowls of snacks.',
  'IT CROWD — The mise-en-scène mirrors the "reality" of what audiences might expect from a green room behind the scenes of a TV studio.',
  'IT CROWD — The non-diegetic laughter track reminds the audience that this is not a reality to be taken seriously, suggesting the characters are performing before a live studio audience.'],
 levels:[['9–10','Excellent, detailed analysis of how a version of reality is represented. Consistent focus on specific aspects of media language.'],
  ['7–8','Good, reasonably detailed analysis. Focus on specific aspects of media language.'],
  ['5–6','Satisfactory analysis. General focus on media language but lapses into description.'],
  ['3–4','Basic analysis. Tends to describe aspects of media language.'],
  ['1–2','Minimal, if any, analysis. Descriptive, brief or incomplete.']],
 tip:["Make detailed notes during both viewings \u2014 write down specific examples and their meanings.", "You have 2 minutes to read the questions BEFORE the extract is shown \u2014 use this to know what to look for.", "Focus on the specific extract shown in the exam, not the episode in general.", "If asked to write about two characters, divide your time equally \u2014 marks are awarded for each.", "Make detailed notes and write down specific examples and the meanings they communicate."]},

{id:'sams1_c2_1b',year:'SAM 1',comp:2,sec:'A',topic:'Television',marks:10,ao:'AO2 1a/1b',
 qnum:'Q1(b)',product:'Luther / The IT Crowd extract',texts:['Luther','IT Crowd'],
 question:'To what extent are <strong>gender stereotypes</strong> used in this extract? Explore <strong>one character</strong> in detail.',
 must:[],
 points:['LUTHER — Luther as a stereotypical "troubled" male detective — his dress codes (unshaven, top button undone, loose tie) connote this.',
  'LUTHER — Luther as a stereotypical "maverick" male detective, bending the rules by breaking into Alice’s apartment and taking the urn without a warrant.',
  'LUTHER — Luther losing his temper and physically threatening the villain by holding her over the side of the bridge reinforces this "maverick" male stereotype.',
  'LUTHER — Alice Morgan taunts Luther with how carefully she has ensured there is no evidence — she is shown as highly intelligent, challenging the stereotype that men are more intelligent than women.',
  'LUTHER — Alice Morgan threatens Luther with a kitchen knife and says "kiss me or kill me" — she relates to the "femme fatale" archetype, typical of noir but less common in TV crime drama.',
  'LUTHER — Alice’s red hair and dark red lips connect to the "femme fatale" character of noir crime dramas.',
  'IT CROWD — Maurice as a stereotypical male "nerd" or "geek" — reinforced through his conservative, unfashionable dress codes (shirt and tie, brown corduroy trousers, glasses).',
  'IT CROWD — Audio codes (the tone/pitch of Maurice’s voice) and gesture codes (sitting bolt upright, eating the biscuit carefully) perhaps challenge conventions of masculinity.',
  'IT CROWD — "Prime" as a stereotypically mysterious/enigmatic male character — reinforced through his long black velvet cloak, buckled biker boots and dark sunglasses.',
  'IT CROWD — "Prime" as a stereotypical male guide/mentor ("Do you have what it takes to become an ultimate champion?").'],
 levels:[['9–10','Excellent, detailed analysis of the chosen character and to what extent they are stereotypical. Consistently appropriate judgements and conclusions.'],
  ['7–8','Good, reasonably detailed analysis. Appropriate judgements and conclusions.'],
  ['5–6','Satisfactory analysis. Generally appropriate judgements.'],
  ['3–4','Basic analysis. Basic judgements.'],
  ['1–2','Minimal, if any, analysis. Lacks judgements.']],
 tip:["This is a 'how far' or 'to what extent' question \u2014 you must make clear judgements, not just analyse.", "Back your argument up with specific examples from the extract.", "Use the 6-minute break between viewings to make detailed notes and plan your response.", "Reference to genre conventions or relevant contexts will push your answer into the higher bands.", "End with a clear, reasoned conclusion that directly answers the 'how far' question."]},

{id:'sams1_c2_2',year:'SAM 1',comp:2,sec:'A',topic:'Television',marks:10,ao:'AO1 1a/1b',
 qnum:'Q2',product:'Luther / The IT Crowd / Friends / The Sweeney',texts:['Luther','IT Crowd'],
 question:'How do <strong>production processes</strong> influence crime dramas or sitcoms? Refer to examples you have studied to support your response.',
 must:[],
 points:['LUTHER — Luther is broadcast on the BBC, a Public Service Broadcaster with a royal charter remit to Educate, Entertain and Inform. Luther fundamentally fulfils the BBC’s aim to entertain.',
  'LUTHER — The BBC makes a profit with Luther’s broadcast on BBC America, a commercial-funded channel that relies on advertising revenue.',
  'LUTHER — Luther being available on BBC iPlayer and Netflix allows audiences to access it after its initial broadcast and on different devices.',
  'LUTHER — Luther has a 15 rating and was broadcast after the 9pm watershed, allowing content aimed at more adult audiences.',
  'THE IT CROWD — Broadcast on Channel 4 which has a public service remit to "champion unheard voices", "innovate and take bold creative risks" and "stand up for diversity".',
  'THE IT CROWD — Each series is only 6 episodes long, reflecting the smaller number of writers, Channel 4’s scheduling requirements and smaller production budget.',
  'THE IT CROWD — Produced by TalkBack Thames and distributed by Fremantle Media, both of whom have produced and distributed other British sitcoms.',
  'Both Friends and The IT Crowd were filmed before live studio audiences, which Friends used to fine-tune scripts before re-filming scenes to get better reactions.'],
 levels:[['9–10','Excellent, detailed and accurate knowledge of production processes and their influence on media products. Excellent use of the set product. Highly appropriate use of subject-specific terminology.'],
  ['7–8','Good, accurate knowledge. Good use of the set product.'],
  ['5–6','Satisfactory, generally accurate knowledge. Satisfactory use of the set product.'],
  ['3–4','Basic knowledge. Basic use of the set product.'],
  ['1–2','Minimal knowledge. Minimal use of the set product.']],
 tip:["This question could be on industries, audiences OR media contexts \u2014 read it carefully.", "You must refer directly to Luther and/or The Sweeney depending on what the question asks.", "Apply relevant theory \u2014 Uses and Gratifications, Hall's Reception Theory, production context.", "Include a range of specific examples from your set products.", "Higher band responses link knowledge across different areas of the theoretical framework."]},

{id:'sams1_c2_3',year:'SAM 1',comp:2,sec:'B',topic:'Music',marks:20,ao:'AO2 1a/1b',
 qnum:'Q3',product:'Music websites — Katy Perry / Taylor Swift / Bruno Mars / Pharrell Williams',texts:['Katy Perry','Taylor Swift','Bruno Mars','Pharrell'],
 question:'To what extent do these two music websites <strong>use conventions</strong>?',
 must:['Explore the two music websites you have studied','Refer to relevant media contexts such as social or cultural','Make judgements about the question'],
 points:['KATY PERRY — Homepage constructed around Katy Perry as a brand linked to the latest album. During the Witness campaign: white and orange palette matching the album cover, tour dates, merchandise, links to buy tickets — strong commercial message.',
  'KATY PERRY — Menu bar includes conventional links to Music, Tour, News, Videos, Photos, Store. Social media links feature on the menu bar and at the bottom of the page.',
  'KATY PERRY — Photos page includes tour photos (Perry as glamorous, objectified star), Swish Swish images (Perry being hit by basketballs — connoting an accessible, "normal" star), and androgynous, futuristic imagery.',
  'KATY PERRY — News page constructs positive messages about Perry — launch of her tour, "exclusive" insights, RIAA Diamond Awards ("3 for 10 million sales").',
  'KATY PERRY — Link to charity partnership (Boys & Girls Club of America) reflects contemporary social context and the #WitnessTheFuture campaign.',
  'TAYLOR SWIFT — Homepage constructed around the Reputation album re-brand: black and white imagery and gothic-style newsprint font repeating "Taylor Swift" — linking to her "reputation" and the serious, self-referential ideas of the album.',
  'TAYLOR SWIFT — Main image of Swift in black and white with a direct, confrontational mode of address, contrasting with her former "girl next door" image.',
  'TAYLOR SWIFT — Website uses conventions to show Swift is connected with fans: "Listen to songs Taylor loves on Spotify!", "Connect with Taylor".',
  'PHARRELL — The website subverts many conventions: no obvious star persona, no branding for the latest release, a montage of non-linear "cards" allowing users to navigate in their own direction.',
  'PHARRELL — The "Social Good" section challenges conventions through articles on Pharrell’s speech to the UN, environmental documentary and From One Hand To Another foundation.',
  'PHARRELL — The "I am OTHER" logo links to a website celebrating difference and individuality — more conventional of an indie artist than a mainstream star.',
  'BRUNO MARS — Colour palette and iconography during the Versace on the Floor release creates a clear "modern retro" brand. Homepage featured a full-screen looped extract from the video.',
  'BRUNO MARS — Multiple streaming service links (Spotify, Apple Music, SoundCloud, YouTube, Deezer) alongside "Buy Physical — Vinyl, Retail" reinforce his "modern retro" values.'],
 levels:[['17–20','Excellent, detailed analysis of both products. Excellent, consistent use of the theoretical framework and terminology. Excellent linking of products to their contexts. Excellent, well-reasoned judgements and conclusions.'],
  ['13–16','Good, reasonably detailed analysis. Good use of the theoretical framework. Good linking to contexts. Good judgements.'],
  ['9–12','Satisfactory analysis. Satisfactory use of the theoretical framework. Satisfactory linking to contexts. Generally reasoned judgements.'],
  ['5–8','Basic analysis, tending to describe. Basic use of the theoretical framework. Basic judgements.'],
  ['1–4','Minimal analysis. Minimal use of the theoretical framework.']],
 tip:["You will NOT be shown an extract for Section B \u2014 thorough revision of all MIRAC areas is essential.", "Depending on what Q1 assessed, this will be either Media Language or Representation.", "Use any bullet points in the question to guide your structure \u2014 cover all of them.", "This is a 20-mark extended response \u2014 you need an introduction, sustained discussion and conclusion.", "Both set texts must be covered \u2014 responses on only one text will be marked out of half marks.", "Link your analysis to relevant social, cultural, historical or political contexts.", "Make clear judgements and draw a reasoned conclusion."]},

{id:'sams1_c2_4',year:'SAM 1',comp:2,sec:'B',topic:'Music',marks:10,ao:'AO1 2a/2b',
 qnum:'Q4',product:'Duran Duran — Rio (1982) / Michael Jackson — Black or White (1991)',texts:[],
 question:'Explain how music videos <strong>reflect the context in which they are made</strong>. Refer to <em>Duran Duran Rio</em> (1982) or <em>Michael Jackson Black or White</em> (1991) to support your response.',
 must:[],
 points:['RIO — Split screens and overlays were advanced technical codes for the time period — reflecting the early years of MTV and the importance of music videos to the promotion of the band’s music.',
  'RIO — Dress codes (the band’s suits, designed by Anthony Price who worked with Bowie and Roxy Music) reflect 1980s fashions and the cultural context of New Romanticism.',
  'RIO — Intertextual references to the Bond films of the 1960s, 70s and 80s — the yacht, exotic locations, glamorous women.',
  'RIO — The iconography used in the video (champagne, dress codes, the yacht) is symbolic of 1980s glamour and excess.',
  'RIO — The representation of women as sexualised objects is stereotypical of women in 1980s music videos.',
  'RIO — The slightly androgynous representations of men (especially Nick Rhodes) reflect identities made fashionable by David Bowie and other stars of the time.',
  'BLACK OR WHITE — The video was released in 1991 as part of a televised "premiere", underlining the importance of music videos to artists. 500 million viewers watched the premiere in 27 countries worldwide.',
  'BLACK OR WHITE — The first few minutes feature Macauley Culkin, a star made famous the previous year by Home Alone — intertextual reference reflects the cultural context.',
  'BLACK OR WHITE — The very high production values ($6.9 million) and ground-breaking "morphing" visual effects reflect the era’s technological advancements.',
  'BLACK OR WHITE — The representations of ethnicity reflect wider representations of non-white ethnic groups starting to appear in 1990s media products.',
  'BLACK OR WHITE — The "panther section" (featuring violence and suggestive dancing) in the last 4 minutes of the original video was removed for censorship reasons, reflecting more stringent music video regulations at the time.'],
 levels:[['9–10','Excellent, detailed and accurate knowledge of relevant contexts. Excellent understanding of the effects of contexts on music videos. Highly appropriate links between relevant contexts and specific aspects of the set product.'],
  ['7–8','Good, accurate knowledge. Good understanding. Appropriate links to the set product.'],
  ['5–6','Satisfactory, generally accurate knowledge. Satisfactory understanding. Links made but likely undeveloped.'],
  ['3–4','Basic knowledge. Basic, if any, understanding. Links between contexts and the set product unlikely.'],
  ['1–2','Minimal knowledge. Links not made. Brief and incomplete.']],
 tip:["Depending on what Q2 assessed, this will be on industries, audiences OR contexts.", "Include a range of specific examples from your set music texts.", "Apply relevant theory (Uses and Gratifications, production context, convergence etc.).", "1 mark = 1 minute \u2014 10 marks = 10 minutes of focused writing."]},

// ─── SAMs 2 COMPONENT 1 ─────────────────────────────────────────────────────
{id:'sams2_c1_1a',year:'SAM 2',comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(a)',product:'Quality Street print advertisement (1950s)',texts:['Quality Street'],
 question:'Explore how the advertisement for Quality Street uses the following elements of media language to create meanings: <strong>images</strong>.',
 must:[],
 points:['The rich colour palette of primary and secondary colours, including the gold picture frame, connotes "quality" and wealth associated with the brand.',
  'The centrality of the male character, seated between two women, reflects his importance and power.',
  'The formal clothing and appearance of the seated male character suggests high-earning, professional men being able to buy the product and therefore being attractive to women.',
  'The visual contrast of the blonde and dark-haired women links to the idea of "delightfully different" in the text, reinforcing the "dilemma" theme.'],
 levels:[['5','Excellent, detailed analysis. Consistent focus on connotations or intended meanings of specific elements.'],
  ['4','Good, reasonably detailed analysis. Focus on connotations.'],
  ['3','Satisfactory analysis. General focus on connotations, lapses into description.'],
  ['2','Basic analysis. Tendency to describe.'],['1','Minimal, brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'sams2_c1_1b',year:'SAM 2',comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(b)',product:'Quality Street print advertisement (1950s)',texts:['Quality Street'],
 question:'Explore how the advertisement for Quality Street uses the following elements of media language to create meanings: <strong>language</strong>.',
 must:[],
 points:['The use of persuasive language techniques such as alliteration ("delightfully different") and hyperbole ("what a delicious dilemma!") to engage audiences.',
  'The inference of a dilemma on two levels: the man’s choice between two different women, and the women’s choice of chocolate, related to stereotypes around women and chocolate.',
  'The use of "delightfully different" and "delicious dilemma" to anchor the meanings of the main image and the advert’s main theme.',
  'The use of descriptive language including positive adjectives such as "distinctive" underneath each sweet to connote a "quality" product being consumed by a wealthy and discerning consumer.'],
 levels:[['5','Excellent, detailed analysis. Consistent focus on connotations or intended meanings created by language.'],
  ['4','Good, reasonably detailed analysis.'],['3','Satisfactory analysis. Lapses into description.'],
  ['2','Basic analysis. Tendency to describe.'],['1','Minimal, brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'sams2_c1_1c',year:'SAM 2',comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',
 qnum:'Q1(c)',product:'Quality Street print advertisement (1950s)',texts:['Quality Street'],
 question:'Explore how the advertisement for Quality Street uses the following elements of media language to create meanings: <strong>layout and design</strong>.',
 must:[],
 points:['The use of italicised font and the colour purple for the brand name connotes "quality" and class.',
  'The positioning of the gold frame with historic imagery in the background suggests tradition and an established brand, whilst the seated characters in the foreground implies a modern approach.',
  'The geometric composition of the advert leads the audience from the male character’s face down to the centrally framed tin of sweets to the text at the bottom of the page.',
  'The similarities in colour scheme between the wrappers of the products and the characters in the background image creates a brand identity.'],
 levels:[['5','Excellent, detailed analysis. Consistent focus on connotations or meanings created by layout/design.'],
  ['4','Good, reasonably detailed analysis.'],['3','Satisfactory analysis. Lapses into description.'],
  ['2','Basic analysis. Tendency to describe.'],['1','Minimal, brief and descriptive.']],
 tip:["You will have a copy of the set text to refer to in the exam \u2014 use it.", "No introduction or conclusion needed \u2014 get straight into analysis.", "Each point needs a clear connotation: don't just describe, explain what it suggests.", "Use subject-specific terminology: mode of address, connotations, anchorage, genre conventions etc.", "Aim for 2\u20133 well-developed points rather than 5 thin ones."]},

{id:'sams2_c1_2a',year:'SAM 2',comp:1,sec:'A',topic:'Context',marks:5,ao:'AO1 2a/2b',
 qnum:'Q2(a)',product:'Pride magazine',texts:[],
 question:'Explain how <strong>social context</strong> influences magazines. Refer to <em>Pride</em> magazine to support your points.',
 must:[],
 points:['The influence of male-dominated/patriarchal society on magazines — the emphasis on female appearance and stereotypical ideas of femininity in Pride.',
  'The influence of feminism/post-feminism on magazines — the focus on gender issues such as FGM in Pride.',
  'The influence of multiculturalism in contemporary society on magazines — the focus on issues relevant to black women in Pride.',
  'The influence of celebrity culture on magazines — the use of a female celebrity to sell Pride.'],
 levels:[['5','Excellent, detailed and accurate knowledge of the influence of social context on magazines. Highly appropriate reference to Pride magazine.'],
  ['4','Good, accurate knowledge. Appropriate reference to Pride.'],
  ['3','Satisfactory, generally accurate knowledge. Some reference to Pride.'],
  ['2','Basic knowledge. Limited reference to Pride.'],
  ['1','Minimal knowledge. Minimal reference; brief or incomplete.']],
 tip:["Only spend 5 minutes on this \u2014 it is worth 5 marks.", "Give a brief example from the set text to support each point.", "Focus on the specific type of context named in the question (historical, social, political, cultural).", "You do not need to analyse media language here \u2014 this is about context."]},

{id:'sams2_c1_2b',year:'SAM 2',comp:1,sec:'A',topic:'Representation',marks:25,ao:'AO2 1a/1b',
 qnum:'Q2(b)',product:'Pride magazine & Glamour magazine',texts:[],
 question:'Compare the <strong>representation of women</strong> in the <em>Pride</em> front cover and the <em>Glamour</em> front cover.',
 must:['The choices the producers have made about how to represent women','How far the representation of women is similar in the two front covers','How far the representation of women is different in the two front covers'],
 points:['Use representation theory — the selected, constructed and mediated nature of representations; stereotypes and misrepresentations of women; messages, values and points of view; feminist approaches.',
  'Analyse choices in both covers: cover model, dress, make-up, hair, pose, gesture and expression; shot type, framing and composition; title and sell lines.',
  'SIMILARITY — Both covers represent stereotypical femininity through the selection of female celebrities in elegant, flowing dresses; flawless skin; long hair; understated make-up.',
  'SIMILARITY — Both covers use a medium long shot at a straight-on angle to emphasise both women’s slim figures and create a sense of openness.',
  'SIMILARITY — Both covers use inclusive mode of address — pose, smile and eye contact with reader; first person in the Glamour quotation; "we" in the Pride sell line.',
  'SIMILARITY — Both covers emphasise stereotypically female interests such as beauty and fashion in the sell lines.',
  'DIFFERENCE — A black celebrity on the Pride cover vs a white celebrity on the Glamour cover reflects different target audiences.',
  'DIFFERENCE — The more politicised or feminist representation of women on Pride through explicit reference to feminism and focus on gender issues such as female objectification and FGM.',
  'DIFFERENCE — Pride focuses on issues specifically relevant to black women ("Black Women’s Bodies Examined") — absent from Glamour.',
  'DIFFERENCE — The title "Pride" suggests a celebration of black beauty in response to under-representation of black women in mainstream magazines; "Glamour" suggests a focus on stereotypically female concerns such as appearance.',
  'CONCLUSION — Although the magazines differ in their representation of ethnicity, the representation of women is largely similar and stereotypical in both. Pride focuses more on serious issues related to gender and ethnicity than Glamour.'],
 levels:[['21–25','Excellent, detailed analysis of both products. Excellent comparisons. Consistent use of the theoretical framework and terminology. Well-reasoned judgements and conclusions.'],
  ['16–20','Good, reasonably detailed analysis. Good comparisons. Good use of theoretical framework.'],
  ['11–15','Satisfactory analysis. Satisfactory comparisons. Satisfactory use of theoretical framework.'],
  ['6–10','Basic analysis, tending to describe. Basic comparisons, mainly one product.'],
  ['1–5','Minimal, if any, analysis; largely descriptive. Minimal use of theoretical framework.']],
 tip:["This is an extended response \u2014 you need an introduction, sustained discussion, and conclusion.", "Spend 10 minutes studying the unseen resource and comparing it to the set text BEFORE writing.", "Structure around similarities AND differences \u2014 use the bullet points in the question to guide you.", "Apply representation theory: selection, construction and mediation; stereotypes; messages and values.", "Both texts must be covered \u2014 responses mainly on one product will be capped at band 3.", "Make clear judgements and draw a reasoned conclusion at the end."]},

{id:'sams2_c1_3a',year:'SAM 2',comp:1,sec:'B',topic:'Industry',marks:1,ao:'AO1 1a',
 qnum:'Q3(a)',product:'Film industry',texts:[],
 question:'Name the organisation that <strong>regulates films</strong> in Britain.',
 must:[],points:['British Board of Film Classification / BBFC'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'sams2_c1_3b',year:'SAM 2',comp:1,sec:'B',topic:'Industry',marks:2,ao:'AO1 1a',
 qnum:'Q3(b)',product:'Film industry',texts:[],
 question:'12 and 12A are examples of age certificates used in the UK. Give <strong>two other examples</strong> of age certificates used in the UK.',
 must:[],points:['U / PG / 15 / 18 / R18'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'sams2_c1_3c',year:'SAM 2',comp:1,sec:'B',topic:'Industry',marks:2,ao:'AO1 1b',
 qnum:'Q3(c)',product:'Film industry',texts:[],
 question:'Briefly explain the <strong>difference between the 12 and 12A</strong> age certificates.',
 must:[],
 points:['The 12 certificate is for video releases or home viewing only.',
  'The 12A certificate means that children under 12 must be accompanied by an adult for films shown at the cinema.',
  'The 12A certificate is only for films shown at the cinema; 12 is only for home/video release.'],
 levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'sams2_c1_3d',year:'SAM 2',comp:1,sec:'B',topic:'Industry',marks:12,ao:'AO1 1a/1b',
 qnum:'Q3(d)',product:'Spectre (film)',texts:['Spectre'],
 question:'Explain why a film may be given a <strong>12A or 12 certificate</strong>. Refer to <em>Spectre</em> to support your points.',
 must:[],
 points:['The BBFC as the UK film regulator — its functions include protecting vulnerable audiences from harmful or offensive content, and helping audiences make informed decisions.',
  'The requirements for and distinction between different age certificates such as 12/12A and 15.',
  'The aspects of a film that may raise regulatory issues — the BBFC’s description of Spectre as containing "moderate violence and threat".',
  'The relationship between film distributors and regulators.',
  'How film distributors may make cuts to a film to achieve a particular certificate — the cuts the distributors of Spectre had to make to gain a 12A/12 certificate (in areas of threat, violence and swearing).',
  'How the film industry operates as a commercial industry — distributors aim to reach large global audiences.',
  'The importance of attaining the desired certification to maximise audience numbers and profit — the 12A/12 certificate was crucial to the global success of Spectre.'],
 levels:[['10–12','Excellent, detailed and accurate knowledge of regulation and the film industry. Excellent reference to Spectre. Highly appropriate use of subject-specific terminology.'],
  ['7–9','Good, accurate knowledge. Good reference to Spectre.'],
  ['4–6','Satisfactory, generally accurate knowledge. Satisfactory reference to Spectre.'],
  ['1–3','Basic knowledge. Basic, if any, reference to Spectre.']],
 tip:["Often a two-strand question: show knowledge of the topic AND apply it to the set text.", "Include a range of specific examples from your set text.", "1 mark = 1 minute. 12-mark question = 12 minutes of writing.", "Apply relevant theory where appropriate (e.g. Uses and Gratifications, Hall's Reception Theory).", "Higher band responses draw together knowledge from across the full theoretical framework."]},

{id:'sams2_c1_4a',year:'SAM 2',comp:1,sec:'B',topic:'Industry',marks:1,ao:'AO1 1a',
 qnum:'Q4(a)',product:'The Archers',texts:['Archers'],
 question:'Which radio station broadcasts <em>The Archers</em>?',
 must:[],points:['BBC Radio 4'],levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'sams2_c1_4b',year:'SAM 2',comp:1,sec:'B',topic:'Audience',marks:1,ao:'AO1 1a',
 qnum:'Q4(b)',product:'The Archers',texts:['Archers'],
 question:'Identify <strong>one audience</strong> for <em>The Archers</em>.',
 must:[],
 points:['Older demographic / middle class audience / higher socio-economic groups (A, B) / Radio 4 audience / niche/specialised audience / fans of radio drama / fans of soap opera.'],
 levels:[],
 tip:["Keep it brief \u2014 1 mark = 1 sentence. Do not over-write.", "If asked to 'name' something, a single word or phrase is sufficient.", "Read all Section B questions together first \u2014 some parts may relate to each other."]},

{id:'sams2_c1_4c',year:'SAM 2',comp:1,sec:'B',topic:'Audience',marks:4,ao:'AO1 1b',
 qnum:'Q4(c)',product:'The Archers',texts:['Archers'],
 question:'Explain <strong>two ways</strong> in which <em>The Archers</em> is aimed at the audience you identified.',
 must:[],
 points:['Aimed at an older demographic through being a long-running programme first broadcast in 1950, whose listeners are loyal and have listened for a long time.',
  'Aimed at audiences from higher socio-economic groups through the inclusion of middle class characters such as the Archers and the Aldridges, appealing to the typical Radio 4 listener.',
  'Aimed at a niche audience through being a rural drama broadcast on Radio 4, whose audience is generally smaller and more specialised than television audiences.',
  'Aimed at fans of soap opera through using familiar and appealing genre conventions such as stock characters, communal settings and ongoing narratives.'],
 levels:[['4','2 marks per valid detailed explanation.'],['2','1 mark per valid reason stated only.']],
 tip:["If the question says 'explain', give your point AND a reason \u2014 not just a statement.", "If the question says 'refer to', you MUST give specific examples from the set text.", "2 marks per point: one for identifying, one for developing/explaining.", "1 mark = 1 minute writing. Keep your answer focused and don't over-run.", "Read all Section B questions together before starting \u2014 some parts relate to each other."]},

{id:'sams2_c1_4d',year:'SAM 2',comp:1,sec:'B',topic:'Audience',marks:12,ao:'AO1 1a/1b',
 qnum:'Q4(d)',product:'The Archers',texts:['Archers'],
 question:'Explain why audiences listen to <em>The Archers</em>. Refer to <strong>Uses and Gratifications theory</strong> in your response.',
 must:[],
 points:['DIVERSION — Audiences choose to listen to The Archers to fulfil their need for entertainment and escapism — the fictional world of Ambridge offers an escape from everyday life.',
  'SURVEILLANCE — The Archers covers important themes such as domestic abuse, infidelity and agricultural policy — audiences gain information applicable to their own lives.',
  'PERSONAL IDENTITY — Audiences may listen because it is connected to their identity as Radio 4 listeners, country dwellers, or fans of long-running drama.',
  'PERSONAL RELATIONSHIPS / SOCIAL INTERACTION — Ideas of fandom and a community of loyal fans who have invested in the programme over many years.',
  'The role and pleasures of radio and how it fits into audiences’ lives in various ways — portability, ease of access, use as background sound.',
  'The historical context of The Archers and its social and cultural significance as the world’s longest running radio soap opera.',
  'The narrative appeal of the form for audiences — continuing narratives, enigma codes, multi-strand narratives.',
  'How the BBC uses distribution and marketing strategies to reach audiences, including new audiences, through BBC Sounds, BBC iPlayer and social media.',
  'Apply Blumler and Katz’s Uses and Gratifications theory throughout — link each of the four gratifications to specific features of The Archers.'],
 levels:[['10–12','Excellent, detailed and accurate knowledge of audiences. Excellent understanding of why audiences listen to The Archers. Detailed and accurate reference to Uses and Gratifications theory and highly appropriate use of subject-specific terminology.'],
  ['7–9','Good, accurate knowledge. Good understanding. Accurate reference to Uses and Gratifications theory.'],
  ['4–6','Satisfactory, generally accurate knowledge. Satisfactory understanding. Generally accurate reference to theory.'],
  ['1–3','Basic knowledge. Basic understanding. Basic, if any, reference to theory.']],
 tip:["Often a two-strand question: show knowledge of the topic AND apply it to the set text.", "Include a range of specific examples from your set text.", "1 mark = 1 minute. 12-mark question = 12 minutes of writing.", "Apply relevant theory where appropriate (e.g. Uses and Gratifications, Hall's Reception Theory).", "Higher band responses draw together knowledge from across the full theoretical framework."]},

// ─── SAMs 2 COMPONENT 2 ─────────────────────────────────────────────────────
{id:'sams2_c2_1a',year:'SAM 2',comp:2,sec:'A',topic:'Television',marks:8,ao:'AO2 1a',
 qnum:'Q1(a)',product:'Luther / Unbreakable Kimmy Schmidt extract',texts:['Luther'],
 question:'Explore the <strong>connotations of the costume</strong> of two characters in the extract. (4 marks per character)',
 must:[],
 points:['LUTHER — Luther’s shirt and tie connote his official status and authority as a police detective.',
  'LUTHER — His undone top button and loosened tie connote that he is not conventional and doesn’t conform to rules.',
  'LUTHER — In the extract, Luther puts his wedding ring back on — this connotes his commitment to his wife and reluctance to accept that his marriage is over.',
  'LUTHER — Alice Morgan’s long, red hair connotes she is volatile, dangerous and sexual — it contrasts with her short, messy hair at the beginning of the extract when she is pretending to be innocent.',
  'LUTHER — Alice Morgan’s smart jacket, trousers and boots give her a business-like appearance, connoting she is an efficient and ruthless criminal.',
  'KIMMY — Kimmy’s brightly coloured yellow and pink costume connotes her positive, extrovert personality and enthusiasm for her new life in New York.',
  'KIMMY — Casual clothes (bright jeans, shirt, multi-coloured trainers) contrast with the long, formal pale blue dress she wears at the start of the episode, connoting greater freedom.',
  'KIMMY — The symbols of nature (flowers and butterflies) on Kimmy’s costume connote new life and the re-birth she has had into society.',
  'MRS VOORHEES — Tight black trousers, high heels and designer off-the-shoulder top worn at home connote her privileged lifestyle as a wealthy New York socialite.',
  'MRS VOORHEES — Diamond encrusted rings connote wealth and social status, but also dependence on her husband.'],
 levels:[['4 (per character)','Excellent, detailed analysis of the character’s costume. Consistent focus on the connotations of specific aspects.'],
  ['3','Good, reasonably detailed analysis. Focus on the connotations of specific aspects.'],
  ['2','Satisfactory analysis. General focus on connotations, but lapses into description.'],
  ['1','Basic, if any, analysis. Tends to describe aspects of costume.']],
 tip:["Make detailed notes during both viewings \u2014 write down specific examples and their meanings.", "You have 2 minutes to read the questions BEFORE the extract is shown \u2014 use this to know what to look for.", "Focus on the specific extract shown in the exam, not the episode in general.", "If asked to write about two characters, divide your time equally \u2014 marks are awarded for each.", "Make detailed notes and write down specific examples and the meanings they communicate."]},

{id:'sams2_c2_1b',year:'SAM 2',comp:2,sec:'A',topic:'Television',marks:12,ao:'AO2 1a/1b',
 qnum:'Q1(b)',product:'Luther / Unbreakable Kimmy Schmidt extract',texts:['Luther'],
 question:'How far are the <strong>characters</strong> in the extract <strong>typical of the genre</strong>? Explore two characters.',
 must:[],
 points:['LUTHER — Luther finds the gun in the urn containing Alice Morgan’s parents’ ashes — typical of the intelligent detective character in crime drama.',
  'LUTHER — Luther picks the lock to Alice’s flat and steals the urn, showing him as a brilliant maverick who doesn’t always stay within the law — typical of crime dramas where the line between hero and villain is often blurred.',
  'LUTHER — Luther is not wearing his wedding ring but declares his love for his wife — suggesting a troubled detective with a difficult personal life, typical of the crime drama hero.',
  'LUTHER — Alice Morgan taunts Luther with how carefully she has ensured there is no evidence — she is highly intelligent, a distinctive character for the genre that challenges stereotypes of men being more intelligent.',
  'LUTHER — Alice Morgan threatens Luther with a kitchen knife and says "kiss me, kill me" — she relates to the "femme fatale" archetype, typical of noir but less common in TV crime drama.',
  'KIMMY — Kimmy is an exaggerated character, typical of the sitcom genre, showing exaggerated traits such as boundless optimism.',
  'KIMMY — Kimmy is innocent and naïve (accepts a job without knowing anything about it, drinks alcohol for the first time) — a stock character type of the sitcom genre.',
  'KIMMY — Kimmy stops Buckley from stealing and wants to help Mrs Voorhees — she is an extremely moral character, typical of sitcoms which generally uphold dominant messages and values.',
  'MRS VOORHEES — She thinks Kimmy is the dog’s masseuse and won’t go outside because she has had a face peel — a typically exaggerated character of the sitcom genre with a limited grasp on reality.',
  'MRS VOORHEES — Conforms to the stereotype of a blonde "trophy wife". Typically, sitcoms rely on these easily recognisable character types as a vehicle for humour.'],
 levels:[['5–6 (per character)','Good, detailed analysis of the chosen character and their typicality. Appropriate judgements and conclusions regarding "how far" the character is typical of the genre.'],
  ['3–4','Satisfactory analysis. Generally appropriate judgements.'],
  ['1–2','Basic, if any, analysis. Basic, if any, judgements.']],
 tip:["This is a 'how far' or 'to what extent' question \u2014 you must make clear judgements, not just analyse.", "Back your argument up with specific examples from the extract.", "Use the 6-minute break between viewings to make detailed notes and plan your response.", "Reference to genre conventions or relevant contexts will push your answer into the higher bands.", "End with a clear, reasoned conclusion that directly answers the 'how far' question."]},

{id:'sams2_c2_2',year:'SAM 2',comp:2,sec:'A',topic:'Television',marks:10,ao:'AO1 2a/2b',
 qnum:'Q2',product:'Luther / Unbreakable Kimmy Schmidt / The Sweeney / Friends',texts:['Luther'],
 question:'How do crime dramas or sitcoms <strong>reflect the time in which they are made</strong>? Refer to examples you have studied to support your response.',
 must:[],
 points:['THE SWEENEY — Reflects 1970s culture through the mise-en-scène (Ford Consul Granada, costumes, areas of social deprivation in London).',
  'THE SWEENEY — Represents the police as violent and willing to bend the rules, reflecting policing in the 1970s and the investigation of real-life Flying Squad detectives for bribery and corruption.',
  'THE SWEENEY — Reflects 1970s gender values — male-dominated, patriarchal, stereotypically macho culture of drinking and violence — reflecting the police force’s different rank structure for women and men.',
  'LUTHER — Reflects contemporary London culture through shots of the London skyline, sleek office buildings and period town houses.',
  'LUTHER — Reflects contemporary attitudes to policing — Luther is a maverick who is brilliant at solving crimes but breaks protocol (threatening Alice, breaking into her flat).',
  'LUTHER — Reflects the diversity of contemporary British society in the representation of Luther as a high-ranking black police officer, communicating a message of racial equality.',
  'LUTHER — Reflects some degree of gender equality — strong, powerful females: Luther’s boss is female, his wife is a successful lawyer, Alice is a prodigiously intelligent astrophysicist.',
  'KIMMY SCHMIDT — Reflects contemporary themes through the narrative situation (Kimmy rescued from a Doomsday cult), reflecting many real-life news examples.',
  'KIMMY SCHMIDT — Reflects contemporary New York by representing a diverse range of characters from different social classes and ethnic backgrounds.',
  'KIMMY SCHMIDT — Reflects greater gender equality — Kimmy is a strong, determined female, but struggling to become fully independent after years of control.'],
 levels:[['9–10','Excellent, detailed and accurate knowledge of relevant social contexts. Excellent understanding of the influence of contexts on media products. Highly appropriate links between relevant contexts and specific aspects of the set product.'],
  ['7–8','Good, accurate knowledge. Good understanding. Appropriate links to the set product.'],
  ['5–6','Satisfactory, generally accurate knowledge. Links made but likely undeveloped.'],
  ['3–4','Basic knowledge. Links between contexts and the set product unlikely.'],
  ['1–2','Minimal knowledge. Links not made. Brief and incomplete.']],
 tip:["This question could be on industries, audiences OR media contexts \u2014 read it carefully.", "You must refer directly to Luther and/or The Sweeney depending on what the question asks.", "Apply relevant theory \u2014 Uses and Gratifications, Hall's Reception Theory, production context.", "Include a range of specific examples from your set products.", "Higher band responses link knowledge across different areas of the theoretical framework."]},

{id:'sams2_c2_3',year:'SAM 2',comp:2,sec:'B',topic:'Music',marks:20,ao:'AO2 1a/1b',
 qnum:'Q3',product:'Music videos — Katy Perry (Roar) / Taylor Swift (Bad Blood) / Pharrell Williams (Freedom) / Bruno Mars (Uptown Funk)',texts:['Katy Perry','Taylor Swift','Bruno Mars','Pharrell'],
 question:'"Music videos reinforce stereotypes of ethnicity." How far is this true of the <strong>two music videos</strong> you have studied?',
 must:['Explore representations of ethnicity in the two music videos you have studied','Refer to relevant media contexts, such as social or cultural','Consider whether you agree or disagree with the statement'],
 points:['FREEDOM (Pharrell) — Diverse representations of ethnicity, e.g. a close-up of a woman in a hijab, reflective of contemporary cultural contexts.',
  'FREEDOM (Pharrell) — Representations of oppressed minorities including long shots of black workers carrying out physical manual labour under the rule of a white aggressor — linking to historical contexts of slavery.',
  'FREEDOM (Pharrell) — Use of images of positive black representations such as Mohammed Ali.',
  'FREEDOM (Pharrell) — Ideas about unity between races presented through a bird’s eye view shot of all races joining hands.',
  'UPTOWN FUNK (Bruno Mars) — Settings and iconography associated with black culture such as "the hood", the barber shop, jazz club, gold chains/"bling".',
  'UPTOWN FUNK (Bruno Mars) — Black males objectifying females through the "male gaze" — displaying typically masculine behaviour.',
  'UPTOWN FUNK (Bruno Mars) — Gang camaraderie and the friendship between the "brothers" — the group as a community.',
  'UPTOWN FUNK (Bruno Mars) — Use of white staff at a shoe shine stall in a role reversal of traditional racial stereotypes — white males subservient to black males.',
  'ROAR (Katy Perry) — Use of a white westernised couple in an apparent "Tarzan and Jane" parody, with an arrogant white male explorer ill-equipped to deal with the wild — an Indiana Jones homage.',
  'ROAR (Katy Perry) — Instances of "whitewashing" through direct references to Katy Perry as Mowgli from The Jungle Book.',
  'ROAR (Katy Perry) — Lack of ethnic minority characters in the video.',
  'BAD BLOOD (Taylor Swift) — White idealised female (Taylor Swift — blonde, blue eyed, slim) and black male rapper (Kendrick Lamar) in stereotypical dress codes linking to black culture (sunglasses, cap, hoodie, sports car).',
  'BAD BLOOD (Taylor Swift) — Both presented as equals in terms of power, reflective of contemporary context — indicated through split screen, sometimes in binary opposition (TS all in white, KL all in black).',
  'BAD BLOOD (Taylor Swift) — Asian character "Trinity" presented stereotypically as a technology expert.',
  'Apply theoretical perspectives — Said’s concept of Orientalism; Stuart Hall’s ideas about stereotyping and power.'],
 levels:[['17–20','Excellent, detailed analysis of both products. Excellent, consistent use of the theoretical framework. Excellent linking to contexts. Excellent, well-reasoned judgements and conclusions.'],
  ['13–16','Good, reasonably detailed analysis. Good use of the theoretical framework. Good linking to contexts.'],
  ['9–12','Satisfactory analysis. Satisfactory use of the theoretical framework. Some linking to contexts.'],
  ['5–8','Basic analysis, tending to describe. Basic use of the theoretical framework.'],
  ['1–4','Minimal analysis. Minimal use of the theoretical framework.']],
 tip:["You will NOT be shown an extract for Section B \u2014 thorough revision of all MIRAC areas is essential.", "Depending on what Q1 assessed, this will be either Media Language or Representation.", "Use any bullet points in the question to guide your structure \u2014 cover all of them.", "This is a 20-mark extended response \u2014 you need an introduction, sustained discussion and conclusion.", "Both set texts must be covered \u2014 responses on only one text will be marked out of half marks.", "Link your analysis to relevant social, cultural, historical or political contexts.", "Make clear judgements and draw a reasoned conclusion."]},

{id:'sams2_c2_4',year:'SAM 2',comp:2,sec:'B',topic:'Music',marks:10,ao:'AO1 1a/1b',
 qnum:'Q4',product:'Katy Perry website / Taylor Swift website',texts:['Katy Perry','Taylor Swift'],
 question:'Explain why <strong>websites are important to the music industry</strong>. Refer to the official Katy Perry website or the official Taylor Swift website to support your response.',
 must:[],
 points:['The nature of media production in the music industry, with reference to mainstream music labels and conglomerate ownership and power.',
  'The importance of new digital technologies including convergence, and synergies with other media such as film and television.',
  'The importance of online media in terms of marketing and distribution to global audiences.',
  'The importance of links to participatory media such as social networks in reaching specific audiences, especially younger audiences.',
  'The profitable nature of online identities, including links to online stores to purchase merchandise and digital content.',
  'TAYLOR SWIFT — Branding tied to the "1989" album release through repeated use of colour and images on the homepage throughout the site.',
  'TAYLOR SWIFT — "Taylor Connect" section where fans can "find friends" or join fan forums, creating a sense of identity and inclusion.',
  'TAYLOR SWIFT — Global reach — news of "BBC Radio 1 teen award", official UK merchandise site.',
  'TAYLOR SWIFT — Construction of personal identity ("About me, from me", Taylor’s photo journal, news of Taylor "crashing a fan’s wedding") — reinforces her brand image, linked to her belonging to an independent label (Big Machine Records).',
  'KATY PERRY — Katy Perry’s image is a constant background as users scroll through the homepage, establishing her brand identity.',
  'KATY PERRY — Interactive website — many links to open new windows, competitions, links to social media, sign-up to receive updates.',
  'KATY PERRY — Links to the Olympics and Superbowl — convergence/synergy reinforcing an image of success.',
  'KATY PERRY — Limited sense of personal identity — more of a corporate website focused on promotion of the album and tour, linking to her being signed to a major label (Capitol Records, owned by Universal).'],
 levels:[['9–10','Excellent, detailed and accurate knowledge of the importance of music websites to the music industry. Excellent use of the set product. Highly appropriate use of subject-specific terminology.'],
  ['7–8','Good, accurate knowledge. Good use of the set product.'],
  ['5–6','Satisfactory, generally accurate knowledge. Satisfactory use of the set product.'],
  ['3–4','Basic knowledge. Basic use of the set product.'],
  ['1–2','Minimal knowledge. Minimal use of the set product.']],
 tip:["Depending on what Q2 assessed, this will be on industries, audiences OR contexts.", "Include a range of specific examples from your set music texts.", "Apply relevant theory (Uses and Gratifications, production context, convergence etc.).", "1 mark = 1 minute \u2014 10 marks = 10 minutes of focused writing."]}


,
{id:'c1_2021_2a',year:2021,comp:1,sec:'A',topic:'Context',marks:5,ao:'AO1 2a/2b',qnum:'Q2(a)',
 product:'The Sun front page',texts:['The Sun (01 January 2021)'],
 question:'Explain how <strong>contexts influence newspapers</strong>. Refer to <em>The Sun</em> to support your points.',
 must:[],points:['Political context: The Sun\'s recent support for the Conservative Party shapes its editorial choices, language and framing of political stories — it is an unashamedly right-wing newspaper.',
  'The context of Brexit and the divisive nature of the vote directly influenced The Sun\'s editorial stance — it strongly supported Brexit, which shaped its front pages during that period.',
  'Ownership context: The Sun is owned by News UK (Rupert Murdoch\'s News Corp), and issues linked to this ownership bias shape its political positioning and editorial decisions.',
  'The Sun has maintained an \'anti-elitist\' agenda as part of its brand — it regularly exposes scandals of celebrities or authority figures, reflecting a populist social context.',
  'Social context of the surge in \'populist nationalism\' — distrusting experts and mainstream politicians in favour of returning control to \'the common people\' is reflected in The Sun\'s populist rhetoric (e.g. \'For A Greater Britain\' in its masthead).'],
 levels:[['5','Excellent, detailed and accurate knowledge and understanding of how contexts influence newspapers. Highly appropriate reference to The Sun.'],
  ['4','Good, accurate knowledge and understanding. Appropriate reference to The Sun.'],
  ['3','Satisfactory, generally accurate knowledge and understanding. Some reference to The Sun.'],
  ['2','Basic knowledge of contexts. Basic reference to The Sun.'],
  ['1','Minimal knowledge of contexts. Minimal reference to The Sun.']],
 tip:['5 marks = approximately 5-6 minutes writing','Make one clear, developed point per mark','Each point: name the context type → explain how it influences the newspaper → give a specific Sun example','Don\'t list contexts without explaining how they influence the content']},
{id:'c1_2021_2b',year:2021,comp:1,sec:'A',topic:'Representation',marks:25,ao:'AO2 1a/1b',qnum:'Q2(b)',
 product:'The Sun front page',texts:['The Sun (01 January 2021)'],
 question:'Compare the <strong>messages</strong> in <em>The Sun</em> and <em>Daily Mirror</em> front pages. [25] You must consider: how viewpoints are represented; how far the messages are similar; how far the messages are different.',
 must:['Both The Sun (set text) and Daily Mirror (unseen) must be covered','Must address BOTH similarities AND differences in messages','Must analyse viewpoints — not just describe the front pages'],
 points:['SIMILARITIES — Both papers use dominant images of political figures (Theresa May) to anchor their messages and elevate the political event to front-page status. Both use linguistic conventions such as repetition and hyperbole to add emphasis to their viewpoints.',
  'SIMILARITIES — Both newspapers blur the line between reporting on events and giving explicit editorial viewpoints. Both frame their front pages as being "on the side of" their readers (e.g. "we say to them", "fighting for you").',
  'SIMILARITIES — The Brexit voting process is given elevated status in the news cycle through its front-page prominence in both texts — this mediation shows the importance of the event.',
  'DIFFERENCES — The dark colour palette and negative, pessimistic tone created around Brexit on the Daily Mirror front page contrasts with the brighter, more optimistic and patriotic colour palette used by The Sun.',
  'DIFFERENCES — Theresa May\'s glum expression and grey, lined appearance are emphasised by unflattering lighting on the Mirror, connoting incompetence and failure. The Sun takes a more optimistic framing.',
  'DIFFERENCES — The Daily Mirror uses icons of a "humiliated" Conservative leader, while The Sun uses icons of Britishness — a patriotic montage suggesting the Brexit vote affects and unites the whole country.',
  'Apply representation theory: the selected, constructed and mediated nature of representations. The choices producers make about how to represent particular events and political figures reflect their ideological positions.',
  'How representations convey particular viewpoints, values and beliefs — the newspapers\' different left/right wing tabloid stances directly shape what stories they tell and how.'],
 levels:[['21–25','Excellent, detailed analysis of both products engaging fully with complex aspects of representations. Excellent comparisons. Excellent, consistent use of the theoretical framework (representation). Excellent, well-reasoned judgements and conclusions.'],
  ['16–20','Good, reasonably detailed analysis. Good, reasonably detailed comparisons. Good use of theoretical framework and terminology.'],
  ['11–15','Satisfactory analysis of both products. Satisfactory comparisons (though more focus may be on one paper). Satisfactory use of theoretical framework.'],
  ['6–10','Basic analysis. Basic comparisons. Basic use of theoretical framework.'],
  ['1–5','Minimal analysis, mainly descriptive. Minimal comparisons. Minimal use of theoretical framework.']],
 tip:['25-mark extended essay — spend at least 25–30 minutes','Study the unseen (Daily Mirror) carefully before writing — note images, language, colour, layout','Use comparative connectives: whereas, in contrast, similarly, both, unlike, however','Apply representation theory: selection, construction, mediation — representations are never neutral','Cover BOTH similarities and differences — the mark scheme expects both']},
{id:'c1_2022_1b',year:2022,comp:1,sec:'A',topic:'Media Language',marks:10,ao:'AO2 1a',qnum:'Q1(b)',
 product:'This Girl Can print advertisement',texts:['This Girl Can (2015)'],
 question:'Explore how the print advertisement for <em>This Girl Can</em> uses media language to communicate meanings: <strong>(b) visual codes (for example: images, lighting, dress)</strong>.',
 must:[],points:['The main woman is middle-aged in a loose-fitting tank top - her unspecified body shape makes the advert applicable to a bigger target audience','The matted hair anchors the writing directly below: sweating like a pig, feeling like a fox','Facial expression and closed eyes suggest she is in the moment, away from reality','Warm lighting suggests an intimate, non-intimidating atmosphere and connotes heat','Vibrant clothing creates an uplifting and fun tone','Background women doing the same exercise suggest a sense of community'],
 levels:[{band:5,marks:'9-10',desc:'Excellent, detailed analysis. Consistent focus on connotations or intended meanings created by visual codes.'},{band:4,marks:'7-8',desc:'Good, reasonably detailed analysis. Focus on connotations.'},{band:3,marks:'5-6',desc:'Satisfactory analysis. General focus on connotations, but lapses into description.'},{band:2,marks:'3-4',desc:'Basic analysis.'},{band:1,marks:'1-2',desc:'Minimal analysis.'}],
 tip:['10-mark question - about 12 minutes','For each element: what is it? what does it connote? what effect does it create?','Analyse specific elements: lighting, colour, costume, composition, expression, body language','Highest marks go to responses that explain connotations in detail, not just describe']},
{id:'c1_2022_2a',year:2022,comp:1,sec:'A',topic:'Context',marks:5,ao:'AO1 2a/2b',qnum:'Q2(a)',
 product:'Pride magazine front cover',texts:['Vogue (July 2021)'],
 question:'Explain how <strong>political contexts influence magazines</strong>. Refer to <em>Pride</em> magazine to support your points.',
 must:[],points:['Pride derives its name from black pride, a term from the Civil Rights Movement - showing how political struggle directly shaped the magazine','Historically there has been little representation of black women in mainstream media - Pride emerged as a political response to this marginalisation','The magazine covers political issues relevant to black females, such as FGM on Harley Street, showing political contexts shaping editorial choices','The rise of Black Lives Matter and political demands for diversity have influenced Pride\'s positioning'],
 levels:[],
 tip:['5 marks = approximately 5-6 minutes writing','Name specific political contexts (Civil Rights Movement, BLM, media representation debates)','Link directly to specific features of Pride: its name, cover lines, editorial choices','Each point: context then influence then Pride example']},
{id:'c1_2022_2b',year:2022,comp:1,sec:'A',topic:'Representation',marks:25,ao:'AO2 1a/1b',qnum:'Q2(b)',
 product:'Pride magazine front cover',texts:['Vogue (July 2021)'],
 question:'Compare the <strong>representation of ethnicity</strong> in the <em>Pride</em> and <em>Essence</em> front covers. [25] You must consider: choices producers made to represent ethnicity; how far it is similar; how far it is different.',
 must:['Both Pride (set text) and Essence (unseen) must be covered','Must address similarities AND differences in representation of ethnicity'],points:['Both feature black celebrities - representing minority ethnicities and challenging the historical absence of black women in mainstream media','Both women conform to western European beauty standards in hair and dress, potentially limiting authenticity of ethnic representation','Pride cover lines specifically reference topics relevant to black women (FGM on Harley Street, Wig revolution) - ethnicity represented editorially, not just visually','Essence cover lines are more universal (beauty tips, lifestyle) - ethnicity less central to editorial identity','Pride: white background creates visual contrast highlighting Naomi Harris\'s skin colour','Essence: colour choices wash out the Obamas\' skin tones, reducing the prominence of their ethnicity'],
 levels:[{band:5,marks:'21-25',desc:'Excellent, detailed analysis of both products. Excellent comparisons. Excellent use of theoretical framework. Excellent judgements and conclusions.'},{band:4,marks:'16-20',desc:'Good, reasonably detailed analysis. Good comparisons. Good use of theoretical framework.'},{band:3,marks:'11-15',desc:'Satisfactory analysis of both products. Some comparisons.'},{band:2,marks:'6-10',desc:'Basic analysis. Basic comparisons.'},{band:1,marks:'1-5',desc:'Minimal analysis.'}],
 tip:['25-mark extended essay - 30 minutes minimum','Spend 10 minutes studying the unseen (Essence) before writing','Apply representation theory: who is being represented, how, and whose viewpoint is privileged?','Consider BOTH the cover image AND the cover lines as evidence']},
{id:'c1_2023_1b',year:2023,comp:1,sec:'A',topic:'Media Language',marks:10,ao:'AO2 1a',qnum:'Q1(b)',
 product:'Spectre film poster',texts:['No Time to Die (2021)'],
 question:'Explore how the film poster for <em>Spectre</em> communicates meaning: <strong>(b) Genre</strong>.',
 must:[],points:['The use of a gun and Bond\'s body language signal the action-adventure and spy genre','Bond\'s tuxedo is a recognisable genre convention suggesting sophistication alongside danger','The binary opposition of dark/light colour palette is typical of spy/thriller genre','Composition placing Bond centrally and larger than supporting characters connotes his dominance','The eerie atmospheric quality through lighting suggests the thriller/noir genre'],
 levels:[{band:5,marks:'9-10',desc:'Excellent, detailed analysis. Consistent focus on connotations or intended meanings created by genre elements.'},{band:4,marks:'7-8',desc:'Good, reasonably detailed analysis focused on connotations.'},{band:3,marks:'5-6',desc:'Satisfactory analysis, but lapses into description.'},{band:2,marks:'3-4',desc:'Basic analysis, tendency to describe.'},{band:1,marks:'1-2',desc:'Minimal analysis.'}],
 tip:['10-mark question - about 12 minutes','Name specific genre conventions and explain what effect they have on the audience','Connect to wider genre expectations: what does the audience expect from a spy/action film?','Strong answers discuss both conforming to AND subverting genre conventions']},
{id:'c1_2023_2a',year:2023,comp:1,sec:'A',topic:'Context',marks:5,ao:'AO1 2a/2b',qnum:'Q2(a)',
 product:'GQ magazine front cover',texts:['Vogue (July 2021)'],
 question:'Explain how <strong>cultural contexts influence magazines</strong>. Refer to <em>GQ</em> magazine to support your points.',
 must:[],points:['Cultural context of masculinity has shifted - GQ has evolved from traditional men\'s fashion to covering emotional wellbeing and mental health','Changing attitudes to body image and male beauty standards influence GQ\'s choice of cover stars','Cultural context of celebrity culture influences which stars appear - GQ uses cultural relevance as a key editorial driver','The rise of new definitions of masculinity in contemporary culture are reflected in GQ\'s evolving visual codes'],
 levels:[],
 tip:['5 marks, 5 minutes','Name specific cultural contexts clearly','Link to specific GQ features: choice of cover star, cover lines, mode of address','Strong: explains HOW the cultural context shapes the specific choice']},
{id:'c1_2023_2b',year:2023,comp:1,sec:'A',topic:'Representation',marks:25,ao:'AO2 1a/1b',qnum:'Q2(b)',
 product:'GQ magazine front cover',texts:['Vogue (July 2021)'],
 question:'Compare the <strong>representation of men</strong> in these two covers for <em>GQ</em> magazine. [25] You must consider: choices producers made to represent men; how far the representation is similar; how far it is different.',
 must:['Both GQ covers (set text and unseen) must be covered','Similarities AND differences must be addressed'],points:['GQ 2016: representation of men as strong, dominant, physically powerful - reinforcing traditional masculinity','GQ 2021: men represented as more intelligent, thoughtful, groomed - reflecting a cultural shift towards more nuanced masculinity','Both covers feature extremely successful men presented in a powerful role','Similarity: both use the male body as spectacle, though in different ways','Difference: GQ 2016 addresses men through a how to be a man lens, while GQ 2021 engages with domestic abuse as a topic usually taboo for men'],
 levels:[{band:5,marks:'21-25',desc:'Excellent, detailed analysis of both products. Excellent comparisons. Excellent use of theoretical framework. Excellent judgements and conclusions.'},{band:4,marks:'16-20',desc:'Good, reasonably detailed analysis. Good comparisons. Good use of theoretical framework.'},{band:3,marks:'11-15',desc:'Satisfactory analysis of both products. Some comparisons.'},{band:2,marks:'6-10',desc:'Basic analysis. Basic comparisons.'},{band:1,marks:'1-5',desc:'Minimal analysis.'}],
 tip:['25-mark extended essay - spend 25-30 minutes','Theories to use: male gaze, Mulvey, toxic masculinity, Hall\'s representation theory','Compare BOTH covers throughout - don\'t do all of one then all of the other','Reach a clear, argued conclusion: which cover is more progressive?']},
{id:'c1_2024_1b',year:2024,comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',qnum:'Q1(b)',
 product:'The Guardian newspaper front page',texts:['The Guardian (18 January 2022)'],
 question:'Explore how this front page uses media language to communicate meanings: <strong>(b) images</strong>.',
 must:[],points:['Dominant long-shot of Boris Johnson running as the main image','Connotations of his ineptitude: informal dress (fish shorts, backwards cap) suggests he cannot look after his appearance','The informal image connotes political hypocrisy - his dress contrasts with the expectation of a Prime Minister','The C-3PO and R2D2 image creates a binary opposition with the serious main story, lightening the page','The yellow smiley face for the rave culture story codes that section as entertaining and nostalgic'],
 levels:[{band:5,marks:'5',desc:'Excellent, detailed analysis. Consistent focus on connotations or intended meanings created by the images.'},{band:4,marks:'4',desc:'Good, reasonably detailed analysis. Focus on connotations.'},{band:3,marks:'3',desc:'Satisfactory analysis. General focus on connotations, but some description.'},{band:2,marks:'2',desc:'Basic analysis. Tendency to describe.'},{band:1,marks:'1',desc:'Minimal analysis.'}],
 tip:['5-mark question - 5-6 minutes maximum','Identify specific images and explain their connotations, not just what they show','Use anchorage: how does the image work together with the text/headline?','Aim for 2-3 well-developed points rather than 5 undeveloped ones']},
{id:'c1_2024_1c',year:2024,comp:1,sec:'A',topic:'Media Language',marks:5,ao:'AO2 1a',qnum:'Q1(c)',
 product:'The Guardian newspaper front page',texts:['The Guardian (18 January 2022)'],
 question:'Explore how this front page uses media language to communicate meanings: <strong>(c) text/written language</strong>.',
 must:[],points:['The subheading Cummings accuses PM of lying over No 10 party creates a narrative of political betrayal','Formal broadsheet register in the coverlines and copy reinforces The Guardian\'s identity as a serious quality newspaper','The G2 coverline uses cultural references assuming a highly educated readership','Use of direct speech in headlines positions the story as credible journalism with named sources','Alliteration and puns in lighter stories contrast with the formal political copy'],
 levels:[{band:5,marks:'5',desc:'Excellent, detailed analysis. Consistent focus on connotations or intended meanings created by the text/written language.'},{band:4,marks:'4',desc:'Good, reasonably detailed analysis.'},{band:3,marks:'3',desc:'Satisfactory analysis, but lapses into description.'},{band:2,marks:'2',desc:'Basic analysis.'},{band:1,marks:'1',desc:'Minimal analysis.'}],
 tip:['5-mark question - 5-6 minutes','Focus on: headlines, subheadings, cover lines, captions, register, vocabulary choices','Analyse WHY specific language choices are made, not just what they say','Use linguistic terminology: lexis, connotation, register, mode of address']},
{id:'c1_2024_2b',year:2024,comp:1,sec:'A',topic:'Representation',marks:25,ao:'AO2 1a/1b',qnum:'Q2(b)',
 product:'The Man With The Golden Gun film poster',texts:['The Man With The Golden Gun (1974)'],
 question:'Compare the <strong>representation of gender</strong> in <em>The Man With The Golden Gun</em> and <em>Spy</em> film posters. [25] You must consider: choices producers made to represent gender; how far the representation is similar; how far it is different.',
 must:['Both film posters (set text and unseen) must be covered','Similarities AND differences must be addressed'],points:['Golden Gun (1974): women represented through the male gaze - bikini-clad, passive, objects of visual pleasure','Golden Gun: Bond is dominant, armed, central - male power reinforced through composition and visual codes','Spy (2015): female protagonist is central, active, armed - challenging traditional gender representation in the spy genre','Similarity: both feature characters with weapons, but in Golden Gun they code masculine power, while in Spy a woman wields them','Difference: historical context explains the shift - 1970s norms vs 2015 feminist influences on mainstream cinema'],
 levels:[{band:5,marks:'21-25',desc:'Excellent, detailed analysis of both products. Excellent comparisons. Excellent use of theoretical framework. Excellent judgements and conclusions.'},{band:4,marks:'16-20',desc:'Good, reasonably detailed analysis. Good comparisons. Good use of theoretical framework.'},{band:3,marks:'11-15',desc:'Satisfactory analysis of both products. Some comparisons.'},{band:2,marks:'6-10',desc:'Basic analysis. Basic comparisons.'},{band:1,marks:'1-5',desc:'Minimal analysis.'}],
 tip:['25-mark extended essay - spend 25-30 minutes','Theories: Mulvey\'s male gaze, feminist approaches to representation, Hall\'s representation theory','The historical context (1974 vs 2015) is crucial for explaining WHY representations differ','A strong answer will reach a clear conclusion about how far gender representation has changed']},
{id:'c1_2024_3d',year:2024,comp:1,sec:'B',topic:'Industry',marks:10,ao:'AO1 1a/1b',qnum:'Q3(d)',
 product:'The Archers / BBC Radio 4',texts:['The Sun (01 January 2021)'],
 question:'Explain how the <strong>radio industry uses technology</strong> to promote its products. Refer to <em>The Archers</em> to support your points.',
 must:[],points:['BBC Sounds app: dedicated streaming platform promotes The Archers through recommendations and curated playlists','Social media: The Archers Twitter account posts updates, teasers and reacts to audience responses in real time','BBC website: dedicated Archers web pages with cast info, episode guides and behind-the-scenes content','Smart speakers: The Archers promoted through voice-command accessibility on Amazon Echo and Google Home','On-demand technology enables binge-listening of entire storyline arcs, helping new audiences catch up quickly'],
 levels:[{band:4,marks:'9-10',desc:'Excellent, detailed and accurate knowledge and understanding. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'6-8',desc:'Good accurate knowledge. Good reference to set product.'},{band:2,marks:'3-5',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['10-mark question - 12 minutes','Technology AND promotion must both be addressed - don\'t just list technologies','Use terminology: convergence, cross-platform, streaming, on-demand, algorithm','Strong: shows how each technology actively promotes the show to new and existing audiences']},
{id:'c1_2024_4a',year:2024,comp:1,sec:'B',topic:'Audience',marks:1,ao:'AO1 1a',qnum:'Q4(a)',
 product:'Fortnite / Epic Games website',texts:['The Sun (01 January 2021)'],
 question:'Identify <strong>one</strong> audience for Fortnite.',
 must:[],points:['Young people aged 12-24','Male gamers (approximately 78% of users)','Fans of Marvel / pop culture franchises','Students','Aspiring content creators (Twitch/YouTube streamers)'],
 levels:[],
 tip:['1 mark - one clear phrase is all you need']},
{id:'c1_2024_4b',year:2024,comp:1,sec:'B',topic:'Audience',marks:4,ao:'AO1 1a/1b',qnum:'Q4(b)',
 product:'Fortnite / Epic Games website',texts:['The Sun (01 January 2021)'],
 question:'Briefly explain how the <em>Fortnite</em> website attracts users.',
 must:[],points:['Colourful, vibrant visual design appeals to the young target audience','Regular updates and new season announcements create reasons to visit the site repeatedly','Merchandise store encourages fans to purchase Fortnite-branded products','Cross-platform download options (PlayStation, Xbox, PC, Switch) maximise accessibility','Social media links extend the website\'s reach across platforms'],
 levels:[{band:2,marks:'3-4',desc:'Good, accurate knowledge and understanding. Good reference to set product.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['4-mark question - 4 minutes','Refer to specific features of the Fortnite WEBSITE, not the game itself','Two developed points is ideal']},
{id:'c1_2024_4c',year:2024,comp:1,sec:'B',topic:'Audience',marks:12,ao:'AO1 1a/1b',qnum:'Q4(c)',
 product:'Fortnite / Epic Games website',texts:['The Sun (01 January 2021)'],
 question:'Explain why audiences play video games. Refer to <em>Fortnite</em> to support your points.',
 must:[],points:['Personal identity: players customise avatars, skins and emotes - expressing identity through gameplay (U&G personal identity gratification)','Entertainment/diversion: Fortnite provides escapism through its cartoon aesthetic and fast-paced gameplay','Social interaction: voice chat, squad-play and friend challenges fulfil the social interaction gratification','Information: the website keeps players informed of new seasons, updates, and collaborations','The feedback mechanism on the website allows audiences to voice opinions, fulfilling a participatory gratification'],
 levels:[{band:4,marks:'10-12',desc:'Excellent, detailed and accurate knowledge. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'7-9',desc:'Good accurate knowledge. Good reference.'},{band:2,marks:'4-6',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-3',desc:'Basic knowledge.'}],
 tip:['12-mark question - 14 minutes','Name Blumler and Katz\'s Uses and Gratifications theory explicitly','Apply each gratification: personal identity, information, entertainment, social interaction','Use specific Fortnite examples for every point']},
{id:'c1_2025_2a',year:2025,comp:1,sec:'A',topic:'Context',marks:5,ao:'AO1 2a/2b',qnum:'Q2(a)',
 product:'Vogue magazine front cover',texts:['Vogue (July 2021)'],
 question:'Explain how <strong>social and cultural contexts influence magazines</strong>. Refer to the <em>Vogue</em> magazine front cover to support your points.',
 must:[],points:['Social context of diversity movements: Vogue has responded by featuring more diverse cover stars including Malala Yousafzai','Cultural context of celebrity culture influences which personalities appear on covers and how they are styled','The rise of social media and influencer culture shapes how Vogue frames its fashion content','Social context of changing beauty norms: Vogue has shifted from traditional eurocentric beauty standards to more diverse representations'],
 levels:[],
 tip:['5 marks, 5-6 minutes','Name specific social or cultural contexts rather than vague references','Link directly to Vogue: specific cover, cover lines, or editorial choices','Strong: explains HOW the context shaped the specific product choice']},
{id:'c1_2025_2b',year:2025,comp:1,sec:'A',topic:'Representation',marks:25,ao:'AO2 1a/1b',qnum:'Q2(b)',
 product:'Vogue magazine front cover',texts:['Vogue (July 2021)'],
 question:'Compare the <strong>representation of ethnicity</strong> in the <em>Vogue</em> and <em>Grazia</em> front covers. [25] You must consider: choices producers made to represent ethnicity; how far it is similar; how far it is different.',
 must:['Both Vogue (set text) and Grazia (unseen) must be covered','Similarities AND differences must be addressed'],points:['Vogue: featuring Malala Yousafzai represents a deliberate choice to give visibility to a non-white, non-western figure','The representation of ethnicity in both magazines is shaped by who the editors choose as their cover star','Vogue July 2021: red clothing provides visual contrast; Malala\'s identity as a Muslim woman from Pakistan is central to the issue\'s theme','Both magazines use their cover stars to reflect changing social expectations around diversity in fashion media'],
 levels:[{band:5,marks:'21-25',desc:'Excellent, detailed analysis of both products. Excellent comparisons. Excellent use of theoretical framework. Excellent judgements and conclusions.'},{band:4,marks:'16-20',desc:'Good, reasonably detailed analysis. Good comparisons. Good use of theoretical framework.'},{band:3,marks:'11-15',desc:'Satisfactory analysis of both products. Some comparisons.'},{band:2,marks:'6-10',desc:'Basic analysis. Basic comparisons.'},{band:1,marks:'1-5',desc:'Minimal analysis.'}],
 tip:['25-mark extended essay - spend 25-30 minutes','Apply Hall\'s representation theory: ethnicity is constructed, not simply reflected','Consider how the cover design (lighting, colour, composition) shapes representation','A strong answer will consider whether the representation is authentic or tokenistic']},
{id:'c1_2025_3d',year:2025,comp:1,sec:'B',topic:'Industry',marks:12,ao:'AO1 1a/1b',qnum:'Q3(d)',
 product:'No Time to Die / 007 website',texts:['The Sun (01 January 2021)'],
 question:'Explain how the <strong>film industry uses convergence</strong> to promote films. Refer to the 007 website to support your points.',
 must:[],points:['Brand partnerships: the 007 website features Omega watches, Aston Martin, and other luxury brands - convergence across industries to promote the film','Social media integration: the 007 website links to all Bond social media accounts, creating a cross-platform promotional network','YouTube: film trailers embedded from YouTube onto the 007 website converge multiple platforms to create a promotional ecosystem','Merchandise: links to Bond merchandise on the website converge film and retail, generating revenue and promotion simultaneously','The franchise history section of the 007 website converges all Bond films into a single promotional hub'],
 levels:[{band:4,marks:'10-12',desc:'Excellent, detailed and accurate knowledge. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'7-9',desc:'Good accurate knowledge. Good reference.'},{band:2,marks:'4-6',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-3',desc:'Basic knowledge.'}],
 tip:['12-mark question - 14 minutes','Convergence must be a central concept throughout','Specific 007 website features are essential as evidence','Terminology: convergence, cross-platform, synergy, brand partnership, transmedia']},
{id:'c1_2025_4a',year:2025,comp:1,sec:'B',topic:'Audience',marks:2,ao:'AO1 1a',qnum:'Q4(a)',
 product:'Fortnite / Epic Games website',texts:['The Sun (01 January 2021)'],
 question:'Identify <strong>two different audiences</strong> for the game Fortnite.',
 must:[],points:['Teenagers and young adults (10-25 year olds)','Male gamers (approximately 78% of users)','Marvel fans or fans of any relevant Fortnite collaborations','Students and part-time workers','Aspiring content creators (Twitch/YouTube streamers)'],
 levels:[],
 tip:['2 marks - two clear audience descriptions, one mark each','Keep it brief: two phrases are all you need']},
{id:'c1_2025_4b',year:2025,comp:1,sec:'B',topic:'Audience',marks:5,ao:'AO1 1a/1b',qnum:'Q4(b)',
 product:'Fortnite / Epic Games website',texts:['The Sun (01 January 2021)'],
 question:'Briefly explain how the <em>Fortnite</em> website engages audiences.',
 must:[],points:['The website promotes new seasons and collaborations, giving players a reason to visit and re-engage','V-Bucks and in-game purchase options integrate commerce directly into audience engagement','News and trailer sections entertain audiences who are not currently playing','Cross-platform download options ensure the website engages as wide an audience as possible','Social media links extend engagement beyond the website itself'],
 levels:[{band:3,marks:'5',desc:'Excellent, detailed and accurate knowledge. Highly appropriate reference to set product.'},{band:2,marks:'3-4',desc:'Good accurate knowledge. Good reference.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['5 marks - 5-6 minutes','Engage is broader than attract - think about how the site keeps audiences coming back','Refer to specific website features as evidence']},
{id:'c1_2025_4c',year:2025,comp:1,sec:'B',topic:'Audience',marks:12,ao:'AO1 1a/1b',qnum:'Q4(c)',
 product:'Fortnite / Epic Games website',texts:['The Sun (01 January 2021)'],
 question:'Explain how audiences <strong>interact with video games</strong>. Refer to the Uses and Gratifications theory and Fortnite to support your points.',
 must:[],points:['Personal identity: players customise avatars, skins and emotes - expressing identity and self through gameplay','Information: the Fortnite website keeps players informed of new seasons, updates, and collaborations','Entertainment/diversion: Fortnite provides escapism through its cartoon aesthetic and fast-paced gameplay','Social interaction: voice chat, squad-play and friend challenges fulfil the social interaction gratification','The feedback mechanism on the website allows audiences to voice opinions, fulfilling a participatory gratification'],
 levels:[{band:4,marks:'10-12',desc:'Excellent, detailed and accurate knowledge. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'7-9',desc:'Good accurate knowledge. Good reference.'},{band:2,marks:'4-6',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-3',desc:'Basic knowledge.'}],
 tip:['12-mark question - 14 minutes','Name Blumler and Katz\'s Uses and Gratifications theory explicitly','Apply each gratification: personal identity, information, entertainment, social interaction','Use specific Fortnite examples for every point']},
{id:'c1_2020_3d',year:2020,comp:1,sec:'B',topic:'Industry',marks:10,ao:'AO1 1a/1b',qnum:'Q3(d)',
 product:'The Archers / BBC Radio 4',texts:['The Sun (01 January 2021)'],
 question:'Explain how the BBC uses different platforms to distribute radio programmes. Refer to <em>The Archers</em> to support your points.',
 must:[],points:['BBC Sounds app: The Archers is available on demand, allowing listeners to catch up on missed episodes','BBC Radio 4 website: episode guides, character profiles and extra content extend engagement beyond the broadcast','Social media: The Archers uses Twitter/Facebook to promote storylines and engage fans between episodes','Podcasts: episodes are available as podcast downloads, extending reach to new audiences'],
 levels:[{band:4,marks:'9-10',desc:'Excellent, detailed and accurate knowledge and understanding. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'6-8',desc:'Good accurate knowledge. Good reference to set product.'},{band:2,marks:'3-5',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['10-mark question - about 12 minutes','Name platform then explain how The Archers uses it then explain why this matters for audiences','Don\'t just list platforms - explain how each one extends the audience for The Archers','Use convergence and cross-platform as key terms']},
{id:'c1_2020_4a',year:2020,comp:1,sec:'B',topic:'Audience',marks:1,ao:'AO1 1a',qnum:'Q4(a)',
 product:'The Sun / thesun.co.uk',texts:['The Sun (01 January 2021)'],
 question:'Name <strong>one</strong> audience for <em>The Sun</em> newspaper.',
 must:[],points:['Working class / C2DE demographic','Male readers','Right-leaning voters','Entertainment-seeking readers'],
 levels:[],
 tip:['1 mark - one word or phrase is all you need']},
{id:'c1_2020_4b',year:2020,comp:1,sec:'B',topic:'Audience',marks:4,ao:'AO1 1a/1b',qnum:'Q4(b)',
 product:'The Sun / thesun.co.uk',texts:['The Sun (01 January 2021)'],
 question:'Briefly explain how <em>The Sun</em> website attracts audiences.',
 must:[],points:['Free online access removes the paywall barrier of physical newspapers','Breaking news and live updates attract audiences seeking immediacy','Celebrity content and entertainment sections attract younger audiences','Sports coverage (especially football) attracts male sports fans','Social media sharing: articles designed for sharing extends reach beyond regular readers'],
 levels:[{band:2,marks:'3-4',desc:'Good, accurate knowledge and understanding. Good reference to set product.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['4-mark question - about 4-5 minutes','Two developed points or four brief ones','Refer specifically to features of The Sun website, not just newspapers in general']},
{id:'c1_2021_3d',year:2021,comp:1,sec:'B',topic:'Industry',marks:12,ao:'AO1 1a/1b',qnum:'Q3(d)',
 product:'Fortnite / Epic Games website',texts:['The Sun (01 January 2021)'],
 question:'Explain how video games make money for their producers. Refer to <em>Fortnite</em> to support your points.',
 must:[],points:['The basic premise of the Fortnite franchise is that it\'s a series of multiplayer free-to-play battleground games available on a number of platforms and devices, maximising the player base before monetising.',
  'Fortnite is an example of the \'Games as a Service\' (GaaS) funding model — the initial download is free but revenue is generated from in-game purchases.',
  'Players use \'V-bucks\' (virtual currency purchased with real money) to make in-game purchases of cosmetic items such as character skins, emotes and back bling.',
  'Revenue is also generated through \'season passes\' (a subscription model allowing players access to new content that free-to-play players cannot access) and \'battle passes\' giving limited edition and exclusive content to paying players.',
  'Diversifying into a franchise (including Battle Royale, Save The World and Creative Fortnite) has helped its producers generate revenue across multiple game modes.',
  'Cross-promotional collaborations (e.g. with Marvel, Star Wars, Nike) generate premium content that players pay for, while also keeping the game in mainstream media coverage.',
  'Fortnite is the most successful free-to-play video game ever, making $1.2 billion in the first 10 months of release — demonstrating the commercial power of the GaaS model.'],
 levels:[['10–12','Excellent, detailed and accurate knowledge. Excellent reference to set product. Highly appropriate subject-specific terminology. May draw together knowledge from across the full theoretical framework.'],
  ['7–9','Good, secure understanding of how video games make money. Good, accurate knowledge of funding and profit models. Appropriate use of terminology.'],
  ['4–6','Satisfactory understanding of some of the ways video games make money. Satisfactory, generally accurate knowledge of funding models.'],
  ['1–3','Basic, if any, understanding. Basic knowledge of funding models. Basic, if any, use of subject-specific terminology.']],
 tip:['12-mark question — spend about 14 minutes','Go beyond free-to-play: explain each revenue stream and how it works','Terminology: microtransactions, GaaS, freemium model, in-app purchases, DLC, Battle Pass','Strong answers explain WHY each model is effective for Fortnite specifically','Higher band responses draw together knowledge from across the theoretical framework']},
{id:'c1_2021_4a',year:2021,comp:1,sec:'B',topic:'Audience',marks:4,ao:'AO1 1a/1b',qnum:'Q4(a)',
 product:'The Archers / BBC Radio 4',texts:['Archers'],
 question:'Briefly explain how radio programmes are aimed at <strong>specialised audiences</strong>. Refer to <em>The Archers</em> to support your points.',
 must:[],points:['Specialised audiences are narrower in profile than mass audiences — The Archers has a core demographic of roughly 40–60 year olds (RAJAR profiles the average listener age as 56), and the established characters in the programme also fall into this age range.',
  'Psychographic profiles: Succeeders (narratives and characters associated with business and money), Reformers (strong social consciences — e.g. the domestic violence storyline) and the Resigned (the programme\'s traditions and continuity appeal to this group).',
  'Well-educated adults are a key specialised audience — broadcast at a time when working people are likely to be home and listening; the programme\'s themes and narratives often require a reasonably good understanding of the world and politics.',
  'Soap opera fans form a specialised audience — dramatic, conventional narratives generate pleasure because they understand how soap conventions function.',
  'The programme is broadcast on BBC Radio 4, a specialised channel with its own distinct audience profile — fans of other Radio 4 content will hear regular promotions for The Archers and trust the Radio 4 brand.',
  'Links to industry: as a BBC public service broadcaster, The Archers must reach specialised audiences because of the way it is funded — serving diverse communities is part of the PSB remit.'],
 levels:[['4','Excellent, detailed and accurate knowledge and understanding. Excellent reference to The Archers. Highly appropriate use of subject-specific terminology.'],
  ['3','Good, accurate knowledge and understanding. Good reference to The Archers. Appropriate use of terminology.'],
  ['2','Satisfactory, generally accurate knowledge. Satisfactory reference to The Archers. Generally appropriate use of terminology.'],
  ['1','Basic knowledge. Basic, if any, reference to The Archers. Basic, if any, use of terminology.']],
 tip:['4-mark question — approximately 5 minutes','Explain HOW The Archers targets its specialised audience, not just WHO the audience is','Use categories: demographic (age, education), psychographic (Succeeders, Reformers) and lifestyle','2 marks per well-developed point — identify the specialised audience AND explain how the programme is aimed at them']},
{id:'c1_2021_4b',year:2021,comp:1,sec:'B',topic:'Audience',marks:12,ao:'AO1 1a/1b',qnum:'Q4(b)',
 product:'The Archers / BBC Radio 4',texts:['Archers'],
 question:'Explain how <strong>audiences actively engage</strong> with radio programmes. Refer to <em>The Archers</em> to support your points.',
 must:[],points:['The Archers has developed from a text which audiences used to passively listen to into one that explicitly encourages its audience to be active.',
  'Radio 4 regularly promote ways through which the audience can actively engage — including the programme\'s website, which features character guides, episode summaries, interactive content and links to fan sites.',
  'Digital technologies encourage active engagement: the programme\'s social media feeds allow audiences to use hashtags to get involved with the text and discuss storylines in real time.',
  'Different audiences actively engage in different ways — for example, interpreting stories about events and characters from points of view influenced by fandoms. Fan websites are linked to from The Archers homepage.',
  'Actively engaging with the programme helps audiences reinforce and adapt their own sense of personal identity — a key function identified by Uses and Gratifications theory (Blumler and Katz).',
  'The BBC Sounds app enables audiences to choose when to listen, pause, rewind and repeat — transforming consumption from passive broadcasting into active, on-demand engagement.',
  'Social media interaction (e.g. reacting on Twitter/X, joining Facebook groups, following The Archers accounts) fulfils the \'personal relationships\' and \'social interaction\' gratifications in Uses and Gratifications theory.'],
 levels:[['10–12','Excellent, detailed and accurate knowledge. Excellent reference to The Archers. Accurate reference to theoretical perspectives on audiences and excellent use of subject-specific terminology.'],
  ['7–9','Good, secure understanding. Good, accurate reference to The Archers. Accurate reference to theoretical perspectives and appropriate use of terminology.'],
  ['4–6','Satisfactory understanding, though points are likely to be less developed. Satisfactory reference to The Archers. Generally accurate reference to theoretical perspectives.'],
  ['1–3','Basic knowledge of active audiences. Basic reference to The Archers. Basic, if any, reference to theoretical perspectives.']],
 tip:['12-mark question — spend about 14 minutes','Use Uses and Gratifications theory throughout: audiences are active, seeking specific gratifications','Terminology: active audience, participatory culture, convergence, digital technologies, user-generated content','Reference specific Archers behaviours: BBC Sounds, social media, fan sites, hashtags','Higher band responses will move beyond obvious methods to consider how audiences use texts to form identities']},
{id:'c1_2022_3d',year:2022,comp:1,sec:'B',topic:'Industry',marks:12,ao:'AO1 1a/1b',qnum:'Q3(d)',
 product:'Spectre / 007 website',texts:['The Sun (01 January 2021)'],
 question:'Explain how a film\'s website can be used to promote the film. Refer to the <em>Spectre</em>/007 website to support your points.',
 must:[],points:['Brand partnerships: the 007 website features links to Omega watches and Aston Martin - cross-promotional deals through associated luxury brands','Trailers: the website hosts the most recent trailers, enticing fans and building anticipation','Behind-the-scenes footage: BTS content gives fans access to the making of Spectre, deepening engagement','Franchise history: the 007 website covers the entire Bond franchise, attracting new fans and motivating existing fans to revisit earlier films'],
 levels:[{band:4,marks:'10-12',desc:'Excellent, detailed and accurate knowledge. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'7-9',desc:'Good accurate knowledge. Good reference.'},{band:2,marks:'4-6',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-3',desc:'Basic knowledge.'}],
 tip:['12-mark question - spend about 14 minutes','Use specific features of the 007 website as your evidence - not generic website features','Terminology: convergence, brand synergy, viral marketing, cross-platform promotion','Explain WHY each feature is effective, not just WHAT it is']},
{id:'c1_2022_4a',year:2022,comp:1,sec:'B',topic:'Audience',marks:1,ao:'AO1 1a',qnum:'Q4(a)',
 product:'Fortnite / Epic Games website',texts:['The Sun (01 January 2021)'],
 question:'Identify <strong>one</strong> audience for Fortnite.',
 must:[],points:['Young people aged 12-24','Male gamers','Fans of online multiplayer games','Marvel / pop culture fans'],
 levels:[],
 tip:['1 mark - one phrase is all you need']},
{id:'c1_2022_4b',year:2022,comp:1,sec:'B',topic:'Audience',marks:5,ao:'AO1 1a/1b',qnum:'Q4(b)',
 product:'Fortnite / Epic Games website',texts:['The Sun (01 January 2021)'],
 question:'Briefly explain how the <em>Fortnite</em> website attracts users.',
 must:[],points:['Colourful, vibrant visual design appeals to the young target audience','Regular updates and new season announcements create reasons to visit the site repeatedly','Merchandise store encourages fans to purchase Fortnite-branded products','Trailers and gameplay footage provide entertainment for fans not currently playing','Social media links extend the website\'s reach across platforms'],
 levels:[{band:2,marks:'3-5',desc:'Good, accurate knowledge and understanding. Good reference to the Fortnite website.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['5-mark question - about 5-6 minutes','Refer to specific features of the Fortnite WEBSITE, not the game itself','Use terminology: convergence, mode of address, target audience, brand identity']},
{id:'c1_2022_4c',year:2022,comp:1,sec:'B',topic:'Audience',marks:12,ao:'AO1 1a/1b',qnum:'Q4(c)',
 product:'Fortnite / Epic Games website',texts:['The Sun (01 January 2021)'],
 question:'Explain how <em>Fortnite</em> targets its audiences. Refer to the Uses and Gratifications theory in your answer.',
 must:[],points:['Personal identity: Fortnite allows players to express identity through customisable skins and emotes - U&G personal identity gratification','Information/surveillance: the website and game keep players informed of new seasons, collaborations and updates','Entertainment/diversion: the game provides escapism, with the cartoonish style creating a fun, low-stakes environment','Social interaction: multiplayer modes and voice chat fulfil the social interaction gratification','The feedback box on the Fortnite website allows players to contribute opinions, fulfilling the participation gratification'],
 levels:[{band:4,marks:'10-12',desc:'Excellent, detailed and accurate knowledge. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'7-9',desc:'Good accurate knowledge. Good reference.'},{band:2,marks:'4-6',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-3',desc:'Basic knowledge.'}],
 tip:['12-mark question - 14 minutes','Name the four U&G gratifications: personal identity, information, entertainment, social interaction','For each gratification, give a specific Fortnite/website example','Strong answers explicitly name the theory and apply it systematically']},
{id:'c1_2023_3d',year:2023,comp:1,sec:'B',topic:'Industry',marks:10,ao:'AO1 1a/1b',qnum:'Q3(d)',
 product:'The Archers / BBC Radio 4',texts:['The Sun (01 January 2021)'],
 question:'Explain how the BBC uses different platforms to distribute radio programmes. Refer to <em>The Archers</em> to support your points.',
 must:[],points:['BBC Sounds: streaming and download platform making The Archers available on demand','BBC Radio 4 website: episode guides, character profiles, features and audio','Smart speakers: increasing audience through Amazon Alexa and Google Home integration','Social media: Twitter hashtag #TheArchers creates community around the show and promotes episodes','Omnibus edition: broadcast on Sundays to reach audiences who missed weekday episodes'],
 levels:[{band:4,marks:'9-10',desc:'Excellent, detailed and accurate knowledge and understanding. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'6-8',desc:'Good accurate knowledge. Good reference to set product.'},{band:2,marks:'3-5',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['10-mark question - 12 minutes','Use convergence and cross-platform as key concepts','Explain HOW each platform extends The Archers\' audience, not just list platforms']},
{id:'c1_2023_4a',year:2023,comp:1,sec:'B',topic:'Audience',marks:1,ao:'AO1 1a',qnum:'Q4(a)',
 product:'The Sun / thesun.co.uk',texts:['The Sun (01 January 2021)'],
 question:'Identify <strong>one</strong> audience for <em>The Sun</em> newspaper.',
 must:[],points:['Working class / C2DE readers','Older male readers','Right-leaning newspaper readers','Football fans'],
 levels:[],
 tip:['1 mark only - one clear answer']},
{id:'c1_2023_4b',year:2023,comp:1,sec:'B',topic:'Audience',marks:4,ao:'AO1 1a/1b',qnum:'Q4(b)',
 product:'The Sun / thesun.co.uk',texts:['The Sun (01 January 2021)'],
 question:'Briefly explain how newspaper websites attract audiences.',
 must:[],points:['Free access: the online edition removes the cost barrier of a print copy','24/7 news: websites update in real time, attracting audiences seeking the latest news','Multimedia content: video, audio and interactive graphics attract audiences who prefer non-text content','Social media sharing: easy sharing of articles extends reach beyond regular readers'],
 levels:[{band:2,marks:'3-4',desc:'Good, accurate knowledge and understanding. Good reference to set product.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['4-mark question - 4-5 minutes','Refer to features of The Sun WEBSITE specifically','Aim for 2 well-developed points']},
{id:'c2_2020_1b',year:2020,comp:2,sec:'A',topic:'Representation',marks:12,ao:'AO2 1a/1b',qnum:'Q1(b)',
 product:'Luther S1E1 / The Sweeney S1E1',texts:[],
 question:'How <strong>stereotypical</strong> are the representations in this extract? Explore examples from the extract to support your points.',
 must:['Must refer to specific examples from the extract','Must make judgements and draw conclusions'],points:['Luther conforms to the stereotype of the tortured genius detective (intelligent but emotionally damaged)','The Sweeney extract: male detectives conform to 1970s stereotypes of aggressive, rule-breaking policing','Female characters may be represented stereotypically as passive, emotional or in need of male protection','However Luther subverts the stereotype of the black male as criminal by positioning a black man as the hero'],
 levels:[{band:5,marks:'11-12',desc:'Excellent, detailed analysis of specific examples. Consistently appropriate judgements and conclusions. Highly appropriate subject-specific terminology.'},{band:4,marks:'8-10',desc:'Good, reasonably detailed analysis. Good judgements and conclusions.'},{band:3,marks:'5-7',desc:'Satisfactory analysis. Some judgements and conclusions.'},{band:2,marks:'3-4',desc:'Basic analysis.'},{band:1,marks:'1-2',desc:'Minimal analysis.'}],
 tip:['Must make a clear JUDGEMENT about HOW stereotypical the representations are','Use how far language: the representation is largely stereotypical because... however it subverts this by...','Strong answers will consider BOTH stereotypical AND subversive elements','Refer to specific moments from the extract with precise detail']},
{id:'c2_2020_2',year:2020,comp:2,sec:'A',topic:'Industry',marks:10,ao:'AO1 1a/1b',qnum:'Q2',
 product:'Luther / The Sweeney',texts:[],
 question:'Explain how <strong>digital technologies</strong> have changed the ways in which audiences consume television. Refer to your set crime dramas or sitcoms to support your points.',
 must:[],points:['Streaming: Luther is available on Netflix internationally, meaning audiences can watch at any time on any device - a radical shift from scheduled broadcasting','On-demand: BBC iPlayer allows audiences to catch up on Luther without watching live television','The Sweeney (1975): audiences had to watch at the scheduled broadcast time - demonstrating how digital technology transformed viewing habits','Binge-watching: audiences can now watch entire series of Luther in one sitting, changing the pace of engagement','Second screen: audiences watch Luther while simultaneously engaging on social media, creating a participatory viewing experience'],
 levels:[{band:4,marks:'9-10',desc:'Excellent, detailed and accurate knowledge and understanding. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'6-8',desc:'Good accurate knowledge. Good reference to set product.'},{band:2,marks:'3-5',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['Compare past (The Sweeney) with present (Luther) to show how technology changed things','Use terminology: on-demand, streaming, convergence, cross-platform, binge-watching','Strong: explains WHY each technology changed audience consumption, not just WHAT the technology is']},
{id:'c2_2020_4',year:2020,comp:2,sec:'B',topic:'Industry',marks:10,ao:'AO1 1a/1b',qnum:'Q4',
 product:'Music videos / artist websites',texts:[],
 question:'How do music websites promote artists to a global audience? Refer to your set music artists\' websites to support your points.',
 must:[],points:['Artist websites aggregate all promotional content in one place: music videos, tour dates, merch - giving global fans a single destination','Tour page with play in my city button allows fans globally to interact and feel included','Social media links connect the website to global platforms (Instagram, TikTok, YouTube) extending reach beyond the site itself','Merchandise store enables global purchase, turning fans worldwide into brand ambassadors'],
 levels:[{band:4,marks:'9-10',desc:'Excellent, detailed and accurate knowledge and understanding. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'6-8',desc:'Good accurate knowledge. Good reference to set product.'},{band:2,marks:'3-5',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['Focus on GLOBAL promotion specifically - how do websites reach audiences beyond the artist\'s home country?','Refer to specific features of your set artist\'s website (Lizzo, Bieber, Stormzy, Taylor Swift)','Use terminology: global audience, commercial imperative, convergence, cross-platform']},
{id:'c2_2021_1b',year:2021,comp:2,sec:'A',topic:'Representation',marks:10,ao:'AO2 1a/1b',qnum:'Q1(b)',
 product:'Luther / The IT Crowd extract',texts:['Luther','IT Crowd'],
 question:'How <strong>stereotypical</strong> are the <strong>representations of men</strong> in this extract?',
 must:['Must refer to specific examples from the extract','Must make judgements and conclusions about how far the representations are stereotypical'],
 points:['LUTHER — Luther\'s verbal reaction to Zoe\'s news represents men as angry and aggressive, a gender stereotype. This is constructed through his tone of voice and use of interrogatives: "Who?" and "Are you sleeping with him?"',
  'LUTHER — Luther\'s gesture codes as he paces around the room and puts his hand to his head act as signifiers of his anger and frustration, reinforcing the stereotype of men as unable to control their anger.',
  'LUTHER — Luther\'s violence as he smashes the door reinforces male stereotypes associated with physical and domestic violence — constructed through gesture codes as he repeatedly punches the door.',
  'LUTHER — However, the camerawork throughout the scene positions the audience closer to Luther, so we are aligned with him as the male protagonist and as the maverick detective, which complicates a simple stereotypical reading.',
  'LUTHER — The bar scene with Ian Reid represents men stereotypically as they drink together and avoid any expression of feelings: "Anything you\'d like me to say?... No" — reinforcing male emotional stoicism.',
  'IT CROWD — Roy\'s language ("I don\'t have to listen to you, I\'m not married to you") reinforces gender stereotypes, but the purpose here is genre-related — to create comedy, reinforced by the laughter track.',
  'IT CROWD — Roy\'s reference to "orgies" as his explanation for the "super-secret meetings" reinforces a stereotype of men as sex-obsessed.',
  'IT CROWD — Moss is NOT represented as a typical male IT worker in the office scene — his less masculine tone of voice and hairstyle are used to create a comedic representation, subverting the stereotype.',
  'IT CROWD — Moss is represented with more stereotypically masculine traits in the 8+ club scene — he uses an assertive tone ("Get him what he wants") and is confident with women ("Not now, Ivana") — a comedic contrast with his usual character.',
  'Applying Propp\'s character functions and theories of gender stereotyping: both extracts use and challenge male stereotypes — the representations serve genre-specific purposes (crime drama tension; sitcom comedy) rather than straightforwardly affirming or rejecting stereotypes.'],
 levels:[['9–10','Excellent, detailed analysis of the representations of men in the extract. Consistently appropriate judgements and conclusions about how far the representations are stereotypical.'],
  ['7–8','Good, reasonably detailed analysis. Appropriate judgements and conclusions about how far representations are stereotypical.'],
  ['5–6','Satisfactory analysis. Generally appropriate judgements and conclusions.'],
  ['3–4','Basic analysis. Basic judgements and conclusions about how far representations are stereotypical.'],
  ['1–2','Minimal, if any, analysis. Lacks judgements and conclusions.']],
 tip:["This question requires a JUDGEMENT — use phrases like 'largely stereotypical because...', 'however, this is subverted when...'", "Cover multiple male characters in your response — Luther, Reid, Roy, Moss all offer different representations.", "Link the purpose of representations to genre: crime dramas use stereotypes to create tension; sitcoms use them for comedy.", "Apply theory where appropriate: Propp's character functions, theories of gender stereotyping.", "Focus on the EXTRACT specifically — not general knowledge of the series."]},
{id:'c2_2021_2',year:2021,comp:2,sec:'A',topic:'Audience',marks:10,ao:'AO1 1a/1b',qnum:'Q2',
 product:'Luther / The Sweeney / Friends / The IT Crowd',texts:['Luther','IT Crowd','The Sweeney','Friends'],
 question:'Why might <strong>audience responses to crime dramas or sitcoms change over time</strong>? Refer to the crime dramas or sitcoms you have studied to support your points.',
 must:[],
 points:['LUTHER — Positive response from a wide-ranging contemporary audience when originally aired in 2010. Idris Elba received several awards for his performance, adding to critical acclaim and increasing audiences over time.',
  'LUTHER — Audiences responded positively to more gender and racial equality in the programme, with a black protagonist and women in key narrative and workplace roles — reflecting changing social attitudes.',
  'LUTHER — Current audiences pick up Luther in series 4 and 5 by binge-watching earlier series on BBC iPlayer or Netflix — changing distribution technologies change how and when audiences respond.',
  'IT CROWD — The IT Crowd received growing popularity over time — series 1 received 1.8 million viewers, increasing to 2.17 million for the series 4 finale in 2010.',
  'IT CROWD — The \'cult\' status of the programme results from ongoing audience responses, including re-watching it on All 4 or buying limited-edition box sets. Fan sites and a Fandom wiki have developed, reflecting participatory culture.',
  'THE SWEENEY — Some contemporary audiences may be offended by the misrepresentation of women and take an oppositional reading to the patriarchal attitudes — the women are in supporting roles only, which a contemporary audience may find unacceptable.',
  'THE SWEENEY — Some older audiences respond positively by re-watching it on ITV4, enjoying its retro feel and the nostalgia for 70s culture — a gratification of personal identity and surveillance of a past era.',
  'FRIENDS — Contemporary audiences may find the representations of gender dated and stereotypical (e.g. Joey suggesting Ross go to a strip club). Audiences may also respond negatively to the lack of cultural and ethnic diversity.',
  'FRIENDS — Younger audiences are now watching Friends for the first time with parents who watched it in the 90s — binge-watching on Netflix (all 10 seasons released January 2018) has led to a resurgence in popularity.',
  'Changing technologies (streaming, binge-watching, social media) fundamentally alter how audiences respond to, discuss and share reactions to set products over time.'],
 levels:[['9–10','Excellent, detailed and accurate knowledge and understanding of audience responses and how they change over time. Excellent use of set products. Highly appropriate use of subject-specific terminology.'],
  ['7–8','Good, accurate knowledge and understanding. Good use of the set products. Appropriate use of subject-specific terminology.'],
  ['5–6','Satisfactory, generally accurate knowledge. Satisfactory use of the set products. Generally appropriate use of terminology.'],
  ['3–4','Basic knowledge of audience responses, little understanding of how they change over time. Basic use of set products.'],
  ['1–2','Minimal knowledge of audience responses. Minimal use of set products. Brief or incomplete response.']],
 tip:["Focus on CHANGE OVER TIME — explain why responses at different moments are different.", "Use Uses and Gratifications theory: audiences at different times seek different gratifications.", "Changing technologies (streaming, social media, binge-watching) are a key reason audience responses change.", "Cover multiple reasons: social/cultural contexts change, technology changes, audience demographics change.", "Reference both historical responses (when first broadcast) and contemporary responses."]},
{id:'c2_2021_4',year:2021,comp:2,sec:'B',topic:'Context',marks:10,ao:'AO1 1a/1b',qnum:'Q4',
 product:'Bruno Mars / Pharrell Williams websites',texts:['Bruno Mars','Pharrell Williams'],
 question:'Explain how music websites <strong>reflect the social and cultural contexts</strong> in which they are produced. Refer to <strong>www.brunomars.com</strong> or <strong>www.pharrellwilliams.com</strong> to support your response.',
 must:[],
 points:['BRUNO MARS — The use of music websites for campaigning and charity work represents and empowers social groups, reflecting social contexts. Mars\'s website has promoted causes aligned with his identity and audience.',
  'BRUNO MARS — Images of Mars wearing fashionable clothing with Cardi B reflect the contemporary social context of the metrosexual male, where male artists embrace fashion and style as part of their brand.',
  'BRUNO MARS — Multiple options and links (watch the video, download the song, buy on 7 platforms) reflect the cultural context of media convergence made possible through digital technologies.',
  'BRUNO MARS — Mars\'s website constructs a clear star persona through its glamorous images and black and gold colour palette — reflecting contemporary celebrity culture. Being nominated for NAACP Image Awards reinforces racial and cultural representation in the music industry.',
  'BRUNO MARS — The commercial imperative of the website, with multiple opportunities for promotion and financial gain, reflects the context of a profit-driven music industry. Mars is signed to Atlantic Records, part of Warner Group (one of the Big 3 global music companies).',
  'PHARRELL WILLIAMS — The clothing promoted on the website reflects cultural contexts. Williams\' Billionaire Boys\' Club brand (a collaboration with Japanese designer NIGO) reflects global fashion trends, as does his collaboration with Adidas.',
  'PHARRELL WILLIAMS — The website reflects a contemporary context of participatory culture with invitations to \'Discover Pharrell\'s world through his fans\', \'create your own card\' and \'tell us what inspires you\'.',
  'PHARRELL WILLIAMS — The \'social good\' pages reflect social contexts through references to Williams\' campaigning and charity work, including a petition for his \'Live Earth\' project for action on climate change.',
  'PHARRELL WILLIAMS — The Yoobi school supplies collaboration reflects social contexts of diversity as it was designed \'to encourage kids to embrace their differences\', and reflects a culture of giving — for every item purchased, a school supply is donated.',
  'Both websites reflect the cultural context of changing patterns of distribution and consumption through digital downloads and streaming, with multiple ways to stream and download music on offer — reflecting an era of media convergence.'],
 levels:[['9–10','Excellent, detailed and accurate knowledge of relevant social and cultural contexts. Highly appropriate links between relevant contexts and specific aspects of the website.'],
  ['7–8','Good, accurate knowledge of relevant contexts. Appropriate links between contexts and specific aspects of the website.'],
  ['5–6','Satisfactory, generally accurate knowledge of generally relevant contexts. Links made but likely undeveloped or not entirely convincing.'],
  ['3–4','Basic knowledge of contexts, likely lacking accuracy or clarity. Links between contexts and website features unlikely to be made clearly.'],
  ['1–2','Minimal knowledge of contexts. Links between contexts and the set product not made. Brief or incomplete.']],
 tip:["Focus on SOCIAL and CULTURAL contexts specifically — name them explicitly (e.g. celebrity culture, metrosexual male, media convergence, participatory culture).", "Link every point to a specific feature of the website — not general knowledge about the artist.", "Websites are updated regularly, so any valid evidence from the set products should be credited.", "Strong answers will explain WHY each feature reflects that context, not just what it shows.", "Use terminology: convergence, star persona, commercial imperative, participatory culture."]},
{id:'c2_2022_1b',year:2022,comp:2,sec:'A',topic:'Representation',marks:10,ao:'AO2 1a/1b',qnum:'Q1(b)',
 product:'Luther S1E1 / The Sweeney S1E1',texts:[],
 question:'How typical of the genre are the <strong>locations</strong> used in this extract? Explore examples from the extract to support your points.',
 must:['Must refer to specific examples from the extract','Must make judgements and draw conclusions'],points:['Urban London setting typical of British crime drama - gritty streets establish a realistic, grounded world','Police station interiors are a classic crime drama location convention','Domestic settings are used to humanise detectives - a contemporary crime drama convention','Luther uses atmospheric, stylised lighting of familiar locations to create a distinctive visual identity','The Sweeney uses authentic 1970s London locations giving a documentary quality typical of British crime dramas'],
 levels:[{band:5,marks:'9-10',desc:'Excellent, detailed analysis of specific examples. Consistently appropriate judgements and conclusions. Highly appropriate subject-specific terminology.'},{band:4,marks:'7-8',desc:'Good analysis. Good judgements.'},{band:3,marks:'5-6',desc:'Satisfactory analysis. Some judgements.'},{band:2,marks:'3-4',desc:'Basic analysis.'},{band:1,marks:'1-2',desc:'Minimal analysis.'}],
 tip:['Must make a judgement about how TYPICAL locations are, not just describe them','Use evidence from specific scenes in the extract','Apply mise-en-scene analysis: what do the locations connote?']},
{id:'c2_2022_2',year:2022,comp:2,sec:'A',topic:'Context',marks:10,ao:'AO1 1a/1b',qnum:'Q2',
 product:'Luther / The Sweeney',texts:[],
 question:'Explain the <strong>effect of social and cultural contexts</strong> on crime dramas or sitcoms. Refer to <em>Luther</em> or <em>The Sweeney</em> to support your points.',
 must:[],points:['Social context of diversity: the casting of Idris Elba as a black British detective was influenced by social pressure for greater diversity','Cultural context of celebrity: Elba\'s profile from The Wire influenced the decision to cast him','The Sweeney: the social context of 1970s Britain - industrial decline, IRA terrorism - shaped the show\'s themes and sense of threat','Social context of feminism: Luther includes strong female characters reflecting the changing social status of women since The Sweeney','Cultural context of prestige TV: Luther was produced in an era of high production values driven by competition with US streaming content'],
 levels:[{band:4,marks:'9-10',desc:'Excellent, detailed and accurate knowledge and understanding. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'6-8',desc:'Good accurate knowledge. Good reference to set product.'},{band:2,marks:'3-5',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['Name specific social and cultural contexts, don\'t just say society changed','Apply to Luther AND/OR The Sweeney with specific examples','Strong: explains the EFFECT on the programme, not just lists the context']},
{id:'c2_2022_4',year:2022,comp:2,sec:'B',topic:'Industry',marks:10,ao:'AO1 1a/1b',qnum:'Q4',
 product:'Music videos / artist websites',texts:[],
 question:'How do music websites <strong>enable the music industry to make money</strong>? Refer to the official Katy Perry website or the official Taylor Swift website to support your points.',
 must:[],points:['Merchandise store: direct-to-consumer sales of branded merchandise generate more profit for the artist','Concert ticket sales: tour pages with direct ticket purchasing links monetise live performance through the website','Streaming links: directing fans to Spotify and Apple Music generates streaming royalties','Brand partnerships: website placement of sponsored content generates income for artists'],
 levels:[{band:4,marks:'9-10',desc:'Excellent, detailed and accurate knowledge and understanding. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'6-8',desc:'Good accurate knowledge. Good reference to set product.'},{band:2,marks:'3-5',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['Focus on the WEBSITE as the promotional tool, not social media generally','Use terminology: revenue streams, commercial imperative, vertical integration, direct-to-consumer','Give specific examples from Katy Perry or Taylor Swift\'s website']},
{id:'c2_2023_1b',year:2023,comp:2,sec:'A',topic:'Representation',marks:10,ao:'AO2 1a/1b',qnum:'Q1(b)',
 product:'Luther S1E1 / The Sweeney S1E1',texts:[],
 question:'How typical of the genre are the <strong>locations</strong> used in this extract? Explore examples from the extract to support your points.',
 must:['Must refer to specific examples from the extract','Must make judgements and draw conclusions'],points:['Urban street settings are highly typical of British crime drama - they signify social realism and working-class communities','Police stations and incident rooms are genre conventions establishing the investigative world of crime drama','Luther uses darkly lit, atmospheric London locations that enhance the psychological thriller aspect','The Sweeney uses authentic 1970s location shooting in a documentary style typical of British crime drama'],
 levels:[{band:5,marks:'9-10',desc:'Excellent, detailed analysis of specific examples. Consistently appropriate judgements and conclusions. Highly appropriate subject-specific terminology.'},{band:4,marks:'7-8',desc:'Good analysis. Good judgements.'},{band:3,marks:'5-6',desc:'Satisfactory analysis. Some judgements.'},{band:2,marks:'3-4',desc:'Basic analysis.'},{band:1,marks:'1-2',desc:'Minimal analysis.'}],
 tip:['Must make a JUDGEMENT: how far is this typical?','Refer to specific moments in the extract, not just general points about the show','Use mise-en-scene terminology: setting, lighting, composition']},
{id:'c2_2023_2',year:2023,comp:2,sec:'A',topic:'Context',marks:10,ao:'AO1 1a/1b',qnum:'Q2',
 product:'Luther / The Sweeney',texts:[],
 question:'Explain how <strong>media contexts influence crime dramas or sitcoms</strong>. Refer to <em>Luther</em> or <em>The IT Crowd</em> to support your points.',
 must:[],points:['Diversity context: Luther was produced during growing social pressure for greater diversity, influencing the casting of Idris Elba','Feminist context: the inclusion of Rose as Luther\'s boss and Alice as a brilliant female antagonist reflects changing social attitudes to gender','Technology context: Luther was produced for an on-demand era, with high production values designed to compete with US streaming drama','Political context: Luther engages with issues of police procedure, justice and ethnic profiling','BBC\'s PSB remit: as a BBC production, Luther reflects the institutional requirement to inform, educate and entertain'],
 levels:[{band:4,marks:'9-10',desc:'Excellent, detailed and accurate knowledge and understanding. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'6-8',desc:'Good accurate knowledge. Good reference to set product.'},{band:2,marks:'3-5',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['Multiple context types: social, cultural, political, institutional, technological','Each point: name the context then explain how it influenced Luther then give a specific example']},
{id:'c2_2023_4',year:2023,comp:2,sec:'B',topic:'Industry',marks:10,ao:'AO1 1a/1b',qnum:'Q4',
 product:'Music videos / artist websites',texts:[],
 question:'How do music websites <strong>promote artists to a global audience</strong>? Refer to the official Katy Perry website or the official Taylor Swift website to support your points.',
 must:[],points:['Tour pages: interactive maps and show listings allow fans globally to find and book concerts','Merchandise available for global shipping turns the website into a global retail platform','Social media integration links the website to global platforms like Instagram, TikTok and YouTube','Music videos hosted on the website give international audiences access to the artist\'s visual identity','Streaming platform links connect global fans directly to the music on Spotify and Apple Music'],
 levels:[{band:4,marks:'9-10',desc:'Excellent, detailed and accurate knowledge and understanding. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'6-8',desc:'Good accurate knowledge. Good reference to set product.'},{band:2,marks:'3-5',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['GLOBAL is the key word - explain how features reach international audiences specifically','Reference specific Katy Perry or Taylor Swift website features','Use terminology: global audience, convergence, commercial imperative, cross-platform']},
{id:'c2_2019_4',year:2019,comp:2,sec:'B',topic:'Audience',marks:10,ao:'AO1 1a/1b',qnum:'Q4',
 product:'Music videos / artist websites',texts:[],
 question:'Explain how music websites use <strong>Uses and Gratifications theory</strong> to engage audiences.',
 must:[],points:['Personal identity: artist websites allow fans to identify with their favourite artists through biography, imagery and personal content','Information: news sections, tour dates and release schedules fulfil the information/surveillance gratification','Entertainment: music video hosting, behind-the-scenes content and interactive features fulfil the entertainment gratification directly','Social interaction: fan community features and social media links fulfil the social interaction gratification by connecting fans with each other'],
 levels:[{band:4,marks:'9-10',desc:'Excellent, detailed and accurate knowledge and understanding. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'6-8',desc:'Good accurate knowledge. Good reference to set product.'},{band:2,marks:'3-5',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['Name Blumler and Katz\'s Uses and Gratifications theory explicitly','Apply each gratification: personal identity, information, entertainment, social interaction','Give specific website feature examples for each gratification']},
{id:'c2_2024_4',year:2024,comp:2,sec:'B',topic:'Context',marks:10,ao:'AO1 1a/1b',qnum:'Q4',
 product:'Music videos / artist websites',texts:[],
 question:'How do music videos <strong>reflect the time in which they were made</strong>? Refer to <em>Rio</em> (Duran Duran, 1982) or <em>Waterfalls</em> (TLC, 1995) to support your points.',
 must:[],points:['Waterfalls (1995): addresses the HIV/AIDS epidemic - the music video directly reflects the social context of a public health crisis affecting the black community','Waterfalls: drug use and gang violence reflect the social context of inner-city poverty and crime in 1990s America','The low-budget VFX in Waterfalls reflect the technology of 1995 - state-of-the-art then, obviously dated now','Rio (1982): the wealth, glamour and exotic yacht setting reflect the aspirational consumer culture of 1980s Thatcherite Britain'],
 levels:[{band:4,marks:'9-10',desc:'Excellent, detailed and accurate knowledge and understanding. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'6-8',desc:'Good accurate knowledge. Good reference to set product.'},{band:2,marks:'3-5',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['Focus on the historical/social context of the time the video was MADE, not now','Be specific about dates: 1982 (Thatcherism, materialism) vs 1995 (HIV crisis, War on Drugs)','Link specific scenes or visual choices to the historical context they reflect','Terminology: historical context, social context, representation, mediation']},
{id:'c2_2025_1b',year:2025,comp:2,sec:'A',topic:'Representation',marks:10,ao:'AO2 1a/1b',qnum:'Q1(b)',
 product:'Luther S1E1 / The Sweeney S1E1',texts:[],
 question:'How typical of the genre are the <strong>characters</strong> in this extract? Explore examples from the extract to support your points.',
 must:['Must refer to specific examples from the extract','Must make judgements and draw conclusions'],points:['Luther conforms to the crime genre convention of the maverick detective: brilliant but emotionally damaged, operating at the edge of the law','Alice Morgan subverts the genre convention of the female character: she is the most intelligent person in the room, not a victim or love interest','Zoe represents the conventional domestic female character who is emotionally reactive, conforming to gender stereotypes','The police colleagues represent typical crime drama supporting characters: loyal but less capable than the protagonist','However Luther subverts the stereotypical black male character by making him the hero detective'],
 levels:[{band:5,marks:'9-10',desc:'Excellent, detailed analysis of specific examples. Consistently appropriate judgements and conclusions. Highly appropriate subject-specific terminology.'},{band:4,marks:'7-8',desc:'Good analysis. Good judgements.'},{band:3,marks:'5-6',desc:'Satisfactory analysis. Some judgements.'},{band:2,marks:'3-4',desc:'Basic analysis.'},{band:1,marks:'1-2',desc:'Minimal analysis.'}],
 tip:['Must make a clear JUDGEMENT: how far are characters typical?','Apply Propp\'s character types: hero, villain, helper - do crime drama characters conform?','Analyse specific characters with specific moments from the extract as evidence']},
{id:'c2_2025_2',year:2025,comp:2,sec:'A',topic:'Context',marks:10,ao:'AO1 1a/1b',qnum:'Q2',
 product:'Luther / The Sweeney',texts:[],
 question:'How do crime dramas or sitcoms <strong>reflect their historical contexts</strong>? Refer to <em>The Sweeney</em> or <em>Friends</em> to support your points.',
 must:[],
 points:['The Sweeney (1975): reflects the historical context of 1970s Britain - industrial decline, trade union conflict and social disorder informed the show\'s themes','The Sweeney: the all-white, all-male detective team reflects the historical context of institutional discrimination in the British police force','The use of physical violence and rule-bending in The Sweeney reflects 1970s cultural attitudes about the police','Friends (1994): reflects post-Cold War, pre-9/11 optimism of 1990s America - affluent, carefree, aspirational lifestyle','Friends: the all-white, heterosexual main cast reflects the historical context of 1990s US network television\'s limited diversity'],
 levels:[{band:4,marks:'9-10',desc:'Excellent, detailed and accurate knowledge. Excellent understanding of influence of contexts. Highly appropriate subject-specific terminology.'},{band:3,marks:'6-8',desc:'Good knowledge of contexts. Good links to set product.'},{band:2,marks:'3-5',desc:'Satisfactory knowledge.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['Historical context means the time the show was MADE, not the time it is set','Be specific: what historical events and social conditions shaped the programme?','Strong: explicit connections between historical facts and specific features of the programme']},
{id:'c1_2024_2a',year:2024,comp:1,sec:'A',topic:'Context',marks:5,ao:'AO1 2a/2b',qnum:'Q2(a)',
 product:'The Man With The Golden Gun film poster',texts:['The Man With The Golden Gun (1974)'],
 question:'Explain how <strong>historical contexts influence film posters</strong>. Refer to the film poster for <em>The Man with the Golden Gun</em> to support your points. [5]',
 must:[],points:['Historical context of 1974: the Cold War and geopolitical tensions with the Far East are reflected in the exotic Asian setting of the poster','The historical context of 1970s masculinity is reflected in the passive representation of women - a product of its time','The historical context of the Bond franchise: by 1974, Bond was an established cultural icon so the poster uses recognisable franchise conventions','The historical context of 1970s cinema marketing: painted poster art rather than photography was the convention','The historical context of British cultural attitudes towards the Far East is visible in the exoticisation of the setting'],
 levels:[],
 tip:['5 marks = approximately 5-6 minutes writing','Name a specific historical context (era, event, social attitude)','Link directly to a specific feature of the Golden Gun poster','Each point: historical context then how it influenced the poster\'s specific visual choices']},
{id:'c2_2025_1a',year:2025,comp:2,sec:'A',topic:'Media Language',marks:10,ao:'AO2 1a',qnum:'Q1(a)',
 product:'Luther S1E1 / The Sweeney S1E1',texts:[],
 question:'Explore how <strong>camerawork creates meaning</strong> in this extract. [10]',
 must:['Must refer to specific examples from the extract'],points:['Close-up shots of Luther\'s face create intense psychological intimacy - the audience shares his emotional state','High angle shots of suspects connote their vulnerability and diminished power relative to the detective','Low angle shots of Luther establish his authority and dominance in the scene','Tracking shots follow characters through spaces, creating urgency and forward narrative momentum','Hand-held camera work creates documentary realism, making the crime drama feel authentic and gritty','Point of view shots position the audience with specific characters, controlling how we interpret events'],
 levels:[{band:5,marks:'9-10',desc:'Excellent, detailed analysis of specific examples from the extract. Consistently appropriate use of subject-specific terminology. Consistent focus on how camerawork creates meaning.'},{band:4,marks:'7-8',desc:'Good, reasonably detailed analysis. Good use of subject-specific terminology. Good focus on meanings created.'},{band:3,marks:'5-6',desc:'Satisfactory analysis. Some use of subject-specific terminology.'},{band:2,marks:'3-4',desc:'Basic analysis. Limited use of subject-specific terminology.'},{band:1,marks:'1-2',desc:'Minimal analysis.'}],
 tip:['Take detailed notes during both viewings of the extract on camera shots, angles and movement','Name each technique specifically: close-up, tracking shot, crane shot, hand-held etc.','For each technique: what is shown? what does it connote? what effect does it create?','Strong answers analyse HOW camerawork creates meaning, not just list techniques']},
{id:'c2_2024_1b',year:2024,comp:2,sec:'A',topic:'Representation',marks:10,ao:'AO2 1a/1b',qnum:'Q1(b)',
 product:'Luther S1E1 / The Sweeney S1E1',texts:[],
 question:'Explore <strong>representations of gender</strong> in this extract. [10]',
 must:['Must refer to specific examples from the extract','Must make judgements and draw conclusions'],points:['Luther: male characters are represented as dominant, active and in control - the detective as the authoritative masculine figure','Luther subverts some masculine stereotypes by displaying emotional complexity and vulnerability alongside his authority','Female characters in The Sweeney tend to be represented as passive or domestic - reflecting 1970s gender norms','Luther includes professional women (Rose, Zoe) who occupy roles of authority, reflecting more progressive representation of gender','The mise-en-scene reinforces gender: male characters in public active spaces, female characters often in domestic settings','Comparison of The Sweeney and Luther shows how representations of gender change over time'],
 levels:[{band:5,marks:'9-10',desc:'Excellent, detailed analysis of specific examples. Consistently appropriate judgements and conclusions. Highly appropriate subject-specific terminology.'},{band:4,marks:'7-8',desc:'Good, reasonably detailed analysis. Good judgements and conclusions.'},{band:3,marks:'5-6',desc:'Satisfactory analysis. Some judgements.'},{band:2,marks:'3-4',desc:'Basic analysis.'},{band:1,marks:'1-2',desc:'Minimal analysis.'}],
 tip:['Must make explicit JUDGEMENTS about representations of gender - not just describe them','Apply theory: male gaze (Mulvey), stereotyping theory, van Zoonen on gender','Compare Luther and The Sweeney to show how representations have changed over time','Strong: considers both conforming to AND challenging gender stereotypes, with specific extract evidence']},
{id:'c2_2025_3',year:2025,comp:2,sec:'B',topic:'Representation',marks:20,ao:'AO2 1a/1b',qnum:'Q3',
 product:'Music videos (contemporary + historical)',texts:[],
 question:'How far do music videos <strong>represent social issues</strong>? [20] In your response, you must: explore representations of social issues in the two music videos you have studied; refer to relevant media contexts; make judgements and draw conclusions.',
 must:['Must cover BOTH set music videos','Must make judgements and draw conclusions','Must refer to relevant media contexts'],points:['Good as Hell (Lizzo, 2016): represents body positivity and self-acceptance - diverse body types, celebrating women of all shapes','Intentions (Justin Bieber, 2020): addresses social issues around youth homelessness, filmed at a shelter for homeless young women','Waterfalls (TLC, 1995): directly addresses HIV/AIDS, drug addiction and gang violence in Black communities - groundbreaking for mainstream pop','The historical context of the 1990s shaped Waterfalls: the HIV/AIDS crisis was devastating communities and rarely addressed in mainstream media','Good as Hell reflects contemporary social contexts: the body positivity movement and intersectional feminism of the 2010s','The representation of social issues in music videos has become more explicit over time, reflecting changing cultural willingness to engage with difficult topics'],
 levels:[{band:5,marks:'17-20',desc:'Excellent, detailed analysis of representations of social issues in both music videos. Excellent reference to media contexts. Excellent judgements and conclusions.'},{band:4,marks:'13-16',desc:'Good, reasonably detailed analysis of both music videos. Good reference to media contexts. Well-reasoned judgements.'},{band:3,marks:'9-12',desc:'Satisfactory analysis of both music videos. Some reference to media contexts. Some judgements.'},{band:2,marks:'5-8',desc:'Basic analysis. Limited reference to contexts.'},{band:1,marks:'1-4',desc:'Minimal analysis.'}],
 tip:['20-mark extended essay - spend about 20-25 minutes','Must cover BOTH your music videos: contemporary (Lizzo/Taylor + Bieber/Stormzy) AND historical (TLC/Duran Duran)','Structure: intro with argument, analyse each video, conclusion with clear judgement','Media contexts are essential: what social issues were relevant when each video was made?','Strong: uses specific scenes and visual choices as evidence, not just general statements']}
,
{id:'c1_2019_3d',year:2019,comp:1,sec:'B',topic:'Industry',marks:12,ao:'AO1 1a/1b',qnum:'Q3(d)',
 product:'The Archers / BBC Radio 4',texts:['The Archers'],
 question:'Explain how radio programmes use technologies to reach audiences. Refer to <em>The Archers</em> to support your points. [12]',
 must:[],points:['BBC Sounds app: allows audiences to listen on demand, pause, rewind and download episodes - reaching audiences who miss the live broadcast','DAB digital radio: The Archers is broadcast on BBC Radio 4 via DAB, increasing audio quality and availability across the UK','BBC Radio 4 website: provides episode guides, character profiles and additional content that extends audience engagement beyond the broadcast','Social media (Twitter, Facebook): The Archers uses social media to promote storylines, share clips and engage with fans, reaching audiences who don\'t use traditional radio','Smart speakers: audiences can ask Alexa or Google Home to play The Archers, making it accessible to new audiences without a traditional radio'],
 levels:[{band:4,marks:'10-12',desc:'Excellent, detailed and accurate knowledge. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'7-9',desc:'Good accurate knowledge. Good reference.'},{band:2,marks:'4-6',desc:'Satisfactory knowledge. Some reference.'},{band:1,marks:'1-3',desc:'Basic knowledge.'}],
 tip:['12-mark question - spend about 14 minutes','Structure: name the technology, explain HOW The Archers uses it, explain WHY this matters for audiences','Use terminology: convergence, cross-platform, on-demand, streaming, DAB','Strong: links each technology to a specific audience group or need']},
{id:'c1_2021_4c',year:2021,comp:1,sec:'B',topic:'Audience',marks:12,ao:'AO1 1a/1b',qnum:'Q4(b)',
 product:'The Archers / BBC Radio 4',texts:['Archers'],
 question:'Explain how <strong>audiences actively engage</strong> with radio programmes. Refer to <em>The Archers</em> to support your points. [12]',
 must:[],points:['The Archers has developed from a text which audiences used to passively listen to into one that explicitly encourages its audience to be active — Radio 4 regularly promotes ways through which the audience can engage.',
  'The programme\'s website features character guides, episode summaries, interactive content and links to fan sites, encouraging audiences to go beyond passive listening.',
  'Digital technologies and social media feeds encourage active engagement — audiences can use hashtags (e.g. #TheArchers) to get involved with the text and discuss storylines in real time.',
  'Different audiences actively engage in different ways, including through fandoms — fan websites are linked to from The Archers homepage, and fan wikis allow audiences to contribute information.',
  'The BBC Sounds app enables audiences to choose when to listen, pause, rewind and create playlists — transforming passive broadcasting into active, on-demand consumption.',
  'Actively engaging with the programme helps audiences reinforce and adapt their own sense of personal identity — a key gratification identified in Uses and Gratifications theory (Blumler and Katz).',
  'The historical context of The Archers and its social/cultural significance means it exists in multiple media forms — it is a convergent text that audiences can access in many ways.',
  'Producers use methods that encourage active social interaction (e.g. social network feeds, live Q&As) — audiences interacting with The Archers through its social network feeds fulfils Uses and Gratifications social interaction needs.'],
 levels:[['10–12','Excellent, detailed and accurate knowledge. Excellent reference to The Archers. Accurate reference to theoretical perspectives on audiences and excellent use of subject-specific terminology.'],
  ['7–9','Good, secure understanding. Good, accurate reference to The Archers. Accurate reference to theoretical perspectives.'],
  ['4–6','Satisfactory understanding, though points are likely to be less developed. Satisfactory reference to The Archers.'],
  ['1–3','Basic knowledge of active audiences. Basic reference to The Archers. Basic, if any, reference to theoretical perspectives.']],
 tip:['12-mark question — spend about 14 minutes','Use Uses and Gratifications theory throughout: audiences are active, not passive — they seek specific gratifications','Terminology: active audience, participatory culture, convergence, digital technologies','Reference specific Archers audience behaviours: BBC Sounds, social media, fan sites, hashtags','Higher band responses move beyond obvious methods to consider how audiences use texts to form identities']},
{id:'c2_2025_4',year:2025,comp:2,sec:'B',topic:'Audience',marks:10,ao:'AO1 1a/1b',qnum:'Q4',
 product:'Music videos / artist websites',texts:[],
 question:'Explain how users <strong>interact with music websites</strong>. Refer to the official Lizzo website or the official Justin Bieber website to support your response. [10]',
 must:[],points:['Merchandise purchase: users interact directly with the commercial function of the website by browsing and purchasing branded products','Tour ticket requests: features like play in my city on Lizzo\'s website allow users to actively influence tour decisions','Social media links: users move from the website to Instagram, TikTok and YouTube, creating a connected, multi-platform interactive experience','Newsletter sign-ups: users actively opt in to receive communications, creating a direct relationship with the artist','Fan community features: comment sections and Q&A sections create social interaction between users and with the artist'],
 levels:[{band:4,marks:'9-10',desc:'Excellent, detailed and accurate knowledge and understanding. Excellent reference to set product. Highly appropriate subject-specific terminology.'},{band:3,marks:'6-8',desc:'Good accurate knowledge. Good reference.'},{band:2,marks:'3-5',desc:'Satisfactory knowledge.'},{band:1,marks:'1-2',desc:'Basic knowledge.'}],
 tip:['INTERACTION is the key word - focus on what users actively DO, not what the website passively offers','Reference specific features of Lizzo\'s or Bieber\'s website','Apply U&G theory if relevant: social interaction, personal identity, entertainment gratifications']}
];

// ═══════════════════════════════════════════════════════════
// RENDER ENGINE
// ═══════════════════════════════════════════════════════════
const answered = {};

function marksBucket(m) {
  if (m===1) return '1';
  if (m<=4) return '4';
  if (m===5) return '5';
  if (m<=12) return '10';
  return '20';
}

function stripeClass(comp, sec) {
  if (comp===1 && sec==='A') return 'stripe-c1a';
  if (comp===1 && sec==='B') return 'stripe-c1b';
  if (comp===2 && sec==='A') return 'stripe-c2a';
  return 'stripe-c2b';
}

function buildCard(q) {
  const minH = q.marks>=20?220:q.marks>=10?160:q.marks>=5?110:60;
  const mustHTML = q.must.length
    ? `<div class="q-must-label">In your answer, you must:</div>${q.must.map(b=>`<p class="q-bullet">• ${b}</p>`).join('')}`
    : '';
  const hasLevels = q.levels && q.levels.length>0;
  const levBtn = hasLevels && q.marks>1
    ? `<button class="btn btn-levels" onclick="toggleLv('${q.id}')">Levels grid</button>` : '';
  const hasEx = !!getExampleForQuestion(q.id);
  const exBtn = hasEx
    ? `<button class="ex-toggle" id="exbtn-${q.id}" onclick="toggleExInline('${q.id}', this)">✍️ Example answers</button>` : '';
  const exInlineHTML = hasEx ? buildInlineExample(q.id) : '';
  const tipBtn = (q.tip && q.tip.length)
    ? `<button class="tip-toggle" id="tipbtn-${q.id}" onclick="toggleTip('${q.id}')">💡 Exam tip</button>` : '';
  const tipHTML = (q.tip && q.tip.length)
    ? `<div class="tip-panel" id="tip-${q.id}">
        <div class="tip-head">💡 Exam technique</div>
        ${q.tip ? q.tip.map(t => `<div class="tip-item">${t}</div>`).join('') : ''}
      </div>` : '';
  const compCls = q.comp===1?'c1':'c2';
  const secCls = q.sec==='A'?'seca':'secb';
  const lvHTML = hasLevels
    ? `<div class="ms-levels" id="lv-${q.id}">${q.levels.map(l=>`<div class="ms-level-row"><div class="ms-level-marks ${q.comp===2?'c2':''}">${l[0]}</div><div class="ms-level-desc">${l[1]}</div></div>`).join('')}</div>` : '';

  return `<div class="q-card" id="card-${q.id}"
    data-comp="${q.comp}" data-sec="${q.sec}" data-topic="${q.topic}"
    data-year="${q.year}" data-marks="${marksBucket(q.marks)}">
    <div class="q-header">
      <div class="q-left-stripe ${stripeClass(q.comp,q.sec)}"></div>
      <div class="q-meta">
        <div class="q-badges">
          <span class="badge badge-year">${q.year}</span>
          <span class="badge badge-comp ${compCls}">Component ${q.comp}</span>
          <span class="badge badge-sec ${secCls}">Section ${q.sec}</span>
          <span class="badge badge-marks">${q.marks} mark${q.marks>1?'s':''}</span>
          <span class="badge badge-ao">${q.ao}</span>
          <span class="badge badge-topic">${q.topic}</span>
        </div>
        <div class="q-number">${q.qnum} — ${q.product}</div>
      </div>
    </div>
    <div class="q-body">
      <p class="q-text">${q.question}</p>
      ${mustHTML}
      <textarea id="ta-${q.id}" style="min-height:${minH}px" placeholder="Write your answer here…"
        oninput="onType('${q.id}',this)"></textarea>
      <div class="word-count" id="wc-${q.id}">0 words</div>
      <div class="btn-row">
        <button class="btn btn-primary" onclick="showMS('${q.id}')">Show mark scheme</button>
        ${levBtn}
        ${tipBtn}
        ${exBtn}
        <button class="btn btn-clear" onclick="clearCard('${q.id}')">Clear</button>
      </div>
      ${tipHTML}
      ${exInlineHTML}
      <div class="mark-scheme" id="ms-${q.id}">
        <div class="ms-head">Indicative content</div>
        <p class="ms-intro">Not prescriptive — all valid alternatives should be rewarded. Example points from the official WJEC/Eduqas mark scheme.</p>
        ${q.points.map(p=>`<div class="ms-point">${p}</div>`).join('')}
        ${lvHTML}
        <div class="self-assess">
          <div class="sa-label">Self-assess your answer</div>
          <div class="sa-buttons">
            <button class="sa-btn sa-btn-red" onclick="rate(this)">🔴 Missed it</button>
            <button class="sa-btn sa-btn-amber" onclick="rate(this)">🟡 Partial</button>
            <button class="sa-btn sa-btn-green" onclick="rate(this)">🟢 Got it</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderAll() {
  const list = document.getElementById('questionList');
  let html = '';
  let lastGroup = '';
  const secNames = {
    'C1A':'Component 1 — Section A: Media Language &amp; Representation',
    'C1B':'Component 1 — Section B: Industries &amp; Audiences',
    'C2A':'Component 2 — Section A: Television',
    'C2B':'Component 2 — Section B: Music'
  };
  questions.forEach(q => {
    const gk = `C${q.comp}${q.sec}`;
    if (gk !== lastGroup) {
      html += `<div class="sec-divider" data-group="${gk}"><span>${secNames[gk]}</span></div>`;
      lastGroup = gk;
    }
    html += buildCard(q);
  });
  list.innerHTML = html;
  updateCount();
}

function applyFilters() {
  const comp  = document.getElementById('f-comp').value;
  const sec   = document.getElementById('f-sec').value;
  const topic = document.getElementById('f-topic').value;
  const year  = document.getElementById('f-year').value;
  const marks = document.getElementById('f-marks').value;
  const text  = document.getElementById('f-text').value;
  const kwEl  = document.getElementById('kwSearch');
  const kw    = kwEl ? kwEl.value.trim().toLowerCase() : '';
  let visible = 0;
  questions.forEach(q => {
    const card = document.getElementById('card-'+q.id);
    if (!card) return;
    const textMatch = !text || (q.texts && q.texts.some(t => t === text));
    let kwMatch = true;
    if (kw) {
      const haystack = [
        q.question || '',
        q.product || '',
        q.topic || '',
        q.qnum || ''
      ].join(' ').toLowerCase();
      kwMatch = haystack.indexOf(kw) > -1;
    }
    const match =
      (!comp  || String(q.comp) === comp)  &&
      (!sec   || q.sec   === sec)          &&
      (!topic || q.topic === topic)        &&
      (!year  || String(q.year) === year)  &&
      (!marks || marksBucket(q.marks) === marks) &&
      textMatch && kwMatch;
    card.classList.toggle('hidden', !match);
    if (match) visible++;
  });
  const badge = document.getElementById('qCountBadge');
  if (badge) badge.textContent = visible + ' question' + (visible !== 1 ? 's' : '');
  const kc = document.getElementById('kwCount');
  if (kc) kc.textContent = kw ? visible + ' match' + (visible !== 1 ? 'es' : '') : '';
  const nr = document.getElementById('noResults');
  if (nr) nr.style.display = visible === 0 ? 'block' : 'none';
}

function resetFilters() {
  var kw = document.getElementById('kwSearch'); if (kw) kw.value = '';
  var kw = document.getElementById('kwSearch');
  if (kw) kw.value = '';
  ['f-comp','f-sec','f-topic','f-year','f-marks','f-text'].forEach(id=>document.getElementById(id).value='');
  applyFilters();
}

function updateCount() {
  const v = questions.filter(q=>!document.getElementById('card-'+q.id)?.classList.contains('hidden')).length;
  document.getElementById('qCountBadge').textContent = `${v} question${v!==1?'s':''}`;
}

function onType(id, el) {
  const w = el.value.trim()===''?0:el.value.trim().split(/\s+/).length;
  document.getElementById('wc-'+id).textContent = w+' word'+(w===1?'':'s');
  answered[id] = el.value.trim().length>0;
  updateProgress();
}

function updateProgress() {
  const total = questions.length;
  const done = Object.values(answered).filter(Boolean).length;
  document.getElementById('progFill').style.width = (done/total*100)+'%';
  document.getElementById('progCount').textContent = `${done} of ${total} answered`;
}

function showMS(id) {
  const ms = document.getElementById('ms-'+id);
  ms.classList.add('visible');
  ms.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function toggleLv(id) {
  const el = document.getElementById('lv-'+id);
  if (el) el.classList.toggle('open');
}

function clearCard(id) {
  const ta = document.getElementById('ta-'+id);
  ta.value='';
  document.getElementById('wc-'+id).textContent='0 words';
  document.getElementById('ms-'+id).classList.remove('visible');
  const lv = document.getElementById('lv-'+id);
  if (lv) lv.classList.remove('open');
  document.querySelectorAll(`#card-${id} .sa-btn`).forEach(b=>b.classList.remove('selected'));
  answered[id]=false;
  updateProgress();
}

// RAG tracking
const ratings = {}; // id -> 'red'|'amber'|'green'

function toggleGuide() {
  const panel = document.getElementById('guidePanel');
  const btn = document.getElementById('guideToggle');
  panel.classList.toggle('open');
  btn.classList.toggle('open');
}

function toggleTip(id) {
  const panel = document.getElementById('tip-'+id);
  const btn = document.getElementById('tipbtn-'+id);
  if (!panel) return;
  panel.classList.toggle('visible');
  btn.classList.toggle('open');
}

function rate(btn) {
  const card = btn.closest('.q-card');
  const id = card.id.replace('card-','');
  card.querySelectorAll('.sa-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  if (btn.classList.contains('sa-btn-red'))   ratings[id] = 'red';
  if (btn.classList.contains('sa-btn-amber')) ratings[id] = 'amber';
  if (btn.classList.contains('sa-btn-green')) ratings[id] = 'green';
  updateRagBar();
}

function updateRagBar() {
  const vals = Object.values(ratings);
  const red   = vals.filter(v=>v==='red').length;
  const amber = vals.filter(v=>v==='amber').length;
  const green = vals.filter(v=>v==='green').length;
  const total = vals.length;
  document.getElementById('ragRed').textContent   = red;
  document.getElementById('ragAmber').textContent = amber;
  document.getElementById('ragGreen').textContent = green;
  // Show bar once anything is rated
  document.getElementById('ragBar').classList.toggle('visible', total > 0);
  // Enable button if there's anything to revise
  const btn = document.getElementById('btnRevise');
  btn.disabled = (red + amber) === 0;
  btn.textContent = (red+amber) > 0
    ? `Show ${red+amber} to revise`
    : 'Nothing to revise yet';
}

function openReviseModal() {
  const redIds   = Object.entries(ratings).filter(([,v])=>v==='red').map(([k])=>k);
  const amberIds = Object.entries(ratings).filter(([,v])=>v==='amber').map(([k])=>k);

  function makeItems(ids, emoji) {
    if (ids.length === 0) return '<p class="modal-empty">None</p>';
    return ids.map(id => {
      const q = questions.find(q => q.id === id);
      if (!q) return '';
      // Strip HTML tags for plain text preview
      const plainQ = q.question.replace(/<[^>]+>/g, '');
      const preview = plainQ.length > 80 ? plainQ.slice(0,80)+'…' : plainQ;
      return `<div class="revise-item" onclick="jumpTo('${id}')">
        <div class="revise-dot">${emoji}</div>
        <div class="revise-info">
          <div class="revise-q">${preview}</div>
          <div class="revise-meta">${q.year} · Component ${q.comp} · Section ${q.sec} · ${q.marks} mark${q.marks>1?'s':''} · ${q.topic}</div>
        </div>
        <div class="revise-arrow">↗</div>
      </div>`;
    }).join('');
  }

  const body = `
    <div class="modal-sec-label">🔴 Missed it — ${redIds.length} question${redIds.length!==1?'s':''}</div>
    ${makeItems(redIds,'🔴')}
    <div class="modal-sec-label">🟡 Partial — ${amberIds.length} question${amberIds.length!==1?'s':''}</div>
    ${makeItems(amberIds,'🟡')}
    <p class="modal-note">Click any question to jump to it. Re-rate yourself after another attempt — your list will update automatically.</p>`;

  document.getElementById('reviseModalBody').innerHTML = body;
  document.getElementById('reviseModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeReviseModal() {
  document.getElementById('reviseModal').classList.remove('open');
  document.body.style.overflow = '';
}

function jumpTo(id) {
  closeReviseModal();
  // Small delay so modal closes first
  setTimeout(() => {
    const card = document.getElementById('card-'+id);
    if (!card) return;
    // If the card is hidden by filters, reset filters first
    if (card.classList.contains('hidden')) {
      ['f-comp','f-sec','f-topic','f-year','f-marks'].forEach(fid => document.getElementById(fid).value='');
      applyFilters();
    }
    setTimeout(() => {
      card.scrollIntoView({behavior:'smooth', block:'center'});
      // Flash highlight
      card.style.outline = '2px solid var(--accent)';
      setTimeout(() => card.style.outline = '', 1500);
    }, 150);
  }, 200);
}


// ═══════════════════════════════════════════════════════════
// KEY TERMS — Official Eduqas GCSE Media Studies definitions
// ═══════════════════════════════════════════════════════════
const terms = [
  {term:"Action Code",cat:"Narrative",def:"Something in the narrative that signals action will follow — e.g. a scene where a couple are intimate and the camera shows a car pulling up outside. The audience anticipates what comes next."},
  {term:"Active Audience",cat:"Audience",def:"Audiences who actively engage in selecting media products and interpreting their meanings — rather than passively accepting whatever they are given."},
  {term:"Anchorage",cat:"Media Language",def:"Words (captions, headlines, voiceovers) that fix the meaning of an image and guide audiences toward a preferred reading. Without anchorage, an image is an open text — audiences can interpret it freely."},
  {term:"Appeal",cat:"Audience",def:"The way in which media products attract and interest an audience — e.g. through the use of stars, familiar genre conventions, or aspirational imagery."},
  {term:"Aspirational",cat:"Representation",def:"A media text that encourages the audience to want more money, upmarket consumer items and a higher social position."},
  {term:"Audience Categorisation",cat:"Audience",def:"How media producers group audiences (e.g. by age, gender, ethnicity, income) in order to target their products effectively."},
  {term:"Audience Consumption",cat:"Audience",def:"The way in which audiences engage with media products (e.g. viewing TV, playing a video game, reading a magazine). Methods of consumption have changed significantly due to digital technologies."},
  {term:"Audience Interpretation",cat:"Audience",def:"The way in which audiences read the meanings in, and make sense of, media products."},
  {term:"Audience Response",cat:"Audience",def:"How audiences react to media products — e.g. by accepting the intended meanings (preferred reading), negotiating them, or rejecting them (oppositional reading)."},
  {term:"Brand Identity",cat:"Industry",def:"The associations the audience make with a brand (e.g. Chanel, Nike), built up over time and reinforced by advertising campaigns and their placement."},
  {term:"Broadsheet",cat:"Media Language",def:"A larger newspaper that publishes more serious news — e.g. The Guardian, The Daily Telegraph."},
  {term:"Caption",cat:"Media Language",def:"Words that accompany an image and explain its meaning. A form of anchorage."},
  {term:"Channel Identity",cat:"Industry",def:"The aspects which make a channel recognisable to audiences and different from any other channel — including presenters, stars, programme genres and specific programmes."},
  {term:"Circulation",cat:"Industry",def:"The dissemination of media products — the method depends on the form, e.g. print run for magazines, broadcast reach for TV, streams for music."},
  {term:"Colloquial Language",cat:"Media Language",def:"Conversational language where words used are informal and different from written speech — used to create a friendly, accessible mode of address."},
  {term:"Commercial Channels",cat:"Industry",def:"Channels like ITV and Channel 4 that raise money through advertising, unlike the BBC which is funded by the licence fee."},
  {term:"Connotation",cat:"Media Language",def:"The suggested meanings attached to a sign — e.g. a red car in an advert suggests speed and power. Compare with denotation."},
  {term:"Conventions",cat:"Media Language",def:"What the audience expects to see in a particular media text — e.g. conventions of sci-fi films include aliens, scientists, gadgets, other worlds. Useful headings: characters, setting, iconography, narrative, technical codes, representation."},
  {term:"Convergence",cat:"Industry",def:"The coming together of previously separate media industries and/or platforms. A mobile phone, for example, allows users to download music, view videos and post on social media all in one device."},
  {term:"Cover Lines",cat:"Media Language",def:"Text on a magazine cover that suggests content to the reader — often containing teasers, rhetorical questions and enigmas to encourage purchase."},
  {term:"Cross-Platform Marketing",cat:"Industry",def:"A text that is distributed and exhibited across a range of media formats or platforms — including film, TV, print, radio and the internet."},
  {term:"Demographic Category",cat:"Audience",def:"A group in which consumers are placed according to age, sex, income, profession etc. Categories range from A (wealthiest) to E."},
  {term:"Denotation",cat:"Media Language",def:"The description of what you can literally see or hear in a media text — e.g. the car in the advert is red. Compare with connotation."},
  {term:"Diegetic Sound",cat:"Media Language",def:"Sound that comes from the world of the narrative and could be heard by the characters — e.g. a gun firing, dialogue, a door slamming."},
  {term:"Disruption",cat:"Narrative",def:"In Todorov’s theory, this is what changes the balance in the story world — a character or event that breaks the equilibrium."},
  {term:"Distribution",cat:"Industry",def:"The methods by which media products are delivered to audiences, including the marketing campaign — e.g. distribution companies in the film industry organise the release of films."},
  {term:"Diversification",cat:"Industry",def:"Where media organisations who have specialised in one form move into producing content across a range of forms — e.g. a record label launching a streaming service."},
  {term:"Encoding and Decoding",cat:"Audience",def:"Media producers encode messages and meanings into products; audiences decode (interpret) them. Stuart Hall identified three reading positions: preferred, negotiated and oppositional."},
  {term:"Enigma Code",cat:"Narrative",def:"A narrative device that increases tension and audience interest by only releasing bits of information — e.g. teasers in a film trailer. Barthes’ term for narrative questions that keep audiences hooked."},
  {term:"Equilibrium",cat:"Narrative",def:"In Todorov’s narrative theory, a state of balance or stability. The equilibrium is disrupted and eventually restored (as a new equilibrium) across the narrative."},
  {term:"Fan",cat:"Audience",def:"An enthusiast or aficionado of a particular media form or product — often part of active fan communities online."},
  {term:"Four Cs",cat:"Audience",def:"Cross Cultural Consumer Characteristics — a way of categorising consumers by motivational needs. Main groups: Mainstreamers, Aspirers, Explorers, Succeeders and Reformers."},
  {term:"Franchise",cat:"Industry",def:"An entire series of related media products — e.g. a film including the original and all sequels, spin-offs and related merchandise."},
  {term:"Gatekeepers",cat:"Industry",def:"The people responsible for deciding which stories appear in newspapers — owners, editors or senior journalists who control what passes through the gate."},
  {term:"Genre",cat:"Media Language",def:"Media texts can be grouped into genres that share similar conventions. Science fiction is a genre, as are teenage magazines and crime dramas."},
  {term:"Global",cat:"Industry",def:"Worldwide — a media product with global reach is distributed around the world, often via digital platforms."},
  {term:"House Style",cat:"Media Language",def:"What makes a media product recognisable to its audience across every issue or episode — established through colour palette, layout, font style, content and general look."},
  {term:"Hybrid Genre",cat:"Media Language",def:"Media texts that incorporate elements of more than one genre — e.g. Doctor Who combines science fiction and fantasy."},
  {term:"Iconography",cat:"Media Language",def:"The props, costumes, objects and backgrounds associated with a particular genre — e.g. in a police drama: uniforms, blue flashing lights, crime scene tape, police radios."},
  {term:"Independent Film",cat:"Industry",def:"A film made outside the financial and artistic control of a large film company — typically made by a smaller company on a lower budget."},
  {term:"Independent Record Label",cat:"Industry",def:"A record label that operates without the funding of and not necessarily linked to a major record label."},
  {term:"Intellectual Property",cat:"Industry",def:"A legal concept referring to creations of the mind — including music, literary and artistic works, inventions, words, phrases, symbols and designs — for which the owner’s rights are recognised."},
  {term:"Interactive Audience",cat:"Audience",def:"Ways in which audiences can actively participate with a product — e.g. posting a response to a blog, live tweeting during a TV programme, or playing a video game."},
  {term:"Intertextuality",cat:"Media Language",def:"Where one media product makes reference to aspects of another text — e.g. a music video recreating visual codes from a film. Audiences enjoy recognising these references."},
  {term:"Layout and Design",cat:"Media Language",def:"The way in which a page has been designed to attract the target audience — including font styles, positioning of text and images, and use of colour."},
  {term:"Linear Narrative",cat:"Narrative",def:"A narrative that unfolds in chronological order from beginning to end."},
  {term:"Mainstream",cat:"Industry",def:"Media products that are the most popular and tend to be the most conventional — targeting mass audiences."},
  {term:"Marketing",cat:"Industry",def:"The way in which an organisation tells its audience about a product — using trailers, posters, social media, interviews and other promotional methods."},
  {term:"Masculinity",cat:"Representation",def:"The perceived characteristics generally considered to define what it is to be a man — these differ according to social, cultural and historical contexts."},
  {term:"Mass Audience",cat:"Audience",def:"The traditional idea of the audience as one large, homogeneous group — now largely replaced by more fragmented audience models."},
  {term:"Masthead",cat:"Media Language",def:"The title and design of the title of a magazine or newspaper. The name and font style may give a clue to the genre and tone."},
  {term:"Media Conglomerate",cat:"Industry",def:"A company that owns other companies across a range of media platforms — increasing their domination of the market and their ability to produce, distribute and exhibit content."},
  {term:"Media Forms",cat:"Industry",def:"Types of media products — e.g. television, newspapers, music videos, video games, social media."},
  {term:"Media Language",cat:"Media Language",def:"The specific elements of a media product that communicate meanings to audiences — including visual codes, audio codes, technical codes and written language."},
  {term:"Media Platform",cat:"Industry",def:"The range of different ways of communicating with an audience — e.g. newspapers, the internet, television, radio, social media."},
  {term:"Mediation",cat:"Representation",def:"The way in which a media text is constructed to represent the producer’s version of reality — through selection, organisation and focus. All media is mediated, not a neutral window onto the world."},
  {term:"Mise-en-Scène",cat:"Media Language",def:"In analysis of moving image, how the combination of elements in the frame creates meaning — including setting, lighting, costume, props and performance."},
  {term:"Misrepresentation",cat:"Representation",def:"Where certain social groups (usually minorities) are represented in a way that is inappropriate and not based on reality."},
  {term:"Mode of Address",cat:"Media Language",def:"The way in which a media text speaks to its target audience — e.g. teenage magazines use a chatty, informal mode of address; news programmes use a more formal one."},
  {term:"Narrative",cat:"Narrative",def:"The story told by a media text. All media texts have a narrative — magazines have a clear beginning, middle and end. Most narratives follow a structure that can be analysed using Todorov’s theory."},
  {term:"News Agenda",cat:"Industry",def:"The list of stories that appear in a particular paper — reflecting the style, ethos and ideology of that publication."},
  {term:"Niche Audience",cat:"Audience",def:"A relatively small audience with specialised interests, tastes and backgrounds — as opposed to a mass audience."},
  {term:"Non-Diegetic Sound",cat:"Media Language",def:"Sound that comes from outside the world of the narrative — e.g. a voiceover, a music score, sound effects added in post-production."},
  {term:"Non-Linear Narrative",cat:"Narrative",def:"A narrative that manipulates time and space — beginning in the middle, including flashbacks, flash-forwards or other non-chronological devices."},
  {term:"Opinion Leaders",cat:"Audience",def:"People in society who may affect the way others interpret a media text — e.g. celebrities, influencers or experts endorsing a product."},
  {term:"Passive Audience",cat:"Audience",def:"The idea (now widely regarded as outdated) that audiences do not actively engage with media products but simply consume and accept the messages producers communicate. Associated with the Hypodermic Needle model."},
  {term:"Persona",cat:"Representation",def:"The image or personality that someone (e.g. a celebrity) presents to the audience — often carefully constructed and managed."},
  {term:"Personal Identity",cat:"Audience",def:"Your ability to relate to something in a media text because it has happened to you — one of Blumler and Katz’s four audience gratifications."},
  {term:"Political Bias",cat:"Industry",def:"Where a newspaper shows support for a political party through its choice of stories, style of coverage, cartoons etc. — can be subtle or very explicit."},
  {term:"Privileged Spectator Position",cat:"Media Language",def:"Where the camera places the audience in a superior position within the narrative — allowing the audience to anticipate what will follow."},
  {term:"Production Values",cat:"Industry",def:"The elements of a text that tell the audience how much it cost to make — e.g. big-name stars, expensive locations or special effects signal high production values."},
  {term:"Public Service Broadcaster",cat:"Industry",def:"A broadcaster that is independent of government, financed by public money, and offers a public service by catering for a range of tastes — e.g. the BBC."},
  {term:"Realism",cat:"Representation",def:"A style of presentation that claims to portray real life accurately and authentically."},
  {term:"Red Top",cat:"Media Language",def:"A British newspaper with its name printed in red at the top of the front page — e.g. The Sun. Tends to focus on celebrity gossip, sport and entertainment rather than serious news."},
  {term:"Regulator",cat:"Industry",def:"A person or body that supervises a particular industry — e.g. Ofcom regulates TV and radio; the BBFC regulates film."},
  {term:"Repertoire of Elements",cat:"Media Language",def:"The key features that distinguish one genre from another — the set of codes and conventions audiences expect from a particular genre."},
  {term:"Representation",cat:"Representation",def:"The way in which key sections of society are presented by the media — e.g. gender, race, age, the family. Representations are constructed, not neutral reflections of reality."},
  {term:"Rhetorical Question",cat:"Media Language",def:"A question asked for effect where no answer is expected — used in magazines and advertising to engage the audience in self-reflection."},
  {term:"Selection and Combination",cat:"Media Language",def:"Media producers actively choose elements of media language and place them alongside others to create specific representations or versions of reality."},
  {term:"Sexual Objectification",cat:"Representation",def:"The practice of regarding a person as an object to be viewed only in terms of their sexual appeal. Associated with Mulvey’s male gaze theory."},
  {term:"Sign / Code",cat:"Media Language",def:"Something which communicates meaning — e.g. colours, sounds, images. The meaning of a sign may change according to context: red can mean passion, love, danger or speed depending on how it is used."},
  {term:"Specialised Audience",cat:"Audience",def:"A non-mass, or niche, audience — defined by a particular social group or a specific interest (e.g. skydiving enthusiasts, gaming communities)."},
  {term:"Splash",cat:"Media Language",def:"The story given the most prominence on the front page of a newspaper — the main lead story."},
  {term:"Stereotype",cat:"Representation",def:"An exaggerated representation of a person or group, associating them with a fixed set of characteristics. Stereotypes can be quick ways of communicating information but can also be harmful and reductive."},
  {term:"Stripped",cat:"Industry",def:"A technique in radio and TV whereby a programme is broadcast at the same time every day — building audience habit and routine."},
  {term:"Sub-Genre",cat:"Media Language",def:"Where a large genre is sub-divided into smaller genres, each with its own set of conventions — e.g. television drama sub-genres include teen drama, hospital drama, costume drama."},
  {term:"Subject-Specific Lexis",cat:"Media Language",def:"The specific language and vocabulary used to engage a particular audience — e.g. terminology on gaming magazine covers makes readers feel part of that community."},
  {term:"Synergy",cat:"Industry",def:"The combination of elements to maximise profits within a media organisation — e.g. where a film soundtrack sells the film and the film sells the soundtrack. Disney’s Marvel films and merchandise are a key example."},
  {term:"Tabloid",cat:"Media Language",def:"A smaller, more compact newspaper format — also connotes a focus on lighter news such as celebrity gossip, sport and television (e.g. The Sun, The Mirror)."},
  {term:"Tagline",cat:"Media Language",def:"The short phrase or slogan that appears in trailers and on posters — gives a clue to the genre and storyline of the film, often using an enigma to create intrigue."},
  {term:"Target Audience",cat:"Audience",def:"The people at whom a media text is specifically aimed — identified through demographics, psychographics or specialised interests."},
  {term:"Technical Codes",cat:"Media Language",def:"The way in which a text has been produced to communicate meanings — including camera shots and angles, editing, lighting and sound. Part of media language."},
  {term:"Underrepresentation",cat:"Representation",def:"Where certain social groups (usually minorities) are rarely represented or completely absent from media products."},
  {term:"Uses and Gratifications Theory",cat:"Audience",def:"Blumler and Katz’s theory that active audiences seek out different media texts to satisfy specific needs: Diversion, Personal Identity, Personal Relationships and Surveillance."},
  {term:"Vertical Integration",cat:"Industry",def:"Where a company owns all or most of the chain of production for its product — e.g. a film company that also owns cinemas and merchandise outlets, controlling production, distribution and exhibition."},
  {term:"Viewpoints",cat:"Representation",def:"Different perspectives in relation to values, attitudes, beliefs or ideologies — media texts always encode particular viewpoints."},
  {term:"Viral Marketing",cat:"Industry",def:"Where awareness of a product spreads through unconventional means including social networks and the internet — spreading rapidly like a biological virus through hosts."},
  {term:"Visual Codes",cat:"Media Language",def:"The visual aspects of a media product that construct meaning — including clothing, expression, gesture, colour, layout and iconography."}
];

const categories = ['All', ...new Set(terms.map(t => t.cat))];
let activeCategory = 'All';

function buildTermsTab() {
  const container = document.getElementById('termsContent');
  const total = terms.length;

  // Category pills
  const pillHTML = categories.map(c =>
    `<button class="cat-pill ${c==='All'?'active':''}" onclick="filterCat('${c}',this)">${c}</button>`
  ).join('');

  container.innerHTML = `
    <p class="fc-intro">Tap any card to reveal the official Eduqas definition. Use the filters or search to find specific terms.</p>
    <input class="fc-search" id="fcSearch" type="text" placeholder="Search terms..." oninput="searchTerms(this.value)">
    <div class="fc-cat-filter">${pillHTML}</div>
    <div class="fc-stats" id="fcStats">${total} terms</div>
    <div class="fc-grid" id="fcGrid">
      ${terms.map((t,i) => `
        <div class="flashcard" id="fc-${i}" data-cat="${t.cat}" onclick="this.classList.toggle('flipped')">
          <div class="fc-inner">
            <div class="fc-front">
              <div class="fc-category">${t.cat}</div>
              <div class="fc-term">${t.term}</div>
              <div class="fc-hint">tap to reveal</div>
            </div>
            <div class="fc-back">
              <div class="fc-def">${t.def}</div>
            </div>
          </div>
        </div>`).join('')}
    </div>`;
}

function filterCat(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  applyTermFilters();
}

function searchTerms(val) {
  applyTermFilters(val);
}

function applyTermFilters(searchVal) {
  const search = (searchVal !== undefined ? searchVal : (document.getElementById('fcSearch')||{}).value||'').toLowerCase();
  let visible = 0;
  terms.forEach((t, i) => {
    const card = document.getElementById('fc-'+i);
    if (!card) return;
    const catMatch = activeCategory === 'All' || t.cat === activeCategory;
    const searchMatch = !search || t.term.toLowerCase().includes(search) || t.def.toLowerCase().includes(search);
    if (catMatch && searchMatch) { card.classList.remove('fc-hidden'); visible++; }
    else card.classList.add('fc-hidden');
  });
  const stats = document.getElementById('fcStats');
  if (stats) stats.textContent = visible + ' term' + (visible!==1?'s':'');
}


// ═══════════════════════════════════════════════════════════
// EXAMPLE ANSWERS DATA
// All student responses anonymised. Names replaced with Student A/B etc.
// 2024 C1 exam: Guardian front cover (Q1), Man With The Golden Gun + Spy poster (Q2),
//               Archers (Q3 Industry), Fortnite (Q4 Audience)
// 2022 C1 exam: This Girl Can (Q1), Pride + Essence magazines (Q2),
//               Spectre (Q3 Industry), Fortnite (Q4 Audience)
// ═══════════════════════════════════════════════════════════

const examples = [

// ─── COMPONENT 1 SECTION A ──────────────────────────────────────────────────
{
  section:"Component 1 \u2014 Section A: Media Language & Representation",
  items:[
    {
      qref:"Q1(a) \u2014 Media Language",
      question:"Explore how this front page uses media language to communicate meanings: (a) Layout and design [5 marks]",
      year:"2024",paper:"C1",marks:"5",maxMarks:5,
      top:{
        grade:"Grade 9",mark:"5/5",student:"Student A",
        examiner:"Excellent, detailed analysis. Consistent focus on the connotations or intended meanings of specific elements.",
        response:"The large dominant image of Boris Johnson is placed centrally to provide anchorage to the main story, positioning readers to see the Partygate scandal as the defining issue of the edition. The formal column layout with multiple cover lines uses a typical broadsheet structure to signal credibility and seriousness, while the bold Guardian masthead \u2014 with its distinctive font and colour \u2014 reinforces a strong brand identity that long-term readers would immediately recognise. The G2 skyline cover line at the top offers a colourful contrast to the sombre main stories, reflecting The Guardian\u2019s appeal to both news enthusiasts and cultural readers. The higher balance of copy to image throughout is typical of quality broadsheet design and assumes a literate, engaged readership interested in detailed journalism rather than sensationalism.",
        worked:["Identifies specific layout features with clear connotations rather than just describing them","Links choices to target audience (literate, engaged readers)","Uses terminology accurately: anchorage, masthead, cover lines, broadsheet conventions","Explains WHY each choice matters, not just what it is"],
      },
      mid:{
        grade:"Grade 6",mark:"3/5",student:"Student B",
        examiner:"Satisfactory analysis. General focus on connotations or meanings created, but lapses into description.",
        response:"The Guardian newspaper is left-wing and Labour Party so there is more writing than images for the higher class audiences, who have a higher education and are richer. This shows the audience\u2019s knowledge. The texts have big subheadings in serif font to indicate what the column underneath would be about. There is an image of Boris Johnson looking scruffy as the Labour party opposes the Conservative party. There are images at the top which engages with higher class people as it is about the office.",
        worked:["Identifies the text-heavy layout and links it to audience type","Mentions the central image and its significance"],
        improve:["Describes what is there rather than explaining what it connotes \u2014 e.g. \u2018Boris Johnson is looking scruffy\u2019 needs to become \u2018the dishevelled image of Boris Johnson connotes...\u2019","Some points are inaccurate or irrelevant \u2014 linking layout to political leaning without explanation loses marks","Terminology is limited \u2014 no use of words like anchorage, masthead, house style"],
      },
    },
    {
      qref:"Q1(b) \u2014 Media Language",
      question:"Explore how this front page uses media language to communicate meanings: (b) Images [5 marks]",
      year:"2024",paper:"C1",marks:"5",maxMarks:5,
      top:{
        grade:"Grade 9",mark:"5/5",student:"Student A",
        examiner:"Excellent, detailed analysis. Consistent focus on connotations or intended meanings of specific elements.",
        response:"The main image of Boris Johnson is used as the primary anchor for the Partygate story \u2014 his expression connotes a man under pressure who is unable to maintain the serious, authoritative persona expected of a Prime Minister. The subheading \u2018PM bows to pressure\u2019 is placed directly beneath this image, using anchorage to fix the meaning: the visual and verbal codes together construct a narrative of political failure and accountability. The C-3PO and R2D2 imagery in the top section creates a deliberate binary opposition to the serious lead story, functioning as a light-hearted \u2018tease\u2019 to broaden the appeal of the front page beyond pure news. The yellow smiling face icon for the rave culture story similarly codes that section as entertaining and nostalgic rather than serious \u2014 reinforcing The Guardian\u2019s identity as a paper that balances quality journalism with cultural appeal.",
        worked:["Uses \u2018anchorage\u2019 precisely and correctly to explain how image and text work together","Analyses specific images and explains their connotations rather than describing their content","Makes the binary opposition between serious news images and lighter teasers explicit","Links visual choices to The Guardian\u2019s brand identity"],
      },
      mid:{
        grade:"Grade 6",mark:"4/5",student:"Student C",
        examiner:"Good, reasonably detailed analysis. Focus on connotations or intended meanings.",
        response:"The main image of Boris Johnson shows the meaning that Boris Johnson is insecure about his job as the prime minister. This is because he is wearing informal clothing such as fish shorts and a cap on backwards with office shoes, showing he cannot look after his appearance, so how would he look after the country. This shows the Conservative party in bad light as the leader of the party looks like a Joke as he is on a nightrun with his dog. The subheading \u2018cunning accuses PM of lying over No 10 party\u2019 shows that while Boris Johnson told everyone to stay at home during lockdown, he was having parties at Downing Street. This creates the meaning that Boris Johnson is a liar and deceives the public, whereas political leaders should have trust from the public.",
        worked:["Analyses the image of Boris Johnson with good detail and clear connotations","Makes strong point about the political meaning \u2014 linking informal dress to incompetence","Connects the image to the subheading effectively"],
        improve:["Repeats \u2018shows the Conservative party in bad light\u2019 without developing it further","Could use more precise terminology: mode of address, visual codes, anchorage"],
      },
    },
    {
      qref:"Q2(a) \u2014 Context",
      question:"Explain how political contexts influence magazines. Refer to Pride magazine to support your points. [5 marks]",
      year:"2022",paper:"C1",marks:"5",maxMarks:5,
      top:{
        grade:"Grade 9",mark:"5/5",student:"Student A",
        examiner:"Excellent, detailed and accurate knowledge. Highly appropriate reference to the set product.",
        response:"Pride magazine derives its name from \u2018black pride\u2019, a term frequently used during the Civil Rights Movement, and is now used as a magazine to empower black women, staying true to its origin. The magazine is a niche product targeted at a black female audience as historically there has been little to no representation of black women on mainstream platforms \u2014 now they have a place not only to feel represented but to have a voice. The magazine covers both political and cultural issues relevant to black females such as \u2018FGM on Harley Street\u2019, showing that political context \u2014 specifically the marginalisation of black women in both the media and in political discourse \u2014 has directly shaped the magazine\u2019s content, ethos and editorial choices.",
        worked:["Opens with a specific, accurate point about the name and its political origin","Links directly to the Civil Rights Movement \u2014 solid historical/political context","Explains how the lack of representation of black women in media is a political issue that shaped Pride","Uses a specific cover line (\u2018FGM on Harley Street\u2019) as textual evidence"],
      },
      mid:{
        grade:"Grade 6",mark:"4/5",student:"Student D",
        examiner:"Good, accurate knowledge and understanding. Appropriate reference to GQ magazine.",
        response:"Cultural context affects magazines such as GQ as it is due to changing attitudes to worry. This can be seen through the empowerment of human men which has now increased the social acceptance among men. There is more focus on men who have more muscle for their looks \u2014 this can be seen through a GQ who now try and bring back more ideologies by making people on the cover such as Dwayne Johnson far more masculine and dominant. Reinforce stereotypes about men being strong which may also be accepted in other areas of media.",
        worked:["Shows accurate knowledge of how cultural context shapes magazine content","Makes appropriate reference to GQ and the representation of masculinity","Demonstrates understanding of how magazines reflect changing social attitudes"],
        improve:["Response is about GQ rather than Pride \u2014 always answer about the set text named in the question","The point about masculinity is valid but would be stronger with a specific cover line or visual feature as evidence","Needs to link cultural context more explicitly to specific editorial choices"],
      },
    },
    {
      qref:"Q2(b) \u2014 Representation",
      question:"Compare the representation of ethnicity in the Pride and Essence front covers. [25 marks]",
      year:"2022",paper:"C1",marks:"25",maxMarks:25,
      top:{
        grade:"Grade 9",mark:"25/25",student:"Student A",
        examiner:"Excellent, detailed analysis of both products. Excellent, consistent use of the theoretical framework. Excellent, well-reasoned judgements and conclusions.",
        response:`The representation of ethnicity in both magazines is shown through the diversity of the main star on the main image. Both magazines feature black celebrities which in itself is a representation of minority ethnicities and portrays a more diverse society where people from the BAME community are now being represented in the media, whereas previously there was no positive representation for black people. However, it can be argued that the representation of ethnicity is limited due to the celebrities' attire and hair. Both Naomi Harris and Michelle Obama appear to have had their hair altered either by wearing a wig or by straightening, curling it. This conforms to the western European beauty standards and rather than embracing their natural hair and showcasing their culture, the editors have chosen to make them conform to white stereotypes, consequently restricting the amount of representation shown.

However, unlike Essence, Pride does cater to topics relevant to ethnic minorities. We see this in the cover line 'FGM on Harley Street' which is an issue prevalent amongst the black community, as well as the cover line 'Wig revolution is Here!' again applicable to black women mainly. Showing that not only is Pride magazine representative of ethnicity within its celebrities but also with the contents of the topics it discusses. However, the same simply cannot be said for Essence as the cover lines discuss beauty tips '27 beauty and style wins' as well as lifestyle topics 'how to be more productive at home'. All of the cover lines mentioned are not specific nor representative of any ethnicities, but rather universal to all.

Furthermore, Naomi Harris is placed against a white background with a white dress. The contrast of the white against her skin colour highlights her melanin and allows her race to stand out to the audience, not only informing audiences that this is a magazine for black women but allowing her ethnicity to stand out and get the positive representation it deserves. However in Essence, not only is their ethnicity not showcased, but the editors' choice of colours for both the background and the cover lines washes out their skin colour and ethnicity. In conclusion, whilst both magazines make some effort to represent ethnicity through their choice of cover star, Pride is substantially more successful in doing so through both the content of its cover lines and the visual choices made by its editors.`,
        worked:["Opens with a point that applies to both magazines before developing nuance","Makes a sophisticated argument: black celebrities are present but conformity to western beauty standards limits the representation","Analyses specific cover lines as evidence","Makes a strong analytical point about the white background in Pride highlighting Naomi Harris\u2019s melanin","Reaches a clear, well-reasoned conclusion that directly answers the question"],
      },
      mid:{
        grade:"Grade 8",mark:"24/25",student:"Student B",
        examiner:"Excellent, detailed analysis of the set and unseen media products. Excellent comparisons. Excellent use of theoretical framework. Excellent judgements and conclusions.",
        response:`In the GQ magazine 2016 issue, men are presented as being more strong and dominant, which may give other men the urge to be more masculine through the use of toxic masculinity in its headlines. This is demonstrated through 'Man Step Up! How to be a man in 2016.' This suggests that it could be seen as unacceptable to be a person and feminine but rather strong and manly. This is reinforced by 'I live not as hard as you think.' This demonstrates the idea that his daily life is very caring and anyone can do it, which is trying to reinforce the idea of more it \u2014 you are not masculine, you do not live like this. The full page then letters are due to highlight the importance of a bit to the audience, who then have to accept and try to implement the ideas due to them in direct contact of GQ. Johnson on men to pursue then he power and dominance. Men would. Through the air of Dwayne Holding his mouth minuter.

In the GQ magazine cover for 2021 through, men are presented as much more intelligent, smart and organised. This is seen through the air of Tom Holland adjusting his tie as if he is getting ready for an important event. This made him and hand men as being wealthy and confident able to the black suit and tie. This presentation made men a more intellectual and smart light, presenting men as being knowledgeable and presentable. The most suit is able to tell us about me his world in country which may also be significant as he appears to be of a higher and more rich class, which could attract middle aged and young men who are fond of that lifestyle.

Furthermore, the GQ magazine of 2016 and 2021 may be similar because both men are seen to possess uphold power and are both accordingly confident and masculine. However their portrayal is clearly and seem both seem like purposeful men. These both men now they are presented the same in GQ for 2016 and 2021 as they are both extremely successful actors and are seen on as major protagonists in major role models for men. However, men are presented differently in GQ for 2016 and 2021 as in GQ for 2016, traditional headlines are more typical of improvement to become a better man, however in GQ for 2021, it contains more typical headlines addressing male problems that may be considered less normal to be talked about due to the idea of toxic masculinity and the stereotype that all men are strong. This can be seen through 'Special Rule man, body and masculinity' whereas in GQ for 2021 it addresses 'Domestic about me not hidden pandemic.' Therefore, although through GQ of 2016 it reinforces this by covering up strict rules like Mu to give a more updated masculine feel. Therefore, even though GQ at a GQ of 2016 and GQ of 2021 have some similarities, the differences are much more prominent and heavily weighing, showing that in 2016 GQ for 2016, men are much more objectified and seen as emotional but strong. However in GQ for 2021, men are seen as well less objectified and uncovers most problems with a more domestic about which had only talked about enough.`,
        worked:["Analyses both GQ covers in detail and compares them effectively","Makes a sophisticated point about how GQ 2021 addresses previously taboo male issues like mental health","Uses the theoretical framework: male gaze, toxic masculinity, representation theory","Reaches well-reasoned judgements and conclusions about how representations have changed","Identifies the shift from 2016 (objectified, macho) to 2021 (more nuanced, emotional) as a key difference"],
        improve:["Some sentences are unclear or incomplete \u2014 slower, more precise writing would push this to 25/25","Could more explicitly name theoretical perspectives (e.g. Mulvey\u2019s male gaze, Hall\u2019s representation theory)","The conclusion could be more clearly signposted"],
      },
    },
  ]
},

// ─── COMPONENT 1 SECTION B ──────────────────────────────────────────────────
{
  section:"Component 1 \u2014 Section B: Industries & Audiences",
  items:[
    {
      qref:"Q3(d) \u2014 Industry Extended",
      question:"Explain how a film\u2019s website can be used to promote the film. Refer to the Spectre/007 website to support your points. [12 marks]",
      year:"2022",paper:"C1",marks:"12",maxMarks:12,
      top:{
        grade:"Grade 9",mark:"12/12",student:"Student A",
        examiner:"Excellent, detailed and accurate knowledge. Excellent reference to the set product. Highly appropriate use of subject-specific terminology.",
        response:"A website can be used to promote the film in various ways, the first being through brand deals. On the 007 website there are links to the \u2018Omega\u2019 watch which partnered with Spectre to promote the film. Also on the website is a page where fans can read up on information on the Aston Martin, where car lovers who are interested in the actors may therefore take a liking to Spectre or become intrigued to see the film. Another way websites can promote the film is through trailers \u2014 on the 007 website there you can find the most recent trailer which would entice fans and get them excited for the release. A similar convention is the behind the scenes footage \u2014 also on the 007 website there is a page where BTS footage can be found with information about the making of Spectre which subsequently intrigue fans more as they would want to see the action come to life. Furthermore, one of the features on the 007 homepage is the latest news which gives news about the latest and upcoming films, this would only again excite fans and may motivate them to go see the movie. Furthermore, there is also a page on the 007 website which has information on the whole Bond franchise, starting with the first Bond movie released. This may attract new fans to the franchise or motivate pre-existing fans to revisit old Bond films.",
        worked:["Uses specific features of the 007 website as evidence: Omega watch partnership, Aston Martin page, BTS footage, trailers, franchise history page","Explains WHY each feature works as promotion \u2014 not just listing what is there","Shows awareness of different audience segments (car lovers, watch fans, existing fans, new fans)","Uses subject-specific terminology: brand deals, synergy (implied), convergence"],
      },
      mid:{
        grade:"Grade 5",mark:"5/12",student:"Student B",
        examiner:"Satisfactory, generally accurate knowledge. Satisfactory, generally appropriate reference to the set product.",
        response:"One way in which the BBC use different platforms to distribute radio programmes is through their website. The Archers can many people may use BBC\u2019s website to have some audio available and listen to the Archers and it could potentially be noticed. One another way in which the BBC use different platforms to distribute the radio programmes is through social media. This is because many people on platforms such as Twitter may be recommended to Archers and it could be a Satisfactory, generally appropriate recommendation in their page, it may follow similar soap opera type content. Another way in which the BBC use different platforms to distribute the Archers is through the radio channel. This is because the BBC also has their radio channels, so the Archers could be advertised on these in more different channels, attracting new radio listeners from other channels.",
        worked:["Shows knowledge of multiple distribution platforms: website, social media, radio channels","References The Archers specifically as the set product","Mentions BBC iPlayer as a platform"],
        improve:["This response is about radio distribution, not about a film website \u2014 must answer the question set","Even on its own terms, points need more development: state the platform, explain HOW it promotes, give a specific example from the 007/Spectre website","1 mark = 1 minute \u2014 a 12-mark question needs a substantial, multi-point response"],
      },
    },
    {
      qref:"Q4(c) \u2014 Audience Extended",
      question:"Explain why users visit the Fortnite website. Refer to the Uses and Gratifications theory in your answer. [12 marks]",
      year:"2022",paper:"C1",marks:"12",maxMarks:12,
      top:{
        grade:"Grade 9",mark:"11/12",student:"Student A",
        examiner:"Excellent, detailed and accurate knowledge of audiences. Excellent understanding. Detailed and accurate reference to Uses and Gratifications theory. Excellent subject-specific terminology.",
        response:"The Uses and Gratifications theory suggests that there are four main reasons that an audience may interact with a media: personal identification, information, entertainment and social interaction. A person may initially visit the Fortnite website as they can personally identify with its fun, funny nature. For example the website is filled with vibrant colours, and abstract shapes such as paint splatters which makes a person\u2019s experience all the more enjoyable. A person may also visit the website for information \u2014 on the Fortnite website viewers can see \u2018latest news\u2019 of when new skins or collaborations are coming out. A person may also visit Fortnite\u2019s website for entertainment purposes to purchase better equipment or skins. On Fortnite website a person can make a micro-transaction to buy V-bucks which buys them new weapons, skins and dance moves. This provides them better entertainment in gameplay as they then have something new to test out. Lastly a person may visit the Fortnite website for the purpose of socially interacting. On there is a feedback box where players can voice their concerns on the game, someone can make suggestions about a game or even give negative feedback on what they don\u2019t like. This allows interaction on the website and players to have a voice.",
        worked:["Opens by naming all four Uses and Gratifications gratifications \u2014 shows theoretical knowledge","Works systematically through the theory with one clear Fortnite example per gratification","Uses specific website features as evidence: vibrant colours, \u2018latest news\u2019, micro-transactions, V-bucks, feedback box","Shows understanding of WHY each feature satisfies a specific audience need"],
      },
      mid:{
        grade:"Grade 6",mark:"6/12",student:"Student B",
        examiner:"Satisfactory, generally accurate knowledge. Satisfactory understanding of audiences, though understanding of why they use the set product is less developed.",
        response:"Audiences may want to play video games such as Fortnite because of personal satisfaction, so if the game is easy for a player and they constantly winning, the player may be happy and satisfied with their wins and scores which would motivate them to play even more. However some parents may think Fortnite is too addictive as children could play too much and get less sleep. Another reason why some audiences may play Fortnite is to retrieve information because Fortnite is a multiplayer game, players can socialise and build from waving skills, also learn about cars and engines as there are loads of vehicles in Fortnite. Furthermore some players and uses may play Fortnite to entertain themselves as children could be stressed in life so to escape reality they play Fortnite to keep themselves busy and distract them from the real world.",
        worked:["Covers the key gratifications: entertainment, diversion, social interaction, surveillance","Makes some connection to real audience behaviour","Shows awareness that Fortnite has a social dimension"],
        improve:["Needs to refer specifically to the FORTNITE WEBSITE, not just the game itself \u2014 the question asks about website visits","Does not name Uses and Gratifications theory explicitly \u2014 must use the theory by name","Points need the structure: name the gratification \u2192 explain how Fortnite/the website fulfils it \u2192 give a specific website example"],
      },
    },
  ]
},

// ─── COMPONENT 2 SECTION A ──────────────────────────────────────────────────
{
  section:"Component 2 \u2014 Section A: Television",
  items:[
    {
      qref:"Q1(a) \u2014 TV Representation",
      question:"Explore the representations of gender in this extract. [10 marks]",
      year:"2024",paper:"C2",marks:"10",maxMarks:10,
      top:{
        grade:"Grade 9",mark:"10/10",student:"Student A",
        examiner:"Excellent, detailed analysis. Consistent focus on how representations of gender are constructed.",
        response:"At the beginning of the extract, Luther tells his partner to go, which is typical as men are portrayed as powerful and don\u2019t need support. Although Jess conforms as he should leave, this subverts stereotypes as men shouldn\u2019t show emotion. As soon as Luther gets to the door he starts banging on the door, ringing the door bell with no patience. This shows that men are aggressive and get angry easily, which conforms to stereotypes. However, Zoe\u2019s reaction was very quick \u2014 she knew something could go wrong and immediately called the police. This subverts stereotypes as it was believed women aren\u2019t as quick to think in these situations, and the Zoe\u2019s new man \u2014 kind of conditions. Luther shows that men are violent and out of control: first they punch and choke each other and then Luther gets aggressive with policemen that are trying to help. Luther still has his ring on and tells Zoe \u2018I still love you, I\u2019m sorry\u2019 which is not typical as men are meant to be closed off and less expressive. Zoe started crying which shows women are weak and could also she needed protection from a man which is super stereotypical. Even after Zoe and Luther aren\u2019t together he hugged her and kissed her as if they were, which shows men are controlling and can\u2019t accept their mistakes.",
        worked:["Analyses specific moments from the extract with precise detail","Considers both conventional and subversive representations of gender","Uses theoretical language: stereotypes, subverts, gender roles","References specific character actions and dialogue as evidence","Explores both male (Luther) and female (Zoe) characters"],
      },
      mid:{
        grade:"Grade 6",mark:"8/10",student:"Student B",
        examiner:"Good, reasonably detailed analysis. Consistent focus on how representations of gender are constructed. Good use of subject-specific terminology.",
        response:"In the office Luther and Rose took off their jackets suggesting they are hard at work. Jan is also in a suit showing his professionalism. The UK\u2019s multicultural society \u2014 more women now also seek work and go after higher levels of education which links to Zoe being a lawyer and Alice having great academic achievements at a young age. More positive female representation is expected and wanted to reflect the changing society.",
        worked:["Makes valid points about gender representation through costume codes","Links representations to the social context of changing gender roles in the UK","References specific characters (Zoe, Alice) as evidence"],
        improve:["Response is quite short for a 10-mark question \u2014 needs more developed analysis of specific moments from the extract","Needs to explore BOTH conventional and subversive representations to reach higher bands","More specific reference to what happens in the extract is needed, not just general character descriptions"],
      },
    },
    {
      qref:"Q1(b) \u2014 TV Representation",
      question:"How stereotypical are the representations of ethnicity in this extract? [10 marks]",
      year:"2024",paper:"C2",marks:"10",maxMarks:10,
      top:{
        grade:"Grade 9",mark:"9/10",student:"Student A",
        examiner:"Excellent, detailed analysis of specific examples from the extract. Consistently appropriate judgements and conclusions. Highly appropriate use of subject-specific terminology.",
        response:"Zoe\u2019s new man got aggressive with Luther first, which is not typical as black people are seen to be more aggressive. However we do see how dangerous Luther is when he counter acts by trying to choke him \u2014 this shows black men are more aggressive. Most of the police men were white, there was only 1 black policeman which shows white superiority. Zoe subverts stereotypes as she is from an ethnic background but she acted really smart and wisely with the situation: Luther\u2019s partner. Jess is which is once not typical as white men are \u2018superior\u2019. However Jess has a lower role. Similarly, Luther tells the police \u2018I\u2019m above your ring\u2019, showing he\u2019s not on their level \u2014 again, that\u2019s no stereotypical. Luther said he just wanted to talk but Zoe assumed the worst and called the police, which suggests that black men are dangerous. Zoe is an educated lawyer and is living in a nice house which shows that women of colour can be educated and successful \u2014 this subverts stereotypes that black people are only scary or dangerous. Luther being in a higher role implies he is also smart and educated, which subverts stereotypes that black people are only seen as dangerous officers.",
        worked:["Analyses the representation of multiple characters of colour across the extract","Makes sophisticated judgements: some stereotypes are reinforced, others subverted","Uses the language of the question throughout: \u2018stereotypical\u2019, \u2018subverts stereotypes\u2019","References specific moments: Zoe calling the police, Luther\u2019s rank, the ratio of white to black police officers","Draws a clear conclusion about the complexity of the representation"],
      },
      mid:{
        grade:"Grade 6",mark:"7/10",student:"Student B",
        examiner:"Good, reasonably detailed analysis of specific examples. Good judgements and conclusions. Appropriate use of subject specific terminology.",
        response:"Luther, the main character, is shown to be quite muscular which connotes masculinity and strength. These are regular conventions of gender. At the end of the extract, Alice is shown and she is walking strongly and powerfully. This is stereotypical and unstereotypical of gender roles as women are supposed to be submissive. This is stereotypical and unstereotypical of gender roles as women are supposed to be submissive. Lizzo is also seen as an unconventional woman because she is seen to be on the heavier side, which goes against beauty norms and expectations as women. Normally, in the media, women are seen as being skinny and fit with the main purpose to appease the male gaze. The fact that she is the singer just shows her whole music video being seen as unconventional as her music video is not aimed to please the male gaze but to make women feel better about themselves.",
        worked:["Makes valid points about unconventional female representation","Applies the male gaze theory correctly","Analyses physical appearance and what it connotes"],
        improve:["This response drifts between discussing Luther and Lizzo \u2014 for C2 Q1 you must focus on the TV extract only","The ethnicity angle is largely missing \u2014 the question specifically asks about representations of ethnicity, not gender","Keep your analysis tightly focused on the specific question asked"],
      },
    },
    {
      qref:"Q2 \u2014 TV Contexts/Audiences/Industries",
      question:"Explain how media contexts influence crime dramas or sitcoms. Refer to Luther or The IT Crowd to support your points. [10 marks]",
      year:"2023",paper:"C2",marks:"10",maxMarks:10,
      top:{
        grade:"Grade 9",mark:"9/10",student:"Student A",
        examiner:"Good, accurate knowledge and understanding. Good, secure reference to the set product. Appropriate use of subject specific terminology.",
        response:"Luther is influenced by the rise in diversity in the UK because it has a diverse cast. For example, Idris Elba is a black lead, which breaks stereotypes and creates positive representation. This reflects the BBC\u2019s remit to reflect the diversity of the UK. There is also a rise in women empowerment and feminism. This links to the multiple female characters such as Zoe, Rose and Alice. Zoe is a highly educated female minority as she is a lawyer, reflecting the demand for positive representation of women. Rose is Luther\u2019s boss, showing women can be in charge, and the antagonist is a highly intelligent woman. The BBC informs, educates and entertains as a public service broadcaster, and Luther reflects this by having entertaining plot lines like Alice killing her family. It also relates to contexts of new technology. For example through editing, jumpcuts create tension when Luther screams \u2018You lied\u2019 to HM. It also links to the rise in Idris Elba\u2019s fame. They would have had a high production value to have gotten Idris due to his star appeal from appearing in The Wire. We see a lot more diversity to reflect society.",
        worked:["Covers multiple contexts: diversity, feminism, public service broadcasting remit, technology, star power","Links each context specifically to Luther with concrete examples","Uses subject-specific terminology: PSB remit, production values, star appeal, convergence","Makes the connection between social context and the BBC\u2019s institutional requirements"],
      },
      mid:{
        grade:"Grade 6",mark:"8/10",student:"Student B",
        examiner:"Good, reasonably detailed analysis. Good knowledge. Appropriate links between relevant contexts and specific aspects of the set product.",
        response:"The Sweeney started in 1975 which means technology was less developed. People had to watch the Sweeney to high make audiences had to wait for each episode. There was no social media so people couldn\u2019t communicate and light. There were less ways to watch e.g. no phones, tablets, laptops. This meant that it was difficult to watch or if you missed an episode. However, Luther started in 2010 which was when there was huge improvement in technology. People could access Luther on any device and on Netflix, this meant more people could watch it at anytime and start the series after it was released. Before there were limited options. With more advanced technology people can consume television on transport, travel or any possible place just through their hands. Luther was exhibited on Netflix which can on multiple technological devices which means it\u2019s available everywhere. If there was no technology, people would have to watch TV or else they will miss the episode.",
        worked:["Makes a clear and valid comparison between The Sweeney\u2019s 1975 context and Luther\u2019s 2010 context","Shows good understanding of how technology has changed audience consumption","Uses relevant examples: Netflix, multiple devices, BBC iPlayer"],
        improve:["The response focuses only on technology \u2014 a higher-band answer would cover multiple contexts (gender, race, social attitudes, institutional context)","Needs to explain HOW the technology context influenced the content and production of the programmes, not just how audiences watched them","Use more subject-specific terminology: convergence, cross-platform distribution, vertical integration"],
      },
    },
  ]
},

// ─── COMPONENT 2 SECTION B ──────────────────────────────────────────────────
{
  section:"Component 2 \u2014 Section B: Music",
  items:[
    {
      qref:"Q3 \u2014 Music Extended (20 marks)",
      question:"How far do these two products challenge the conventions of music videos? [20 marks] \u2014 Good as Hell (Lizzo) / Intentions (Justin Bieber)",
      year:"2024",paper:"C2",marks:"20",maxMarks:20,
      top:{
        grade:"Grade 9",mark:"17/20",student:"Student A",
        examiner:"Excellent, consistently appropriate use of subject-specific terminology. Excellent, highly appropriate linking of set products to their contexts. Excellent, well-reasoned judgements and conclusions.",
        response:`Both Intentions and Good as Hell are conventional and also unconventional music videos. They both have aspects which make them stereotypical and unstereotypical.

Intentions has a primarily film-like style as it has credits and cinematic editing. This makes the audience admire it as it is not as common to find these sorts of conventions in music videos. Audiences who are a huge fan of films and TV shows would like Intentions for its similarities. Most of the actors in Intentions are female which is unconventional as normally men are the main characters but here it is mostly females. This would attract a female audience as it is not common to find representation of females in music videos that are not intended to please the male gaze. However, it is also stereotypical because Justin Bieber is seen as the hero according to Propp. He is seen giving Bahri a new car as it is as if he is rewarding her for her efforts and makes it look like Bahri is dependent on Bieber to move forward in life, which is conventional and stereotypical.

The music video is set in a smaller charity organisation known as The Alexandria House where people can get help from others if they are struggling financially. This is mainly for women. The fact that it is set here is unconventional because most of the time music videos are set in clubs and in places where the rich are recognised. However in terms of gender this is conventional because it is a place where women ask for help, identifying women as the weaker sex. Bieber is seen dancing with the children, the fact that they are dancing together spontaneously shows that Bieber is actually having fun and is not putting on a show to have more fans. This is unconventional as most of the time celebrities fake their enjoyments with lower income earning people. This music video is a mix of performance and narrative emphasising that we can also mix classes.

Lizzo also has a star persona as she wears gold and acts as an encouraging, individual to the black students. This is shown where Lizzo winks at a student in the crowd as a form of sympathy and encouragement to carry on. Lizzo acts as a body positivity activist as she is confident in her skin and likes to show off her body. This is quite unconventional as typically bigger women are expected to cover up and be more self-conscious about their bodies. The main reason why women are represented in music videos \u2014 unstereotypical because they are telling girls that they are worth more than boys, which goes against patriarchy, thus going against regular conventions of music videos.`,
        worked:["Addresses BOTH music videos in detail","Makes clear judgements throughout: \u2018conventional because...\u2019 / \u2018unconventional because...\u2019","Links to Propp\u2019s theory correctly","Connects Lizzo\u2019s representation to body positivity activism \u2014 linking to social context","Reaches a clear conclusion through the argument","Uses subject-specific terminology: male gaze, star persona, narrative, Propp"],
      },
      mid:{
        grade:"Grade 6",mark:"13/20",student:"Student B",
        examiner:"Satisfactory analysis of the set products. Satisfactory use of the theoretical framework. Satisfactory linking of set products to their contexts. Satisfactory, generally reasoned judgements and conclusions.",
        response:`Typically music videos are meant to have a storyline which is followed by \u2018Good as Hell\u2019 as we see distressed high school girls figure out how they can solve their problems. \u2018Intentions\u2019 doesn\u2019t have a storyline \u2014 we just see issues of women in the Alexander House. Music videos normally have focus on the artist, however in both videos 'Good as Hell' and 'Intentions' the focus is on other people. JB only gets some solo parts in his own music video. The same applies for Lizzo but Lizzo is seen more often, even if it's for little moments.

Another conventional thing about music videos is that there is really likely to be a collaboration between two artists. For \u2018Intentions\u2019 it had both JB and Quavo while \u2018Good as Hell\u2019 only has Lizzo. In \u2018Good as Hell\u2019, Lizzo is wearing similar clothes to everyone else but she is placed in the centre to show off her star persona. JB also shows his star persona but in a less obvious way. Both 8 music videos are about helping others however \u2018Good as Hell\u2019 is more conventional because it seems like it matches the lyrics and is a less unrealistic expectation.

Normally for music videos there is meant to be a place where this takes place for example for \u2018Good as Hell\u2019 its set in an all black university which is less expected. However \u2018Intentions\u2019 is set in the real world which makes it less of a music video and more like a documentary, especially because there is no storyline.`,
        worked:["Discusses both music videos and makes some comparison between them","Makes valid points about the focus being on other people rather than just the artist","Shows awareness of genre conventions of music videos","Identifies the documentary style of Intentions as unconventional"],
        improve:["Needs a clearer structure: don\u2019t jump between videos \u2014 consider dealing with one, then the other, then comparing","Must link to relevant media contexts (social, cultural, historical) to access the higher bands","Needs to use more theoretical frameworks: male gaze, star persona theory, Propp\u2019s narrative theory","The conclusion is missing \u2014 extended responses need a clear, reasoned judgement"],
      },
    },
    {
      qref:"Q4 \u2014 Music Contexts/Industries/Audiences",
      question:"How do music videos reflect the time in which they were made? Refer to Rio (Duran Duran, 1982) or Waterfalls (TLC, 1995) to support your points. [10 marks]",
      year:"2024",paper:"C2",marks:"10",maxMarks:10,
      top:{
        grade:"Grade 9",mark:"10/10",student:"Student A",
        examiner:"Excellent, detailed and accurate knowledge and understanding of historical contexts. Excellent understanding of influence of contexts on media products. Highly appropriate links between relevant contexts and specific aspects of the set product.",
        response:"Waterfalls reflects the time it was made as it displays societal issues at the time such as drug use/selling and the spreading of STDs (HIV). In the music video we see a young black kid selling drugs and the consequences of his actions, his mother had to suffer. Then we see a couple smoking a lot and having unprotected sex leading to the spread of HIV. In the video the woman takes the condom away from the man which ultimately kills him as he goes into the mirror appearing quite sickly and pale. It displays all of the past victims who caught HIV and passed away from it, displaying how STDs were a major issue in society. Furthermore the type of editing can reflect the time in which a music video was made. As in Waterfalls, the editing of the water behind the man was quite advanced, as this type of editing would have been relatively new in the 1990s. It was a bit different as the ladies were showing off their abs, which are meant to be manly. This shows that at that time views were starting to change. The clothing was very typical of the time period, for example the men were wearing baggy jeans with puffy big jackets and baseball hats. The little boy got shot, this reflects the time period as they were more likely to have guns and experience sudden firings.",
        worked:["Opens with a clear, accurate point about the social issues addressed (HIV, drugs, gun violence)","Analyses specific scenes and explains what they reflect about the 1990s context","Notes the editing techniques as reflective of the technological context of the time","Discusses clothing and fashion as evidence of the historical period","Reaches across multiple contexts: social, historical, technological"],
      },
      mid:{
        grade:"Grade 6",mark:"9/10",student:"Student B",
        examiner:"Excellent, detailed and accurate knowledge of relevant contexts. Excellent understanding of the effects of contexts on music videos. Highly appropriate links between relevant contexts and specific aspects of the set product.",
        response:"TLC was Waterfalls was made in 1995, a time where drugs were extremely popular and HIV and HIV was spreading quickly due to unprotected sex. In the music video we see a young black kid selling drugs and the consequences of his actions, his mother had to suffer. Then we see a couple smoking a lot and having unprotected sex leading to the spread of HIV. In the video the woman takes the condom away from the man. This shows then we see that the man has passed away and that the women had done this to several men. By showing a woman taking the condom off they are trying to show that anyone can get HIV, even from the women. The music video had low quality which shows that technology at that time was less developed. It was a bit different as the ladies were showing off their abs, which are meant to be manly. This shows that at that time views were starting to change. The clothing was very typical of the time period, for example the men were wearing baggy jeans with puffy big jackets and baseball hats.",
        worked:["Accurately identifies the key social issues of 1995: HIV/AIDS epidemic, drug use","Analyses specific scenes and links them to historical context","Notes the technology context through production quality","Discusses costume as evidence of the time period"],
        improve:["Response is very similar to the top example \u2014 both used the same text (Waterfalls) and covered similar ground","To reach a higher mark, could discuss more varied contextual points: e.g. the racial context of the video, TLC as an independent female group, the significance of the MTV era"],
      },
    },
  ]
},
];

function buildExamplesTab() {
  filterExamples();
}

function filterExamples() {
  const container = document.getElementById('examplesContent');
  if (!container) return;
  const filterVal = (document.getElementById('exFilter') || {}).value || '';

  let html = '';
  let count = 0;
  examples.forEach(function(section) {
    const matchingItems = section.items.filter(function(ex) {
      if (!filterVal) return true;
      const qref = ex.qref || '';
      if (filterVal === 'Q1') return qref.indexOf('Q1') === 0;
      if (filterVal === 'Q3') return qref.indexOf('Q3') === 0;
      if (filterVal === 'Q4') return qref.indexOf('Q4') === 0;
      if (filterVal === 'TV Q1') return qref.indexOf('Q1') === 0 && section.section.indexOf('Television') > -1;
      if (filterVal === 'TV Q2') return qref.indexOf('Q2') === 0 && section.section.indexOf('Television') > -1;
      if (filterVal === 'Music Q3') return qref.indexOf('Q3') === 0 && section.section.indexOf('Music') > -1;
      if (filterVal === 'Music Q4') return qref.indexOf('Q4') === 0 && section.section.indexOf('Music') > -1;
      return qref.indexOf(filterVal) === 0;
    });
    if (matchingItems.length === 0) return;
    html += '<div class="ex-section-head"><span>' + section.section + '</span></div>';
    matchingItems.forEach(function(ex) {
      html += buildExCard(ex);
      count++;
    });
  });

  if (html === '') {
    html = '<p style="color:var(--muted);font-size:0.88rem;padding:1rem 0;">No example answers match that filter.</p>';
  }
  container.innerHTML = html;
  const countEl = document.getElementById('exCount');
  if (countEl) countEl.textContent = count + ' example' + (count !== 1 ? 's' : '');
}

function buildExCard(ex) {
  const topStripe = 'ex-stripe-top';
  const midStripe = 'ex-stripe-mid';

  function card(data, stripeClass, badgeClass, badgeLabel) {
    const workedHTML = data.worked
      ? data.worked.map(w => `<div class="ex-point">${w}</div>`).join('')
      : '';
    const improveHTML = data.improve
      ? `<div class="ex-what-improve">
           <div class="ex-improve-head">📈 To reach a higher grade</div>
           ${data.improve.map(i => `<div class="ex-point ex-point-red">${i}</div>`).join('')}
         </div>`
      : '';
    return `
    <div class="ex-card">
      <div class="ex-card-header">
        <div class="${stripeClass} ex-stripe"></div>
        <div class="ex-meta">
          <div class="ex-badges">
            <span class="ex-badge ${badgeClass}">${badgeLabel}</span>
            <span class="ex-badge ex-badge-mark">${data.mark}</span>
            <span class="ex-badge ex-badge-year">${ex.year}</span>
          </div>
          <div class="ex-title">${ex.qref} — ${data.student}</div>
        </div>
      </div>
      <div class="ex-body">
        <div class="ex-question">${ex.question}</div>
        <div class="ex-response">${data.response}</div>
        <div class="ex-examiner">${data.examiner}</div>
        ${workedHTML ? `<div class="ex-what-worked"><div class="ex-what-worked-head">✓ What worked well</div>${workedHTML}</div>` : ''}
        ${improveHTML}
      </div>
    </div>`;
  }

  return `
  <div style="margin-bottom:2rem">
    <p style="font-family:'IBM Plex Mono',monospace;font-size:0.65rem;text-transform:uppercase;letter-spacing:2px;color:var(--muted);margin-bottom:0.6rem;">${ex.qref}</p>
    ${card(ex.top, topStripe, 'ex-badge-grade9', ex.top.grade)}
    ${card(ex.mid, midStripe, 'ex-badge-grade6', ex.mid.grade)}
  </div>`;
}



// Map question IDs to example answer indices
// Format: { qid_pattern: { section, item } }
const exampleLookup = {
  // C1 Q1a — Media Language (layout/design/narrative/images/text)
  'c1_2019_1a': {sec:0,item:0}, 'c1_2020_1a': {sec:0,item:0}, 'c1_2021_1a': {sec:0,item:0},
  'c1_2022_1a': {sec:0,item:0}, 'c1_2023_1a': {sec:0,item:0}, 'c1_2024_1a': {sec:0,item:0},
  'c1_2025_1a': {sec:0,item:0},
  'sams1_c1_1a': {sec:0,item:0}, 'sams1_c1_1b': {sec:0,item:0}, 'sams1_c1_1c': {sec:0,item:0},
  'sams2_c1_1a': {sec:0,item:0}, 'sams2_c1_1b': {sec:0,item:0}, 'sams2_c1_1c': {sec:0,item:0},
  // C1 Q1b — Media Language (images/visual codes)
  'c1_2019_1b': {sec:0,item:1}, 'c1_2020_1b': {sec:0,item:1}, 'c1_2021_1b': {sec:0,item:1},
  'c1_2025_1b': {sec:0,item:1},
  // C1 Q1c — Media Language (text/written language) — uses Q1a example as same question type
  'c1_2019_1c': {sec:0,item:0}, 'c1_2020_1c': {sec:0,item:0},
  // C1 Q2a — Context
  'c1_2019_2a': {sec:0,item:2}, 'c1_2020_2a': {sec:0,item:2}, 'c1_2021_2a': {sec:0,item:2},
  'c1_2022_2a': {sec:0,item:2}, 'c1_2023_2a': {sec:0,item:2}, 'c1_2024_2a': {sec:0,item:2},
  'c1_2025_2a': {sec:0,item:2},
  'sams1_c1_2a': {sec:0,item:2}, 'sams2_c1_2a': {sec:0,item:2},
  // C1 Q2b — Representation comparison (extended)
  'c1_2019_2b': {sec:0,item:3}, 'c1_2020_2b': {sec:0,item:3}, 'c1_2021_2b': {sec:0,item:3},
  'c1_2022_2b': {sec:0,item:3}, 'c1_2023_2b': {sec:0,item:3}, 'c1_2024_2b': {sec:0,item:3},
  'c1_2025_2b': {sec:0,item:3},
  'sams1_c1_2b': {sec:0,item:3}, 'sams2_c1_2b': {sec:0,item:3},
  // C1 Q3 short (1-2 mark) — no example attached (too short to be useful)
  // C1 Q3c/d — Industry extended
  'c1_2019_3c': {sec:1,item:0}, 'c1_2022_3c': {sec:1,item:0}, 'c1_2024_3c': {sec:1,item:0},
  'c1_2019_3d': {sec:1,item:0}, 'c1_2020_3d': {sec:1,item:0}, 'c1_2021_3d': {sec:1,item:0},
  'c1_2022_3d': {sec:1,item:0}, 'c1_2023_3d': {sec:1,item:0}, 'c1_2024_3d': {sec:1,item:0},
  'c1_2025_3d': {sec:1,item:0},
  'sams1_c1_3d': {sec:1,item:0}, 'sams2_c1_3d': {sec:1,item:0},
  // C1 Q4c/d — Audience extended
  'c1_2019_4c': {sec:1,item:1}, 'c1_2020_4c': {sec:1,item:1}, 'c1_2021_4c': {sec:1,item:1},
  'c1_2022_4c': {sec:1,item:1}, 'c1_2023_4c': {sec:1,item:1}, 'c1_2024_4c': {sec:1,item:1},
  'c1_2025_4c': {sec:1,item:1},
  'c1_2019_4d': {sec:1,item:1}, 'sams1_c1_4d': {sec:1,item:1}, 'sams2_c1_4d': {sec:1,item:1},
  // C2 Q1a — TV Representation
  'c2_2019_1a': {sec:2,item:0}, 'c2_2020_1a': {sec:2,item:0}, 'c2_2021_1a': {sec:2,item:0},
  'c2_2022_1a': {sec:2,item:0}, 'c2_2023_1a': {sec:2,item:0}, 'c2_2024_1a': {sec:2,item:0},
  'sams1_c2_1a': {sec:2,item:0}, 'sams2_c2_1a': {sec:2,item:0},
  // C2 Q1b — TV Representation judgements
  'c2_2019_1b': {sec:2,item:1}, 'c2_2020_1b': {sec:2,item:1}, 'c2_2021_1b': {sec:2,item:1},
  'c2_2022_1b': {sec:2,item:1}, 'c2_2023_1b': {sec:2,item:1}, 'c2_2024_1b': {sec:2,item:1},
  'sams1_c2_1b': {sec:2,item:1}, 'sams2_c2_1b': {sec:2,item:1},
  // C2 Q2 — TV Contexts/Industries/Audiences
  'c2_2019_2': {sec:2,item:2}, 'c2_2020_2': {sec:2,item:2}, 'c2_2021_2': {sec:2,item:2},
  'c2_2022_2': {sec:2,item:2}, 'c2_2023_2': {sec:2,item:2}, 'c2_2024_2': {sec:2,item:2},
  'sams1_c2_2': {sec:2,item:2}, 'sams2_c2_2': {sec:2,item:2},
  // C2 Q3 — Music extended (20 marks)
  'c2_2019_3': {sec:3,item:0}, 'c2_2020_3': {sec:3,item:0}, 'c2_2021_3': {sec:3,item:0},
  'c2_2022_3': {sec:3,item:0}, 'c2_2023_3': {sec:3,item:0}, 'c2_2024_3': {sec:3,item:0},
  'sams1_c2_3': {sec:3,item:0}, 'sams2_c2_3': {sec:3,item:0},
  // C2 Q4 — Music Contexts/Industries/Audiences
  'c2_2025_4b': {sec:3,item:1}, 'c2_2025_4c': {sec:3,item:1},
  'c2_2019_4': {sec:3,item:1}, 'c2_2020_4': {sec:3,item:1}, 'c2_2021_4': {sec:3,item:1},
  'c2_2022_4': {sec:3,item:1}, 'c2_2023_4': {sec:3,item:1}, 'c2_2024_4': {sec:3,item:1},
  'sams1_c2_4': {sec:3,item:1}, 'sams2_c2_4': {sec:3,item:1},
  // C1 Q3b — Industry 4-mark brief explain
  'c1_2019_3b': {sec:1,item:0}, 'c1_2020_3b': {sec:1,item:0}, 'c1_2021_3b': {sec:1,item:0},
  'c1_2023_3b': {sec:1,item:0}, 'c1_2025_3b': {sec:1,item:0},
  'sams1_c1_3c': {sec:1,item:0},
  // C1 Q4c (SAMs) — Audience 4-mark brief explain
  'sams1_c1_4c': {sec:1,item:1}, 'sams2_c1_4c': {sec:1,item:1},
};

function getExampleForQuestion(qid) {
  return exampleLookup[qid] || null;
}

function toggleExInline(qid, btn) {
  const panel = document.getElementById('ex-inline-' + qid);
  if (!panel) return;
  const isOpen = panel.classList.contains('visible');
  panel.classList.toggle('visible');
  btn.classList.toggle('open', !isOpen);
}

function buildInlineExample(qid) {
  const lookup = getExampleForQuestion(qid);
  if (!lookup) return '';
  const ex = examples[lookup.sec] && examples[lookup.sec].items[lookup.item];
  if (!ex) return '';

  function miniCard(data, badgeClass, badgeLabel, stripeColor) {
    const workedHTML = data.worked ? data.worked.map(w => `<div class="ex-point">${w}</div>`).join('') : '';
    const improveHTML = data.improve ? `<div class="ex-what-improve"><div class="ex-improve-head">📈 To reach a higher grade</div>${data.improve.map(i=>`<div class="ex-point ex-point-red">${i}</div>`).join('')}</div>` : '';
    return `<div class="ex-card" style="margin-bottom:0.8rem">
      <div class="ex-card-header">
        <div class="ex-stripe" style="background:${stripeColor}"></div>
        <div class="ex-meta">
          <div class="ex-badges">
            <span class="ex-badge ${badgeClass}">${badgeLabel}</span>
            <span class="ex-badge ex-badge-mark">${data.mark}</span>
            <span class="ex-badge ex-badge-year">${ex.year} · ${ex.paper}</span>
          </div>
          <div class="ex-title">${data.student}</div>
        </div>
      </div>
      <div class="ex-body">
        <div class="ex-response">${data.response}</div>
        <div class="ex-examiner">${data.examiner}</div>
        ${workedHTML ? `<div class="ex-what-worked"><div class="ex-what-worked-head">✓ What worked well</div>${workedHTML}</div>` : ''}
        ${improveHTML}
      </div>
    </div>`;
  }

  return `<div class="ex-inline-panel" id="ex-inline-${qid}">
    <div class="ex-inline-disclaimer"><strong>📌 Note:</strong> These responses may be from a different exam year or use different set texts. They’re here to show you the approach, structure and level of analysis expected for this question type — not as a model answer for this specific question.</div>
    ${miniCard(ex.top, 'ex-badge-grade9', ex.top.grade, 'var(--success)')}
    ${miniCard(ex.mid, 'ex-badge-grade6', ex.mid.grade, 'var(--gold)')}
  </div>`;
}

function switchTab(tabName, btn) {
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  var el = document.getElementById('tab-'+tabName);
  if (el) el.classList.add('active');
  if (btn) btn.classList.add('active');
  if (tabName === 'terms' && !document.getElementById('fcGrid')) buildTermsTab();
  if (tabName === 'examples') buildExamplesTab();
  if (tabName === 'boundaries' && !document.querySelector('#c1BoundsBody tr')) buildBoundariesTab();
  if (tabName === 'pastq' && document.getElementById('pastQList') && !document.getElementById('pastQList').innerHTML) buildPastQ();
}

renderAll();
applyFilters();
buildExamplesTab();

// ═══════════════════════════════════════════════════════
// GRADE BOUNDARIES
// ═══════════════════════════════════════════════════════
var c1Bounds = [
  {g:9,m:63},{g:8,m:60},{g:7,m:56},{g:6,m:50},{g:5,m:44},{g:4,m:38},{g:3,m:29},{g:2,m:19},{g:1,m:8}
];
var c2Bounds = [
  {g:9,m:50},{g:8,m:46},{g:7,m:43},{g:6,m:39},{g:5,m:35},{g:4,m:31},{g:3,m:23},{g:2,m:15},{g:1,m:8}
];
var gradeColours = {9:'#1a6e48',8:'#2e7d5e',7:'#4a9a72',6:'#6aab85',5:'#92400E',4:'#b45309',3:'#666',2:'#888',1:'#aaa'};

function buildBoundariesTab() {
  var c1body = document.getElementById('c1BoundsBody');
  var c2body = document.getElementById('c2BoundsBody');
  if (!c1body) return;
  c1Bounds.forEach(function(b,i) {
    var pct = Math.round(b.m/80*100);
    var bg = i%2===0 ? '' : 'background:#faf8f4;';
    c1body.innerHTML += '<tr style="'+bg+'"><td style="padding:0.45rem 0.8rem;"><span style="background:'+gradeColours[b.g]+';color:white;font-family:monospace;font-size:0.72rem;font-weight:700;padding:0.1rem 0.45rem;border-radius:2px;">'+b.g+'</span></td><td style="padding:0.45rem 0.8rem;text-align:right;font-family:monospace;font-size:0.82rem;font-weight:600;">'+b.m+'</td><td style="padding:0.45rem 0.8rem;text-align:right;font-size:0.8rem;color:var(--muted);">'+pct+'%</td></tr>';
  });
  c2Bounds.forEach(function(b,i) {
    var pct = Math.round(b.m/60*100);
    var bg = i%2===0 ? '' : 'background:#faf8f4;';
    c2body.innerHTML += '<tr style="'+bg+'"><td style="padding:0.45rem 0.8rem;"><span style="background:'+gradeColours[b.g]+';color:white;font-family:monospace;font-size:0.72rem;font-weight:700;padding:0.1rem 0.45rem;border-radius:2px;">'+b.g+'</span></td><td style="padding:0.45rem 0.8rem;text-align:right;font-family:monospace;font-size:0.82rem;font-weight:600;">'+b.m+'</td><td style="padding:0.45rem 0.8rem;text-align:right;font-size:0.8rem;color:var(--muted);">'+pct+'%</td></tr>';
  });
  var perQ = [
    {q:'C1 Q1 (15m)',g4:Math.round(15*38/80),g9:Math.round(15*63/80),comp:1},
    {q:'C1 Q2(a) (5m)',g4:Math.round(5*38/80),g9:Math.round(5*63/80),comp:1},
    {q:'C1 Q2(b) (25m)',g4:Math.round(25*38/80),g9:Math.round(25*63/80),comp:1},
    {q:'C1 Q3 extended (~12m)',g4:Math.round(12*38/80),g9:Math.round(12*63/80),comp:1},
    {q:'C1 Q4 extended (~12m)',g4:Math.round(12*38/80),g9:Math.round(12*63/80),comp:1},
    {q:'C2 Q1(a) (10m)',g4:Math.round(10*31/60),g9:Math.round(10*50/60),comp:2},
    {q:'C2 Q1(b) (10m)',g4:Math.round(10*31/60),g9:Math.round(10*50/60),comp:2},
    {q:'C2 Q2 (10m)',g4:Math.round(10*31/60),g9:Math.round(10*50/60),comp:2},
    {q:'C2 Q3 (20m)',g4:Math.round(20*31/60),g9:Math.round(20*50/60),comp:2},
    {q:'C2 Q4 (10m)',g4:Math.round(10*31/60),g9:Math.round(10*50/60),comp:2}
  ];
  var container = document.getElementById('perQBounds');
  if (!container) return;
  perQ.forEach(function(p) {
    var bg = p.comp===1 ? '#fdf5f5' : '#f0f4fa';
    container.innerHTML += '<div style="background:'+bg+';border:1px solid var(--border);border-radius:2px;padding:0.6rem 0.8rem;"><div style="font-family:monospace;font-size:0.62rem;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:0.4rem;">'+p.q+'</div><div style="display:flex;gap:0.5rem;"><span style="background:'+gradeColours[4]+';color:white;font-size:0.7rem;font-weight:700;padding:0.1rem 0.4rem;border-radius:2px;font-family:monospace;">G4 ~'+p.g4+'</span><span style="background:'+gradeColours[9]+';color:white;font-size:0.7rem;font-weight:700;padding:0.1rem 0.4rem;border-radius:2px;font-family:monospace;">G9 ~'+p.g9+'</span></div></div>';
  });
}

// ═══════════════════════════════════════════════════════
// PAST QUESTIONS TAB
// ═══════════════════════════════════════════════════════
function buildPastQ() {
  var comp = document.getElementById('pqComp').value;
  var sec  = document.getElementById('pqSec').value;
  var qnum = document.getElementById('pqQnum').value;

  var filtered = questions.filter(function(q) {
    if (comp && String(q.comp) !== comp) return false;
    if (sec  && q.sec !== sec) return false;
    if (qnum && q.qnum !== qnum) return false;
    return true;
  });

  var container = document.getElementById('pastQList');
  if (filtered.length === 0) {
    container.innerHTML = '<p style="color:var(--muted);font-size:0.88rem;">No questions match — try a different filter.</p>';
    return;
  }

  // ── Normalise topic for C1 section grouping ──────────────────────────────
  function normaliseTopic(q) {
    var t = q.topic;
    if (t === 'Industry') return 'Industry';
    if (t === 'Audience') return 'Audience';
    if (t === 'Context') return 'Context';
    return t;
  }

  // Section sort order for C1
  var sectionOrder = {'Media Language':1,'Context':2,'Representation':3,'Industry':4,'Audience':5};
  function c1SortKey(label) {
    var parts = label.split(' — ');
    return sectionOrder[parts[1]] || 9;
  }

  // Year sort value: SAMs first then chronological
  function yearVal(q) {
    var y = q.year;
    if (typeof y === 'string' && y.toUpperCase().indexOf('SAM') > -1) {
      return -100 + (y.indexOf('1') > -1 ? 0 : 1);
    }
    return typeof y === 'number' ? y : parseInt(y) || 9999;
  }

  // Separate C1 and C2 questions
  var c1qs = filtered.filter(function(q){ return q.comp === 1; });
  var c2qs = filtered.filter(function(q){ return q.comp === 2; });

  var html = '';

  // ══════════════════════════════════════════════════════════════════════════
  // COMPONENT 1: group by topic section, Industry/Audience grouped by year
  // ══════════════════════════════════════════════════════════════════════════
  if (c1qs.length > 0) {
    var c1groups = {};
    c1qs.forEach(function(q) {
      var label = normaliseTopic(q);
      if (!c1groups[label]) c1groups[label] = [];
      c1groups[label].push(q);
    });

    Object.keys(c1groups).sort(function(a,b){
      return (sectionOrder[a]||9) - (sectionOrder[b]||9);
    }).forEach(function(label) {
      var qs = c1groups[label];
      var isYearGrp = label === 'Industry' || label === 'Audience';

      html += '<div style="margin-bottom:1.8rem;">';
      html += '<div style="font-family:sans-serif;font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:var(--muted);margin-bottom:0.8rem;display:flex;align-items:center;gap:0.8rem;">';
      html += '<span>Component 1 — ' + label + '</span><span style="flex:1;height:1px;background:var(--border);display:block;"></span>';
      html += '</div>';

      if (isYearGrp) {
        // Group by year
        var yearMap = {};
        qs.forEach(function(q){
          var yr = typeof q.year==='string' ? q.year : String(q.year);
          if (!yearMap[yr]) yearMap[yr] = [];
          yearMap[yr].push(q);
        });
        Object.keys(yearMap).sort(function(a,b){ return yearVal({year:a})-yearVal({year:b}); })
        .forEach(function(yr, yi) {
          var yqs = yearMap[yr].sort(function(a,b){ return a.qnum<b.qnum?-1:a.qnum>b.qnum?1:0; });
          html += '<div style="display:flex;align-items:center;gap:0.6rem;margin-top:'+(yi===0?'0':'0.8rem')+';margin-bottom:0;">';
          html += '<span style="font-family:monospace;font-size:0.68rem;font-weight:700;color:var(--muted);white-space:nowrap;">'+yr+'</span>';
          html += '<span style="flex:1;height:1px;background:var(--border);"></span></div>';
          yqs.forEach(function(q,idx){
            var bb = idx===yqs.length-1?'1px solid var(--border)':'none';
            html += '<div style="display:grid;grid-template-columns:90px 1fr;border:1px solid var(--border);border-bottom:'+bb+';background:var(--card);">';
            html += '<div style="padding:0.65rem 0.8rem;border-right:1px solid var(--border);display:flex;flex-direction:column;justify-content:center;align-items:center;background:#faf8f4;">';
            html += '<span style="font-family:monospace;font-size:0.68rem;font-weight:700;color:var(--ink);">'+q.qnum+'</span>';
            html += '<span style="font-family:monospace;font-size:0.6rem;color:var(--muted);">'+q.marks+'m</span></div>';
            html += '<div style="padding:0.7rem 0.9rem;font-size:0.88rem;line-height:1.55;color:var(--ink);">'+q.question+'</div></div>';
          });
        });
      } else {
        // One row per question, year in left col
        qs.slice().sort(function(a,b){ return yearVal(a)-yearVal(b); }).forEach(function(q,idx){
          var bb = idx===qs.length-1?'1px solid var(--border)':'none';
          html += '<div style="display:grid;grid-template-columns:70px 1fr;border:1px solid var(--border);border-bottom:'+bb+';background:var(--card);">';
          html += '<div style="padding:0.7rem 0.8rem;border-right:1px solid var(--border);display:flex;flex-direction:column;justify-content:center;align-items:center;background:#faf8f4;">';
          html += '<span style="font-family:monospace;font-size:0.72rem;font-weight:700;color:var(--ink);">'+(typeof q.year==='string'?q.year:q.year)+'</span>';
          html += '<span style="font-family:monospace;font-size:0.65rem;color:var(--muted);">'+q.marks+'m</span></div>';
          html += '<div style="padding:0.7rem 0.9rem;font-size:0.88rem;line-height:1.55;color:var(--ink);">'+q.question+'</div></div>';
        });
      }
      html += '</div>';
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // COMPONENT 2: group by question number (Q1, Q2, Q3, Q4), sorted SAM→2025
  // Each row shows the year + small topic badge, then question text
  // ══════════════════════════════════════════════════════════════════════════
  if (c2qs.length > 0) {
    var c2groups = {};
    c2qs.forEach(function(q) {
      // Derive top-level Q number: Q1(a)->Q1, Q1(b)->Q1, Q2->Q2, Q3->Q3, Q4->Q4
      var base = q.qnum.replace(/\([a-z]\)/,'').trim();
      if (!c2groups[base]) c2groups[base] = [];
      c2groups[base].push(q);
    });

    // Sort Q1 before Q2 before Q3 before Q4
    Object.keys(c2groups).sort().forEach(function(base) {
      var qs = c2groups[base];

      // Sort: SAM 1, SAM 2, then 2019..2025, within same year Q1(a) before Q1(b)
      qs.sort(function(a,b){
        var ay = yearVal(a), by = yearVal(b);
        if (ay !== by) return ay - by;
        return a.qnum < b.qnum ? -1 : a.qnum > b.qnum ? 1 : 0;
      });

      html += '<div style="margin-bottom:1.8rem;">';
      html += '<div style="font-family:sans-serif;font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:var(--muted);margin-bottom:0.8rem;display:flex;align-items:center;gap:0.8rem;">';
      html += '<span>Component 2 — ' + base + '</span><span style="flex:1;height:1px;background:var(--border);display:block;"></span>';
      html += '</div>';

      qs.forEach(function(q, idx) {
        var bb = idx===qs.length-1?'1px solid var(--border)':'none';
        var yr = typeof q.year==='string' ? q.year : String(q.year);
        // Topic badge label — small descriptor of the framework focus
        var topicBadge = q.topic;
        if (topicBadge === 'Television') topicBadge = q.qnum.indexOf('(a)') > -1 ? 'Media Language' : 'Representation';
        if (topicBadge === 'Music') topicBadge = 'Media Language / Representation';
        html += '<div style="display:grid;grid-template-columns:100px 1fr;border:1px solid var(--border);border-bottom:'+bb+';background:var(--card);">';
        html += '<div style="padding:0.65rem 0.8rem;border-right:1px solid var(--border);display:flex;flex-direction:column;justify-content:center;align-items:center;background:#faf8f4;gap:0.25rem;">';
        html += '<span style="font-family:monospace;font-size:0.72rem;font-weight:700;color:var(--ink);">'+yr+'</span>';
        html += '<span style="font-family:monospace;font-size:0.6rem;color:var(--muted);">'+q.marks+'m</span>';
        if (q.qnum !== base) {
          html += '<span style="font-family:monospace;font-size:0.58rem;color:var(--muted);opacity:0.8;">'+q.qnum+'</span>';
        }
        html += '</div>';
        html += '<div style="padding:0.7rem 0.9rem;">';
        html += '<div style="font-family:monospace;font-size:0.6rem;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:0.3rem;">'+topicBadge+'</div>';
        html += '<div style="font-size:0.88rem;line-height:1.55;color:var(--ink);">'+q.question+'</div>';
        html += '</div></div>';
      });

      html += '</div>';
    });
  }

  container.innerHTML = html;
}

var _reviseHistory = [];
var _reviseMessages = [
  'Here\'s your revision focus for today:',
  'How about working on this today?',
  'A good one to practise:',
  'Your revision suggestion:'
];

function getSuggestion() {
  var compFilter = document.getElementById('reviseComp').value;
  var focusFilter = document.getElementById('reviseFocus').value;

  var pool = questions.filter(function(q) {
    if (compFilter && String(q.comp) !== compFilter) return false;
    if (q.marks < 5) return false;
    return true;
  });

  if (focusFilter === 'red' || focusFilter === 'amber') {
    var rated = pool.filter(function(q) {
      return ratings[q.id] === 'red' || (focusFilter === 'amber' && ratings[q.id] === 'amber');
    });
    if (rated.length > 0) pool = rated;
  }

  var recent = _reviseHistory.slice(-5).map(function(r) { return r.id; });
  var fresh = pool.filter(function(q) { return recent.indexOf(q.id) === -1; });
  if (fresh.length > 0) pool = fresh;

  if (pool.length === 0) {
    var sug = document.getElementById('reviseSuggestion');
    sug.style.display = 'block';
    sug.innerHTML = '<div style="background:var(--card);border:1px solid var(--border);border-radius:2px;padding:1.2rem;text-align:center;color:var(--muted);font-size:0.88rem;">No questions match those filters — try broadening your selection.</div>';
    return;
  }

  var q = pool[Math.floor(Math.random() * pool.length)];
  _reviseHistory.push(q);

  var msg = _reviseMessages[Math.floor(Math.random() * _reviseMessages.length)];
  var compCol = q.comp === 1 ? '#7B1D1D' : '#1e3a5c';
  var rag = ratings[q.id];
  var ragBadge = rag ? ' <span style="font-size:0.9rem;">'+(rag==='red'?'🔴':rag==='amber'?'🟡':'🟢')+'</span>' : '';

  var sug = document.getElementById('reviseSuggestion');
  sug.style.display = 'block';
  sug.innerHTML = '<div style="background:var(--card);border:1px solid var(--border);border-radius:2px;overflow:hidden;text-align:left;">'
    + '<div style="background:'+compCol+';color:white;padding:0.6rem 1rem;font-family:monospace;font-size:0.65rem;text-transform:uppercase;letter-spacing:2px;">'+msg+'</div>'
    + '<div style="padding:1rem 1.2rem;">'
    + '<div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.6rem;">'
    + '<span style="background:'+compCol+';color:white;font-family:monospace;font-size:0.62rem;padding:0.12rem 0.45rem;border-radius:2px;">C'+q.comp+'</span>'
    + '<span style="background:var(--accent);color:white;font-family:monospace;font-size:0.62rem;padding:0.12rem 0.45rem;border-radius:2px;">'+q.marks+' marks</span>'
    + '<span style="background:#555;color:white;font-family:monospace;font-size:0.62rem;padding:0.12rem 0.45rem;border-radius:2px;">'+q.topic+'</span>'
    + '<span style="font-family:monospace;font-size:0.62rem;color:var(--muted);">'+q.year+ragBadge+'</span>'
    + '</div>'
    + '<p style="font-size:0.92rem;line-height:1.6;color:var(--ink);margin:0 0 0.8rem;">'+q.question+'</p>'
    + '<button onclick="goToQuestion(\'' + q.id + '\')" style="font-family:monospace;font-size:0.65rem;text-transform:uppercase;letter-spacing:1.5px;background:var(--ink);color:var(--paper);border:none;padding:0.45rem 0.9rem;border-radius:2px;cursor:pointer;margin-right:0.5rem;">Go to question →</button>'
    + '<button onclick="getSuggestion()" style="font-family:monospace;font-size:0.65rem;text-transform:uppercase;letter-spacing:1.5px;background:transparent;color:var(--ink);border:1.5px solid var(--border);padding:0.4rem 0.9rem;border-radius:2px;cursor:pointer;">Try another</button>'
    + '</div></div>';

  updateReviseHistory();
}

function goToQuestion(qid) {
  var qBtn = document.querySelectorAll('.tab-btn')[0];
  switchTab('questions', qBtn);
  setTimeout(function() {
    var el = document.getElementById('card-'+qid);
    if (el) {
      if (el.classList.contains('hidden')) {
        ['f-comp','f-sec','f-topic','f-year','f-marks','f-text'].forEach(function(fid) {
          var el2 = document.getElementById(fid);
          if (el2) el2.value = '';
        });
        applyFilters();
      }
      setTimeout(function() {
        el.scrollIntoView({behavior:'smooth', block:'center'});
        el.style.outline = '2px solid var(--accent)';
        setTimeout(function() { el.style.outline = ''; }, 1500);
      }, 150);
    }
  }, 200);
}

function updateReviseHistory() {
  var container = document.getElementById('reviseHistory');
  if (!container || _reviseHistory.length <= 1) { if(container) container.innerHTML=''; return; }
  var recent = _reviseHistory.slice(-6,-1).reverse();
  container.innerHTML = '<div style="font-family:monospace;font-size:0.62rem;text-transform:uppercase;letter-spacing:2px;color:var(--muted);margin-bottom:0.5rem;">Previously suggested</div>'
    + recent.map(function(q) { return '<div style="font-size:0.8rem;color:var(--muted);padding:0.3rem 0;border-bottom:1px solid var(--border);">C'+q.comp+' · '+q.topic+' · '+q.year+'</div>'; }).join('');
}


// Back to top button
window.addEventListener('scroll', function() {
  var btn = document.getElementById('backToTop');
  if (btn) {
    if (window.scrollY > 400) btn.classList.add('visible');
    else btn.classList.remove('visible');
  }
});


function openGuideLightbox(img) {
  document.getElementById('guideLightboxImg').src = img.src;
  document.getElementById('guideLightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeGuideLightbox() {
  document.getElementById('guideLightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeGuideLightbox();
});