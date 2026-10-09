import type { GuideDoc, Section } from "../types";

/**
 * English. Translated from zh.ts; structure, ids and shot names stay identical.
 * Double-bracket keys reference App strings (rendered as the App's English text); bracket-equals text is iOS system UI text.
 */

const readiness: Section = {
  id: "readiness",
  nav: "Traffic light & Apple Health",
  title: "Traffic light: how to train today, every morning",
  lead: "This is the core feature of DAY 1, and the one you need to set up first. Without Apple Health, it can only make a rough guess from a questionnaire.",
  blocks: [
    {
      kind: "panels",
      what: [
        "Every morning it reads last night's **heart rate variability (HRV)**, **resting heart rate** and **sleep**, compares them with your own last 60 nights, and gives you a score from 0 to 100 and a light.",
        "Green: you're well recovered, train as planned. Yellow: not fully recovered, cut the volume or lower the intensity. Red: focus on recovery, rest or stretch.",
        "It also gives you two ways to train that day. The one marked [[decision.planCard.recommended]] is the best fit.",
      ],
      where: [
        "The big card at the top of [[tab.home]] is the traffic light.",
        "The first time you open the app each day, this card shows [[decision.daily.newDay]]. Tap it and finish the 30-second check-in. The card then shows [[decision.readiness.todayAdvice]] and a light.",
        "After that, **tap** the card to open the details. You can see how the score was calculated and which item is holding it back.",
      ],
      perms: [
        "**Apple Health read access** (HRV, resting heart rate, heart rate, sleep, steps and more).",
        "Note: the app does **not** ask for this when you first open it. You need to tap connect yourself once.",
        "For HRV, you also need to **wear your Apple Watch to bed**.",
      ],
      fix: [
        "**In the app:** tap [[tab.profile]] at the bottom → [[cycle.profile.healthKitAuth]], and tap it again.",
        "**In iPhone Settings:** [=Settings=] → [=Privacy & Security=] → [=Health=] → [=DAY 1=], and turn on every item under read access.",
        "If you already denied the system prompt, tapping again in the app won't bring it back. In that case, use iPhone Settings.",
      ],
      fixImage: { shot: "me-healthkit", alt: "The device management and HealthKit authorization rows on the profile page", w: 720, h: 242 },
    },
    {
      kind: "steps",
      title: "Connect Apple Health for the first time, step by step",
      intro: "These are real screens from the app. Just tap along.",
      items: [
        { shot: "health-source", alt: "Health data source screen with three options", text: "On [[tab.home]], tap the [[home.watch.disconnected]] card. [[health.mode.title]] opens. Choose the first option, [[health.mode.connectApple]]." },
        { shot: "ios-sheet", alt: "iOS Health access screen with all switches off", text: "iOS shows “Health Access”. All switches are off by default. Tap [=Turn On All=]." },
        { shot: "ios-sheet-allowed", alt: "iOS Health access screen with all switches on and the Allow button turned blue", text: "Once all switches turn green, tap the blue [=Allow=] at the bottom." },
        { shot: "home-readiness", alt: "Home screen with the connect card gone, showing today's training advice with a yellow light", text: "Back on the home screen, the [[home.watch.disconnected]] card is gone. That means you're connected." },
      ],
    },
    {
      kind: "callout",
      title: "The small print at the bottom says “FitTrack”?",
      body: "FitTrack is the old name of DAY 1. It's the same app. The title of the screen says “DAY 1” would like to access and update your Health data, so you can allow it.",
    },
    {
      kind: "steps",
      title: "The next morning: a 30-second check-in",
      intro: "Open the app and the [[decision.daily.newDay]] card appears on the home screen. Tap it and go through the steps in order. Then you'll see today's light and two training plans.",
      items: [
        { shot: "sleep-fill", alt: "No sleep recorded last night, enter sleep duration manually", text: "If your watch didn't record sleep last night, the app first asks how long you slept. Drag to roughly the right number of hours and tap [[manual.input.done]]. If you slept with your watch on, you won't see this step." },
        { shot: "checkin", alt: "Morning check-in question 1: how do you feel today", text: "Answer 6 short questions. For each one, tap the closest option, then tap [[common.next]]. Go with your first instinct." },
        { shot: "checkin-result", alt: "Check-in result: yellow light, score 59, Plan A normal training, Plan B light training", text: "You get your result: a light, a score and two plans. The one marked [[decision.planCard.recommended]] is the best way to train today." },
      ],
    },
    {
      kind: "timeline",
      title: "Why the light is “less accurate” for the first few days",
      intro: "The traffic light compares you with **yourself**, not with other people. So it needs to get to know you first. During this time the details page shows [[baseline.status.learning]]. That's normal.",
      items: [
        { n: "Nights 1–3", d: "Not much data yet, so it uses general standards" },
        { n: "Nights 4–10", d: "It gradually switches to your personal baseline. The score changes smoothly, with no sudden jumps" },
        { n: "Night 14 onward", d: "Your personal baseline is stable and the light is most accurate" },
      ],
      note: "If you skip the watch one night, nothing resets. That night just doesn't count.",
    },
    {
      kind: "options",
      title: "No Apple Watch? You can still use it",
      intro: "[[health.mode.title]] has two more options. The light is a bit rougher than with a watch, but you still get daily training advice:",
      items: [
        { t: "[[health.mode.connectApple]]", d: "Syncs data automatically from devices like Apple Watch", tag: "Most accurate" },
        { t: "[[health.mode.manual]]", d: "Enter sleep and other key data by hand each day" },
        { t: "[[health.mode.skip]]", d: "Uses the morning check-in to assess how your body is doing" },
      ],
    },
    {
      kind: "faq",
      title: "Still not right?",
      items: [
        { q: "I connected Apple Health, but the details page still shows no HRV", a: "Make sure you wore your watch to bed last night, and that the iPhone Health app shows last night's heart rate variability. Your watch only measures HRV while you're asleep and still. Readings from the daytime don't count for that night." },
        { q: "The “Connect Apple Watch” card on the home screen won't go away", a: "This means you didn't grant full access. Go to iPhone Settings → Privacy & Security → Health → DAY 1, turn on every item under read access, then go back to the app." },
        { q: "It asks me to enter my sleep every morning", a: "This means the app can't read your watch's sleep records. Make sure you wear your watch to bed, and that the iPhone Health app shows last night's sleep. If you don't have a watch, just enter how long you slept each day. The light will take it into account." },
        { q: "After I changed watches or reinstalled the app, the light went back to “learning”", a: "Your personal baseline follows your health data. After reinstalling, just connect Apple Health again. Your history is still in the Health app, and the light recovers within a few days." },
      ],
    },
  ],
};

