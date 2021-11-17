/* ************************************ */
/* Define helper functions */
/* ************************************ */
var getInstructFeedback = function() {
	return '<div class = centerbox><p class = center-block-text>' + feedback_instruct_text +
		'</p></div>'
}

function appendTextAfter(input, search_term, new_text) {
	var index = input.indexOf(search_term) + search_term.length
	return input.slice(0, index) + new_text + input.slice(index)
}

function appendTextAfter2(input, search_term, new_text) {
	var index = input.indexOf(search_term) + search_term.length
	return input.slice(0, index) + new_text + input.slice(index +
		"'./images/grey_small_square.png' onclick = chooseCard(this.id)".length + 5)
}

var appendTestData = function() {
	var color_clicked = ''
	var correct = false
	if (color1_index.indexOf(currID, 0) != -1) {
		color_clicked = colors[0]
		trial_id = 'stim'
		correct = NaN
	} else if (color2_index.indexOf(currID, 0) != -1) {
		color_clicked = colors[1]
		trial_id = 'stim'
		correct = NaN
	} else if (currID == 26) {
		color_clicked = largeColors[0]
		trial_id = 'choice'
		if (color_clicked === colors[0]) {
			correct = true
		}
	} else if (currID == 27) {
		color_clicked = largeColors[1]
		trial_id = 'choice'
		if (color_clicked === colors[0])  {
			correct = true
		}
	}
	jsPsych.data.addDataToLastTrial({
		exp_stage: exp_stage,
		color_clicked: color_clicked,
		which_click_in_round: numClicks,
		correct_response: colors[0],
		trial_num: current_trial,
		correct: correct,
		trial_id: trial_id
	})
}

var getBoard = function(colors, board_type) {
	var whichSmallColor1 = colors[0] + '_' + shapes[0]
	var whichSmallColor2 = colors[1] + '_' + shapes[0]

	var whichLargeColor1 = largeColors[0] + '_' + shapes[1]
	var whichLargeColor2 = largeColors[1] + '_' + shapes[1]
	var board = "<div class = bigbox><div class = numbox>"
	var click_function = ''
	var click_class = ''
	for (var i = 1; i < 26; i++) {
		if (board_type == 'instruction') {
			click_function = 'instructionFunction'
			click_class = 'small_square'
		} else {
			click_function = 'chooseCard'
			click_class = 'select-button small_square'
		}
		if (clickedCards.indexOf(i) != -1) {
			if (color1_index.indexOf(i) != -1) {
				board +=
					"<div class = square><input type='image' class = 'small_square' id = '" +
					i +
					"' src='./images/" + whichSmallColor1 +
					".png'></div>"
			} else if (color2_index.indexOf(i) != -1) {
				board +=
					"<div class = square><input type='image' class = 'small_square' id = '" +
					i +
					"' src='./images/" + whichSmallColor2 +
					".png'></div>"
			}
		} else {
			board += "<div class = square><input type='image' class = '" + click_class + "'id = '" +
				i +
				"' src='./images/grey_small_square.png' onclick = " +
				click_function + "(this.id)></div>"
		}
	}
	board += "</div><div class = smallbox>"
	if (board_type == 'instruction') {
		board +=
			"<div class = bottomLeft><input type='image' class = 'select-button big_square' id = '26' src='./images/" +
			whichLargeColor1 + ".png' onclick = makeInstructChoice(this.id)></div>" +
			"<div class = bottomRight><input type='image' class = 'select-button big_square' id = '27' src='./images/" +
			whichLargeColor2 + ".png' onclick = makeInstructChoice(this.id)></div></div></div></div>"
	} else {
		board +=
			"<div class = bottomLeft><input type='image' class = 'select-button big_square' id = '26' src='./images/" +
			whichLargeColor1 + ".png' onclick = makeChoice(this.id)></div>" +
			"<div class = bottomRight><input type='image' class = 'select-button big_square' id = '27' src='./images/" +
			whichLargeColor2 + ".png' onclick = makeChoice(this.id)></div></div></div></div>"
	}
	return board
}

var appendRewardDataDW = function() {
	jsPsych.data.addDataToLastTrial({
		reward: reward,
		trial_num: current_trial
	})
	current_trial += 1
}

