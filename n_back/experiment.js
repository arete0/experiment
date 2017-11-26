/*
reference: http://www.sciencedirect.com/science/article/pii/S1053811905001424
Cognitive control and brain resources in major depression: An fMRI study using the n-back task Harvey at al. 2005
This task differs in that the subject only has to respond on target trials, rather than indicating whether the current trial is 
a match or not
*/


/* ************************************ */
/* Define helper functions */
/* ************************************ */
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

var randomDraw = function(lst) {
	var index = Math.floor(Math.random() * (lst.length))
	return lst[index]
}

//Calculates whether the last trial was correct and records the accuracy in data object
var record_acc = function() {
	var global_trial = jsPsych.progress().current_trial_global
	var stim = jsPsych.data.getData()[global_trial].stim.toLowerCase()
	var target = jsPsych.data.getData()[global_trial].target.toLowerCase()
	var key = jsPsych.data.getData()[global_trial].key_press
	if (stim == target && key == 37) {
		correct = true
	} else if (stim != target && key == 40) {
		correct = true
	} else {
		correct = false
	}
	jsPsych.data.addDataToLastTrial({
		correct: correct,
		trial_num: current_trial
	})
	current_trial = current_trial + 1
}


/* ************************************ */
/* Define experimental variables */
/* ************************************ */
// generic task variables
var run_attention_checks = false
var attention_check_thresh = 0.65
var sumInstructTime = 0 //ms
var instructTimeThresh = 0 ///in seconds

// task specific variables
var current_trial = 0
var letters = 'bBdDgGtTvV'
var num_blocks = 2 //of each delay
var num_trials = 40
var num_practice_trials = 25
var delays = jsPsych.randomization.shuffle([1, 2, 3])
var control_before = Math.round(Math.random()) //0 control comes before test, 1, after
var stims = [] //hold stims per block

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
var feedback_instruct_text =
	'실험참가를 환영합니다.<br><br><strong>enter</strong>를 눌러 다음페이지로 이동하시오.'
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
		'<div class = centerbox><p class = block-text>이 실험에서는 알파벳 낱자가 연속해서 화면에 나타납니다. 현재 나타난 알파벳 낱자가 이전에 몇 번째 전에 나타났던 낱자와 <strong>일치</strong>하면 <strong>왼쪽 방향키</strong>를 눌러 응답하는 과제입니다. <br> 예를 들어, D ... g ... t ... D 순으로 나타났다면, 세 번재 전과 일치합니다. 이때는 <strong>왼쪽 방향키</strong>를 눌러야 합니다. 그외의 경우에는 모두 <strong>아래쪽 방향키</strong>를 눌러야 합니다. <br><br> <strong>중요한 것</strong>은 <strong>대문자</strong>와 <strong>소문자</strong>를 구분해야 합니다. 예를 들어, "t"와 "T"는 일치하지 않습니다. </p></div>',
		'<div class = centerbox><p class = block-text>이 실험은 몇개의 블록으로 구성되어 있는데, 각 블록마다 <strong>몇 번째 전(n-back)</strong>에 주의를 집중해야 하는지가 달라집니다. 각 블록의 시작에서 주의를 집중해야할 "몇 번 전(n-back)"에 대해 알 수 있습니다. </p><p class = block-text>예를 들어, 만약 <strong>"2-back"</strong>이라면, 현재 나타나는 낱자가 2번째 전에 나타났던 낱자와 일치하는지를 계속해서 응답해야 합니다. 만약 <strong>g...G...v...T...b...t...b</strong> 순서의 낱자를 보았다면, 마지막 <strong>"t"</strong>와 <strong>"b"</strong>에 대해서는 <strong>왼쪽 방향키</strong>를 누르고, 다른 모든 낱자에 대해서는 <strong>아래쪽 방향키</strong>를 눌러야 합니다.</p><p class = block-text>블록 중 하나는 <strong>"0-back"</strong>입니다. 이 블록에서는 특정한 낱자가 나타나면 왼쪽 방향키를 눌러야 하고, 그 외 다른 낱자에 대해서는 모두 아래쪽 방향키를 눌러야합니다.</p></div>',
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


var end_block = {
	type: 'poldrack-text',
	timing_response: 180000,
	data: {
		trial_id: "end",
		exp_id: 'n_back'
	},
	text: '<div class = centerbox><p class = center-block-text>실험이 끝났습니다.</p><p class = center-block-text><strong>enter</strong>를 누르면 종료됩니다.</p></div>',
	cont_key: [13],
	timing_post_trial: 0
};


var start_practice_block = {
	type: 'poldrack-text',
	text: '<div class = centerbox><p class = block-text>연습 시행입니다.<br><br>연습동안 <strong>한 낱자 전(1-back)</strong>에 나타난 낱자와 일치하면, 왼쪽 방향키를 누르고, 그 외 다른 경우 아래쪽 방향키를 누르시오.</p><p class = center-block-text>연습 시행 동안은 응답에 대한 정답여부에 대해 피드백이 제공됩니다. 본 시행에서는 피드백이 제공되지 않습니다. <br><strong>enter</strong>를 눌러 시작하시오.</p></div>',
	cont_key: [13],
	data: {
		trial_id: "instruction"
	},
	timing_response: 180000,
	timing_post_trial: 1000
};