const food: Section = {
  id: "food",
  nav: "Food photo recognition",
  title: "Food photo recognition: snap a photo, log calories and nutrients",
  lead: "No need to look up calorie charts. Take a photo of your meal. AI estimates the calories and macros and adds them to today's food log.",
  blocks: [
    {
      kind: "panels",
      what: [
        "Take a photo of a meal. AI estimates the **calories** and **protein, carbs and fat**, and tells you how confident this result is.",
        "You can use up to 3 photos at a time. Add one more from a different angle for a more accurate result.",
        "Don't want to take a photo? Switch to [[food.mode.manual]] and enter the name and calories yourself.",
      ],
      where: [
        "Tap [[tab.cycle]] at the bottom → [[cycle.tab.calories]] → the orange **+** at the bottom right → [[food.add.title]].",
        "Here, choose [[food.photo.take]] to take a photo now, or tap [[food.photo.album]] to pick one you already have.",
        "On the [[tab.ai]] tab, tap the **+** left of the text box → [[chat.menu.camera]]. You can take a photo and ask AI about it too, like “What is this machine?”",
      ],
      perms: [
        "**Camera**: iOS asks once, the first time you tap [[food.photo.take]].",
        "Picking a photo from [[food.photo.album]] usually needs no extra permission.",
        "Before your first AI recognition, the app explains that your photo will be sent to AI for analysis. It only continues after you agree. Recognition needs an internet connection.",
        "Both the free version and Pro can use it, but there's a usage limit. The bottom of the add screen shows how many uses you have left.",
      ],
      fix: [
        "If you denied camera access, the app shows [[camera.permission.denied.title]]. Tap [[camera.permission.denied.settings]] to jump straight to Settings.",
        "You can also go there yourself: [=Settings=] → [=Privacy & Security=] → [=Camera=] → turn on [=DAY 1=].",
      ],
    },
    {
      kind: "steps",
      title: "Log a meal, step by step",
      items: [
        { shot: "food-today", alt: "Today's food on the cycle page, with an orange plus button at the bottom right", text: "Tap [[tab.cycle]] at the bottom. On the [[cycle.tab.calories]] page, tap the orange **+** at the bottom right." },
        { shot: "food-add", alt: "Add food entry screen with two options: AI photo or enter it yourself", text: "[[food.mode.aiPhoto]] is the default. Tap [[food.photo.take]] to take a photo, or [[food.photo.album]] to pick one. Wait a few seconds for the result, check it, then save." },
      ],
    },
    {
      kind: "faq",
      title: "Common questions",
      items: [
        { q: "Are the calorie estimates accurate?", a: "They're estimates, not weighed amounts. The error is bigger when the portion is hard to see, there's a lot of sauce, or several dishes overlap. The result page shows how confident the result is. When it's low, follow the prompt to add another photo, or edit the numbers yourself." },
      ],
    },
  ],
};

