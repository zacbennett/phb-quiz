import React, { useState } from 'react';

// Sample array of questions
const questions = [
  // chapter 1
  
    {
        "question": "An EMS provider who has extensive training in various aspects of advanced life support (ALS) is called a(n):",
        "answers": {
            "A": "EMR.",
            "B": "advanced EMT (AEMT).",
            "C": "EMT.",
            "D": "paramedic."
        },
        "correctAnswer": "D"
    },
    {
        "question": "As an EMT, you may be authorized to administer aspirin to a patient with chest pain based on:",
        "answers": {
            "A": "medical director approval.",
            "B": "the patient’s condition.",
            "C": "an order from a paramedic.",
            "D": "the transport time to the hospital."
        },
        "correctAnswer": "A"
    },
    {
        "question": "EMRs such as firefighters, law enforcement officers, and park rangers are an integral part of the EMS system because:",
        "answers": {
            "A": "they often arrive at the scene before the ambulance and EMTs.",
            "B": "they can initiate certain ALS procedures before EMS arrival.",
            "C": "they are usually trained to assist paramedics with certain procedures.",
            "D": "the average response time for the EMT crew is approximately 15 minutes."
        },
        "correctAnswer": "A"
    },
    {
        "question": "Which of the following is a specific example of the Mobile Integrated Healthcare (MIH) model?",
        "answers": {
            "A": "The paramedic administers a patient’s flu vaccination",
            "B": "EMTs assess a patient whose lung disease is “acting up”",
            "C": "Paramedics pick up a patient from an acute care clinic",
            "D": "EMTs respond to a woman who complains of high fever"
        },
        "correctAnswer": "A"
    },
    {
        "question": "Which of the following skills would a layperson most likely be trained to perform before the arrival of EMS?",
        "answers": {
            "A": "Administration of supplemental oxygen",
            "B": "Bleeding control using a tourniquet",
            "C": "Obtaining a manual blood pressure",
            "D": "Insertion of an oropharyngeal airway"
        },
        "correctAnswer": "B"
    },
    {
        "question": "Which of the following statements regarding the EMS medical director and an EMT’s scope of practice is correct?",
        "answers": {
            "A": "The EMS medical director can expand the EMT’s scope of practice but cannot limit it without state approval.",
            "B": "The EMS medical director can expand or limit an individual EMT’s scope of practice without state approval.",
            "C": "An EMT’s scope of practice may be expanded by the medical director after proper training and state approval.",
            "D": "An EMT’s scope of practice is exclusively regulated by the state EMS office, not the EMS medical director."
        },
        "correctAnswer": "C"
    },
    {
        "question": "A positive TB skin test indicates that:",
        "answers": {
            "A": "you have never been exposed to TB.",
            "B": "you have been exposed to TB.",
            "C": "you are actively infected with TB.",
            "D": "the TB disease is currently dormant but might later become active."
        },
        "correctAnswer": "B"
    },
    {
        "question": "Characteristics of eustress following dispatch to a high-speed motor vehicle collision may include:",
        "answers": {
            "A": "the inability to remain focused, because the task at hand is demanding.",
            "B": "short term loss of energy due to the high physical demands of the job.",
            "C": "increased self-image from performing well under a challenging situation.",
            "D": "long-term feelings of being overwhelmed by the nature of the call."
        },
        "correctAnswer": "C"
    },
    {
        "question": "Prescription glasses do not provide adequate eye protection because they:",
        "answers": {
            "A": "do not have shatterproof lenses.",
            "B": "offer little or no side protection.",
            "C": "have large, rounded lenses.",
            "D": "are not secured with a strap."
        },
        "correctAnswer": "B"
    },
    {
        "question": "Quid pro quo, a type of sexual harassment, occurs when the harasser:",
        "answers": {
            "A": "stares at certain parts of another person’s anatomy.",
            "B": "makes rude remarks about a person’s body parts.",
            "C": "touches another person without his or her consent.",
            "D": "requests sexual favors in exchange for something else."
        },
        "correctAnswer": "D"
    },
    {
        "question": "The most important consideration at the scene of a hazardous materials incident is:",
        "answers": {
            "A": "calling the hazardous materials team.",
            "B": "identifying the hazardous material.",
            "C": "ensuring your personal safety.",
            "D": "evacuating the bystanders."
        },
        "correctAnswer": "C"
    },
    {
        "question": "The simplest, yet most effective method of preventing the spread of an infectious disease is to:",
        "answers": {
            "A": "wash your hands in between patient contacts.",
            "B": "ensure that your immunizations are up-to-date.",
            "C": "undergo an annual physical examination.",
            "D": "undergo annual testing for tuberculosis and hepatitis."
        },
        "correctAnswer": "A"
    },
    {
        "question": "Vectorborne transmission of an infectious organism occurs via:",
        "answers": {
            "A": "animals or insects.",
            "B": "inanimate objects.",
            "C": "smoke or dust.",
            "D": "direct contact."
        },
        "correctAnswer": "A"
    },
    {
        "question": "Which of the following is the most significant factor in determining whether a person will become ill from certain germs?",
        "answers": {
            "A": "Gender",
            "B": "Immunity",
            "C": "Age",
            "D": "Race"
        },
        "correctAnswer": "B"
    },
    {
        "question": "A 75-year-old male with a terminal illness has died at home. As you and your partner enter the residence, a family member becomes verbally abusive, pushes you, and states that you took too long to get there. You should:",
        "answers": {
            "A": "subdue the family member until the police arrive.",
            "B": "ignore the family member and assess the patient.",
            "C": "tell the family member that it is not your fault.",
            "D": "retreat and notify law enforcement personnel."
        },
        "correctAnswer": "D"
    },
    {
        "question": "At the scene of an automobile crash, a utility pole has been broken, and power lines are lying across the car. The patients inside the car are conscious. You should:",
        "answers": {
            "A": "advise the patients to carefully get out of the car.",
            "B": "mark off a danger zone around the downed lines.",
            "C": "remove the lines with a nonconductive object.",
            "D": "proceed with normal extrication procedures."
        },
        "correctAnswer": "B"
    },
    {
        "question": "Upon arriving at the scene of a motor vehicle crash, you note that two small cars collided head-on; the occupants are still in their vehicles. The fire department is in the process of stabilizing the vehicles and law enforcement personnel are directing traffic. After parking the ambulance at a safe distance, you and your partner should:",
        "answers": {
            "A": "put on high-visibility safety vests.",
            "B": "assist with vehicle stabilization.",
            "C": "quickly begin the triage process.",
            "D": "report to the incident commander."
        },
        "correctAnswer": "A"
    },
    {
        "question": "Which of the following scenarios most accurately depicts a posttraumatic stress disorder (PTSD) reaction?",
        "answers": {
            "A": "A newly certified EMT becomes extremely nauseated and diaphoretic at the scene of an incident involving grotesque injuries.",
            "B": "An EMT is emotionally exhausted and depressed after a school bus crash involving critical injuries and the death of several children.",
            "C": "An EMT becomes distracted at the scene of a motor vehicle crash involving the same type of car in which a child was previously killed.",
            "D": "An EMT with many years of field experience becomes irritable with her coworkers and experiences headaches and insomnia."
        },
        "correctAnswer": "C"
    },
    {
        "question": "As an EMT, the performance of your duties will be compared to that of:",
        "answers": {
            "A": "another EMT.",
            "B": "the general public.",
            "C": "a paramedic supervisor.",
            "D": "the medical director."
        },
        "correctAnswer": "A"
    },
    {
        "question": "For a do not resuscitate (DNR) order to be valid, it must:",
        "answers": {
            "A": "be signed by the local justice of the peace.",
            "B": "be updated a minimum of every 6 months.",
            "C": "be dated within the previous 24 months.",
            "D": "clearly state the patient’s medical problem."
        },
        "correctAnswer": "D"
    },
    {
        "question": "In many states, a minor may be treated as an adult for the purpose of consenting to or refusing medical treatment if the minor:",
        "answers": {
            "A": "is self-supporting and lives by him- or herself.",
            "B": "is mentally competent and able to refuse.",
            "C": "possesses a valid driver’s license.",
            "D": "has a poor relationship with his or her parents."
        },
        "correctAnswer": "A"
    },
    {
        "question": "In the eyes of the courts, an incomplete or untidy patient care form indicates:",
        "answers": {
            "A": "the EMT was too busy providing patient care to fill out the form.",
            "B": "potential falsification of the patient care form.",
            "C": "inadequate patient care was administered.",
            "D": "thorough documentation was not required."
        },
        "correctAnswer": "C"
    },
    {
        "question": "Maintaining the chain of evidence at the scene of a crime should include:",
        "answers": {
            "A": "quickly moving any weapons out of the patient’s sight.",
            "B": "placing the patient in a private area until the police arrive.",
            "C": "not cutting through holes in clothing that were caused by weapons.",
            "D": "making brief notes at the scene and then completing them later."
        },
        "correctAnswer": "C"
    },
    {
        "question": "Putrefaction is defined as:",
        "answers": {
            "A": "blood settling to the lowest point of the body.",
            "B": "decomposition of the body’s tissues.",
            "C": "profound cyanosis to the trunk and face.",
            "D": "separation of the torso from the rest of the body."
        },
        "correctAnswer": "B"
    },
    {
        "question": "The manner in which the EMT must act or behave when caring for a patient is called the:",
        "answers": {
            "A": "scope of practice.",
            "B": "standard of care.",
            "C": "EMT oath.",
            "D": "code of ethics."
        },
        "correctAnswer": "B"
    },
    {
        "question": "Which aspect of the Health Insurance Portability and Accountability Act (HIPAA) most affects EMS personnel?",
        "answers": {
            "A": "Protecting patient privacy",
            "B": "Preventing insurance fraud",
            "C": "Ensuring access to insurance",
            "D": "Controlling insurance costs"
        },
        "correctAnswer": "A"
    },
    {
        "question": "Which of the following general statements regarding consent is correct?",
        "answers": {
            "A": "Patients who are intoxicated are generally allowed to refuse treatment.",
            "B": "A patient can consent to transport but can legally refuse treatment.",
            "C": "All patients older than 18 years can legally refuse treatment or transport.",
            "D": "Expressed consent is valid only if given in writing by a family member."
        },
        "correctAnswer": "B"
    },
    {
        "question": "Which of the following most accurately defines negligence?",
        "answers": {
            "A": "Transferring patient care to a provider with a lower level of training",
            "B": "Transport of a mentally incompetent patient against his or her will",
            "C": "Providing care that is consistent with care provided by other EMTs",
            "D": "Deviation from the standard of care that might result in further injury"
        },
        "correctAnswer": "D"
    },
    {
        "question": "Which of the following patients has decision-making capacity and can legally refuse emergency medical treatment?",
        "answers": {
            "A": "A conscious and alert woman with severe abdominal pain",
            "B": "A diabetic woman who has slurred speech and is not aware of the date",
            "C": "A man who is staggering and states that he had three beers",
            "D": "A confused young male who says he is the president"
        },
        "correctAnswer": "A"
    },
    {
        "question": "Which of the following scenarios most accurately depicts abandonment?",
        "answers": {
            "A": "A paramedic transfers patient care to an EMT.",
            "B": "A physician assumes patient care from an EMT.",
            "C": "An AEMT transfers patient care to a paramedic.",
            "D": "An EMT gives a verbal report to an emergency room nurse."
        },
        "correctAnswer": "A"
    },
    {
        "question": "Which of the following situations requires you to notify the appropriate authorities?",
        "answers": {
            "A": "Accidental knife wound",
            "B": "Drug overdose",
            "C": "Attempted suicide",
            "D": "Cardiac arrest"
        },
        "correctAnswer": "C"
    },
    {
        "question": "Which of the following statements regarding Good Samaritan laws is correct?",
        "answers": {
            "A": "Such laws do not protect EMTs who are off duty.",
            "B": "Such laws guarantee that the EMT will not be held liable if he or she is sued.",
            "C": "Such laws provide the EMT with absolute immunity from a lawsuit.",
            "D": "Such laws will not protect the EMT in cases of gross negligence."
        },
        "correctAnswer": "D"
    },
    {
        "question": "Which of the following types of consent allows treatment of a patient who is unconscious or mentally incapacitated?",
        "answers": {
            "A": "Implied",
            "B": "Informed",
            "C": "Expressed",
            "D": "Actual"
        },
        "correctAnswer": "A"
    },
    {
        "question": "You arrive at the scene of an apparent death. When evaluating the patient, which of the following is a definitive sign of death?",
        "answers": {
            "A": "Dependent lividity",
            "B": "Profound cyanosis",
            "C": "Absence of a pulse",
            "D": "Absent breath sounds"
        },
        "correctAnswer": "A"
    },
    {
        "question": "EMS as we know it today had its origins in 1966 with the publication of:",
        "answers": {
            "A": "Accidental Death and Disability: The Neglected Disease of Modern Society.",
            "B": "the Emergency Medical Services Act.",
            "C": "Emergency Care and Transportation of the Sick and Injured.",
            "D": "the Department of Transportation’s White Paper: Death and Dying."
        },
        "correctAnswer": "A"
    },
    {
        "question": "Obtaining continuing medical education is the responsibility of the:",
        "answers": {
            "A": "State Bureau of EMS.",
            "B": "individual EMT.",
            "C": "EMS training officer.",
            "D": "EMS medical director."
        },
        "correctAnswer": "B"
    },
    {
        "question": "The continuous quality improvement (CQI) process is designed to:",
        "answers": {
            "A": "focus specifically on the quality of emergency care provided to the patient.",
            "B": "administer punitive actions to EMTs who do not follow local protocols.",
            "C": "identify areas of improvement and provide remedial training if needed.",
            "D": "ensure that all EMTs maintain licensure through the state EMS office."
        },
        "correctAnswer": "C"
    },
    {
        "question": "The EMT certification exam is designed to:",
        "answers": {
            "A": "provide EMTs with the best possible wage once certification is achieved.",
            "B": "rank EMTs based on performance on the certification exam.",
            "C": "identify those EMTs who are prepared for advanced levels of training.",
            "D": "ensure that EMTs are competent and have the same level of knowledge and skills."
        },
        "correctAnswer": "D"
    },
    {
        "question": "A 31-year-old female is experiencing an acute asthma attack. She is conscious and alert, but in obvious respiratory distress. After assisting her with her prescribed MDI, you should:",
        "answers": {
            "A": "contact medical control and apprise him or her of what you did.",
            "B": "reassess the patient and document her response to the medication.",
            "C": "administer another treatment in 30 seconds if she is still in distress.",
            "D": "check the drug’s expiration date to ensure that it is still current."
        },
        "correctAnswer": "B"
    },
    {
        "question": "A 25-year-old unrestrained female struck the steering wheel with her chest when her car hit a tree while traveling at a high rate of speed. She has signs and symptoms of shock, which you suspect are the result of intrathoracic bleeding. Which of the following interventions will provide this patient with the greatest chance for survival?",
        "answers": {
            "A": "Intravenous fluid administration",
            "B": "Rapid transport to a trauma center",
            "C": "Full immobilization of her spine",
            "D": "High-flow oxygen administration"
        },
        "correctAnswer": "B"
    },
    {
        "question": "A 56-year-old male is found semiconscious by his wife. Your assessment reveals that his respirations are rapid and shallow, his pulse is rapid and irregular, and his blood pressure is low. The patient’s wife states that he complained of left arm pain and nausea the day before, but would not allow her to call 9-1-1. The MOST likely cause of this patient’s present condition is:",
        "answers": {
            "A": "acute myocardial infarction.",
            "B": "dehydration from GI virus.",
            "C": "a ruptured aortic aneurysm.",
            "D": "severe septic hypoperfusion."
        },
        "correctAnswer": "A"
    },
    {
        "question": "Patients develop septic shock secondary to:",
        "answers": {
            "A": "poor vessel function and severe volume loss.",
            "B": "failure of the blood vessels to adequately dilate.",
            "C": "an infection that weakens cardiac contractions.",
            "D": "weak vessel tone caused by nervous system damage."
        },
        "correctAnswer": "A"
    },
    {
        "question": "Temporary, widespread vasodilation and syncope caused by a sudden nervous system reaction MOST accurately describes:",
        "answers": {
            "A": "neurogenic shock.",
            "B": "neurologic shock.",
            "C": "psychogenic shock.",
            "D": "vasovagal shock."
        },
        "correctAnswer": "C"
    },
    {
        "question": "When assessing a patient with signs and symptoms of shock, it is important to remember that:",
        "answers": {
            "A": "multiple fractures are the most common cause of hypovolemic shock.",
            "B": "the patient’s respirations are deep during the early stages of shock.",
            "C": "irreversible shock often responds well to a prompt blood transfusion.",
            "D": "blood pressure may be the last measurable factor to change in shock."
        },
        "correctAnswer": "D"
    },
    {
        "question": "A 19-year-old male was stung multiple times by fire ants. He is experiencing obvious signs and symptoms of anaphylactic shock. You administer high-flow oxygen and give him epinephrine via intramuscular injection. Upon reassessment, you determine that his condition has not improved. You should:",
        "answers": {
            "A": "consider that he may actually be experiencing an acute asthma attack.",
            "B": "repeat the epinephrine injection after consulting with medical control.",
            "C": "request a paramedic unit that is stationed approximately 15 miles away.",
            "D": "transport him immediately and provide supportive care while en route."
        },
        "correctAnswer": "B"
    },
    {
        "question": "In infants and children, a capillary refill time that is greater than ______ second(s) is a sign of poor peripheral perfusion.",
        "answers": {
            "A": "4",
            "B": "3",
            "C": "1",
            "D": "2"
        },
        "correctAnswer": "D"
    },
    {
        "question": "A 70-year-old female was recently discharged from the hospital following a total hip replacement. Today, she presents with restlessness, tachycardia, and a blood pressure of 90/64 mm Hg. Her skin is hot and moist. You should be MOST suspicious that she is experiencing:",
        "answers": {
            "A": "a local infection.",
            "B": "decompensated shock.",
            "C": "pump failure.",
            "D": "septic shock."
        },
        "correctAnswer": "D"
    },
    {
        "question": "All of the following conditions should make you suspect shock, EXCEPT:",
        "answers": {
            "A": "severe infection.",
            "B": "anaphylaxis.",
            "C": "ischemic stroke.",
            "D": "spinal injury."
        },
        "correctAnswer": "C"
    },
    {
        "question": "Clinical signs of compensated shock include all of the following, EXCEPT:",
        "answers": {
            "A": "cool and clammy skin.",
            "B": "restlessness or anxiety.",
            "C": "rapid, shallow breathing.",
            "D": "absent peripheral pulses."
        },
        "correctAnswer": "D"
    },
    {
        "question": "Distributive shock occurs when:",
        "answers": {
            "A": "severe bleeding causes tachycardia in order to distribute blood to the organs faster.",
            "B": "widespread dilation of the blood vessels causes blood to pool in the vascular beds.",
            "C": "temporary but severe vasodilation causes a decrease in blood supply to the brain.",
            "D": "an injury causes restriction of the heart muscle and impairs its pumping function."
        },
        "correctAnswer": "B"
    },
    {
        "question": "Hypovolemic shock caused by severe burns is the result of a loss of:",
        "answers": {
            "A": "red blood cells.",
            "B": "whole blood.",
            "C": "plasma.",
            "D": "platelets."
        },
        "correctAnswer": "C"
    },
    {
        "question": "Pulmonary edema and impaired ventilation occur during:",
        "answers": {
            "A": "cardiogenic shock.",
            "B": "septic shock.",
            "C": "neurogenic shock.",
            "D": "anaphylactic shock."
        },
        "correctAnswer": "A"
    },
    {
        "question": "Shock is the result of:",
        "answers": {
            "A": "the body’s maintenance of homeostasis.",
            "B": "temporary dysfunction of a major organ.",
            "C": "hypoperfusion to the cells of the body.",
            "D": "widespread constriction of the blood vessels."
        },
        "correctAnswer": "C"
    },
    {
        "question": "Which of the following injuries would MOST likely cause obstructive shock?",
        "answers": {
            "A": "Liver laceration",
            "B": "Cardiac tamponade",
            "C": "Spinal cord injury",
            "D": "Simple pneumothorax"
        },
        "correctAnswer": "B"
    },
    {
        "question": "Which of the following patients is in decompensated shock?",
        "answers": {
            "A": "A 23-year-old restless male with cool, clammy skin and tachycardia",
            "B": "A 32-year-old male with anxiety and a systolic blood pressure of 110 mm Hg",
            "C": "A 20-year-old female with absent radial pulses and dilated pupils",
            "D": "A 28-year-old female with pale skin and rapid, shallow respirations"
        },
        "correctAnswer": "C"
    },
    {
        "question": "Which of the following would MOST likely result in hemorrhagic shock?",
        "answers": {
            "A": "Severe vomiting",
            "B": "Liver laceration",
            "C": "Excessive sweating",
            "D": "Repeated diarrhea"
        },
        "correctAnswer": "B"
    },
    {
        "question": "A 60-year-old man is found to be unresponsive, pulseless, and apneic. You should:",
        "answers": {
            "A": "determine if he has a valid living will.",
            "B": "withhold CPR until he is defibrillated.",
            "C": "begin CPR until an AED is available.",
            "D": "start CPR and transport immediately."
        },
        "correctAnswer": "C"
    },
    {
        "question": "A patient should be placed in the recovery position when he or she:",
        "answers": {
            "A": "is semiconscious, injured, and breathing adequately.",
            "B": "is unresponsive, uninjured, and breathing adequately.",
            "C": "has a pulse but is unresponsive and breathing shallowly.",
            "D": "has experienced trauma but is breathing effectively."
        },
        "correctAnswer": "B"
    },
    {
        "question": "Complications associated with chest compressions include all of the following, EXCEPT:",
        "answers": {
            "A": "a fractured sternum.",
            "B": "gastric distention.",
            "C": "liver laceration.",
            "D": "rib fractures."
        },
        "correctAnswer": "B"
    },
    {
        "question": "Gastric distention will MOST likely occur:",
        "answers": {
            "A": "when you deliver minimal tidal volume.",
            "B": "if you ventilate a patient too quickly.",
            "C": "when the airway is completely obstructed.",
            "D": "in patients who are intubated."
        },
        "correctAnswer": "B"
    },
    {
        "question": "If gastric distention begins to make positive-pressure ventilation difficult, you should:",
        "answers": {
            "A": "reposition the patient’s airway",
            "B": "insert an oropharyngeal airway.",
            "C": "increase the rate of ventilation.",
            "D": "suction the patient’s oropharynx"
        },
        "correctAnswer": "A"
    },
    {
        "question": "In most cases, cardiopulmonary arrest in infants and children is caused by:",
        "answers": {
            "A": "a cardiac dysrhythmia.",
            "B": "respiratory arrest.",
            "C": "severe chest trauma.",
            "D": "a drug overdose."
        },
        "correctAnswer": "B"
    },
    {
        "question": "In two-rescuer adult CPR, you should deliver a compression to ventilation ratio of:",
        "answers": {
            "A": "5:1.",
            "B": "30:2.",
            "C": "5:2.",
            "D": "15:2."
        },
        "correctAnswer": "B"
    },
    {
        "question": "Initial treatment to dislodge a severe foreign body airway obstruction in a responsive infant involves:",
        "answers": {
            "A": "back slaps.",
            "B": "abdominal thrusts.",
            "C": "blind finger sweeps.",
            "D": "bag-mask ventilation."
        },
        "correctAnswer": "A"
    },
    {
        "question": "When assessing the pulse of an unresponsive infant, you should palpate the ________ artery.",
        "answers": {
            "A": "brachial",
            "B": "radial",
            "C": "femoral",
            "D": "carotid"
        },
        "correctAnswer": "A"
    },
    {
        "question": "Which of the following is NOT a BLS intervention?",
        "answers": {
            "A": "Abdominal thrusts",
            "B": "Chest compressions",
            "C": "Cardiac monitoring",
            "D": "Automated defibrillation"
        },
        "correctAnswer": "C"
    },
    {
        "question": "Which of the following maneuvers should be used to open a patient’s airway when a spinal injury is suspected?",
        "answers": {
            "A": "Jaw-thrust",
            "B": "Tongue–jaw lift",
            "C": "Head tilt–chin lift",
            "D": "Head tilt–neck lift"
        },
        "correctAnswer": "A"
    },
    {
        "question": "A 49-year-old male with an extensive cardiac history presents with 2 hours of crushing chest pain and shortness of breath. He is pale and diaphoretic and tells you that he feels like he is going to die. His medications include nitroglycerin, sildenafil (Viagra), and enalapril (Vasotec). His blood pressure is 140/90 mm Hg and his heart rate is 110 beats/min. In addition to administering supplemental oxygen if needed, you should:",
        "answers": {
            "A": "obtain physician approval to give the nitroglycerin.",
            "B": "administer one nitroglycerin and call medical control.",
            "C": "ask him if he took his Viagra within the past 24 hours.",
            "D": "place him in a supine position and transport at once."
        },
        "correctAnswer": "C"
    },
    {
        "question": "A 62-year-old male is seen with crushing chest pain, which he describes as being the same kind of pain that he had with a previous heart attack. He has prescribed nitroglycerin but states that he has not taken any. After administering supplemental oxygen, if needed, and contacting medical control, you should:",
        "answers": {
            "A": "assist him with his nitroglycerin unless his systolic blood pressure is less than 100 mm Hg.",
            "B": "administer up to three doses of nitroglycerin before assessing his blood pressure.",
            "C": "begin immediate transport and request a rendezvous with a paramedic unit.",
            "D": "administer the nitroglycerin unless he has taken Viagra within the past 72 hours."
        },
        "correctAnswer": "A"
    },
    {
        "question": "A 74-year-old woman complains of heaviness in her chest, nausea, and sweating that suddenly began about an hour ago. She is conscious and alert, but anxious. Her blood pressure is 144/84 mm Hg and her heart rate is 110 beats/min. She took two of her prescribed nitroglycerin (0.4-mg tablets) before your arrival but still feels heaviness in her chest. You should:",
        "answers": {
            "A": "transport her at once and wait at least 20 minutes before you consider assisting her with a third dose of her prescribed nitroglycerin.",
            "B": "recall that geriatric patients often take multiple medications and that interactions can occur with potentially negative effects.",
            "C": "give her high-flow oxygen, avoid giving her any more nitroglycerin because it may cause a drop in her blood pressure, and transport.",
            "D": "assist her in taking one more of her nitroglycerin tablets, reassess her blood pressure, and contact medical control for further instructions."
        },
        "correctAnswer": "B"
    },
    {
        "question": "Advil, Nuprin, and Motrin are trade (brand) names for the generic medication:",
        "answers": {
            "A": "aspirin.",
            "B": "ibuprofen.",
            "C": "nitrostat.",
            "D": "acetaminophen."
        },
        "correctAnswer": "B"
    },
    {
        "question": "EMTs arrive at the scene of a patient who was “found down.” A family member states that she gave naloxone (Narcan) to the patient before the ambulance arrived. The EMTs should suspect that the patient:",
        "answers": {
            "A": "has a low blood glucose level.",
            "B": "overdosed on an opioid drug.",
            "C": "experienced a prolonged seizure.",
            "D": "has a history of allergic reactions."
        },
        "correctAnswer": "B"
    },
    {
        "question": "EMTs respond to a known heroin abuser who is unresponsive. If they give naloxone (Narcan) to this patient, the EMTs should recall that:",
        "answers": {
            "A": "naloxone administration could cause seizures in this patient.",
            "B": "naloxone should be administered in increments of 2 mg.",
            "C": "the effects of naloxone last longer than most opioid drugs.",
            "D": "naloxone should not be given if the patient’s breathing is slow."
        },
        "correctAnswer": "A"
    },
    {
        "question": "How is nitroglycerin usually given by the EMT?",
        "answers": {
            "A": "Inhaled",
            "B": "Orally",
            "C": "Sublingually",
            "D": "Injected"
        },
        "correctAnswer": "C"
    },
    {
        "question": "Subcutaneous injections deliver the medication:",
        "answers": {
            "A": "between the skin and the muscle.",
            "B": "below the first layer of muscle.",
            "C": "directly into the muscle tissue.",
            "D": "through the mucosa under the tongue."
        },
        "correctAnswer": "A"
    },
    {
        "question": "Which of the following clinical signs would necessitate the administration of naloxone (Narcan) in a suspected narcotic overdose?",
        "answers": {
            "A": "Slow respirations",
            "B": "Tachycardia",
            "C": "Hypertension",
            "D": "Extreme agitation"
        },
        "correctAnswer": "A"
    },
    {
        "question": "While assisting a paramedic in the attempted resuscitation of a 55-year-old male in cardiac arrest, you should expect the paramedic to:",
        "answers": {
            "A": "administer drugs via the IV route to achieve the fastest effect.",
            "B": "give the patient activated charcoal to rule out a drug overdose.",
            "C": "withhold drug therapy until an intraosseous catheter is in place.",
            "D": "give the patient nitroglycerin to increase his blood pressure."
        },
        "correctAnswer": "A"
    },
    // some separator
    
      {
          "question": "A ___________ receives messages and signals on one frequency and then automatically retransmits them on a second frequency.",
          "answers": {
              "A": "decoder",
              "B": "duplex",
              "C": "repeater",
              "D": "scanner"
          },
          "correctAnswer": "C"
      },
      {
          "question": "A 4-year-old boy had an apparent seizure. He is conscious and calm and is sitting on his mother’s lap. His father is sitting in a nearby chair. The child’s mother suddenly begins crying uncontrollably, which causes the child to start crying. You should:",
          "answers": {
              "A": "ask the father to hold the child so you can assess him while your partner tries to calm the mother.",
              "B": "attempt to calm the child’s mother, but avoid separating her from her child because this will increase her anxiety.",
              "C": "give the child a favorite toy or blanket to hold onto and perform your assessment to the best of your ability.",
              "D": "reassure the child’s mother that seizures in children are very common and that there is nothing to worry about."
          },
          "correctAnswer": "A"
      },
      {
          "question": "A 60-year-old man complains of chest pain. He is conscious, alert, and denies shortness of breath. Which of the following questions would be the most appropriate to ask him?",
          "answers": {
              "A": "“Does the pain in your chest feel like a stabbing sensation?”",
              "B": "“Does the pain in your chest move to either of your arms?”",
              "C": "“Were you exerting yourself when the chest pain began?”",
              "D": "“Do you have any heart problems or take any medications?”"
          },
          "correctAnswer": "D"
      },
      {
          "question": "After being dispatched on an emergency call, you should expect the dispatcher to provide you with all of the following information, except:",
          "answers": {
              "A": "the number of patients involved in the incident.",
              "B": "the nature of the injury, illness, or incident.",
              "C": "the general geographic location of the incident.",
              "D": "other agencies that are responding to the scene."
          },
          "correctAnswer": "C"
      },
      {
          "question": "During your assessment of a 20-year-old man with a severe headache and nausea, you ask him when his headache began, but he does not answer your question immediately. You should:",
          "answers": {
              "A": "repeat your question because he probably did not hear you.",
              "B": "allow him time to think about the question and respond to it.",
              "C": "tell him that you cannot help him unless he answers your questions.",
              "D": "ask him if he frequently experiences severe headaches and nausea."
          },
          "correctAnswer": "B"
      },
      {
          "question": "The official transfer of patient care does not occur until the EMT:",
          "answers": {
              "A": "gives a radio report to the receiving medical facility.",
              "B": "informs dispatch of the patient’s arrival at the emergency department.",
              "C": "notifies the admitting clerk of the patient’s arrival at the hospital.",
              "D": "gives an oral report to the emergency room physician or nurse."
          },
          "correctAnswer": "D"
      },
      {
          "question": "You and your partner are dispatched to a residence for an “ill person.” When you arrive, you find that the patient, a 44-year-old man, does not speak English. There are no relatives or bystanders present who can act as an interpreter. You should:",
          "answers": {
              "A": "give the patient oxygen, assess his vital signs, and transport him to the hospital in a position of comfort.",
              "B": "refrain from performing any assessment or treatment until you can contact someone who can function as an interpreter.",
              "C": "use short, simple questions and point to specific parts of your body to try to determine the source of the patient’s complaint.",
              "D": "speak to the patient with a moderately louder voice to facilitate his ability to understand what you are saying."
          },
          "correctAnswer": "C"
      },
      {
          "question": "A 5-year-old boy has fallen and has a severe deformity of the forearm near the wrist. He has possibly sustained a fracture of the ____________ forearm.",
          "answers": {
              "A": "dorsal",
              "B": "superior",
              "C": "proximal",
              "D": "distal"
          },
          "correctAnswer": "D"
      },
      {
          "question": "A diabetic patient has polydipsia. This means that she:",
          "answers": {
              "A": "urinates frequently.",
              "B": "is excessively thirsty.",
              "C": "is unable to swallow.",
              "D": "has low blood sugar."
          },
          "correctAnswer": "B"
      },
      {
          "question": "A patient in a semi-reclined position with the head elevated to facilitate breathing is in the ___________ position.",
          "answers": {
              "A": "Fowler",
              "B": "prone",
              "C": "recovery",
              "D": "supine"
          },
          "correctAnswer": "A"
      },
      {
          "question": "A patient with a pneumothorax has unilateral chest expansion. This means that:",
          "answers": {
              "A": "both of his lungs are expanding when he inhales.",
              "B": "only one side of his chest rises when he inhales.",
              "C": "his chest and his abdomen are moving in opposite directions.",
              "D": "both sides of his chest are moving minimally."
          },
          "correctAnswer": "B"
      },
      {
          "question": "A young male jumped from a tree and landed feet first. Which aspect of his body has sustained the initial injury?",
          "answers": {
              "A": "Plantar",
              "B": "Ventral",
              "C": "Palmar",
              "D": "Dorsal"
          },
          "correctAnswer": "A"
      },
      {
          "question": "After applying a tourniquet, the injury from a patient’s leg stops bleeding. This is called:",
          "answers": {
              "A": "hemiplegia.",
              "B": "hematemesis.",
              "C": "hemolysis.",
              "D": "hemostasis."
          },
          "correctAnswer": "D"
      },
      {
          "question": "An intoxicated 40-year-old male is found lying face down. How would you document his body’s position?",
          "answers": {
              "A": "Supine",
              "B": "Dorsal",
              "C": "Recumbent",
              "D": "Prone"
          },
          "correctAnswer": "D"
      },
      {
          "question": "Enlargement of the liver is called:",
          "answers": {
              "A": "hepatomegaly.",
              "B": "hydrocephalus.",
              "C": "nephritis.",
              "D": "pneumonitis."
          },
          "correctAnswer": "A"
      },
      {
          "question": "Movement or motion away from the body’s midline is called:",
          "answers": {
              "A": "adduction.",
              "B": "extension.",
              "C": "flexion.",
              "D": "abduction."
          },
          "correctAnswer": "D"
      },
      {
          "question": "The ___________ of the heart is the inferior portion of the ventricles.",
          "answers": {
              "A": "dorsum",
              "B": "base",
              "C": "apex",
              "D": "septum"
          },
          "correctAnswer": "C"
      },
      {
          "question": "The term “pericardiocentesis” means:",
          "answers": {
              "A": "surgical repair of the sac around the heart.",
              "B": "a surgical opening made in the heart.",
              "C": "the removal of fluid from around the heart.",
              "D": "narrowing of the arteries supplying the heart."
          },
          "correctAnswer": "C"
      },
      {
          "question": "The term “supraventricular tachycardia” means:",
          "answers": {
              "A": "a rapid heart rate that originates from above the ventricles.",
              "B": "a rapid heart rate that originates from within the ventricles.",
              "C": "a slow heart rate that originates from above the ventricles.",
              "D": "a slow heart rate that originates from within the ventricles."
          },
          "correctAnswer": "A"
      },
      {
          "question": "A blood pressure cuff that is too small for a patient’s arm will give a:",
          "answers": {
              "A": "falsely low systolic and diastolic reading.",
              "B": "falsely low systolic but high diastolic reading.",
              "C": "falsely high systolic and diastolic reading.",
              "D": "falsely high systolic but low diastolic reading."
          },
          "correctAnswer": "C"
      },
      {
          "question": "After performing a primary assessment, a rapid exam of the body should be performed to:",
          "answers": {
              "A": "determine the need for spinal motion restriction precautions.",
              "B": "find and treat injuries or conditions that do not pose a threat to life.",
              "C": "look specifically for signs and symptoms of inadequate perfusion.",
              "D": "identify less-obvious injuries that require immediate treatment."
          },
          "correctAnswer": "D"
      },
      {
          "question": "As you assess the head of a patient with a suspected spinal injury, your partner should:",
          "answers": {
              "A": "maintain stabilization of the head.",
              "B": "assess the rest of the body for bleeding.",
              "C": "look in the ears for gross bleeding.",
              "D": "prepare the immobilization equipment."
          },
          "correctAnswer": "A"
      },
      {
          "question": "Capnography is used to:",
          "answers": {
              "A": "assess how much oxygen is reaching the body’s tissues.",
              "B": "trend a patient’s blood pressure and assess for shock.",
              "C": "determine how much carbon dioxide is being exhaled.",
              "D": "assess how much oxygen is bound to the hemoglobin."
          },
          "correctAnswer": "C"
      },
      {
          "question": "Cyanosis of the skin is caused by:",
          "answers": {
              "A": "peripheral vasodilation.",
              "B": "increased blood oxygen.",
              "C": "venous vasoconstriction.",
              "D": "decreased blood oxygen."
          },
          "correctAnswer": "D"
      },
      {
          "question": "In the adult, bradycardia is defined as a pulse rate less than _______ beats/min, and tachycardia is defined as a heart rate greater than _______ beats/min.",
          "answers": {
              "A": "30, 130",
              "B": "40, 120",
              "C": "50, 110",
              "D": "60, 100"
          },
          "correctAnswer": "D"
      },
      {
          "question": "The goal of oxygenation for most patients is an oxygen saturation of:",
          "answers": {
              "A": "88% to 90%",
              "B": "100%",
              "C": "94% to 99%",
              "D": "90% to 94%"
          },
          "correctAnswer": "C"
      },
      {
          "question": "The goal of the systematic head-to-toe exam that is performed during the secondary assessment is to:",
          "answers": {
              "A": "assess only the parts of the body that are injured.",
              "B": "detect and treat all non–life-threatening injuries.",
              "C": "definitively rule out significant internal injuries.",
              "D": "locate injuries not found in the primary assessment."
          },
          "correctAnswer": "D"
      },
      {
          "question": "The systematic head-to-toe assessment should be performed on:",
          "answers": {
              "A": "stable patients who are able to tell you exactly what happened.",
              "B": "patients with a significant MOI and unresponsive medical patients.",
              "C": "all patients with traumatic injuries who will require EMS transport.",
              "D": "responsive medical patients and patients without a significant MOI."
          },
          "correctAnswer": "B"
      },
      {
          "question": "Treatment and transport priorities at the scene of a mass-casualty incident should be determined after:",
          "answers": {
              "A": "medical control has been contacted.",
              "B": "a physician arrives at the scene.",
              "C": "area hospitals have been notified.",
              "D": "all the patients have been triaged."
          },
          "correctAnswer": "D"
      },
      {
          "question": "Which of the following findings indicates that your patient has a patent airway?",
          "answers": {
              "A": "Ability to speak",
              "B": "Audible breathing",
              "C": "Unresponsiveness",
              "D": "Inspiratory stridor"
          },
          "correctAnswer": "A"
      },
      {
          "question": "Which of the following would the EMT likely NOT perform on a responsive patient with a headache and no apparent life-threatening conditions?",
          "answers": {
              "A": "Systematic head-to-toe examination",
              "B": "Assessment of oxygen saturation",
              "C": "Focused secondary assessment",
              "D": "Noninvasive blood pressure monitoring"
          },
          "correctAnswer": "A"
      },
      {
          "question": "A patient’s refusal of EMS treatment and/or transport must be:",
          "answers": {
              "A": "an informed refusal.",
              "B": "reported to the police.",
              "C": "authorized by a judge.",
              "D": "witnessed by a notary."
          },
          "correctAnswer": "A"
      },
      {
          "question": "As you are wheeling your patient through the emergency department doors, you receive another call for a major motor vehicle crash. You should:",
          "answers": {
              "A": "respond only after giving a verbal patient report to a nurse or physician.",
              "B": "place the patient in a high-visibility area and then respond to the call.",
              "C": "leave a copy of the run form with a nurse and then respond to the call.",
              "D": "inform the admissions clerk of the situation and then respond at once."
          },
          "correctAnswer": "A"
      },
      {
          "question": "Communicating with hearing-impaired patients can be facilitated by doing all of the following, except:",
          "answers": {
              "A": "elevating the tone of your voice and exaggerating word pronunciation.",
              "B": "providing pen and paper if the patient prefers to write his or her response.",
              "C": "placing yourself in a position to ensure that the patient can see your lips.",
              "D": "shining a light on your face when you are in a darkened environment."
          },
          "correctAnswer": "A"
      },
      {
          "question": "Ethnocentrism is defined as:",
          "answers": {
              "A": "understanding that people from different cultural backgrounds respond to pain and stress differently.",
              "B": "suspecting that a person has an ulterior motive based on the tone of his or her voice when answering a question.",
              "C": "considering your own cultural values as more important when interacting with people of a different culture.",
              "D": "subconsciously forcing your cultural values onto a patient because you believe that your own values are more acceptable."
          },
          "correctAnswer": "C"
      },
      {
          "question": "The patient care report (PCR) ensures:",
          "answers": {
              "A": "quality assurance.",
              "B": "continuity of care.",
              "C": "availability of research data.",
              "D": "legal protection."
          },
          "correctAnswer": "B"
      },
      {
          "question": "When providing a patient report via radio, you should protect the patient’s privacy by:",
          "answers": {
              "A": "not disclosing his or her name.",
              "B": "withholding medical history data.",
              "C": "refraining from objective statements.",
              "D": "using coded medical language."
          },
          "correctAnswer": "A"
      }
  ,
    // chapter 2 above
    // chapter 3 below

      {
          "question": "All critical life functions are coordinated in which part of the brain?",
          "answers": {
              "A": "Cerebellum",
              "B": "Brainstem",
              "C": "Gray matter",
              "D": "Cerebrum"
          },
          "correctAnswer": "B"
      },
      {
          "question": "An infant or small child’s airway can be occluded if it is overextended or overflexed because:",
          "answers": {
              "A": "the tongue is proportionately small and can fall back into the throat.",
              "B": "the back of the head is flat, which prevents a neutral position.",
              "C": "the occiput is proportionately large and the trachea is flexible.",
              "D": "he or she has a long neck, which makes the trachea prone to collapse."
          },
          "correctAnswer": "C"
      },
      {
          "question": "Breathing is often more difficult in older adults because the:",
          "answers": {
              "A": "elasticity of the lungs decreases.",
              "B": "surface area of the alveoli increases.",
              "C": "overall size of the airway decreases.",
              "D": "diaphragm and intercostal muscles enlarge."
          },
          "correctAnswer": "A"
      },
      {
          "question": "Which of the following is an anatomic difference between children and adults?",
          "answers": {
              "A": "The rib cage of an infant is less flexible than an adult’s rib cage.",
              "B": "An infant’s tongue is proportionately larger than an adult’s tongue.",
              "C": "The trachea of an infant is proportionately longer than an adult’s trachea.",
              "D": "An infant’s head accounts for less body weight than an adult’s head."
          },
          "correctAnswer": "B"
      },
      {
          "question": "Which of the following statements regarding middle adults is correct?",
          "answers": {
              "A": "Women in the middle adult age group typically experience menopause in their late 50s or early 60s.",
              "B": "Increased cholesterol levels in the middle adult age group often do not respond to exercise and diet.",
              "C": "Significant impairments in hearing and vision begin to occur in persons between the ages of 41 and 44 years.",
              "D": "Cardiovascular health becomes an issue in this age group, as does the greater incidence of cancer."
          },
          "correctAnswer": "D"
      },
      {
          "question": "You are assessing a 13-month-old female who is running a fever and has been vomiting. While you are performing your physical examination on this child, you will most likely find that she:",
          "answers": {
              "A": "is unable to track your movements with her eyes.",
              "B": "responds to her name but is fearful of your presence.",
              "C": "will readily allow you to separate her from her mother.",
              "D": "has bulging fontanelles secondary to severe dehydration."
          },
          "correctAnswer": "B"
      },
      {
          "question": "After applying medical restraints to a combative patient, you should:",
          "answers": {
              "A": "remove them only after hospital personnel have requested you to do so.",
              "B": "remove them only if the patient verbally commits to calming down.",
              "C": "inform the patient that the restraints are punishment for their behavior.",
              "D": "position the patient prone in order to further prevent injury to yourself."
          },
          "correctAnswer": "A"
      },
      {
          "question": "It is essential that you ____________ your equipment to prevent the spread of disease.",
          "answers": {
              "A": "properly store",
              "B": "decontaminate",
              "C": "incinerate",
              "D": "throw out"
          },
          "correctAnswer": "B"
      },
      {
          "question": "The direct carry is used to transfer a patient:",
          "answers": {
              "A": "who cannot be placed on a backboard.",
              "B": "from a bed to the ambulance stretcher.",
              "C": "with a possible cervical spine injury.",
              "D": "with multiple long bone injuries."
          },
          "correctAnswer": "B"
      },
      {
          "question": "The first rule of safe lifting is to:",
          "answers": {
              "A": "spread your legs approximately 20″ apart.",
              "B": "keep your back in a slightly curved position.",
              "C": "keep your back in a straight, vertical position.",
              "D": "always lift with your palms facing down."
          },
          "correctAnswer": "C"
      },
      {
          "question": "To minimize the risk of injuring yourself when lifting or moving a patient, you should:",
          "answers": {
              "A": "flex at the waist instead of the hips.",
              "B": "keep the weight as close to your body as possible.",
              "C": "use a direct carry whenever possible.",
              "D": "avoid the use of log rolls or body drags."
          },
          "correctAnswer": "B"
      },
      {
          "question": "When carrying a patient up or down stairs, you should avoid:",
          "answers": {
              "A": "the use of a long backboard or scoop stretcher.",
              "B": "using a wheeled stretcher whenever possible.",
              "C": "flexing your body at the knees.",
              "D": "the use of more than two EMTs."
          },
          "correctAnswer": "B"
      },
      {
          "question": "When using a body drag to pull a patient who is on the ground, you should:",
          "answers": {
              "A": "kneel to minimize the distance that you will have to lean over.",
              "B": "avoid situations involving strenuous effort lasting more than five minutes.",
              "C": "extend your elbows as far beyond your anterior torso as possible.",
              "D": "bend your back laterally to maximize your amount of pulling power."
          },
          "correctAnswer": "A"
      },
      {
          "question": "Which of the following situations would require an urgent patient move?",
          "answers": {
              "A": "Stable patient who is blocking access to a critically injured patient",
              "B": "Imminent risk of a fire or explosion in or near the patient’s vehicle",
              "C": "Semiconscious patient with shallow respirations and signs of shock",
              "D": "Conscious patient with abrasions and a possibly fractured humerus"
          },
          "correctAnswer": "C"
      },
      {
          "question": "A patient who is suspected of being hypoxic and is breathing adequately should be given supplemental oxygen with a:",
          "answers": {
              "A": "nasal cannula.",
              "B": "nonrebreathing mask.",
              "C": "mouth-to-mask device.",
              "D": "bag-mask device."
          },
          "correctAnswer": "B"
      },
      {
          "question": "An oxygen cylinder should be taken out of service and refilled when the pressure inside it is less than:",
          "answers": {
              "A": "1,000 psi.",
              "B": "200 psi.",
              "C": "1,500 psi.",
              "D": "500 psi."
          },
          "correctAnswer": "D"
      },
      {
          "question": "Irregular respirations characterized by an increasing rate and depth of breathing followed by periods of apnea are called:",
          "answers": {
              "A": "agonal respirations.",
              "B": "Cheyne-Stokes respirations.",
              "C": "eupneic respirations.",
              "D": "ataxic respirations."
          },
          "correctAnswer": "B"
      },
      {
          "question": "Oxygen toxicity is a condition in which:",
          "answers": {
              "A": "cellular tissue damage occurs from excessive oxygen levels in the blood.",
              "B": "excessive blood oxygen levels cause the hypoxic patient to stop breathing.",
              "C": "decreased levels of oxygen in the blood result in free radical production.",
              "D": "significantly low levels of oxygen in the blood damage the cellular tissue."
          },
          "correctAnswer": "A"
      },
      {
          "question": "Structures of the lower airway include all of the following, EXCEPT:",
          "answers": {
              "A": "bronchioles.",
              "B": "alveoli.",
              "C": "the trachea.",
              "D": "the epiglottis."
          },
          "correctAnswer": "D"
      },
      {
          "question": "The presence of elevated carbon dioxide levels in the blood is called:",
          "answers": {
              "A": "hypoxia.",
              "B": "hypoxemia.",
              "C": "hypercarbia.",
              "D": "acidosis."
          },
          "correctAnswer": "C"
      },
      {
          "question": "What is the MOST common cause of airway obstruction in an unconscious patient?",
          "answers": {
              "A": "Vomitus",
              "B": "Blood clots",
              "C": "Aspirated fluid",
              "D": "The tongue"
          },
          "correctAnswer": "D"
      },
      {
          "question": "Which of the following factors will cause a reduction in minute volume in an adult?",
          "answers": {
              "A": "Increased tidal volume",
              "B": "Respirations of 20 breaths/min",
              "C": "Slight increase in respiratory rate",
              "D": "Shallow breathing"
          },
          "correctAnswer": "D"
      },
      {
          "question": "Which of the following is a late sign of hypoxia?",
          "answers": {
              "A": "Tachycardia",
              "B": "Restlessness",
              "C": "Anxiety",
              "D": "Cyanosis"
          },
          "correctAnswer": "D"
      },
      {
          "question": "Which of the following organs or tissues can survive the longest without oxygen?",
          "answers": {
              "A": "Muscle",
              "B": "Heart",
              "C": "Kidneys",
              "D": "Liver"
          },
          "correctAnswer": "A"
      },
      {
          "question": "A 19-year-old female is found unconscious by her roommate. Your primary assessment reveals that her breathing is inadequate. As you insert an oropharyngeal airway, she begins to gag violently. You should:",
          "answers": {
              "A": "remove the airway and be prepared to suction her oropharynx.",
              "B": "select a smaller oropharyngeal airway and attempt to insert it.",
              "C": "insert the airway no further but leave it in place as a bite block.",
              "D": "continue to insert the airway as you suction her oropharynx."
          },
          "correctAnswer": "A"
      },
      {
          "question": "A 23-year-old male experienced severe head trauma after his motorcycle collided with an oncoming truck. He is unconscious, has agonal gasps, and has copious bloody secretions in his mouth. How should you manage his airway?",
          "answers": {
              "A": "Suction his oropharynx with a rigid catheter until all secretions are removed.",
              "B": "Insert a nasopharyngeal airway and provide suction and assisted ventilations.",
              "C": "Alternate oropharyngeal suctioning and ventilation with a bag-mask device.",
              "D": "Provide continuous ventilations with a bag-mask device to minimize hypoxia."
          },
          "correctAnswer": "C"
      },
      {
          "question": "A 51-year-old female presents with a sudden onset of difficulty breathing. She is conscious and alert and able to speak in complete sentences. Her respirations are 22 breaths/min and regular. You should:",
          "answers": {
              "A": "perform a secondary assessment and then begin treatment.",
              "B": "insert a nasal airway in case her mental status decreases.",
              "C": "assist her ventilations with a bag-mask device.",
              "D": "administer oxygen via a nonrebreathing mask."
          },
          "correctAnswer": "D"
      },
      {
          "question": "A nasopharyngeal airway is inserted:",
          "answers": {
              "A": "into the smaller nostril with the tip following the roof of the nose.",
              "B": "with the bevel facing the septum if inserted into the right nare.",
              "C": "with the bevel pointing downward if inserted into the left nare.",
              "D": "into the larger nostril with the tip pointing away from the septum."
          },
          "correctAnswer": "B"
      },
      {
          "question": "All of the following will help minimize the risk of gastric distention when ventilating an apneic patient with a bag-mask device, EXCEPT:",
          "answers": {
              "A": "ensuring the appropriate airway position.",
              "B": "increasing the amount of delivered tidal volume.",
              "C": "ventilating the patient at the appropriate rate.",
              "D": "delivering each breath over 1 second."
          },
          "correctAnswer": "B"
      },
      {
          "question": "CPAP is indicated for patients who:",
          "answers": {
              "A": "have pulmonary edema and can follow verbal commands.",
              "B": "are unresponsive and have signs of inadequate ventilation.",
              "C": "have signs of pneumonia but are breathing adequately.",
              "D": "are hypotensive and have a marked reduction in tidal volume."
          },
          "correctAnswer": "A"
      },
      {
          "question": "How does CPAP improve oxygenation and ventilation in patients with certain respiratory problems?",
          "answers": {
              "A": "It prevents alveolar collapse by pushing air into the lungs during inhalation.",
              "B": "It pushes thick, infected pulmonary secretions into isolated areas of the lung.",
              "C": "It forces the alveoli open and increases the concentration of oxygen in the alveoli.",
              "D": "It decreases intrathoracic pressure, which allows more room for lung expansion."
          },
          "correctAnswer": "C"
      },
      {
          "question": "The jaw-thrust maneuver is used to open the airway of patients with suspected:",
          "answers": {
              "A": "copious oral secretions.",
              "B": "cervical spine injuries.",
              "C": "mandibular fractures.",
              "D": "upper airway swelling."
          },
          "correctAnswer": "B"
      },
      {
          "question": "Tidal volume is defined as the volume of air that:",
          "answers": {
              "A": "remains in the lungs following a complete exhalation.",
              "B": "moves into or out of the lungs in a single breath.",
              "C": "is forced into the lungs as a result of positive pressure.",
              "D": "is moved through the lungs in a single minute."
          },
          "correctAnswer": "B"
      },
      {
          "question": "You have inserted an oral airway and are ventilating an apneic woman with a bag-mask device. She suddenly begins regurgitating large amounts of vomit. You should:",
          "answers": {
              "A": "roll her onto her side and remove the oral airway.",
              "B": "insert a nasal airway and then suction her mouth.",
              "C": "perform a finger sweep of her mouth.",
              "D": "remove the oral airway and suction her oropharynx."
          },
          "correctAnswer": "A"
      },
      {
          "question": "As the bronchus divides into smaller bronchioles, the terminal ends of these smaller passages form the:",
          "answers": {
              "A": "pleura.",
              "B": "bronchi.",
              "C": "capillaries.",
              "D": "alveoli."
          },
          "correctAnswer": "D"
      },
      {
          "question": "Dead space is the portion of the respiratory system that:",
          "answers": {
              "A": "includes the alveoli and capillaries surrounding the alveoli.",
              "B": "receives oxygen but is unable to release carbon dioxide.",
              "C": "contains no alveoli and does not participate in gas exchange.",
              "D": "must be filled with air before gas exchange can take place."
          },
          "correctAnswer": "C"
      },
      {
          "question": "The axial skeleton is composed of the:",
          "answers": {
              "A": "bones that constitute the pelvic girdle.",
              "B": "arms, legs, and pelvis.",
              "C": "lower part of the torso and the legs.",
              "D": "skull, face, thorax, and vertebral column."
          },
          "correctAnswer": "D"
      },
      {
          "question": "The carpal bones form the:",
          "answers": {
              "A": "ankle.",
              "B": "hand.",
              "C": "foot.",
              "D": "wrist."
          },
          "correctAnswer": "D"
      },
      {
          "question": "The central nervous system is composed of the:",
          "answers": {
              "A": "spinal cord and sensory nerves.",
              "B": "brain and sensory nerves.",
              "C": "brain and spinal cord.",
              "D": "motor and sensory nerves."
          },
          "correctAnswer": "C"
      },
      {
          "question": "The electrical impulse of the heart normally begins at the:",
          "answers": {
              "A": "bundle of His.",
              "B": "atrioventricular node.",
              "C": "sinoatrial node.",
              "D": "Purkinje fibers."
          },
          "correctAnswer": "C"
      },
      {
          "question": "The exchange of oxygen and nutrients for waste products of metabolism occurs at the cellular level in the:",
          "answers": {
              "A": "arterioles.",
              "B": "venules.",
              "C": "capillaries.",
              "D": "arteries."
          },
          "correctAnswer": "C"
      },
      {
          "question": "The left side of the heart receives oxygenated blood from the lungs through the:",
          "answers": {
              "A": "superior venae cavae.",
              "B": "inferior venae cavae.",
              "C": "pulmonary veins.",
              "D": "pulmonary arteries."
          },
          "correctAnswer": "C"
      },
      {
          "question": "The most distal four spinal vertebrae, which are fused together, form the:",
          "answers": {
              "A": "ilium.",
              "B": "sacrum.",
              "C": "ischium.",
              "D": "coccyx."
          },
          "correctAnswer": "D"
      },
      {
          "question": "Which of the following glands regulates the function of all other endocrine glands in the body?",
          "answers": {
              "A": "Adrenal",
              "B": "Pituitary",
              "C": "Thyroid",
              "D": "Parathyroid"
          },
          "correctAnswer": "B"
      },
      {
          "question": "Which of the following is not a facial bone?",
          "answers": {
              "A": "Mastoid",
              "B": "Zygoma",
              "C": "Mandible",
              "D": "Maxilla"
          },
          "correctAnswer": "A"
      },
      {
          "question": "Which of the following organs or structures lies within the retroperitoneal space?",
          "answers": {
              "A": "Ascending aorta",
              "B": "Gallbladder",
              "C": "Spleen",
              "D": "Kidneys"
          },
          "correctAnswer": "D"
      },
      {
          "question": "White blood cells, which are also called leukocytes, function by:",
          "answers": {
              "A": "producing the body’s erythrocytes.",
              "B": "producing blood-clotting factors.",
              "C": "carrying oxygen and other nutrients.",
              "D": "protecting the body from infection."
          },
          "correctAnswer": "D"
      },

// chapter 4 above
// chapter 5 above
  {
      "question": "In addition to looking for severe bleeding, assessment of circulation in the conscious patient should involve:",
      "answers": {
          "A": "applying a pulse oximeter probe to the finger to determine if peripheral perfusion is adequate.",
          "B": "checking the radial pulse and noting the color, temperature, and condition of the skin.",
          "C": "palpating the carotid pulse to determine the approximate rate and checking capillary refill time.",
          "D": "taking a blood pressure and determining if the patient is alert and oriented or confused."
      },
      "correctAnswer": "B"
  },
  {
      "question": "After sizing up the scene of a patient with a possible infectious disease, your next priority should be to:",
      "answers": {
          "A": "take standard precautions.",
          "B": "quickly access the patient.",
          "C": "contact medical control.",
          "D": "notify law enforcement."
      },
      "correctAnswer": "A"
  },
  {
      "question": "An infectious disease is MOST accurately defined as:",
      "answers": {
          "A": "the invasion of the human body by a bacterium that cannot be destroyed by antibiotics or other drugs.",
          "B": "a medical condition caused by the growth and spread of small, harmful organisms within the body.",
          "C": "a disease that can be spread from one person or species to another through a number of mechanisms.",
          "D": "any disease that enters the body via the bloodstream and renders the immune system nonfunctional."
      },
      "correctAnswer": "B"
  },
  {
      "question": "In addition to obtaining a SAMPLE history and asking questions related to the chief complaint, what else should you specifically inquire about when assessing a patient with a potentially infectious disease?",
      "answers": {
          "A": "Sexual practices",
          "B": "Drug allergies",
          "C": "Recent travel",
          "D": "HIV status"
      },
      "correctAnswer": "C"
  },
  {
      "question": "In contrast to the assessment of a trauma patient, assessment of a medical patient:",
      "answers": {
          "A": "is not as complex for the EMT because most patients typically present with classic symptoms.",
          "B": "almost exclusively focuses on physical signs that indicate the patient is experiencing a problem.",
          "C": "requires a thorough head-to-toe exam that involves a detailed assessment of all body systems.",
          "D": "is focused on the nature of illness, the patient’s chief complaint, and his or her symptoms."
      },
      "correctAnswer": "D"
  },
  {
      "question": "Upon initial contact with a patient who appears to be unconscious, you should:",
      "answers": {
          "A": "direct your partner to apply oxygen via nonrebreathing mask.",
          "B": "assess breathing depth and determine the respiratory rate.",
          "C": "attempt to elicit a verbal response by talking to the patient.",
          "D": "squeeze the trapezius muscle to see if the patient responds."
      },
      "correctAnswer": "C"
  },
  {
      "question": "A conscious and alert 29-year-old female with a history of asthma complains of difficulty breathing that began after her morning jog. The temperature outside is 40°F (5°C). On exam, you hear bilateral expiratory wheezing. After providing supplemental oxygen, you should:",
      "answers": {
          "A": "determine if she has been prescribed a beta-agonist inhaler.",
          "B": "call medical control and ask how to proceed with treatment.",
          "C": "contact medical control and administer an antihistamine.",
          "D": "place her in a recumbent position to facilitate breathing."
      },
      "correctAnswer": "A"
  },
  {
      "question": "A pleural effusion is MOST accurately defined as:",
      "answers": {
          "A": "fluid accumulation outside the lung.",
          "B": "a unilaterally collapsed lung.",
          "C": "a bacterial infection of the lung tissue.",
          "D": "diffuse collapsing of the alveoli."
      },
      "correctAnswer": "A"
  },
  {
      "question": "Alkalosis is a condition that occurs when:",
      "answers": {
          "A": "the level of carbon dioxide in the blood increases.",
          "B": "dangerous acids accumulate in the bloodstream.",
          "C": "slow, shallow breathing eliminates too much carbon dioxide.",
          "D": "blood acidity is reduced by excessive breathing."
      },
      "correctAnswer": "D"
  },
  {
      "question": "Common signs and symptoms of acute hyperventilation syndrome include:",
      "answers": {
          "A": "unilateral paralysis and slurred speech.",
          "B": "altered mental status and bradycardia.",
          "C": "tachypnea and tingling in the extremities.",
          "D": "anxiety, dizziness, and severe bradypnea."
      },
      "correctAnswer": "C"
  },
  {
      "question": "Dyspnea is MOST accurately defined as:",
      "answers": {
          "A": "a marked increase in the exhalation phase.",
          "B": "labored breathing with reduced tidal volume.",
          "C": "a complete cessation of respiratory effort.",
          "D": "shortness of breath or difficulty breathing."
      },
      "correctAnswer": "D"
  },
  {
      "question": "Hyperventilation could be associated with all of the following, EXCEPT:",
      "answers": {
          "A": "a respiratory infection.",
          "B": "high blood glucose levels.",
          "C": "an overdose of aspirin.",
          "D": "a narcotic overdose."
      },
      "correctAnswer": "D"
  },
  {
      "question": "In order for efficient pulmonary gas exchange to occur:",
      "answers": {
          "A": "the pulmonary capillaries must be completely constricted and the alveoli must be collapsed.",
          "B": "the percentage of inhaled carbon dioxide must exceed the percentage of inhaled oxygen.",
          "C": "there must be low quantities of pulmonary surfactant to allow for full alveolar expansion.",
          "D": "oxygen and carbon dioxide must be able to freely diffuse across the alveolar–capillary membrane."
      },
      "correctAnswer": "D"
  },
  {
      "question": "In what area of the lungs does respiration occur?",
      "answers": {
          "A": "Alveoli",
          "B": "Trachea",
          "C": "Capillaries",
          "D": "Bronchi"
      },
      "correctAnswer": "A"
  },
  {
      "question": "When assessing for fluid collection in the lungs during auscultation of lung sounds, you should:",
      "answers": {
          "A": "auscultate the posterior chest first and compare the apex of one lung to the base of the opposite lung.",
          "B": "start at the lower lung fields and determine at which level you start hearing clear breath sounds.",
          "C": "note the presence of a high-pitched whistling sound, which is an indicator of fluid in the lungs.",
          "D": "pay special attention to the exhalation phase because this is when you will likely hear rales or rhonchi."
      },
      "correctAnswer": "B"
  },
  {
      "question": "Which of the following conditions would be LEAST likely to result in hypoxia?",
      "answers": {
          "A": "Narcotic overdose",
          "B": "Pulmonary edema",
          "C": "Pleural effusion",
          "D": "Severe anxiety"
      },
      "correctAnswer": "D"
  },
  {
      "question": "A 30-year-old male presents with acute shortness of breath, widespread hives, and facial swelling. He denies any past medical history and takes no medications. During your assessment, you hear wheezing over all lung fields. His blood pressure is 90/50 mm Hg, and his heart rate is 110 beats/min. In addition to giving him high-flow oxygen, the MOST important treatment for this patient is:",
      "answers": {
          "A": "a beta-antagonist.",
          "B": "albuterol.",
          "C": "an antihistamine.",
          "D": "epinephrine."
      },
      "correctAnswer": "D"
  },
  {
      "question": "A 62-year-old man with a history of congestive heart failure presents with severe respiratory distress and with an oxygen saturation of 82%. When you auscultate his lungs, you hear widespread rales. He is conscious and alert, is able to follow simple commands, and can only speak in two- to three-word sentences at a time. You should:",
      "answers": {
          "A": "force fluid from his alveoli by hyperventilating him with a bag-valve mask at a rate of at least 20 breaths/min.",
          "B": "apply a CPAP device, monitor his blood pressure, and observe him for signs of improvement or deterioration.",
          "C": "place him in a position of comfort, deliver oxygen via nasal cannula, and closely monitor his breathing.",
          "D": "place him in a supine position and assist his ventilations with a bag-valve mask and high-flow oxygen."
      },
      "correctAnswer": "B"
  },
  {
      "question": "Which of the following statements regarding anaphylaxis is correct?",
      "answers": {
          "A": "Patients with asthma are at lower risk of developing anaphylaxis.",
          "B": "The signs of anaphylaxis are caused by widespread vasoconstriction.",
          "C": "Most anaphylactic reactions occur within 60 minutes of exposure.",
          "D": "Anaphylaxis is characterized by airway swelling and hypotension."
      },
      "correctAnswer": "D"
  },
  {
      "question": "A patient who is experiencing aphasia is:",
      "answers": {
          "A": "unable to produce or understand speech.",
          "B": "not able to swallow without choking.",
          "C": "experiencing a right hemispheric stroke.",
          "D": "usually conscious but has slurred speech."
      },
      "correctAnswer": "A"
  },
  {
      "question": "A patient who is possibly experiencing a stroke is NOT eligible for thrombolytic (fibrinolytic) therapy if he or she:",
      "answers": {
          "A": "has a GCS score that is less than 8.",
          "B": "has bleeding within the brain.",
          "C": "is older than 60 years of age.",
          "D": "has had a prior heart attack."
      },
      "correctAnswer": "B"
  },
  {
      "question": "Individuals with chronic alcoholism are predisposed to intracranial bleeding and hypoglycemia secondary to abnormalities in the:",
      "answers": {
          "A": "liver.",
          "B": "pancreas.",
          "C": "kidneys.",
          "D": "brain."
      },
      "correctAnswer": "A"
  },
  {
      "question": "Status epilepticus is characterized by:",
      "answers": {
          "A": "profound tachycardia and total muscle flaccidity.",
          "B": "an absence seizure that is not preceded by an aura.",
          "C": "prolonged seizures without a return of consciousness.",
          "D": "generalized seizures that last less than 5 minutes."
      },
      "correctAnswer": "C"
  },
  {
      "question": "The most basic functions of the body, such as breathing, blood pressure, and swallowing, are controlled by the:",
      "answers": {
          "A": "cerebrum.",
          "B": "brain stem.",
          "C": "cerebellum.",
          "D": "cerebral cortex."
      },
      "correctAnswer": "B"
  },
  {
      "question": "The MOST significant risk factor for a hemorrhagic stroke is:",
      "answers": {
          "A": "diabetes mellitus.",
          "B": "severe stress.",
          "C": "heavy exertion.",
          "D": "hypertension."
      },
      "correctAnswer": "D"
  },
  {
      "question": "The spinal cord exits the cranium through the:",
      "answers": {
          "A": "vertebral foramen.",
          "B": "foramen lamina.",
          "C": "cauda equina.",
          "D": "foramen magnum."
      },
      "correctAnswer": "D"
  },
  {
      "question": "The three major parts of the brain are the:",
      "answers": {
          "A": "cerebellum, medulla, and occiput.",
          "B": "midbrain, cerebellum, and spinal cord.",
          "C": "cerebrum, cerebellum, and brain stem.",
          "D": "brain stem, midbrain, and spinal cord."
      },
      "correctAnswer": "C"
  },
  {
      "question": "Which of the following conditions would MOST likely affect the entire brain?",
      "answers": {
          "A": "Respiratory failure or cardiopulmonary arrest",
          "B": "Reduced blood supply to the left hemisphere",
          "C": "Blocked cerebral artery in the frontal lobe",
          "D": "Ruptured cerebral artery in the occipital lobe"
      },
      "correctAnswer": "A"
  },
  {
      "question": "Which of the following findings should concern the EMT the MOST when assessing a patient who complains of a headache?",
      "answers": {
          "A": "Neck stiffness or pain",
          "B": "Sinus congestion",
          "C": "History of migraines",
          "D": "Slow onset of symptoms"
      },
      "correctAnswer": "A"
  },
  {
      "question": "Which of the following MOST accurately describes the cause of an ischemic stroke?",
      "answers": {
          "A": "Acute atherosclerotic disease",
          "B": "Narrowing of a carotid artery",
          "C": "Blockage of a cerebral artery",
          "D": "Rupture of a cerebral artery"
      },
      "correctAnswer": "C"
  },
  {
      "question": "Which of the following assessment findings is MOST indicative of a cardiovascular problem?",
      "answers": {
          "A": "Unequal breath sounds",
          "B": "Use of the accessory muscles",
          "C": "Jugular venous distention",
          "D": "Palpable pain to the epigastrium"
      },
      "correctAnswer": "C"
  },
  // chapter 6 below
    {
        "question": "A dissecting aortic aneurysm occurs when:",
        "answers": {
            "A": "the aorta ruptures, resulting in profound bleeding.",
            "B": "the inner layers of the aorta become separated.",
            "C": "a weakened area develops in the aortic wall.",
            "D": "all layers of the aorta suddenly contract."
        },
        "correctAnswer": "B"
    },
    {
        "question": "Acute coronary syndrome (ACS) is a term used to describe:",
        "answers": {
            "A": "the exact moment that a coronary artery is completely occluded.",
            "B": "a group of symptoms that are caused by myocardial ischemia.",
            "C": "a severe decrease in perfusion caused by changes in heart rate.",
            "D": "the warning signs that occur shortly before a heart attack."
        },
        "correctAnswer": "B"
    },
    {
        "question": "Blood that is ejected from the right ventricle:",
        "answers": {
            "A": "flows into the pulmonary arteries.",
            "B": "has a high concentration of oxygen.",
            "C": "enters the systemic circulation.",
            "D": "was received directly from the aorta."
        },
        "correctAnswer": "A"
    },
    {
        "question": "A 60-year-old female presents with a tearing sensation in her lower back. Her skin is sweaty, and she is tachycardic. The EMT should suspect:",
        "answers": {
            "A": "aortic aneurysm.",
            "B": "kidney stones.",
            "C": "strangulated hernia.",
            "D": "acute pancreatitis."
        },
        "correctAnswer": "A"
    },
    {
        "question": "Esophageal varices MOST commonly occur in patients who:",
        "answers": {
            "A": "consume a lot of alcohol.",
            "B": "have uncontrolled diabetes.",
            "C": "have weak immune systems.",
            "D": "have a history of esophagitis."
        },
        "correctAnswer": "A"
    },
    {
        "question": "Most patients with abdominal pain prefer to:",
        "answers": {
            "A": "sit fully upright because it helps relax the abdominal muscles.",
            "B": "lie on their side with their knees drawn into the abdomen.",
            "C": "lie in a supine position with their knees in a flexed position.",
            "D": "sit in a semi-Fowler position with their knees slightly bent."
        },
        "correctAnswer": "B"
    },
    {
        "question": "Which of the following conditions is more common in women than in men?",
        "answers": {
            "A": "Pancreatitis",
            "B": "Cholecystitis",
            "C": "Hepatitis",
            "D": "Cystitis"
        },
        "correctAnswer": "D"
    },
    {
        "question": "Which of the following organs would MOST likely bleed profusely if injured?",
        "answers": {
            "A": "Gallbladder",
            "B": "Liver",
            "C": "Stomach",
            "D": "Appendix"
        },
        "correctAnswer": "B"
    },
    {
        "question": "Your patient’s past medical history includes hypertension, congestive heart failure, diabetes, and seizures. Today, he presents with signs of acute renal failure. Which of his medical problems MOST likely caused this?",
        "answers": {
            "A": "Diabetes",
            "B": "Hypertension",
            "C": "Heart failure",
            "D": "Seizures"
        },
        "correctAnswer": "C"
    },
    {
        "question": "A 59-year-old male presents with sudden-onset severe lower back pain. He is conscious and alert, but very restless and diaphoretic. Your assessment reveals a pulsating mass to the left of his umbilicus. You should:",
        "answers": {
            "A": "place the patient in a sitting position and transport at once.",
            "B": "vigorously palpate the abdomen to establish pain severity.",
            "C": "administer oxygen and prepare for immediate transport.",
            "D": "request a paramedic unit to give the patient pain medication."
        },
        "correctAnswer": "C"
    },
    {
        "question": "Injury to a hollow abdominal organ would MOST likely result in:",
        "answers": {
            "A": "leakage of contents into the abdominal cavity.",
            "B": "impairment in the blood’s clotting abilities.",
            "C": "pain secondary to blood in the peritoneum.",
            "D": "profound shock due to severe internal bleeding."
        },
        "correctAnswer": "A"
    },
    {
        "question": "You are transporting a 49-year-old male with “tearing” abdominal pain. You are approximately 30 miles away from the closest hospital. During your reassessment, you determine that the patient’s condition has deteriorated significantly. You should:",
        "answers": {
            "A": "immediately perform a rapid physical examination.",
            "B": "continue transporting and alert the receiving hospital.",
            "C": "consider requesting a rendezvous with an ALS unit.",
            "D": "assist his ventilations with a bag-valve mask."
        },
        "correctAnswer": "C"
    },
    {
        "question": "Classic signs and symptoms of hypoglycemia include:",
        "answers": {
            "A": "cold, clammy skin; bradycardia; hunger; and deep, rapid respirations.",
            "B": "cool, clammy skin; weakness; tachycardia; and rapid respirations.",
            "C": "warm, dry skin; hunger; abdominal pain; and deep, slow respirations.",
            "D": "warm, dry skin; irritability; bradycardia; and rapid respirations."
        },
        "correctAnswer": "B"
    },
    {
        "question": "Diabetes is MOST accurately defined as a(n):",
        "answers": {
            "A": "lack of insulin production in the pancreas.",
            "B": "abnormally high blood glucose level.",
            "C": "mass excretion of glucose by the kidneys.",
            "D": "disorder of glucose metabolism."
        },
        "correctAnswer": "D"
    },
    {
        "question": "Diabetic ketoacidosis occurs when:",
        "answers": {
            "A": "blood glucose levels rapidly fall.",
            "B": "the pancreas produces excess insulin.",
            "C": "insulin is not available in the body.",
            "D": "the cells rapidly metabolize glucose."
        },
        "correctAnswer": "C"
    },
    {
        "question": "Excessive eating caused by cellular “hunger” is called:",
        "answers": {
            "A": "polyphagia.",
            "B": "dyspepsia.",
            "C": "polydipsia.",
            "D": "dysphasia."
        },
        "correctAnswer": "A"
    },
    {
        "question": "Hemoglobin is:",
        "answers": {
            "A": "found within the red blood cells and is responsible for carrying oxygen.",
            "B": "essential for the formation of clots, such as when vessel damage occurs.",
            "C": "the fluid portion of the blood that transports cells throughout the body.",
            "D": "a key component of the blood and is produced in response to an infection."
        },
        "correctAnswer": "A"
    },
    {
        "question": "In general, oral glucose should be given to any patient who:",
        "answers": {
            "A": "is unresponsive, even in the absence of a history of diabetes.",
            "B": "has documented hypoglycemia and an absent gag reflex.",
            "C": "has an altered mental status and a history of diabetes.",
            "D": "has a blood glucose level that is less than 100 mg/dL."
        },
        "correctAnswer": "C"
    },
    {
        "question": "Proper procedure for administering oral glucose to a patient includes all of the following, EXCEPT:",
        "answers": {
            "A": "checking the medication’s expiration date.",
            "B": "assessing the patient’s mental status.",
            "C": "ensuring the absence of a gag reflex.",
            "D": "requesting permission from medical control."
        },
        "correctAnswer": "C"
    },
    {
        "question": "The normal blood glucose level is between:",
        "answers": {
            "A": "160 and 200 mg/dL.",
            "B": "60 and 80 mg/dL.",
            "C": "80 and 120 mg/dL.",
            "D": "130 and 150 mg/dL."
        },
        "correctAnswer": "C"
    },
    {
        "question": "A 37-year-old female with a history of diabetes presents with excessive urination and weakness of 2 days’ duration. Her blood glucose level reads 320 mg/dL. If this patient’s condition is not promptly treated, she will MOST likely develop:",
        "answers": {
            "A": "acidosis and dehydration.",
            "B": "severe insulin shock.",
            "C": "hypoxia and overhydration.",
            "D": "irreversible renal failure."
        },
        "correctAnswer": "A"
    },
    {
        "question": "During your assessment of a 19-year-old male, you are told that he is being treated with factor VIII. This indicates that:",
        "answers": {
            "A": "his blood clots too quickly.",
            "B": "he has hemophilia A.",
            "C": "he has thrombophilia.",
            "D": "he has a thrombosis."
        },
        "correctAnswer": "B"
    },
    {
        "question": "During your assessment of a 70-year-old woman, she tells you that she takes blood-thinning medication and has to wear compression stockings around her legs. This information should make you suspect that she has:",
        "answers": {
            "A": "severe hyperglycemia.",
            "B": "deep vein thrombosis.",
            "C": "hemophilia",
            "D": "sickle-cell disease"
        },
        "correctAnswer": "B"
    },
    {
        "question": "Kussmaul respirations are an indication that the body is:",
        "answers": {
            "A": "severely hypoxic and eliminating excess CO2.",
            "B": "attempting to eliminate acids from the blood.",
            "C": "compensating for decreased blood glucose levels.",
            "D": "trying to generate energy by breathing deeply."
        },
        "correctAnswer": "B"
    },
    {
        "question": "A 29-year-old pregnant woman has had severe vomiting for the last 2 days. Today, she is vomiting large amounts of blood. Her skin is cool and pale, and she is tachycardic. The EMT should suspect:",
        "answers": {
            "A": "Mallory–Weiss tear.",
            "B": "esophageal varices.",
            "C": "esophagitis.",
            "D": "acute pancreatitis."
        },
        "correctAnswer": "A"
    },
    {
        "question": "A 30-year-old woman with a history of alcoholism presents with severe upper abdominal pain and is vomiting large amounts of bright red blood. Her skin is cool, pale, and clammy; her heart rate is 120 beats/min and weak; and her blood pressure is 70/50 mm Hg. Your MOST immediate action should be to:",
        "answers": {
            "A": "give her high-flow supplemental oxygen.",
            "B": "protect her airway from aspiration.",
            "C": "rapidly transport her to the hospital.",
            "D": "keep her supine and keep her warm."
        },
        "correctAnswer": "B"
    },
    {
        "question": "A 35-year-old obese woman is complaining of localized pain in the right upper quadrant with referred pain to the right shoulder. The MOST likely cause of her pain is:",
        "answers": {
            "A": "appendicitis.",
            "B": "acute cystitis.",
            "C": "pancreatitis.",
            "D": "acute cholecystitis."
        },
        "correctAnswer": "D"
    },
    {
        "question": "Angina pectoris occurs when:",
        "answers": {
            "A": "one or more coronary arteries suddenly spasm.",
            "B": "a coronary artery is totally occluded by plaque.",
            "C": "myocardial oxygen demand exceeds supply.",
            "D": "myocardial oxygen supply exceeds the demand."
        },
        "correctAnswer": "C"
    },
    {
        "question": "Cardiogenic shock following AMI is caused by:",
        "answers": {
            "A": "a profound increase in the patient’s heart rate.",
            "B": "widespread dilation of the systemic vasculature.",
            "C": "decreased pumping force of the heart muscle.",
            "D": "hypovolemia secondary to severe vomiting."
        },
        "correctAnswer": "C"
    },
    {
        "question": "Deoxygenated blood from the body returns to the:",
        "answers": {
            "A": "right ventricle.",
            "B": "left ventricle.",
            "C": "left atrium.",
            "D": "right atrium."
        },
        "correctAnswer": "D"
    },
    {
        "question": "In contrast to the sympathetic nervous system, the parasympathetic nervous system:",
        "answers": {
            "A": "dilates the blood vessels in the muscles.",
            "B": "causes an increase in the heart rate.",
            "C": "prepares the body to handle stress.",
            "D": "slows the heart and respiratory rates."
        },
        "correctAnswer": "D"
    },
    {
        "question": "The electrical impulse generated by the heart originates in the:",
        "answers": {
            "A": "sinoatrial node.",
            "B": "atrioventricular node.",
            "C": "coronary sinus.",
            "D": "bundle of His."
        },
        "correctAnswer": "C"
    },
    {
        "question": "Which of the following blood vessels transports oxygenated blood?",
        "answers": {
            "A": "Pulmonary arteries",
            "B": "Inferior vena cava",
            "C": "Pulmonary veins",
            "D": "Superior vena cava"
        },
        "correctAnswer": "C"
    },
    {
        "question": "Which of the following medications is commonly given to patients with chest pain to prevent blood clots from forming or getting bigger?",
        "answers": {
            "A": "Furosemide (Lasix)",
            "B": "Aspirin",
            "C": "Oxygen",
            "D": "Metoprolol (Toprol)"
        },
        "correctAnswer": "B"
    },
    {
        "question": "Which of the following signs is commonly observed in patients with right-sided heart failure?",
        "answers": {
            "A": "Labored breathing",
            "B": "Dependent edema",
            "C": "Flat jugular veins",
            "D": "Pulmonary edema"
        },
        "correctAnswer": "B"
    },
    // quiz 7 below
    
        {
            "question": "A 38-year-old woman was bitten by fire ants while at the park. Your primary assessment reveals that she is semiconscious; has labored breathing; and has a rapid, thready pulse. She has a red rash on her entire body, and her face is swollen. You should:",
            "answers": {
                "A": "locate the area where the fire ants bit her.",
                "B": "assist her ventilations with 100% oxygen.",
                "C": "place her supine with her legs elevated.",
                "D": "perform a rapid secondary assessment."
            },
            "correctAnswer": "B"
        },
        {
            "question": "Common side effects of epinephrine include all of the following, EXCEPT:",
            "answers": {
                "A": "tachycardia.",
                "B": "dizziness.",
                "C": "headache.",
                "D": "drowsiness."
            },
            "correctAnswer": "D"
        },
        {
            "question": "Which of the following statements regarding epinephrine administration via the intramuscular (IM) route is correct?",
            "answers": {
                "A": "The IM route should not be used in children.",
                "B": "The preferred injection site is the upper arm.",
                "C": "The maximum single adult dose is 0.15 mg.",
                "D": "The 1:1000 concentration should be used."
            },
            "correctAnswer": "D"
        },
        {
            "question": "You respond to the residence of a 55-year-old woman with a possible allergic reaction to peanuts that she ate approximately 30 minutes ago. The patient is conscious and alert, but has diffuse urticaria and the feeling that she has a lump in her throat. As your partner applies oxygen to the patient, you should:",
            "answers": {
                "A": "ask her when her last allergic reaction occurred.",
                "B": "obtain a complete set of baseline vital signs.",
                "C": "ascertain if she has a family history of allergies.",
                "D": "ask her if she has prescribed epinephrine."
            },
            "correctAnswer": "D"
        },
        {
            "question": "A construction worker complains of intense pain after a bag of dry powder was spilled on his arm. The EMT should:",
            "answers": {
                "A": "cover the exposed area with a sterile dressing and elevate his arm.",
                "B": "immediately flush the skin with clean water for 15 to 20 minutes.",
                "C": "brush the chemical from his arm and cover it with a sterile dressing.",
                "D": "brush the chemical from his arm and then flush the skin with water."
            },
            "correctAnswer": "D"
        },
        {
            "question": "A man with a prolonged history of alcohol abuse fell from a second-story balcony. His blood pressure is 80/60 mm Hg, his heart rate is 120 beats/min, and his skin is cool and pale. When caring for this patient, the EMT should recall that:",
            "answers": {
                "A": "patients with alcoholism are prone to hyperthermia.",
                "B": "patients with alcoholism are prone to hyperglycemia.",
                "C": "reduced blood clotting worsens internal bleeding.",
                "D": "alcohol is a stimulant, which likely caused his fall."
            },
            "correctAnswer": "C"
        },
        {
            "question": "An overdose of acetaminophen, the active ingredient in Tylenol, will most likely cause:",
            "answers": {
                "A": "central nervous system depression.",
                "B": "acute kidney failure.",
                "C": "liver damage and failure.",
                "D": "bleeding gastric ulcers."
            },
            "correctAnswer": "C"
        },
        {
            "question": "Atropine sulfate and pralidoxime chloride are antidotes for:",
            "answers": {
                "A": "lysergic acid diethylamide (LSD).",
                "B": "nerve gas agents.",
                "C": "diphenhydramine (Benadryl).",
                "D": "anticholinergic drugs."
            },
            "correctAnswer": "B"
        },
        {
            "question": "Delirium tremens (DTs) is a syndrome associated with withdrawal from:",
            "answers": {
                "A": "sedatives.",
                "B": "cocaine.",
                "C": "alcohol.",
                "D": "opioids."
            },
            "correctAnswer": "C"
        },
        {
            "question": "Activated charcoal may be indicated for a patient who ingested:",
            "answers": {
                "A": "aspirin.",
                "B": "methanol.",
                "C": "iron.",
                "D": "ethanol."
            },
            "correctAnswer": "A"
        },
        {
            "question": "An EMT’s primary responsibility to the patient who has been poisoned is to:",
            "answers": {
                "A": "recognize that a poisoning occurred.",
                "B": "administer 25 g of activated charcoal.",
                "C": "administer the appropriate antidote.",
                "D": "contact poison control immediately."
            },
            "correctAnswer": "A"
        },
        {
            "question": "Heroin is an example of a(n):",
            "answers": {
                "A": "opioid.",
                "B": "cholinergic.",
                "C": "hypnotic.",
                "D": "sympathomimetic."
            },
            "correctAnswer": "A"
        },
        {
            "question": "Hypotension, hypoventilation, and pinpoint pupils would be expected following an overdose of:",
            "answers": {
                "A": "amphetamine sulfate (Benzedrine).",
                "B": "oxycodone (Percocet).",
                "C": "crack cocaine.",
                "D": "ecstasy."
            },
            "correctAnswer": "B"
        },
        {
            "question": "Most poisonings occur via the __________ route.",
            "answers": {
                "A": "injection",
                "B": "inhalation",
                "C": "absorption",
                "D": "ingestion"
            },
            "correctAnswer": "D"
        },
        {
            "question": "Substance abuse is most accurately defined as:",
            "answers": {
                "A": "knowingly selling illicit drugs to buy more drugs.",
                "B": "willfully using a therapeutic drug to treat a medical illness.",
                "C": "unwillingly and unknowingly consuming drugs or alcohol.",
                "D": "misusing a substance to produce a desired effect."
            },
            "correctAnswer": "D"
        },
        {
            "question": "____________ is what you can see of a person’s response to the environment.",
            "answers": {
                "A": "Neurosis",
                "B": "Behavior",
                "C": "Psychosis",
                "D": "Affect"
            },
            "correctAnswer": "B"
        },
        {
            "question": "A technique used to gain insight into a patient’s thinking, which involves repeating in question form what the patient has said, is called:",
            "answers": {
                "A": "intuitive listening.",
                "B": "passive listening.",
                "C": "active listening.",
                "D": "reflective listening."
            },
            "correctAnswer": "D"
        },
        {
            "question": "After ensuring his or her own safety, the EMT’s next priority when caring for a patient with a behavioral emergency is to:",
            "answers": {
                "A": "assess the patient’s response to his or her environment.",
                "B": "transport the patient directly to a specialized psychiatric facility.",
                "C": "determine the underlying cause of the problem and offer advice.",
                "D": "diagnose the patient’s problem and provide definitive treatment."
            },
            "correctAnswer": "A"
        },
        {
            "question": "Posttraumatic stress disorder can happen after:",
            "answers": {
                "A": "alcohol withdrawal.",
                "B": "a bout with depression.",
                "C": "extended periods of hyperthermia or hypothermia.",
                "D": "exposure to or injury from a traumatic occurrence."
            },
            "correctAnswer": "D"
        },
        {
            "question": "Signs of excited delirium include:",
            "answers": {
                "A": "subdued behavior, crying, and suicidal thoughts.",
                "B": "diaphoresis, tachycardia, and hallucinations.",
                "C": "slurred speech, bradycardia, and a high fever.",
                "D": "pallor, hypotension, and constricted pupils."
            },
            "correctAnswer": "B"
        },
        {
            "question": "The single most significant factor that contributes to suicide is:",
            "answers": {
                "A": "a chronic illness.",
                "B": "depression.",
                "C": "advanced age.",
                "D": "drug abuse."
            },
            "correctAnswer": "B"
        },
        {
            "question": "The term “behavioral crisis” is MOST accurately defined as:",
            "answers": {
                "A": "a medical illness with psychological symptoms that may lead to limited motor functioning.",
                "B": "a situation in which a patient of any age exhibits agitated, violent, or uncooperative behavior.",
                "C": "a period of severe depression that lasts longer than 2 weeks and cannot be controlled with medications.",
                "D": "a sudden, violent outburst of an otherwise mentally stable person toward a family member."
            },
            "correctAnswer": "B"
        },
        {
            "question": "When assessing a patient who is displaying bizarre behavior, the EMT should:",
            "answers": {
                "A": "consider that an acute medical illness may be causing the patient’s behavior.",
                "B": "avoid asking questions about suicide because this may give the patient ideas.",
                "C": "check his or her blood glucose level only if he or she has a history of diabetes.",
                "D": "carefully document his or her perception of what is causing the patient’s behavior."
            },
            "correctAnswer": "A"
        },
        {
            "question": "You receive a call for a domestic dispute. When you arrive at the scene, you find a young male standing on the front porch of his house. You notice that an adjacent window is broken. The patient has a large body, is clenching his fists, and is yelling obscenities at you. Which of the following findings is LEAST predictive of this patient’s potential for violence?",
            "answers": {
                "A": "The broken window",
                "B": "His clenched fists",
                "C": "His large body size",
                "D": "His shouting of obscenities"
            },
            "correctAnswer": "C"
        },
        {
            "question": "A raised, swollen, well-defined area on the skin that is the result of an insect bite or sting is called:",
            "answers": {
                "A": "a wheal.",
                "B": "urticaria.",
                "C": "purpura.",
                "D": "a pustule."
            },
            "correctAnswer": "A"
        },
        {
            "question": "Epinephrine is indicated for patients with an allergic reaction when:",
            "answers": {
                "A": "a paramedic is present at the scene.",
                "B": "the reaction produces severe urticaria.",
                "C": "wheezing and hypotension are present.",
                "D": "the patient is anxious and tachycardic."
            },
            "correctAnswer": "C"
        },
        {
            "question": "Immediately after giving an epinephrine injection, you should:",
            "answers": {
                "A": "properly dispose of the syringe.",
                "B": "notify medical control of your action.",
                "C": "reassess the patient’s vital signs.",
                "D": "record the time and dose given."
            },
            "correctAnswer": "A"
        },
        {
            "question": "The effects of epinephrine are typically observed within _________ following administration.",
            "answers": {
                "A": "1 minute",
                "B": "1 hour",
                "C": "30 minutes",
                "D": "30 seconds"
            },
            "correctAnswer": "A"
        },
        {
            "question": "The stinger from a honeybee should be:",
            "answers": {
                "A": "squeezed with tweezers and removed.",
                "B": "scraped away from the skin.",
                "C": "left in place and covered.",
                "D": "irrigated with copious amounts of water."
            },
            "correctAnswer": "B"
        },
        {
            "question": "Two of the MOST common signs of anaphylaxis are:",
            "answers": {
                "A": "urticaria and angioedema.",
                "B": "hypertension and swollen hands.",
                "C": "expiratory stridor and tachycardia.",
                "D": "watery eyes and localized itching."
            },
            "correctAnswer": "A"
        },
        {
            "question": "Urticaria is the medical term for:",
            "answers": {
                "A": "swelling.",
                "B": "a wheal.",
                "C": "burning.",
                "D": "hives."
            },
            "correctAnswer": "D"
        },
        {
            "question": "Which of the following sounds indicates swelling of the upper airway?",
            "answers": {
                "A": "Stridor",
                "B": "Rales",
                "C": "Wheezing",
                "D": "Rhonchi"
            },
            "correctAnswer": "A"
        },
        {
            "question": "While auscultating breath sounds of a patient who was stung multiple times by a yellow jacket, you hear bilateral wheezing over all lung fields. This indicates:",
            "answers": {
                "A": "rapid swelling of the upper airway tissues.",
                "B": "a significant amount of fluid in the alveoli.",
                "C": "enlargement of the bronchioles in the lungs.",
                "D": "narrowing of the bronchioles in the lungs."
            },
            "correctAnswer": "D"
        }
    

];

