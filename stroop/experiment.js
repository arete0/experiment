/* ************************************ */
/* Define helper functions */
/* ************************************ */
function assessPerformance() {
    var experiment_data = jsPsych.data.getTrialsOfType('poldrack-categorize')
    var missed_count = 0
    var trial_count = 0
    var rt_array = []
    var rt = 0
       //record choices participants made
    var choice_counts = {}
    choice_counts[-1] = 0
    for (var k = 0; k < choices.length; k++) {
       choice_counts[choices[k]] = 0
    }
    for (var i = 0; i < experiment_data.length; i++) {
       if (experiment_data[i].possible_responses != 'none') {
          trial_count += 1
          rt = experiment_data[i].rt
          key = experiment_data[i].key_press
          choice_counts[key] += 1
          if (rt == -1) {
             missed_count += 1
          } else {
             rt_array.push(rt)
          }
       }
    }
    //calculate average rt
    var avg_rt = -1
    if (rt_array.length !== 0) {
       avg_rt = math.median(rt_array)
    }
    //calculate whether response distribution is okay
    var responses_ok = true
    Object.keys(choice_counts).forEach(function(key, index) {
       if (choice_counts[key] > trial_count * 0.85) {
          responses_ok = false
       }
    })
    var missed_percent = missed_count/trial_count
    credit_var = (missed_percent < 0.4 && avg_rt > 200 && responses_ok)
    jsPsych.data.addDataToLastTrial({"credit_var": credit_var})
}

function evalAttentionChecks() {
    var check_percent = 1
    if (run_attention_checks) {
       var attention_check_trials = jsPsych.data.getTrialsOfType('attention-check')
       var checks_passed = 0
       for (var i = 0; i < attention_check_trials.length; i++) {
          if (attention_check_trials[i].correct === true) {
             checks_passed += 1
          }
       }
       check_percent = checks_passed / attention_check_trials.length
    }
    return check_percent
}

var getInstructFeedback = function() {
    return '<div class = centerbox><p class = center-block-text>' + feedback_instruct_text +
       '</p></div>'
}

/* ************************************ */
/* Define experimental variables */
/* ************************************ */
// generic task variables
var run_attention_checks = false
var attention_check_thresh = 0.45
var sumInstructTime = 0 //ms
var instructTimeThresh = 0 ///in seconds
var credit_var = 0

// task specific variables
var congruent_stim = [{
    stimulus: '<div class = centerbox><div class = stroop-stim style = "color:red">빨강</div></div>',
    data: {
       trial_id: 'stim',
       condition: 'congruent',
       stim_color: 'red',
       stim_word: 'red',
       correct_response: 82
    },
    key_answer: 82
}, {
    stimulus: '<div class = centerbox><div class = stroop-stim style = "color:blue">파랑</div></div>',
    data: {
       trial_id: 'stim',
       condition: 'congruent',
       stim_color: 'blue',
       stim_word: 'blue',
       correct_response: 66
    },
    key_answer: 66
}, {
    stimulus: '<div class = centerbox><div class = stroop-stim style = "color:green">초록</div></div>',
    data: {
       trial_id: 'stim',
       condition: 'congruent',
       stim_color: 'green',
       stim_word: 'green',
       correct_response: 71
    },
    key_answer: 71
}];

var incongruent_stim = [{
    stimulus: '<div class = centerbox><div class = stroop-stim style = "color:red">파랑</div></div>',
    data: {
       trial_id: 'stim',
       condition: 'incongruent',
       stim_color: 'red',
       stim_word: 'blue',
       correct_response: 82
    },
    key_answer: 82
}, {
    stimulus: '<div class = centerbox><div class = stroop-stim style = "color:red">초록</div></div>',
    data: {
       trial_id: 'stim',
       condition: 'incongruent',
       stim_color: 'red',
       stim_word: 'green',
       correct_response: 82
    },
    key_answer: 82
}, {
    stimulus: '<div class = centerbox><div class = stroop-stim style = "color:blue">빨강</div></div>',
    data: {
       trial_id: 'stim',
       condition: 'incongruent',
       stim_color: 'blue',
       stim_word: 'red',
       correct_response: 66
    },
    key_answer: 66
}, {
    stimulus: '<div class = centerbox><div class = stroop-stim style = "color:blue">초록</div></div>',
    data: {
       trial_id: 'stim',
       condition: 'incongruent',
       stim_color: 'blue',
       stim_word: 'green',
       correct_response: 66
    },
    key_answer: 66
}, {
    stimulus: '<div class = centerbox><div class = stroop-stim style = "color:green">빨강</div></div>',
    data: {
       trial_id: 'stim',
       condition: 'incongruent',
       stim_color: 'green',
       stim_word: 'red',
       correct_response: 71
    },
    key_answer: 71
}, {
    stimulus: '<div class = centerbox><div class = stroop-stim style = "color:green">파랑</div></div>',
    data: {
       trial_id: 'stim',
       condition: 'incongruent',
       stim_color: 'green',
       stim_word: 'blue',
       correct_response: 71
    },
    key_answer: 71
}];
var stims = [].concat(congruent_stim, congruent_stim, incongruent_stim)