const voice: Section = {
  id: "voice",
  nav: "Ask by voice",
  title: "Ask by voice: ask AI even with your hands full",
  lead: "When typing is awkward between sets, just say it. The app turns your speech into text and sends it to the AI coach.",
  blocks: [
    {
      kind: "panels",
      what: [
        "Tap once to start recording. Pause for 2 seconds when you're done and it stops on its own. Your speech is turned into text and sent to AI.",
        "Ask anything: form tips, how long to rest between sets, whether to add weight today.",
        "**Voice isn't available on Apple Watch**. During a workout, swipe to page 3 on your watch to pick a preset question card and send it to the AI coach on your phone.",
      ],
      where: [
        "Tap [[tab.ai]] at the bottom → the **+** left of the text box → [[chat.menu.voice]].",
        "Voice only works in the default [[ai.version.immersive]] view. If you switched to [[ai.version.classic]] in the settings at the top right of the AI page, the voice button is unavailable.",
      ],
      perms: [
        "Two permissions: **Speech Recognition** and **Microphone**. iOS asks for them one after the other the first time you tap [[chat.menu.voice]].",
        "To send questions from your watch, DAY 1 must be running on your phone.",
      ],
      fix: [
        "If you denied Speech Recognition, the app shows [[voice.permission.denied]].",
        "If you denied Microphone, tapping [[chat.menu.voice]] does nothing.",
        "In both cases, go to [=Settings=] → [=Privacy & Security=] → [=Speech Recognition=] and [=Microphone=], and turn on [=DAY 1=] in each.",
      ],
    },
    {
      kind: "steps",
      title: "Find voice on the AI page",
      items: [
        { shot: "ai-home", alt: "AI home page with suggested questions and a text box", text: "Tap [[tab.ai]] at the bottom. Tap one of the suggested questions below, or type your own." },
        { shot: "ai-plus", alt: "Plus menu in the text box: camera, photo library, training plan, voice", text: "Tap the **+** left of the text box and choose [[chat.menu.voice]]. Here you can also use [[chat.menu.camera]], send a photo from [[chat.menu.album]], or use [[chat.menu.sharePlan]] to show AI your plan." },
      ],
    },
  ],
};