var appendRewardDataFW = function() {
	jsPsych.data.addDataToLastTrial({
		reward: reward,
		trial_num: current_trial
	})
	current_trial += 1
}


var getRound = function() {
	gameState = getBoard(colors, 'test')
	return gameState
}


var chooseCard = function(clicked_id) {
	numClicks = numClicks + 1
	currID = parseInt(clicked_id)
	clickedCards.push(currID)
}

var makeChoice = function(clicked_id) {
	roundOver = 1
	numClicks = numClicks + 1
	currID = parseInt(clicked_id)
}


var resetRound = function() {
	DWPoints = 250
	FWPoints = 0
	roundOver = 0
	numCardReward = []
	numClicks = 0
	clickedCards = []
	colors = jsPsych.randomization.shuffle(['green', 'red', 'blue', 'teal', 'yellow', 'orange',
		'purple', 'brown'
	]).slice(0,2)
	var numbersArray = jsPsych.randomization.repeat(numbers, 1)
	var num_majority = Math.floor(Math.random()*5) + 13
	color1_index = numbersArray.slice(0,num_majority)
	color2_index = numbersArray.slice(num_majority)
	largeColors = jsPsych.randomization.shuffle([colors[0],colors[1]])
	trial_start_time = new Date()
}

var getRewardFW = function() {
	global_trial = jsPsych.progress().current_trial_global
	lastAnswer = jsPsych.data.getDataByTrialIndex(global_trial - 1).color_clicked
	correctAnswer = jsPsych.data.getDataByTrialIndex(global_trial - 1).correct_response
	clickedCards = numbers //set all cards as 'clicked'
	if (lastAnswer == correctAnswer) {
		totFWPoints += 100
		reward = 100
		return getBoard(colors,'test') + '<div class = rewardbox><div class = reward-text>정답입니다! 100점을 얻었습니다!</div></div>'
	} else if (lastAnswer != correctAnswer) {
		totFWPoints -= 100
		reward = -100
		return getBoard(colors,'test') + '<div class = rewardbox><div class = reward-text>오답입니다! 100점을 잃었습니다!</div></div>'
	}
}


var getRewardDW = function() {
	global_trial = jsPsych.progress().current_trial_global
	lastAnswer = jsPsych.data.getDataByTrialIndex(global_trial - 1).color_clicked
	correctAnswer = jsPsych.data.getDataByTrialIndex(global_trial - 1).correct_response
	clicks = clickedCards.length
	clickedCards = numbers //set all cards as 'clicked'
	if (lastAnswer == correctAnswer) {
		lossPoints = clicks * 10
		DWPoints = DWPoints - lossPoints
		reward = DWPoints
		totDWPoints +=  DWPoints
		return getBoard(colors,'test') + '<div class = rewardbox><div class = reward-text>정답입니다! ' + DWPoints +
			'점을 얻었습니다!</div></div>'
	} else if (lastAnswer != correctAnswer) {
		totDWPoints -= 100
		reward = -100
		return getBoard(colors,'test') + '<div class = rewardbox><div class = reward-text>오답입니다! 100점을 잃었습니다!</div></div>'
	}
}

var instructionFunction = function(clicked_id) {
	var whichSmallColor1 = colors[0] + '_' + shapes[0]
	var whichSmallColor2 = colors[1] + '_' + shapes[0]
	currID = parseInt(clicked_id)
	if (color1_index.indexOf(currID) != -1) {
		document.getElementById(clicked_id).src =
			'./images/' + whichSmallColor1 + '.png';
	} else {
		document.getElementById(clicked_id).src =
			'./images/' + whichSmallColor2 + '.png';

	}
}

var makeInstructChoice = function(clicked_id) {
	clickedCards = numbers //set all cards as 'clicked'
	if (largeColors[['26','27'].indexOf(clicked_id)]==colors[0]) {
		reward = 100
	} else if (clicked_id == 27) {
		reward = -100
	}
}