// stims1 (베이스라인): 4:1 (C:I) 비율 = 총 30개 (일치 24, 불일치 6)
var stims1 = [].concat(congruent_stim, congruent_stim, congruent_stim, congruent_stim, congruent_stim, congruent_stim, congruent_stim, congruent_stim, incongruent_stim)
// stims2 (Stroop 측정): 1:4 (C:I) 비율 = 총 30개 (일치 6, 불일치 24)
var stims2 = [].concat(congruent_stim, congruent_stim, incongruent_stim, incongruent_stim, incongruent_stim, incongruent_stim)


var practice_len = 12
var practice_stims = jsPsych.randomization.repeat(stims, practice_len / 12, true)


// ------------------- [수정된 부분 시작] -------------------

/*
 * [전략 1] 반응 시간 1000ms로 단축 (신뢰도 상향 평준화)
 * * 기존 1500ms는 정확도 천장 효과(ceiling effect)를 유발하여,
 * * RT/IES 지표의 변별력을 낮춰 신뢰도(sb≈0.386)가 낮게 측정됨.
 * * 1000ms로 시간 압박을 높여 과제 난이도를 증가시키면,
 * * 천장 효과가 깨지고 RT/IES 지표의 개인차(분산)가 더 분명하게 드러나,
 * * 60시행 기준 기본 신뢰도(sb) 자체가 0.386보다 상승할 것으로 기대됨.
 */

/*
 * [전략 2] 시행 횟수 조절 (안전 마진 확보)
 * * 아래 표는 1500ms / 60시행 / sb=0.386을 기준으로 계산된 *보수적인* 예측치임.
 * * 1000ms로 기본 신뢰도가 0.5로 상승한다면, 0.8 목표에 382회가 아닌 약 240회만 필요할 수 있음.
 * * **[권장] 1000ms 설정으로 60시행 파일럿 테스트를 먼저 수행하여,
 * * 기본 신뢰도(sb)를 다시 계산한 후 아래 횟수를 재조정하는 것이 가장 효율적임.
 *
 * --- (1500ms, sb=0.386 기준 예측표) ---
 * - sb 0.70 목표: k ≈ 3.71, N_trials ≈ 223회 (1:4 비율 = 45 C / 178 I)
 * - sb 0.75 목표: k ≈ 4.77, N_trials ≈ 286회
 * - sb 0.80 목표: k ≈ 6.36, N_trials ≈ 382회 (1:4 비율 = 76 C / 306 I)
 */

// [수정 1] stim1(베이스라인)을 30회로 축소 (웜업 및 시간 절약)
var exp_len_stim1 = 30
// [수정 2] stim2(Stroop 측정)를 신뢰도 0.8 목표치인 382회로 설정 (안전 마진 확보)
var exp_len_stim2 = 382


var test_stims1 = jsPsych.randomization.repeat(stims1, exp_len_stim1 / 30, true) // (24C, 6I) * 1회 = 30 trials
var test_stims2 = jsPsych.randomization.repeat(stims2, exp_len_stim2 / 30, true) // (6C, 24I) * 12.73... = 382 trials
// ------------------- [수정된 부분 끝] -------------------


var choices = [66, 71, 82]
var exp_stage = 'practice'

/* ************************************ */
/* Set up jsPsych blocks */
/* ************************************ */
// Set up attention check node
var attention_check_block = {
    type: 'attention-check',
    data: {
       trial_id: "attention_check"
    },
    timing_response: 180000,
    response_ends_trial: true,
    timing_post_trial: 200
}

var attention_node = {
    timeline: [attention_check_block],
    conditional_function: function() {
       return run_attention_checks
    }
}

//Set up post task questionnaire
var post_task_block = {
   type: 'survey-text',
   data: {
       trial_id: "post task questions"
   },
   questions: ['<p class = center-block-text style = "font-size: 20px">이 과제에 대해서 궁금한 점이 있다면 적어주세요!</p>',
              '<p class = center-block-text style = "font-size: 20px">이 과제에 대해서 조언할 것이 있나요?</p>'],
   rows: [15, 15],
   columns: [60,60]
};