const training: Section = {
  id: "training",
  nav: "Training plans & logging",
  title: "Training: build a plan, then check off each set",
  lead: "Build a plan yourself or let AI create one. While you train, tap once after each set. Rest timing starts on its own, and you get a review when you finish.",
  blocks: [
    {
      kind: "panels",
      what: [
        "**Build your own plan**: first choose [[workout.category.strength]] or [[workout.category.functional]], then pick what to train ([[training.create.singlePart]], [[training.create.combo]] or [[training.create.customCombo]]), and set the weight, sets and reps for each exercise.",
        "**Let AI create one**: tap [[smartPlan.card.title]] and answer a few questions about your goal, how many days a week you train and what equipment you have. AI creates a full plan, and you can tap [[smartPlan.importAll]].",
        "**Import from a screenshot**: saw a plan in another app? Take a screenshot and use [[planHub.import.section]] to turn it into a DAY 1 plan.",
        "When you finish, the workout is saved to that plan's history. Next time you open it, you can see how much you did last time.",
      ],
      where: [
        "Tap [[tab.training]] at the bottom. Tap [[training.header.add]] at the top right to build one yourself, or the [[smartPlan.card.title]] card below to let AI build it.",
        "The icon in the middle of the top right is [[planHub.title]]. WShare, share cards and screenshot import are all here.",
        "Open a plan → [[training.plan.start]].",
      ],
      perms: [
        "**Logging workouts on your phone needs no permissions.**",
        "To see heart rate in your workout report, you need Apple Health read access, and you need to wear your Apple Watch while you train.",
        "Workouts logged on iPhone are **not** saved to the Health app. Workouts you start on Apple Watch are.",
        "[[smartPlan.card.title]] needs Pro. Building plans yourself and screenshot import are free.",
      ],
      fix: [
        "Workout report shows no heart rate: make sure access is granted in [[tab.profile]] → [[cycle.profile.healthKitAuth]], and that you wear your watch while you train.",
        "If AI can't create the plan, the app shows [[smartPlan.error.failed]]. Check your connection and tap again.",
      ],
    },
    {
      kind: "steps",
      title: "Build a plan yourself",
      items: [
        { shot: "training-empty", alt: "Training page with no training plans yet", text: "Tap [[tab.training]] at the bottom, then tap [[training.header.add]] at the top right, or [[training.empty.create]] in the middle." },
        { shot: "create-plan", alt: "Create a training plan: choose the training type and combination", text: "Choose a type first, then what to train today, like chest day or push day." },
        { shot: "add-exercise", alt: "Set the target weight, sets and reps for an exercise", text: "Tap **+** for each exercise, set the target weight, sets and reps, and tap add. Tap a number to type in any weight." },
        { shot: "plan-start", alt: "Expanded plan card showing exercises and the start training button", text: "Choose your training days and save. The plan shows up on the training page. Open it to [[training.plan.start]]." },
      ],
    },
    {
      kind: "steps",
      title: "While you train",
      items: [
        { shot: "workout", alt: "Workout in progress, with training progress and a button to complete set 1", text: "Before you start, the app asks how you feel right now and suggests how to train today. Once the workout starts, tap the big button after each set." },
        { shot: "rest", alt: "90-second rest countdown between sets", text: "After you tap, the [[active.rest.title]] countdown starts on its own. Rested enough? Tap [[active.rest.skip]]." },
        { shot: "review", alt: "Workout review: how did this workout feel", text: "When you've done everything, tap [[active.header.end]] at the top right. Pick how this workout felt, write a few lines in [[decision.postWorkout.diaryLabel]], and tap [[decision.postWorkout.saveRecord]]." },
        { shot: "done", alt: "Workout complete, with three tips: recovery, nutrition and training cycle", text: "Finally, you get tips for recovery, nutrition and your next workout. Want more detail? Ask AI in the text box below." },
      ],
    },
    {
      kind: "faq",
      title: "Common questions",
      items: [
        { q: "Can I log workouts on Apple Watch?", a: "Yes. When you start a workout on your phone, DAY 1 opens on your watch too. You can also start a free workout right on your watch to record duration, heart rate and calories. Workouts on your watch are saved to the Health app." },
        { q: "I want to swap an exercise or change the weight mid-workout", a: "During a workout, each exercise has an edit button at its top right. Use it to change the weight, sets and reps. The **+** at the top adds an exercise on the spot." },
      ],
    },
  ],
};

const coach: Section = {
  id: "coach",
  nav: "AI coach",
  title: "AI coach: a training buddy that knows how you feel today",
  lead: "Ask about training, food or recovery. If you allow it, it looks at your sleep, heart rate and workout history when it answers.",
  blocks: [
    {
      kind: "panels",
      what: [
        "Answers questions about training, food and recovery, like [[immersive.suggest.training]] or [[immersive.suggest.progress]].",
        "Take a photo of a machine and ask what it is and how to use it.",
        "Two levels of thinking: [[ai.tier.flash]] answers fast, [[ai.tier.professional]] thinks things through in more detail.",
        "In [[tab.profile]] → [[profile.aiMode.title]], you can choose [[workout.category.strength]] or [[profile.aiMode.functional]]. Answers follow the direction you choose.",
      ],
      where: [
        "Tap [[tab.ai]] at the bottom. [[ai.history.title]] at the top left brings back past chats.",
        "During a workout, you can also ask any time from the [[coach.title]] card at the top of the screen.",
        "The finish page after a workout has a text box at the bottom. Just ask “How did I do today?”",
      ],
      perms: [
        "Text chat needs **no system permissions**. Voice needs Microphone and Speech Recognition. Photos need Camera.",
        "AI only sees your sleep, heart rate and HRV if you agreed to share health data in the app. If you don't, you can still chat, but answers won't take your body's condition into account.",
        "There's a daily chat limit, which differs between the free version and Pro. The app tells you when you've used it up, and it resets the next day.",
      ],
      fix: [
        "If you see [[ai.error.noNetwork]]: AI needs an internet connection. Connect and try again.",
        "If you've hit the limit: wait until the next day, or see Pro in [[tab.profile]] → [[sub.title]].",
      ],
    },
    {
      kind: "steps",
      title: "Where to start asking",
      items: [
        { shot: "ai-home", alt: "AI home page with suggested questions and a text box", text: "Not sure what to ask the first time? Just tap one of the suggested questions below." },
        { shot: "ai-plus", alt: "Plus menu in the text box: camera, photo library, training plan, voice", text: "The **+** left of the text box lets you take a photo to ask about a machine, send a photo from your library, show AI your training plan, or ask by voice." },
      ],
    },
  ],
};