var getRewardPractice = function() {
	var text = ''
	var correct = false
	var color_clicked = colors[1]
	if (reward === 100) {
		correct = true
		color_clicked = colors[0]
		text = getBoard(colors, 'instruction') + '<div class = rewardbox><div class = reward-text>정답입니다! 100점을 얻었습니다!</div></div></div>'
	} else  {
		 text = getBoard(colors, 'instruction') + '<div class = rewardbox><div class = reward-text>오답입니다! 100점을 잃었습니다!</div></div></div>'
	}
	jsPsych.data.addDataToLastTrial({
		correct: correct,
		color_clicked: color_clicked
	})
	return text
}

var getDWPoints = function() {
	return "<div class = centerbox><p class = center-text>총점 : " + totDWPoints + "</p></div>"
}

var getFWPoints = function() {
	return "<div class = centerbox><p class = center-text>총점 : " + totFWPoints + "</p></div>"
}
var get_post_gap = function() {
	return Math.max(1000,(17-total_trial_time)*1000)
}

/* ************************************ */
/* Define experimental variables */
/* ************************************ */
// generic task variables
var sumInstructTime = 0 //ms
var instructTimeThresh = 0 ///in seconds

// task specific variables
var exp_stage = ''
var num_trials = 10
var reward = 0 //reward value
var totFWPoints = 0
var totDWPoints = 0
var DWPoints = 250
var FWPoints = 0
var roundOver = 0
var numClicks = 0
var current_trial = 0
var trial_start_time = 0 // variable to track beginning of trial time
var total_trial_time = 0 // Variable to track total trial time
var numCardReward = []
var colors = jsPsych.randomization.repeat(['green', 'red', 'blue', 'teal', 'yellow', 'orange',
	'purple', 'brown'
], 1)
var largeColors = []
var shapes = ['small_square', 'large_square']
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
var clickedCards = []
//preload images
images = []
var path = './images/'  // '/static/experiments/information_sampling_task/images/'
for (var c = 0; c<colors.length; c++) {
	images.push(path + colors[c] + '_small_square.png')
	images.push(path + colors[c] + '_large_square.png')
}
jsPsych.pluginAPI.preloadImages(images)
resetRound()
instructionsSetup = getBoard(colors, 'instruction')

/* ************************************ */
/* Set up jsPsych blocks */
/* ************************************ */
//Set up post task questionnaire
var post_task_block = {
   type: 'survey-text',
   data: {
       trial_id: "post task questions"
   },
   questions: ['<p class = center-block-text style = "font-size: 20px">Please summarize what you were asked to do in this task.</p>',
              '<p class = center-block-text style = "font-size: 20px">Do you have any comments about this task?</p>'],
   rows: [15, 15],
   columns: [60,60]
};

/* define static blocks */
var end_block = {
	type: 'poldrack-text',
	data: {
		trial_id: "end",
		exp_id: 'information_sampling_task'
	},
	text: '<div class = centerbox><p class = center-block-text>이번 과제가 종료되었습니다.</p><p class = center-block-text><strong>enter</strong>를 누르면 실험이 종료되고, 결과파일 생성됩니다.</p></div>',
	cont_key: [13],
	timing_post_trial: 0
};

var feedback_instruct_text =
	'실험에 참여해주셔서 감사합니다. 이 실험은 완료하는데 약 12분정도 걸립니다. <br><br> 준비되었으면, <strong>enter</strong>를 눌러 시작하시오.'
var feedback_instruct_block = {
	type: 'poldrack-text',
	cont_key: [13],
	data: {
		trial_id: "instruction"
	},
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
		'<div class = centerbox><p class = block-text>이 실험에서는 5x5 행렬로 배열된 작은 정사각형을 볼 수 있습니다. 처음에는 모든 사각형이 회색으로 표시되지만 상자를 클릭하면 화면 하단에 있는 두 개의 더 큰 사각형에 해당하는 두 가지 색상 중 하나로 표시됩니다.<p class = block-text>당신이 생각하기에 어떤 색 사각형이 더 많을지 결정하는 것이 이 과제의 목표입니다.</p></div>',
		'<div class = centerbox><p class = block-text>선택하기 전에 원하는 만큼 작은 회색 사각형을 열어 볼 수 있습니다. 결정하기 전에 얼마나 많은 상자를 열어 볼지는 스스로 결정해야 합니다. </p><p class = block-text>결정을 했으면, 화면 하단에 있는 더 큰 색 사각형 중 하나를 선택합니다. <br><br> 지시문 종료를 클릭하면, 연습시행이 시작됩니다. 지침에 따라 원하는 만큼 상자를 열어보고, 어느 색이 더 많을지 결정해보세요. <br><br> 그렇게 하면 연습시행이 종료됩니다. </p></div>',
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
			'지시문을 읽기에 충분하지 않은 시간이었습니다. 지시문을 충분히 이해할 수 있도록 더 자세히 읽으세요. <br><br> <strong>enter</strong>를 눌러 다음으로 넘어가시오.'
			return true
		} else if (sumInstructTime > instructTimeThresh * 1000) {
			feedback_instruct_text = '지시사항 전달이 끝났습니다. <br><br> <strong>enter</strong>를 눌러 다음으로 넘어가시오.'
			return false
		}
	}
}