/* define static blocks */
var response_keys =
    '<ul list-text><li><span class = "large" style = "color:red">단어</span>: "R 키보드 버튼"</li><li><span class = "large" style = "color:blue">단어</span>: "B 키보드 버튼"</li><li><span class = "large" style = "color:green">단어</span>: "G 키보드 버튼"</li></ul>'


// [수정 3] 총 시행 횟수(412회) + 반응 시간 단축(1.5s->1.0s)을 고려하여 예상 시간 재산정
var feedback_instruct_text =
    '실험 참가를 환영합니다. <br>이 실험을 완료하는데 약 17분 정도 소요됩니다. <br><br><strong>enter</strong>를 눌러 시작하시오.'
var feedback_instruct_block = {
    type: 'poldrack-text',
    data: {
       trial_id: "instruction"
    },
    cont_key: [13],
    text: getInstructFeedback,
    timing_post_trial: 0,
    timing_response: 180000
};
/// This ensures that the subject does not read through the instructions too quickly.  If they do it too quickly, then we will go over the loop again.
var instructions_block = {
    type: 'poldrack-instructions',
    data: {
       trial_id: "instruction"
    },
    pages: [
       '<div class = centerbox><p class = block-text>이 실험에서는 컬러 단어(<font color="red";>빨강</font>, <font color="blue";>파랑</font>, <font color="green";>초록</font>)가 한 번에 하나씩 제시됩니다. 단어의 "잉크"도 여러 색으로 표현됩니다. </p><p class = block-text>예를 들어, 다음처럼 여러 색으로 쓰여진 단어들을 볼 수 있습니다:</p><p class = center-block-text><span class = "large" style = "color:blue">빨강</span>, <span class = "large" style = "color:blue">파랑</span>, <span class = "large" style = "color:red">파랑</span></p><p class = block-text>단어가 제시되면 단어의 <strong>잉크 색</strong>과 일치하는 버튼을 누르시면 됩니다. <strong>중요한 것은 가능한 빠르고 정확하게 응답하는 것입니다.</strong></p><p class = block-text>응답버튼은 다음과 같습니다:</p>' +
       response_keys + '</div>'
    ],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 1000
};

var instruction_node = {
    timeline: [feedback_instruct_block, instructions_block],
    /* This function defines stopping criteria */
    loop_function: function(data) {
       for (i = 0; i < data.length; i++) {
          if ((data[i].trial_type == 'poldrack-instructions') && (data[i].rt != -1)) {
             rt = data[i].rt
             sumInstructTime = sumInstructTime + rt
          }
       }
       if (sumInstructTime <= instructTimeThresh * 1000) {
          feedback_instruct_text =
             '지시문을 읽기에 충분하지 않은 시간이었습니다. 지시문을 충분히 이해할 수 있도록 더 자세히 읽으세요. <strong>enter</strong>를 눌러 다음으로 넘어가시오.'
          return true
       } else if (sumInstructTime > instructTimeThresh * 1000) {
          feedback_instruct_text = '지시사항 전달이 끝났습니다. <strong>enter</strong>를 눌러 다음으로 넘어가시오.'
          return false
       }
    }
}

var rest_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "rest"
  },
  timing_response: 180000,
  text: '<div class = centerbox><p class = block-text>휴식시간입니다! <br><br>충분히 휴식을 취했다면, 아무키나 눌러 다시 시작하시오.</p></div>',
  timing_post_trial: 1000
};


var end_block = {
    type: 'poldrack-text',
    data: {
       trial_id: "end",
        exp_id: 'stroop'
    },
    timing_response: 180000,
    text: '<div class = centerbox><p class = center-block-text>이 과제가 종료되었습니다. 감사합니다!</p><p class = center-block-text><strong>enter</strong>를 눌러 실험페이지로 이동합니다.</p></div>',
    cont_key: [13],
    timing_post_trial: 0,
    on_finish: assessPerformance
};

var start_practice_block = {
    type: 'poldrack-text',
    data: {
       trial_id: "practice_intro"
    },
    timing_response: 180000,
    text: '<div class = centerbox><p class = block-text>연습 시행을 시작합니다. <br><br> 단어의 <strong>잉크</strong>색과 일치하는 응답키를 누르시오: </p><p class = block-text> 빨강색으로 쓰여진 단어는 "<strong>R</strong>"을, 파랑색으로 쓰여진 단어는 "<strong>B</strong>"를, 초록색으로 쓰여진 단어는 "<strong>G</strong>"를 누르시오.</p><p class = center-block-text><strong>enter</strong>를 눌러 연습을 시작하시오.</p></div>',
    cont_key: [13],
    timing_post_trial: 1000
};