const report: Section = {
  id: "report",
  nav: "AI weekly report",
  title: "AI weekly report: your week of training on one page",
  lead: "It looks at your training, sleep, heart rate and weight for the week together, and tells you where you improved, what to watch and how to plan next week.",
  blocks: [
    {
      kind: "panels",
      what: [
        "It's split into [[cycle.weeklyReport.overviewTitle]], [[cycle.weeklyReport.comparisonTitle]], [[cycle.weeklyReport.stateChartTitle]] and [[cycle.weeklyReport.aiTitle]].",
        "The AI summary covers five things: the week at a glance, training highlights, things to watch, your body's condition and tips for next week.",
        "Data it uses: workouts logged in the app, plus workouts, sleep, resting heart rate, HRV and weight from the Health app.",
      ],
      where: [
        "Scroll down on [[tab.home]] and tap the [[home.weeklyReport.title]] card under [[home.weekly.title]].",
        "There's no fixed day for it: **it's created from this week's data each time you open it**. If you open it again the same day, you see the same report. Tap refresh at the top left to create a new one.",
      ],
      perms: [
        "Needs Pro.",
        "You need to have agreed to sensitive personal data processing in the app, and granted Apple Health read access. Otherwise the sleep and heart rate parts of the report stay empty.",
      ],
      fix: [
        "If you see [[cycle.weeklyReport.localNoData]]: you haven't logged a workout this week yet. Train once, then come back.",
        "If AI can't connect for now, you get a short version of the report first. Refresh once you're back online.",
      ],
    },
  ],
};

const share: Section = {
  id: "share",
  nav: "Share plans with WShare",
  title: "WShare: hand a training plan to a friend in person",
  lead: "Hold two iPhones close, enter a code, and the plan is sent. Once it arrives, AI adjusts a version to fit your friend.",
  blocks: [
    {
      kind: "panels",
      what: [
        "Send one of your plans straight to a friend nearby. No screenshots, no adding friends.",
        "It uses Apple's direct nearby connection and is encrypted the whole way. Once connected, you both check a verification code too.",
        "When your friend gets it, AI adjusts a version based on their own data. They can choose [[adjust.adoptAdjusted]], [[adjust.useOriginal]] or [[adjust.continueChat]].",
        "Not nearby? Use [[planHub.shareCard.title]] to make an image and send it to them.",
      ],
      where: [
        "**To send**: [[tab.training]] → press and hold the plan you want to share → [[share.plan.shareAction]] → [[planHub.bump.title]] → [[bump.choice.send]]. A code appears on screen. Tell it to your friend.",
        "**To receive**: [[tab.training]] → the [[planHub.title]] icon at the top right → [[planHub.bump.title]] → [[bump.choice.receive]], and enter the 6-character code from your friend.",
        "Once connected, you both check the code in [[bump.verify.title]]. If it matches, tap [[bump.verify.confirm]].",
      ],
      perms: [
        "**Local Network**: the first time you open WShare, iOS asks whether DAY 1 can find devices on your local network. Tap Allow.",
        "Both phones need DAY 1 installed, and both need Pro.",
        "The AI adjustment step after you receive a plan needs an internet connection.",
      ],
      fix: [
        "If you see [[bump.error.startFailed]]: go to [=Settings=] → [=Privacy & Security=] → [=Local Network=] and turn on [=DAY 1=].",
        "Turn on Wi‑Fi and Bluetooth on both phones, move them closer and try again.",
        "If the AI adjustment fails, the plan isn't saved. Once you're online, ask your friend to send it again.",
      ],
    },
    {
      kind: "steps",
      title: "The receiver starts here",
      items: [
        { shot: "plan-tools", alt: "Plan tools: WShare, share card, screenshot import", text: "Tap the [[planHub.title]] icon at the top right of the training page, then tap [[planHub.bump.title]]. Screenshot import is on this page too." },
      ],
    },
  ],
};