var start_test_block = {
	type: 'poldrack-text',
	data: {
		trial_id: "test_intro"
	},
	text: '<div class = centerbox><p class = block-text>이제 본 시행이 시작됩니다. <br><br> 매 시행마다 동일하게 진행됩니다. 보상이 계산되는 방식에 영향을 주는 두 가지 조건이 있습니다.</p><p class = block-text><strong>감소되는 승리</strong>조건에서는, 시행마다 250점에서 시작합니다. 상자를 열때마다 10점이 감소합니다. 예를 들어 올바른 결정을 하기 전에 7개의 상자를 열었다면, 180점(250-70)을 보상으로 얻게 됩니다. 만약 잘못된 결정을 했다면 몇 개의 상자를 열었는지 관계없이 100점을 잃게 됩니다. </p><p class = block-text><strong>고정된 승리</strong>조건에서는 시행마다 0점에서 시작합니다. 올바른 결정을 했다면, 몇 개의 상자를 열어보았는지 관계 없이 100점을 얻습니다. 마찬가지로, 잘못된 결정을 하면 100점을 잃게 됩니다. <br><br> 두 조건 모두에서 가능한한 많은 점수를 얻을 수 있도록 승리해야 합니다. <br><br> <strong>enter</strong>를 눌러 다음으로 넘어가시오.</p></div>',
	cont_key: [13],
	timing_post_trial: 1000,
};

var DW_intro_block = {
	type: 'poldrack-text',
	data: {
		trial_id: "DW_intro"
	},
	text: '<div class = centerbox><p class = block-text><strong>감소되는 승리</strong> 조건으로 시작합니다. </p><p class = block-text>250점에서 시작된다는 것을 기억하세요. 올바른 선택을 할 경우 그 때까지 열린 상자마다 10점씩 제외하고 남은 점수를 그 시행의 보상으로 얻게 됩니다. 잘못된 결정을 하면 열어본 상자의 수에 관계없이 100점을 잃게 됩니다.  최대한 많은 점수를 얻을 수 있도록 하세요. <br><br><strong>enter</strong>를 누르세요.</div>',
	cont_key: [13],
	timing_post_trial: 0,
	on_finish: function() {
		exp_stage = 'Decreasing Win'
		current_trial = 0
		trial_start_time = new Date()
	}
};

var FW_intro_block = {
	type: 'poldrack-text',
	data: {
		trial_id: "FW_intro"
	},
	text: '<div class = centerbox><p class = block-text>이번에는 <strong>고정된 승리</strong> 조건입니다.</p><p class = block-text>0점으로 시작된다는 것을 기억하세요. 만약 옳은 선택을 하면 100점을 얻게 됩니다. 잘못된 결정을 하면 열어본 상자 수와 관계 없이 100점을 잃게 됩니다. 최대한 많은 점수를 얻을 수 있도록 하세요. <br><br><strong>enter</strong>를 누르세요.</div>',
	cont_key: [13],
	timing_post_trial: 0,
	on_finish: function() {
		exp_stage = 'Fixed Win'
		current_trial = 0
		trial_start_time = new Date()
	}
};

var rewardFW_block = {
	type: 'poldrack-single-stim',
	stimulus: getRewardFW,
	is_html: true,
	data: {
		trial_id: "reward",
		exp_stage: "Fixed Win"
	},
	choices: 'none',
	timing_response: 2000,
	timing_post_trial: 0,
	on_finish: appendRewardDataFW,
	response_ends_trial: true,
};