var start_test_block = {
	type: 'poldrack-text',
	data: {
		trial_id: "test_intro"
	},
	timing_response: 180000,
	text: '<div class = centerbox><p class = center-block-text>본 시행입니다.</p><p class = center-block-text><strong>enter</strong>를 눌러 시작하시오.</p></div>',
	cont_key: [13],
	timing_post_trial: 1000
};

var start_control_block = {
	type: 'poldrack-text',
	timing_response: 180000,
	data: {
		trial_id: "control_intro"
	},
	text: '<div class = centerbox><p class = block-text>이 블록은 "0-back"입니다. <br><br><strong>"t"</strong> or <strong>"T"</strong>가 나타나면 왼쪽 방향키를 누르고, 그외 모든 낱자가 나타나면 아래쪽 방향키를 누르시오.</p><p class = center-block-text><strong>enter</strong>를 눌러 시작하시오.</p></div>',
	cont_key: [13],
	timing_post_trial: 1000
};

//Setup 1-back practice
practice_trials = []
for (var i = 0; i < (num_practice_trials); i++) {
	var stim = randomDraw(letters)
	stims.push(stim)
	if (i >= 1) {
		target = stims[i - 1]
	}
	if (stim == target) { 
		correct_response = 37
	} else {
		correct_response = 40
	}
	var practice_block = {
		type: 'poldrack-categorize',
		is_html: true,
		stimulus: '<div class = centerbox><div class = center-text>' + stim + '</div></div>',
		key_answer: correct_response,
		data: {
			trial_id: "stim",
			exp_stage: "practice",
			stim: stim,
			target: target
		},
		correct_text: '<div class = centerbox><div style="color:green;font-size:24px"; class = center-text>정답!</div></div>',
		incorrect_text: '<div class = centerbox><div style="color:red;font-size:24px"; class = center-text>오답</div></div>',
		timeout_message: '<div class = centerbox><div style="font-size:24px" class = center-text>더 빨리 답하시오!</div></div>',
		timing_feedback_duration: 500,
		show_stim_with_feedback: false,
		choices: [37,40],
		timing_stim: 500,
		timing_response: 2000,
		timing_post_trial: 500
	};
	practice_trials.push(practice_block)
}

//Define control (0-back) block
var control_trials = []
for (var i = 0; i < num_trials; i++) {
	var stim = randomDraw(letters)
	var control_block = {
		type: 'poldrack-single-stim',
		is_html: true,
		stimulus: '<div class = centerbox><div class = center-text>' + stim + '</div></div>',
		data: {
			trial_id: "stim",
			exp_stage: "test",
			load: 0,
			stim: stim,
			target: 't'
		},
		choices: [37,40],
		timing_stim: 500,
		timing_response: 2000,
		timing_post_trial: 0,
		on_finish: record_acc
	};
	control_trials.push(control_block)
}

//Set up experiment
var n_back_experiment = []
n_back_experiment.push(instruction_node);
n_back_experiment.push(start_practice_block)
n_back_experiment = n_back_experiment.concat(practice_trials)

if (control_before === 0) {
	n_back_experiment.push(start_control_block)
	n_back_experiment = n_back_experiment.concat(control_trials)
}
for (var d = 0; d < delays.length; d++) {
	var delay = delays[d]
	var start_delay_block = {
		type: 'poldrack-text',
		data: {
			trial_id: "delay_text"
		},
		timing_response: 180000,
		text: '<div class = centerbox><p class = block-text>"' + delay +'-back"입니다. <br><br> 현재 나타난 낱자가 ' +
			delay +
			'번째 전에 나타난 낱자와 일치하면 <strong>왼쪽 방향키</strong>를 누르고, 그 외의 모든 경우 아래쪽 방향키를 누르시오.</p><p class = center-block-text><strong>enter</strong>를 눌러 시작하시오.</p></div>',
		cont_key: [13]
	};
	n_back_experiment.push(start_delay_block)


	for (var b = 0; b < num_blocks; b++) {
		n_back_experiment.push(start_test_block)
		var target = ''
		stims = []
		for (var i = 0; i < num_trials; i++) {
			var stim = randomDraw(letters)
			stims.push(stim)
			if (i >= delay) {
				target = stims[i - delay]
			}
			var test_block = {
				type: 'poldrack-single-stim',
				is_html: true,
				stimulus: '<div class = centerbox><div class = center-text>' + stim + '</div></div>',
				data: {
					trial_id: "stim",
					exp_stage: "test",
					load: delay,
					stim: stim,
					target: target
				},
				choices: [37,40],
				timing_stim: 500,
				timing_response: 2000,
				timing_post_trial: 0,
				on_finish: record_acc
			};
			n_back_experiment.push(test_block)
		}
	}
	n_back_experiment.push(attention_node)
}
if (control_before == 1) {
	n_back_experiment.push(start_control_block)
	n_back_experiment = n_back_experiment.concat(control_trials)
}
n_back_experiment.push(post_task_block)
n_back_experiment.push(end_block)