const permissions: Section = {
  id: "permissions",
  nav: "All permissions",
  title: "Which permissions DAY 1 asks for",
  lead: "Each permission is only requested the first time you use the feature that needs it. You can still use the app without it. That one feature just won't work, or gets less precise.",
  blocks: [
    {
      kind: "table",
      title: "Permissions on iPhone",
      head: ["Permission", "What it's for", "When it's requested", "If you say no"],
      rows: [
        ["Health (read)", "Traffic light, sleep, workout heart rate", "Tap [[home.watch.disconnected]] → [[health.mode.connectApple]]", "The light can only estimate from check-ins"],
        ["Health (write)", "Writes weight, active energy and body fat percentage back to Health", "On the same system screen as read access", "No effect on using the app"],
        ["Camera", "Photos of food, photos of machines to ask AI, changing your profile photo", "The first time you tap to take a photo", "You can only pick photos from your library"],
        ["Speech Recognition + Microphone", "Asking by voice", "The first time you tap [[chat.menu.voice]]", "You can only type"],
        ["Local Network", "WShare to hand over plans in person", "The first time you use [[planHub.bump.title]]", "No in-person sending. Use [[planHub.shareCard.title]] instead"],
        ["Notifications", "Training reminders", "When you turn on [[cycle.reminder.enableLabel]] and save", "You won't get reminders"],
      ],
    },
    {
      kind: "table",
      title: "What DAY 1 reads from Health",
      intro: "This data is only used for the traffic light, weekly reports and workout analysis.",
      head: ["Category", "Items"],
      rows: [
        ["Recovery", "Heart rate variability (HRV), resting heart rate, heart rate, sleep, body temperature"],
        ["Activity", "Steps, active energy, resting energy, workouts"],
        ["Body", "Weight, height, body fat percentage, sex, date of birth, menstrual cycle"],
      ],
    },
    {
      kind: "callout",
      title: "Permissions on Apple Watch",
      body: "The first time you open DAY 1 on your watch, it asks to read heart rate, resting heart rate, HRV and sleep, and to send notifications. The first time you start a workout on your watch, it asks again to save workouts. Tapping [=Turn On All=] on iPhone doesn't carry over to your watch. You need to tap Allow on the watch too.",
    },
    {
      kind: "faq",
      title: "Want to change permissions?",
      items: [
        { q: "Where can I change all permissions in one place?", a: "On iPhone, go to Settings → Privacy & Security, tap the permission (Health, Camera, Microphone, Speech Recognition, Local Network) and find DAY 1. Notifications are in Settings → Notifications → DAY 1." },
        { q: "Does DAY 1 use location or Bluetooth?", a: "No. DAY 1 doesn't ask for location or Bluetooth permission." },
      ],
    },
  ],
};

export const en: GuideDoc = {
  metaTitle: "Getting Started",
  metaDescription: "Using DAY 1 for the first time: connect Apple Health, sleep one night with your watch on, and check your traffic light the next morning. What permissions each feature needs, and how to turn them back on if you said no.",
  eyebrow: "Getting started",
  heroTitle: ["New to DAY 1?", "Follow these 3 steps."],
  heroLead: "DAY 1's traffic light uses your body data from last night to tell you how to train today. Finish the three steps below, and the next morning you'll see your first light that's truly based on you.",
  quick: [
    { t: "Connect Apple Health", d: "Open the app, tap [[home.watch.disconnected]] on the home screen, choose [[health.mode.connectApple]], and tap [=Turn On All=] on the access screen." },
    { t: "Sleep one night with your watch on", d: "Heart rate variability (HRV) is mostly measured while you sleep. If you sleep without your watch, the traffic light can only estimate from a questionnaire." },
    { t: "Spend 30 seconds on a morning check-in", d: "The next day, open the app, tap the [[decision.daily.newDay]] card on the home screen, and answer 6 short questions. You get today's light right away." },
  ],
  stepLabel: "Step {n}",
  tocLabel: "Guide contents",
  panelLabels: { what: "What it does", where: "Where to find it", perms: "Permissions it needs", fix: "Denied or not connected? Fix it" },
  shotNote: "Screenshots show the Chinese version of the app. In the English version, every button is in the same place, and the button names are the ones written in this guide.",
  contactText: "Still have questions? Email us:",
  backHome: "Back to home",
  sections: [readiness, training, coach, food, voice, report, share, permissions],
};