var rewardDW_block = {
	type: 'poldrack-single-stim',
	stimulus: getRewardDW,
	is_html: true,
	data: {
		trial_id: "reward",
		exp_stage: "Decreasing Win"
	},
	choices: 'none',
	timing_response: 2000,
	timing_post_trial: 0,
	on_finish: appendRewardDataDW,
	response_ends_trial: true,
};

var practiceRewardBlock = {
	type: 'poldrack-single-stim',
	stimulus: getRewardPractice,
	is_html: true,
	data: {
		trial_id: "reward",
		exp_stage: "practice"
	},
	choices: 'none',
	timing_response: 2000,
	timing_post_trial: 1000,
	response_ends_trial: true,
	on_finish: function() {
		clickedCards = []
	}
};

var scoreDW_block = {
	type: 'poldrack-single-stim',
	stimulus: getDWPoints,
	is_html: true,
	data: {
		trial_id: "total_points",
		exp_stage: "Decreasing Win"
	},
	choices: 'none',
	timing_response: get_post_gap,
}

var scoreFW_block = {
	type: 'poldrack-single-stim',
	stimulus: getFWPoints,
	is_html: true,
	data: {
		trial_id: "total_points",
		exp_stage: "Fixed Win"
	},
	choices: 'none',
	timing_response: get_post_gap,
}


var practice_block = {
	type: 'single-stim-button',
	button_class: 'select-button',
	stimulus: instructionsSetup,
	data: {
		trial_id: "choice",
		exp_stage: "practice",
		correct_respose: colors[0]
	},
	timing_post_trial: 0,
	response_ends_trial: true
};

var test_block = {
	type: 'single-stim-button',
	button_class: 'select-button',
	stimulus: getRound,
	timing_post_trial: 0,
	on_finish: appendTestData,
	response_ends_trial: true,
};

var test_node = {
	timeline: [test_block],
	loop_function: function(data) {
		if (roundOver === 1) {
			total_trial_time = (new Date() - trial_start_time)/1000
			return false
		} else if (roundOver === 0) {
			return true
		}
	}
}

var reset_block = {
	type: 'call-function',
	data: {
		trial_id: "reset_round"
	},
	func: resetRound,
	timing_post_trial: 0
}

/* create experiment definition array */
var information_sampling_task_experiment = [];
information_sampling_task_experiment.push(instruction_node);
information_sampling_task_experiment.push(practice_block);
information_sampling_task_experiment.push(practiceRewardBlock);
information_sampling_task_experiment.push(start_test_block);

if (Math.random() < 0.5) { // do the FW first, then DW
	information_sampling_task_experiment.push(FW_intro_block);
	for (var i = 0; i < num_trials; i++) {
		information_sampling_task_experiment.push(test_node);
		information_sampling_task_experiment.push(rewardFW_block);
		information_sampling_task_experiment.push(scoreFW_block);
		information_sampling_task_experiment.push(reset_block);
	}
	information_sampling_task_experiment.push(DW_intro_block);
	for (var i = 0; i < num_trials; i++) {
		information_sampling_task_experiment.push(test_node);
		information_sampling_task_experiment.push(rewardDW_block);
		information_sampling_task_experiment.push(scoreDW_block);
		information_sampling_task_experiment.push(reset_block);
	}

} else  { ////do DW first then FW
	information_sampling_task_experiment.push(DW_intro_block);
	for (var i = 0; i < num_trials; i++) {
		information_sampling_task_experiment.push(test_node);
		information_sampling_task_experiment.push(rewardDW_block);
		information_sampling_task_experiment.push(scoreDW_block);
		information_sampling_task_experiment.push(reset_block);
	}
	information_sampling_task_experiment.push(FW_intro_block);
	for (var i = 0; i < num_trials; i++) {
		information_sampling_task_experiment.push(test_node);
		information_sampling_task_experiment.push(rewardFW_block);
		information_sampling_task_experiment.push(scoreFW_block);
		information_sampling_task_experiment.push(reset_block);
	}
}
//information_sampling_task_experiment.push(post_task_block)
information_sampling_task_experiment.push(end_block);