function App() {
//   const originalAnswers =  {};
  const originalAnswers = localStorage.getItem('answers1') || {};
  const [selectedAnswers, setSelectedAnswers] = useState(Object.keys(originalAnswers).length === 0 ? {} : JSON.parse(originalAnswers));
  const handleAnswerChange = (questionIndex, answer) => {
    const newAnswers = { ...selectedAnswers, [questionIndex]: answer };
    setSelectedAnswers(newAnswers);
    localStorage.setItem('answers1', JSON.stringify(newAnswers));
  };

  const isCorrect = (questionIndex) => {
    return selectedAnswers[questionIndex] === questions[questionIndex].correctAnswer;
  };

  return (
    <div className="App" style={{maxWidth: '800px', margin: '0 auto'}}>
      <h1>Quiz App</h1>

      <ol>
      {questions.map((question, index) => (
        <div key={index} style={{textAlign: 'left', paddingBottom: '16px'}}>
          <li><strong>{question.question}</strong></li>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {Object.keys(question.answers).map((key) => (
              <label key={key}>
                <input
                  type="radio"
                  name={`question_${index}`}
                  value={key}
                  onChange={() => handleAnswerChange(index, key)}
                  checked={selectedAnswers[index] === key}
                />
                {key}: {question.answers[key]}
              </label>
            ))}
          </div>
          {selectedAnswers[index] && (
            <p>
              {isCorrect(index) ? 'Correct!' : 'Wrong!'}
            </p>
          )}
        </div>
      ))}
      </ol>
      Correct: {Object.keys(selectedAnswers).filter((key) => isCorrect(key)).length} / {questions.length}
    </div>
  );
}

export default App;
