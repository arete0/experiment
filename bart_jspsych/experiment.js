    var Ins_block = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
        "<div class=\"taskname\"><strong>풍선 과제</strong></div>" +
        "<div class=\"inst\">" +
		"<p>이 과제에는 21개의 풍선이 나타나는데, 풍선은 파랑색, 주황색, 노랑색으로 구성되어있습니다. </p><p>풍선은 바로 터질 수도 있고 최대 크기까지 커질 수도 있습니다. </p><p>풍선의 색이 최대 크기에 대한 단서가 됩니다.</p><p>각 풍선마다 <strong> I </strong>를 누르면 풍선이 커지고 누른 만큼 수익이 발생합니다. 하지만, 풍선이 터지면 얻은 수익금은 사라집니다.</p><p> 그리고 풍선이 언제 터질지는 알 수 없습니다.</p><p>안전하게 수익금 지키려면 <strong> B </strong>를 눌러 입금할 수 있습니다. 입금된 수익금은 사라지지 않고 계속 누적됩니다.</p><p> 최대한 많은 수익금을 계좌에 안전하게 보장하는 것이 이 과제의 목표입니다.</p>" +
		"<br><br><p><strong>스페이스 바</strong>를 눌러 실험을 시작하시오.</p>" +
		"</div>" +
		"</div>"
		,
		choices: ['F']
    }

	var ID_Ins_block = {
		type: 'survey-text',
		questions: ['Please enter the identification number which was generated just a second ago. This should be a combination of 10 digits then your favourite film/book/magazine/song and a randomly selected fictional character. You can copy and paste this into the text input section']
	}

	var debrief = {
		type: 'text',
		text: "<div class=\"display_stage\">" +
        "<div class=\"taskname\"><strong>풍선 과제</strong></div>" +
        "<div class=\"inst\">" +
		"<p>실험이 종료되었습니다. </p>" +
		"<p>스페이스 바를 누르면, 결과 파일이 생성되고 실험이 종료됩니다.</p>" +
		"</div>" +
		"</div>"
	}

	var tempTickets = 0;
	var ticketsNum = 0;
	var lastRound = 0;

	var ticketsText = {
		type: "text",
		text: function(){
			return "<div class=\"display_stage\">" +
                "<div class=\"taskname\"><strong></strong></div>" +
                "<div class=\"inst\">" +
                "<p>지난 라운드에서 얻은 수익금 " + lastRound +"을 계좌에 입금했습니다.</p>" +
                "<p>총 수익금은 " + ticketsNum +" 입니다.</p>" +
                "<p><strong>c</strong>를 누르면 이어서 할 수 있습니다.</p>" +
                "</div>" +
                "</div>";
		}
	};

	var tickets = {
	timeline: [ticketsText],
		timing_post_trial: 0,
		loop_function: function(data){
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('c') == data[0].key_press){
				lastRound=0;
				tempTickets=0;
				intO=0;
				opop=0;
				intB=0;
				bpop=0;
				intY=0;
				ypop=0;
				return false;
			} else {
				return true;
			}
		}
	}

	var blue_rand = [],
	blue_count = 0,
		orange_rand = [],
	orange_count = 0,
		yellow_rand = [],
	yellow_count = 0;

	for (var j = 0; j < 7; j ++){
		blue_rand.push(Math.floor((Math.random()*46)+1));
		console.log(blue_rand);
		orange_rand.push(Math.floor((Math.random()*12)+1));
		console.log(orange_rand);
		yellow_rand.push(Math.floor((Math.random()*32)+1));
		console.log(yellow_rand);
	}


	//blue balloon
	var bpop = 0;
	var intB = 0;
	var blue_display = {
		type: 'single-stim',
		prompt:function(){
            if(intB==100){
                return "<div class=\"display_stage\">" +
                "<div class=\"taskname\"><strong></strong></div>" +
                "<div class=\"inst\">" +
                "<img src=\"../jspsych-5.0.3/balloon_image/blue/blue" + intB  + ".png\"></img>" +
                "<p>풍선이 터졌습니다. <strong>B</strong>를 눌러 계속하세요.</p>" +
                "</div>" +
                "</div>";
            }
            else {
                if(intB<10){
                        return "<div class=\"display_stage\">" +
                        "<div class=\"taskname\"><strong></strong></div>" +
                        "<div class=\"inst\">" +
                        "<img src=\"../jspsych-5.0.3/balloon_image/blue/blue0" + intB  + ".png\"></img>" +
                        "<p>풍선에 계속 바람을 불어넣으려면 <strong>I</strong>누르고,</p><p>입금하려면 <strong>B</strong>를 눌러 바람 불기를 멈추세요.</p>" +
                        "</div>" +
                        "</div>";
                }
                else {
                        return "<div class=\"display_stage\">" +
                        "<div class=\"taskname\"><strong></strong></div>" +
                        "<div class=\"inst\">" +
                        "<img src=\"../jspsych-5.0.3/balloon_image/blue/blue" + intB  + ".png\"></img>" +
                        "<p>풍선에 계속 바람을 불어넣으려면 <strong>I</strong>누르고,</p><p>입금하려면 <strong>B</strong>를 눌러 바람 불기를 멈추세요.</p>" +
                        "</div>" +
                        "</div>";
                }

            }
		},
		stimulus: function(){
				return ;
		}

	};


	var blue_trial = {
	timeline: [blue_display],
		choices: ['I','B'],
		timing_post_trial: bpop,
		loop_function: function(data){
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('b') == data[0].key_press){
				intB=0;
				blue_count++
				ticketsNum+=tempTickets;
				lastRound = tempTickets;
                jsPsych.data.addDataToLastTrial({
                    "stims": "blue",
				    "banked": true,
				    "resp": data[0].key_press,
				    "earning": tempTickets,
				    "total_earning": ticketsNum,
                    "max": intB,
				    });
				tempTickets=0;
				return false;
			} else if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('i') == data[0].key_press) {
				intB++;
				tempTickets++;
                jsPsych.data.addDataToLastTrial({
                    "stims": "blue",
				    "banked": false,
				    "resp": data[0].key_press,
				    "earning": tempTickets,
				    "total_earning": ticketsNum,
                    "max": intB,
				    });
				return true;
			}
		},
		on_trial_start: function(){
			if(intB==blue_rand[blue_count]|| intB==blue_rand[blue_count]){
				intB=100;
				bpop=2000;
				blue_count++;
				tempTickets = 0;
				jsPsych.endCurrentTimeline();
	}}}


	//orange balloon
	var opop = 0;
	var intO = 0;
	var orange_display = {
		type: 'single-stim',
		prompt:function(){
            if(intO==100){
                return "<div class=\"display_stage\">" +
                "<div class=\"taskname\"><strong></strong></div>" +
                "<div class=\"inst\">" +
                "<img src=\"../jspsych-5.0.3/balloon_image/orange/orange" + intO  + ".png\"></img>" +
                "<p>풍선이 터졌습니다. <strong>B</strong>를 눌러 계속하세요.</p>" +
                "</div>" +
                "</div>";
            }
            else {
                if(intO<10){
                        return "<div class=\"display_stage\">" +
                        "<div class=\"taskname\"><strong></strong></div>" +
                        "<div class=\"inst\">" +
                        "<img src=\"../jspsych-5.0.3/balloon_image/orange/orange0" + intO  + ".png\"></img>" +
                        "<p>풍선에 계속 바람을 불어넣으려면 <strong>I</strong>누르고,</p><p>입금하려면 <strong>B</strong>를 눌러 바람 불기를 멈추세요.</p>" +
                        "</div>" +
                        "</div>";
                }
                else {
                        return "<div class=\"display_stage\">" +
                        "<div class=\"taskname\"><strong></strong></div>" +
                        "<div class=\"inst\">" +
                        "<img src=\"../jspsych-5.0.3/balloon_image/orange/orange" + intO  + ".png\"></img>" +
                        "<p>풍선에 계속 바람을 불어넣으려면 <strong>I</strong>누르고,</p><p>입금하려면 <strong>B</strong>를 눌러 바람 불기를 멈추세요.</p>" +
                        "</div>" +
                        "</div>";
                }

            }
		},
		stimulus: function(){
				return ;
		}
	};


	var orange_trial = {
	timeline: [orange_display],
		choices: ['I','B'],
		timing_post_trial: opop,
		loop_function: function(data){
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('b') == data[0].key_press){
				intO=0;
				orange_count++
				ticketsNum+=tempTickets;
				lastRound = tempTickets;
				jsPsych.data.addDataToLastTrial({
				    "stims": "orange",
				    "banked": true,
				    "resp": data[0].key_press,
				    "earning": tempTickets,
				    "total_earning": ticketsNum,
				    "max": intO,
				    });
				tempTickets=0;
				return false;
			} else if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('i') == data[0].key_press) {
				intO++;
				tempTickets++;
                jsPsych.data.addDataToLastTrial({
                    "stims": "orange",
				    "banked": false,
				    "resp": data[0].key_press,
				    "earning": tempTickets,
				    "total_earning": ticketsNum,
                    "max": intO,
				    });
				return true;
			}
		},
		on_trial_start: function(){
			if(intO==orange_rand[orange_count]|| intO==orange_rand[orange_count]){
				intO=100;
				opop=2000;
				orange_count++;
				tempTickets = 0;
				jsPsych.endCurrentTimeline();
	}}}

	//yellow balloon
    var ypop = 0;
    var intY = 0;
    var yellow_display = {
        type: 'single-stim',
        prompt:function(){
            if(intY==100){
                return "<div class=\"display_stage\">" +
                "<div class=\"taskname\"><strong></strong></div>" +
                "<div class=\"inst\">" +
                "<img src=\"../jspsych-5.0.3/balloon_image/yellow/yellow" + intY  + ".png\"></img>" +
                "<p>풍선이 터졌습니다. <strong>B</strong>를 눌러 계속하세요.</p>" +
                "</div>" +
                "</div>";
            }
            else {
                if(intY<10){
                        return "<div class=\"display_stage\">" +
                        "<div class=\"taskname\"><strong></strong></div>" +
                        "<div class=\"inst\">" +
                        "<img src=\"../jspsych-5.0.3/balloon_image/yellow/yellow0" + intY  + ".png\"></img>" +
                        "<p>풍선에 계속 바람을 불어넣으려면 <strong>I</strong>누르고,</p><p>입금하려면 <strong>B</strong>를 눌러 바람 불기를 멈추세요.</p>" +
                        "</div>" +
                        "</div>";
                }
                else {
                        return "<div class=\"display_stage\">" +
                        "<div class=\"taskname\"><strong></strong></div>" +
                        "<div class=\"inst\">" +
                        "<img src=\"../jspsych-5.0.3/balloon_image/yellow/yellow" + intY  + ".png\"></img>" +
                        "<p>풍선에 계속 바람을 불어넣으려면 <strong>I</strong>누르고,</p><p>입금하려면 <strong>B</strong>를 눌러 바람 불기를 멈추세요.</p>" +
                        "</div>" +
                        "</div>";
                }

            }
        },
		stimulus: function(){
				return ;
		}

    };


	var yellow_trial = {
	timeline: [yellow_display],
		choices: ['I','B'],
		timing_post_trial: ypop,
		loop_function: function(data){
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('b') == data[0].key_press){
				intY=0;
				yellow_count++
				ticketsNum+=tempTickets;
				lastRound = tempTickets;
                jsPsych.data.addDataToLastTrial({
                    "stims": "yellow",
				    "banked": true,
				    "resp": data[0].key_press,
				    "earning": tempTickets,
				    "total_earning": ticketsNum,
                    "max": intY,
				    });
				tempTickets=0;
				return false;
			} else if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('i') == data[0].key_press) {
				intY++;
				tempTickets++;
                jsPsych.data.addDataToLastTrial({
                    "stims": "yellow",
				    "banked": false,
				    "resp": data[0].key_press,
				    "earning": tempTickets,
				    "total_earning": ticketsNum,
                    "max": intY,
				    });
				return true;
			}
		},
		on_trial_start: function(){
			if(intY==yellow_rand[yellow_count]|| intY==yellow_rand[yellow_count]){
				intY=100;
				ypop=2000;
				yellow_count++;
				tempTickets = 0;
				jsPsych.endCurrentTimeline();
	}}}


	var test_block = {
		timeline:[]
	};

	for (var i = 0; i < 7; i++){  //trials = i x 3
		var res = [1,2,3]
		for (var j = 0; j < 3; j++){
			var rand = Math.floor((Math.random()*res.length));
            var val = res[rand];
            res.splice(rand,1);
            if(val == 1){
				test_block.timeline.push(orange_trial);
			}
            else if(val == 2){
				test_block.timeline.push(blue_trial);
			}
            else{
				test_block.timeline.push(yellow_trial);
			}
			test_block.timeline.push(tickets);
		}
	}

	var timeline = [];
	timeline.push(Ins_block);
//	timeline.push(ID_Ins_block);
	timeline.push(test_block);
	timeline.push(debrief);
/*
    jsPsych.init({
        timeline: timeline,
		on_finish: function() {
		    jsPsych.data.displayData();
            jsPsych.data.localSave('test.csv', 'csv');
		  }
    })
*/