var start_test_block = {
    type: 'poldrack-text',
    data: {
       trial_id: "test_intro"
    },
    timing_response: 180000,
    text: '<div class = centerbox><p class =block-text>검사를 시작합니다. <br><br> 가능한 빠르게 답하시오.</p><p class = center-block-text><strong>enter</strong>를 눌러 시작하시오.</p></div>',
    cont_key: [13],
    timing_post_trial: 1000,
    on_finish: function() {
       exp_stage = 'test'
    }
};

var fixation_block = {
    type: 'poldrack-single-stim',
    stimulus: '<div class = centerbox><div class = fixation>+</div></div>',
    is_html: true,
    choices: 'none',
    data: {
       trial_id: "fixation"
    },
    timing_post_trial: 500,
    timing_stim: 500,
    timing_response: 500,
    on_finish: function() {
       jsPsych.data.addDataToLastTrial({'exp_stage': exp_stage})
    },
}

/* create experiment definition array */
stroop_experiment = []
stroop_experiment.push(instruction_node)
stroop_experiment.push(start_practice_block)
    /* define test trials */
for (i = 0; i < practice_len; i++) {
    stroop_experiment.push(fixation_block)
    var practice_block = {
       type: 'poldrack-categorize',
       stimulus: practice_stims.stimulus[i],
       data: practice_stims.data[i],
       key_answer: practice_stims.key_answer[i],
       is_html: true,
       correct_text: '<div class = fb_box><div class = center-text><font size = 20>정답!</font></div></div>',
       incorrect_text: '<div class = fb_box><div class = center-text><font size = 20>오답</font></div></div>',
       timeout_message: '<div class = fb_box><div class = center-text><font size = 20>더 빠르게 답하시오!</font></div></div>',
       choices: choices,
       timing_response: 1000, // [수정 4] 1500 -> 1000
       timing_stim: -1,
       timing_feedback_duration: 500,
       show_stim_with_feedback: true,
       timing_post_trial: 250,
       on_finish: function() {
          jsPsych.data.addDataToLastTrial({
             trial_id: 'stim',
             exp_stage: 'practice'
          })
       }
    }
    stroop_experiment.push(practice_block)
}
stroop_experiment.push(attention_node)


stroop_experiment.push(start_test_block)
    /* define test trials */
// [수정 5] stim1의 for 루프를 exp_len_stim1 (30회)로 수정
for (i = 0; i < exp_len_stim1; i++) {
    stroop_experiment.push(fixation_block)
    var test_block1 = {
       type: 'poldrack-categorize',
       stimulus: test_stims1.stimulus[i],
       data: test_stims1.data[i],
       key_answer: test_stims1.key_answer[i],
       is_html: true,
       correct_text: '<div class = fb_box><div class = center-text><font size = 20>정답!</font></div></div>',
       incorrect_text: '<div class = fb_box><div class = center-text><font size = 20>오답</font></div></div>',
       timeout_message: '<div class = fb_box><div class = center-text><font size = 20>더 빠르게 답하시오!</font></div></div>',
       choices: choices,
       timing_response: 1000, // [수정 6] 1500 -> 1000
       timing_stim: -1,
       timing_feedback_duration: 500,
       show_stim_with_feedback: true,
       timing_post_trial: 250,
       on_finish: function() {
          jsPsych.data.addDataToLastTrial({
             trial_id: 'stim1',
             exp_stage: 'test'
          })
       }
    }
    stroop_experiment.push(test_block1)
}
stroop_experiment.push(rest_block)

// [수정 7] stim2의 for 루프를 exp_len_stim2 (382회)로 수정
for (i = 0; i < exp_len_stim2; i++) {
    stroop_experiment.push(fixation_block)
    var test_block2 = {
       type: 'poldrack-categorize',
       stimulus: test_stims2.stimulus[i],
       data: test_stims2.data[i],
       key_answer: test_stims2.key_answer[i],
       is_html: true,
       correct_text: '<div class = fb_box><div class = center-text><font size = 20>정답!</font></div></div>',
       incorrect_text: '<div class = fb_box><div class = center-text><font size = 20>오답</font></div></div>',
       timeout_message: '<div class = fb_box><div class = center-text><font size = 20>더 빠르게 답하시오!</font></div></div>',
       choices: choices,
       timing_response: 1000, // [수정 8] 1500 -> 1000
       timing_stim: -1,
       timing_feedback_duration: 500,
       show_stim_with_feedback: true,
       timing_post_trial: 250,
       on_finish: function() {
          jsPsych.data.addDataToLastTrial({
             trial_id: 'stim2',
             exp_stage: 'test'
          })
       }
    }
    stroop_experiment.push(test_block2)
}
stroop_experiment.push(attention_node)
stroop_experiment.push(post_task_block)
stroop_experiment.push(end_block)
