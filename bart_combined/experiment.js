    // debugging mode 
    var lastnum = 7;  // debug = 1, full = 7, 풍선별 반속 횟수
    var niterate = 2; // 블록 반복 횟수 full = 3
    var timing_response_value = 180000; // 180000

	var rest_block = {
      type: 'poldrack-text',
      data: {
        trial_id: "rest"
      },
      timing_response: timing_response_value,
      text: '<div class = centerbox><p class = center-block-text>휴식시간입니다. </p><p class = center-block-text> 잠시 편하게 쉬세요! 다시 시작할 준비가 되었다면, <strong>enter</strong>를 누르세요.</p></div>',
      cont_key: [13],
      timing_post_trial: 1000
    };
	var cession_block = {
        type: 'poldrack-text',
        data: {
          trial_id: "rest"
        },
        timing_response: timing_response_value,
        text: '<div class = centerbox><p class = center-block-text>첫번째 세션이 끝났습니다. </p><p class = center-block-text> 잠시 편하게 쉬세요! 다시 시작할 준비가 되었다면, <strong>enter</strong>를 누르세요.</p></div>',
        cont_key: [13],
        timing_post_trial: 1000
    };

    var rest_block2 = {
      type: 'poldrack-text',
      data: {
        trial_id: "rest"
      },
      timing_response: timing_response_value,
      text: '<div class = centerbox><p class = center-block-text>수고했습니다.</p><p class = center-block-text><strong>enter</strong>를 누르세요.</p></div>',
      cont_key: [13],
      timing_post_trial: 1000
    };

    var reset_block = {
      type: 'call-function',
      data: {
        trial_id: 'reset trial'
      },
      func: function() {
        current_trial = 0
      },
      timing_post_trial: 0
    }


	var blue_explode_array =  [45, 9, 14, 9, 31, 6, 34] ;
	var orange_explode_array =  [10, 3, 4, 2, 8, 3, 7] ;
	var yellow_explode_array =  [32, 7, 12, 3, 18, 4, 19] ;


    var Ins_block = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>풍선 과제</strong></div>" +
		"<div class=\"inst\">" + 
		"<p>이 과제에는 여러 개의 풍선이 나타나는데, 풍선은 파랑색, 주황색, 노랑색으로 구성되어있습니다. </p> <p>풍선은 바로 터질 수도 있고 최대 크기까지 커질 수도 있습니다. </p>" +
		"<p>풍선의 색에 따라 최대 크기가 다릅니다. 각 풍선마다 <strong> I </strong>를 누르면 풍선이 커지고 누른 만큼 수익이 발생합니다. <br><br> 하지만, 풍선이 터지면 얻은 수익금은 사라집니다. 그리고 풍선이 언제 터질지는 알 수 없습니다. </p>" +
		"<p>안전하게 수익금 지키려면 <strong> B </strong>를 눌러 입금할 수 있습니다. 입금된 수익금은 사라지지 않고 계속 누적됩니다.  </p><p> 최대한 많은 수익금을 계좌에 안전하게 보장하는 것이 이 과제의 목표입니다.</p>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Ins_block1 = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>1 단계</strong></div>" +
		"<div class=\"inst\">" +
		"<p><strong> 첫번째 단계</strong>입니다.</p><br><p>이 풍선과제에서는 조언자가 예측정보를 제공합니다. <br><br> 조언의 방식은 각 풍선마다 최대로 누를 수 있는 수를 <strong>네 개의 구간</strong>으로 나누어 <br><br> 어느 구간에서 터질 가능성이 높은지에 대해 예측합니다. </p> " +
		"<p>예를 들어, 어떤 한 색의 풍선에 대해 네 개의 구간으로 나누어 터질 구간을 예측하게 됩니다. <br><br>만약 최대 100번까지 바람을 불어넣을 수 있다면, 1구간은 1~25, 2구간은 26~50, 3구간은 51~75, 4구간은 76~100이 됩니다."+
		"<p><strong>단, 예측 정보의 정확성은 단계마다 달라집니다.</strong> 정확히 예측할수도 있고, 그렇지 못할 수도 있습니다. </p>" +
		"<p>풍선누르기 전에 예측 정보가 나타납니다. 잘 읽고 최대한 많은 수익금을 얻도록 노력하세요!</p>"  +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Ins_block2 = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>2 단계</strong></div>" +
		"<div class=\"inst\">" +
		"<p> <strong>두번째 단계의 예측정보가 변경됩니다.</strong> 예측정보를 잘보고 결정해야 합니다. <br><br> 이것만 제외하면 첫번째 단계와 동일한 절차로 진행됩니다. </p> " +
		"<p>풍선누르기 전에 예측 정보가 나타납니다. 잘 읽고 최대한 많은 수익금을 얻도록 노력하세요!</p>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Ins_block3 = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>3 단계</strong></div>" +
		"<div class=\"inst\">" +
		"<p> <strong>세번째 단계에서도 정확도가 달라집니다.</strong> 예측정보를 잘보고 결정해야 합니다. <br><br> 이것만 제외하면 동일한 절차로 진행됩니다. </p> " +
		"<p>풍선누르기 전에 예측 정보가 나타납니다. 잘 읽고 최대한 많은 수익금을 얻도록 노력하세요!</p>"  +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Betting4_text = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left\"></div>" +
		"<div class=\"adv1\">" +
		"<p><strong>4 구간에서 터집니다.</strong></p>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }
    var Betting3_text = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left\"></div>" +
		"<div class=\"adv1\">" +
		"<p><strong>3 구간에서 터집니다. </strong> </p>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Betting2_text = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left\"></div>" +
		"<div class=\"adv1\">" +
		"<p><strong>2 구간에서 터집니다. </strong> </p>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
	}

    var Betting1_text = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left\"></div>" +
		"<div class=\"adv1\">" +
		"<p><strong>1 구간에서 터집니다. </strong> </p>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>"
		,
		choices: ['F']
    }
    
    // 전언방식(massage)
    var Betting4_text_m = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left\"></div>" +
		"<div class=\"adv1\">" +
		"<p><strong>4 구간에서 터진다고 합니다.</strong></p>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }
    var Betting3_text_m = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left\"></div>" +
		"<div class=\"adv1\">" +
		"<p><strong>3 구간에서 터진다고 합니다.</strong></p>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Betting2_text_m = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left\"></div>" +
		"<div class=\"adv1\">" +
		"<p><strong>2 구간에서 터진다고 합니다.</strong></p>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
	}

    var Betting1_text_m = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left\"></div>" +
		"<div class=\"adv1\">" +
		"<p><strong>1 구간에서 터진다고 합니다. </strong></p>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>"
		,
		choices: ['F']
    }
    
    var ttt1 = Math.floor(Math.random()*4+1);
	//console.log(ttt);
    if ( ttt1 % 2 === 0) {
        var Bet_advices4 = {
            timeline: [Betting4_text],
            timing_post_trial: 0,
            loop_function: function(data){
                if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                    jsPsych.data.addDataToLastTrial({
                        "advice": "4",
                        "advice_type": "a",
                    });
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    
        var Bet_advices3 = {
            timeline: [Betting3_text],
            timing_post_trial: 0,
            loop_function: function(data){
                if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                    jsPsych.data.addDataToLastTrial({
                        "advice": "3",
                        "advice_type": "a",
                    });
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        var Bet_advices2 = {
            timeline: [Betting2_text],
            timing_post_trial: 0,
            loop_function: function(data){
                if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                    jsPsych.data.addDataToLastTrial({
                        "advice": "2",
                        "advice_type": "a",
                    });
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    
        var Bet_advices1 = {
            timeline: [Betting1_text],
            timing_post_trial: 0,
            loop_function: function(data){
                if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                    jsPsych.data.addDataToLastTrial({
                        "advice": "1",
                        "advice_type": "a",
                    });
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    } else {
        var Bet_advices4 = {
            timeline: [Betting4_text_m],
            timing_post_trial: 0,
            loop_function: function(data){
                if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                    jsPsych.data.addDataToLastTrial({
                        "advice": "4",
                        "advice_type": "m",
                    });
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    
        var Bet_advices3 = {
            timeline: [Betting3_text_m],
            timing_post_trial: 0,
            loop_function: function(data){
                if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                    jsPsych.data.addDataToLastTrial({
                        "advice": "3",
                        "advice_type": "m",
                    });
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        var Bet_advices2 = {
            timeline: [Betting2_text_m],
            timing_post_trial: 0,
            loop_function: function(data){
                if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                    jsPsych.data.addDataToLastTrial({
                        "advice": "2",
                        "advice_type": "m",
                    });
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    
        var Bet_advices1 = {
            timeline: [Betting1_text_m],
            timing_post_trial: 0,
            loop_function: function(data){
                if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                    jsPsych.data.addDataToLastTrial({
                        "advice": "1",
                        "advice_type": "m",
                    });
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    }
	



	var ID_Ins_block = {
		type: 'survey-text',
		questions: ['Please enter the identification number which was generated just a second ago. This should be a combination of 10 digits then your favourite film/book/magazine/song and a randomly selected fictional character. You can copy and paste this into the text input section']
	}

	var debrief = {
		type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>풍선 과제</strong></div>" +
		"<div class=\"clickspace\">" +
		"<p>실험이 종료되었습니다.</p>" +
		"</div>" +
		"</div>"
		,
	}

	var tempTickets = 0;
	var ticketsNum = 0;
	var lastRound = 0;

	var ticketsText = {
		type: "text",
		text: function(){
			text: return "<div class=\"display_stage\">" +
			    "<div class=\"taskname\"><strong>수익금 정보</strong></div>" +
				"<div class=\"inst\">" +
				"<p>지난 라운드에서 얻은 수익금 " + lastRound +"을 계좌에 입금했습니다.</p>" +
				"<p>총 수익금은 " + ticketsNum +" 입니다.</p>" +
				"</div>" +
				"<div class=\"clickspace\">" +
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
            }
            else {
                return true;
            }
        }
	}

	var blue_rand = [],
        blue_count = 0,
        orange_rand = [],
        orange_count = 0,
        yellow_rand = [],
        yellow_count = 0,
        blue_count2=0,
        blue_count3=0,
        orange_count2=0,
        orange_count3=0,
        yellow_count2=0,
        yellow_count3=0;

	for (var j = 0; j < lastnum; j ++){
		blue_rand.push(Math.floor((Math.random()*46)+1));
		//console.log(blue_rand);
		orange_rand.push(Math.floor((Math.random()*12)+1));
		//console.log(orange_rand);
		yellow_rand.push(Math.floor((Math.random()*32)+1));
		//console.log(yellow_rand);
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
            if(blue_count>6){
                blue_count=0;
            }
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('b') == data[0].key_press){
				intB=0;
			    blue_count++;
				ticketsNum+=tempTickets;
				lastRound = tempTickets;
                jsPsych.data.addDataToLastTrial({
                    "stims": "blue",
				    "banked": true,
				    "resp": data[0].key_press,
				    "earning": tempTickets,
				    "total_earning": ticketsNum,
                    "max": intB,
                    "counts": blue_count,
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
                    "counts": blue_count,
				    });
				return true;
			}
		},
		on_trial_start: function(){
            if(blue_count>6){
                blue_count=0;
            }
			if(intB==blue_explode_array[blue_count]||intB==blue_explode_array[blue_count]){
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
			if(orange_count > 6) {
			    orange_count =0;
			}
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('b') == data[0].key_press){
				intO=0;
                orange_count++;
 				ticketsNum+=tempTickets;
				lastRound = tempTickets;
				jsPsych.data.addDataToLastTrial({
				    "stims": "orange",
				    "banked": true,
				    "resp": data[0].key_press,
				    "earning": tempTickets,
				    "total_earning": ticketsNum,
				    "max": intO,
                    "counts": orange_count,
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
                    "counts": orange_count,
				    });
				return true;
			}
		},
		on_trial_start: function(){
            if(orange_count>6){
                orange_count=0;
            }
			if (intO==orange_explode_array[orange_count]|| intO==orange_explode_array[orange_count]){
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
            if(yellow_count>6){
                yellow_count=0;
            }
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('b') == data[0].key_press){
				intY=0;
			    yellow_count++;
				ticketsNum+=tempTickets;
				lastRound = tempTickets;
                jsPsych.data.addDataToLastTrial({
                    "stims": "yellow",
				    "banked": true,
				    "resp": data[0].key_press,
				    "earning": tempTickets,
				    "total_earning": ticketsNum,
                    "max": intY,
                    "counts": yellow_count,
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
                    "counts": yellow_count,
				    });
				return true;
			}
		},
		on_trial_start: function(){
            if(yellow_count>6){
                yellow_count=0;
            }
			if(intY==yellow_explode_array[yellow_count]|| intY==yellow_explode_array[yellow_count]){
				intY=100;
				ypop=2000;
			    yellow_count++;
				tempTickets = 0;
				jsPsych.endCurrentTimeline();
        	}
        }       
    }


	var test_block1 = {
		timeline:[],
        function(data){
            jsPsych.data.addDataToLastTrial({
                "phase": "1",
            });
        }
	};
	var test_block2 = {
		timeline:[],
        function(data){
            jsPsych.data.addDataToLastTrial({
                "phase": "2",
            });
        }
	};
	var test_block3 = {
		timeline:[],
        function(data){
            jsPsych.data.addDataToLastTrial({
                "phase": "3",
            });
        }
	};

	var blueTrustedArray= new Array(); //100% trusted advice
	var orangeTrustedArray= new Array(); //100% trusted advice
	var yellowTrustedArray= new Array(); //100% trusted advice
	var blue71Array= new Array(); //71% trusted advice
	var orange71Array= new Array(); //71% trusted advice
	var yellow71Array= new Array(); //71% trusted advice
	var blue42Array= new Array(); //42% trusted advice
	var orange42Array= new Array(); //42% trusted advice
	var yellow42Array= new Array(); //42% trusted advice



    for (var k =0; k < lastnum; k++){
        if (blue_explode_array[k]<11) {
            blueTrustedArray[k] = 1;
            blue71Array[k] = 1;
            blue42Array[k] = 1;
        } else if (blue_explode_array[k]<23) {
            blueTrustedArray[k]= 2;
            blue71Array[k] = 2;
            blue42Array[k] = 2;
        } else if (blue_explode_array[k]<35) {
            blueTrustedArray[k] = 3;
            blue71Array[k] = 3;
            blue42Array[k] = 3;
        } else {
            blueTrustedArray[k] = 4;
            blue71Array[k] = 4;
            blue42Array[k] = 4;
        }
    }

    for (var k =0; k < lastnum; k++){
        if (orange_explode_array[k]<3) {
            orangeTrustedArray[k] = 1;
            orange71Array[k] = 1;
            orange42Array[k] = 1;
        } else if (orange_explode_array[k]<6) {
            orangeTrustedArray[k] = 2;
            orange71Array[k] = 2;
            orange42Array[k] = 2;
        } else if (orange_explode_array[k]<9) {
            orangeTrustedArray[k] = 3;
            orange71Array[k] = 3;
            orange42Array[k] = 3;
        } else {
            orangeTrustedArray[k] = 4;
            orange71Array[k] = 4;
            orange42Array[k] = 4;
        }
    }

    for (var k =0; k < lastnum; k++){
        if (yellow_explode_array[k]<8) {
            yellowTrustedArray[k] = 1;
            yellow71Array[k] = 1;
            yellow42Array[k] = 1;
        } else if (yellow_explode_array[k]<16) {
            yellowTrustedArray[k] = 2;
            yellow71Array[k] = 2;
            yellow42Array[k] = 2;
        } else if (yellow_explode_array[k]<24) {
            yellowTrustedArray[k] = 3;
            yellow71Array[k] = 3;
            yellow42Array[k] = 3;
        } else {
            yellowTrustedArray[k] = 4;
            yellow71Array[k] = 4;
            yellow42Array[k] = 4;
        }
    }
    // accuracy control
    // 71%

    blue71Array[2] = 4;
    blue71Array[4] = 4;
    orange71Array[1] = 4;
    orange71Array[5] = 4;
    yellow71Array[4] = 4;
    yellow71Array[6] = 4;
    // 42% each 1, 4, 6 trials
     blue42Array[1] = 4;
     blue42Array[2] = 4;
     blue42Array[4] = 4;
     blue42Array[6] = 4;
     orange42Array[2] = 4;
     orange42Array[3] = 4;
     orange42Array[4] = 4;
     orange42Array[5] = 4;
     yellow42Array[1] = 4;
     yellow42Array[3] = 4;
     yellow42Array[5] = 4;
     yellow42Array[6] = 4;

	//var adviserArray = trustedArray;

    for (var m = 0; m < niterate; m++){

        //100% trusted phase
        for (var i = 0; i < lastnum; i++){ // total trials
            var res = [1,2,3];

            
            for (var j = 0; j < 3; j++){
                var rand = Math.floor((Math.random()*res.length));
                var val = res[rand];
                res.splice(rand,1);

                //100% trusted phase
                if(val == 1){
                    if(orangeTrustedArray[i] == 1) {
                        test_block1.timeline.push(Bet_advices1);
                    }
                    else if(orangeTrustedArray[i] == 2) {
                        test_block1.timeline.push(Bet_advices2);

                    }
                    else if(orangeTrustedArray[i] == 3) {
                        test_block1.timeline.push(Bet_advices3);

                    }
                    else if(orangeTrustedArray[i] == 4) {
                        test_block1.timeline.push(Bet_advices4);

                    }
                    test_block1.timeline.push(orange_trial);
                }
                else if(val == 2){
                    if(blueTrustedArray[i] == 1) {
                        test_block1.timeline.push(Bet_advices1);

                    }
                    else if(blueTrustedArray[i] == 2) {
                        test_block1.timeline.push(Bet_advices2);

                    }
                    else if(blueTrustedArray[i] == 3) {
                        test_block1.timeline.push(Bet_advices3);

                    }
                    else if(blueTrustedArray[i] == 4) {
                        test_block1.timeline.push(Bet_advices4);

                    }
                    test_block1.timeline.push(blue_trial);
                }
                else{
                    if(yellowTrustedArray[i] == 1) {
                        test_block1.timeline.push(Bet_advices1);

                    }
                    else if(yellowTrustedArray[i] == 2) {
                        test_block1.timeline.push(Bet_advices2);

                    }
                    else if(yellowTrustedArray[i] == 3) {
                        test_block1.timeline.push(Bet_advices3);

                    }
                    else if(yellowTrustedArray[i] == 4) {
                        test_block1.timeline.push(Bet_advices4);

                    }
                    test_block1.timeline.push(yellow_trial);
                }

                test_block1.timeline.push(tickets);

            }
        }

        var response_block = {
            type: 'survey-text',
            questions: [
                ['<p class = center-block-text>예측정보를 제공한 조언자의 신뢰도를 입력하세요. <br> 여러분이 느끼는 신뢰도를 0~100사이의 값으로 입력하세요.</p>']
            ],
            data: {
                trial_id: 'response',
                exp_stage: 'test1'
            }
        }
        test_block1.timeline.push(response_block)

        //71% trusted phase
        for (var i = 0; i < lastnum; i++){ // total trials
            var res = [1,2,3];

            
            for (var j = 0; j < 3; j++){
                var rand = Math.floor((Math.random()*res.length));
                var val = res[rand];
                res.splice(rand,1);

                //71% trusted phase
                if(val == 1){
                    if(orange71Array[i] == 1) {
                        test_block2.timeline.push(Bet_advices1);
                    }
                    else if(orange71Array[i] == 2) {
                        test_block2.timeline.push(Bet_advices2);

                    }
                    else if(orange71Array[i] == 3) {
                        test_block2.timeline.push(Bet_advices3);

                    }
                    else if(orange71Array[i] == 4) {
                        test_block2.timeline.push(Bet_advices4);

                    }
                    test_block2.timeline.push(orange_trial);
                }
                else if(val == 2){
                    if(blue71Array[i] == 1) {
                        test_block2.timeline.push(Bet_advices1);

                    }
                    else if(blue71Array[i] == 2) {
                        test_block2.timeline.push(Bet_advices2);

                    }
                    else if(blue71Array[i] == 3) {
                        test_block2.timeline.push(Bet_advices3);

                    }
                    else if(blue71Array[i] == 4) {
                        test_block2.timeline.push(Bet_advices4);

                    }
                    test_block2.timeline.push(blue_trial);
                }
                else{
                    if(yellow71Array[i] == 1) {
                        test_block2.timeline.push(Bet_advices1);

                    }
                    else if(blue71Array[i] == 2) {
                        test_block2.timeline.push(Bet_advices2);

                    }
                    else if(blue71Array[i] == 3) {
                        test_block2.timeline.push(Bet_advices3);

                    }
                    else if(blue71Array[i] == 4) {
                        test_block2.timeline.push(Bet_advices4);

                    }
                    test_block2.timeline.push(yellow_trial);
                }
                test_block2.timeline.push(tickets);

            }
        }

        var response_block = {
            type: 'survey-text',
            questions: [
                ['<p class = center-block-text>예측정보를 제공한 조언자의 신뢰도를 입력하세요. <br> 여러분이 느끼는 신뢰도를 0~100사이의 값으로 입력하세요.</p>']
            ],
            data: {
                trial_id: 'response',
                exp_stage: 'test2'
            }
        }
        test_block2.timeline.push(response_block)
        
        //42% trusted phase
        for (var i = 0; i < lastnum; i++){ // total trials
            var res = [1,2,3];

            
            for (var j = 0; j < 3; j++){
                var rand = Math.floor((Math.random()*res.length));
                var val = res[rand];
                res.splice(rand,1);

                //42% trusted phase
                if(val == 1){
                    if(orange42Array[i] == 1) {
                        test_block3.timeline.push(Bet_advices1);
                    }
                    else if(orange42Array[i] == 2) {
                        test_block3.timeline.push(Bet_advices2);

                    }
                    else if(orange42Array[i] == 3) {
                        test_block3.timeline.push(Bet_advices3);

                    }
                    else if(orange42Array[i] == 4) {
                        test_block3.timeline.push(Bet_advices4);

                    }
                    test_block3.timeline.push(orange_trial);
                }
                else if(val == 2){
                    if(blue42Array[i] == 1) {
                        test_block3.timeline.push(Bet_advices1);

                    }
                    else if(blue42Array[i] == 2) {
                        test_block3.timeline.push(Bet_advices2);

                    }
                    else if(blue42Array[i] == 3) {
                        test_block3.timeline.push(Bet_advices3);

                    }
                    else if(blue42Array[i] == 4) {
                        test_block3.timeline.push(Bet_advices4);

                    }
                    test_block3.timeline.push(blue_trial);
                }
                else{
                    if(yellow42Array[i] == 1) {
                        test_block3.timeline.push(Bet_advices1);

                    }
                    else if(yellow42Array[i] == 2) {
                        test_block3.timeline.push(Bet_advices2);

                    }
                    else if(yellow42Array[i] == 3) {
                        test_block3.timeline.push(Bet_advices3);

                    }
                    else if(yellow42Array[i] == 4) {
                        test_block3.timeline.push(Bet_advices4);

                    }
                    test_block3.timeline.push(yellow_trial);
                }
                test_block3.timeline.push(tickets);

            }
        }
        var response_block = {
            type: 'survey-text',
            questions: [
                ['<p class = center-block-text>예측정보를 제공한 조언자의 신뢰도를 입력하세요. <br> 여러분이 느끼는 신뢰도를 0~100사이의 값으로 입력하세요.</p>']
            ],
            data: {
                trial_id: 'response',
                exp_stage: 'test3'
            }
        }
        test_block3.timeline.push(response_block)
    }



	var rest_block = {
      type: 'poldrack-text',
      data: {
        trial_id: "rest"
      },
      timing_response: timing_response_value,
      text: '<div class = centerbox><p class = center-block-text>휴식시간입니다. </p><p class = center-block-text> 잠시 편하게 쉬세요! 다시 시작할 준비가 되었다면, <strong>enter</strong>를 누르세요.</p></div>',
      cont_key: [13],
      timing_post_trial: 1000
    };
    var rest_block2 = {
      type: 'poldrack-text',
      data: {
        trial_id: "rest"
      },
      timing_response: timing_response_value,
      text: '<div class = centerbox><p class = center-block-text>수고했습니다.</p><p class = center-block-text><strong>enter</strong>를 누르세요.</p></div>',
      cont_key: [13],
      timing_post_trial: 1000
    };

    var reset_block = {
      type: 'call-function',
      data: {
        trial_id: 'reset trial'
      },
      func: function() {
        current_trial = 0
      },
      timing_post_trial: 0
    }

	var blue_explode_array =  [45, 9, 14, 9, 31, 6, 34] ;
	var orange_explode_array =  [10, 3, 4, 2, 8, 3, 7] ;
	var yellow_explode_array =  [32, 7, 12, 3, 18, 4, 19] ;


    var Ins_block_b = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>풍선 과제</strong></div>" +
		"<div class=\"inst\">" +
		"<p>이번에도 풍선은 파랑색, 주황색, 노랑색으로 구성되어있습니다. </p> <p>풍선은 바로 터질 수도 있고 최대 크기까지 커질 수도 있습니다. </p>" +
		"<p>풍선의 색이 최대 크기에 대한 단서가 됩니다. 각 풍선마다 <strong> I </strong>를 누르면 풍선이 커지고 누른 만큼 수익이 발생합니다. <br><br> 하지만, 풍선이 터지면 얻은 수익금은 사라집니다. 그리고 풍선이 언제 터질지는 알 수 없습니다. </p>" +
		"<p>안전하게 수익금 지키려면 <strong> B </strong>를 눌러 입금할 수 있습니다. 입금된 수익금은 사라지지 않고 계속 누적됩니다.  </p><p> 최대한 많은 수익금을 계좌에 안전하게 보장하는 것이 이 과제의 목표입니다.</p>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }
    var Ins_block1_b = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>1 단계</strong></div>" +
		"<div class=\"inst\">" +
		"<p><strong> 첫번째 단계</strong>입니다.</p><br><p>이 풍선과제에서는 조언자가 예측정보를 제공합니다. <br><br> 조언의 방식은 각 풍선마다 최대로 누를 수 있는 수를 <strong>네 개의 구간</strong>으로 나누어 <br><br> 어느 구간에서 터질 가능성이 높은지에 대한 예측합니다. </p> " +
		"<p>예를 들어, 어떤 한 색의 풍선에 관해 네 개의 구간으로 나누어 터질 구간을 예측하게 됩니다. <br><br>만약 최대 100번까지 바람을 불어넣을 수 있다면, 1구간은 1~25, 2구간은 26~50, 3구간은 51~75, 4구간은 76~100이 됩니다." +
		"<p>단, 예측 정보의 정확성은 단계마다 달라집니다. 정확히 예측할수도 있고, 그렇지 못할 수도 있습니다. </p>" +
		"<p>풍선누르기 전에 예측 정보가 나타납니다. 잘 읽고 최대한 많은 수익금을 얻도록 노력하세요!</p>"  +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Ins_block2_b = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>2 단계</strong></div>" +
		"<div class=\"inst\">" +
		"<p> <strong>두번째 단계의 예측정보가 변경됩니다.</strong> 예측정보를 잘보고 결정해야 합니다. <br><br> 이것만 제외하면 첫번째 단계와 동일한 절차로 진행됩니다. </p> " +
		"<p>풍선누르기 전에 예측 정보가 나타납니다. 잘 읽고 최대한 많은 수익금을 얻도록 노력하세요!</p>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Ins_block3_b = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>3 단계</strong></div>" +
		"<div class=\"inst\">" +
		"<p> <strong>세번째 단계에서도 정확도가 달라집니다.</strong> 예측정보를 잘보고 결정해야 합니다. <br><br> 이것만 제외하면 동일한 절차로 진행됩니다. </p> " +
		"<p>풍선누르기 전에 예측 정보가 나타납니다. 잘 읽고 최대한 많은 수익금을 얻도록 노력하세요!</p>"  +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Betting4_text_bl = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>두 조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left_b\"></div>" +
		"<div class=\"adv1_b\">" +
		"<img src=\"../jspsych-5.0.3/balloon_image/LMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>4 구간에서 터진다고 합니다. </strong> </p>" +
		"</div>" +
		"<div class=\"advgap_center_b\"></div>" +
		"<div class=\"adv2_b\" >" +
		"<img src=\"../jspsych-5.0.3/balloon_image/RMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>4 구간에서 터집니다. </strong> </p>" +
		"</div>" +
		"<div class=\"clear\"></div>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }
    var Betting3_text_bl = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>두 조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left_b\"></div>" +
		"<div class=\"adv1_b\">" +
		"<img src=\"../jspsych-5.0.3/balloon_image/LMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>3 구간에서 터진다고 합니다. </strong> </p>" +
		"</div>" +
		"<div class=\"advgap_center_b\"></div>" +
		"<div class=\"adv2_b\" >" +
		"<img src=\"../jspsych-5.0.3/balloon_image/RMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>3 구간에서 터집니다.</strong> </p>" +
		"</div>" +
		"<div class=\"clear\"></div>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Betting2_text_bl = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>두 조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left_b\"></div>" +
		"<div class=\"adv1_b\">" +
		"<img src=\"../jspsych-5.0.3/balloon_image/LMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>2 구간에서 터진다고 합니다. </strong></p>" +
		"</div>" +
		"<div class=\"advgap_center_b\"></div>" +
		"<div class=\"adv2_b\" >" +
		"<img src=\"../jspsych-5.0.3/balloon_image/RMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>2 구간에서 터집니다. </strong> </p>" +
		"</div>" +
		"<div class=\"clear\"></div>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
	}

    var Betting1_text_bl = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>두 조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left_b\"></div>" +
		"<div class=\"adv1_b\">" +
		"<img src=\"../jspsych-5.0.3/balloon_image/LMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>1 구간에서 터진다고 합니다. </strong> </p>" +
		"</div>" +
		"<div class=\"advgap_center_b\"></div>" +
		"<div class=\"adv2_b\" >" +
		"<img src=\"../jspsych-5.0.3/balloon_image/RMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>1 구간에서 터집니다.</strong> </p>" +
		"</div>" +
		"<div class=\"clear\"></div>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>"
		,
		choices: ['F']
    }

    var Betting4_text_br = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>두 조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left_b\"></div>" +
		"<div class=\"adv1_b\">" +
		"<img src=\"../jspsych-5.0.3/balloon_image/LMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>4 구간에서 터집니다.</strong> </p>" +
		"</div>" +
		"<div class=\"advgap_center_b\"></div>" +
		"<div class=\"adv2_b\" >" +
		"<img src=\"../jspsych-5.0.3/balloon_image/RMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>4 구간에서 터진다고 합니다.</strong></p>" +
		"</div>" +
		"<div class=\"clear\"></div>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }
    var Betting3_text_br = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>두 조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left_b\"></div>" +
		"<div class=\"adv1_b\">" +
		"<img src=\"../jspsych-5.0.3/balloon_image/LMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>3 구간에서 터집니다. </strong> </p>" +
		"</div>" +
		"<div class=\"advgap_center_b\"></div>" +
		"<div class=\"adv2_b\" >" +
		"<img src=\"../jspsych-5.0.3/balloon_image/RMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>3 구간에서 터진다고 합니다. </strong> </p>" +
		"</div>" +
		"<div class=\"clear\"></div>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Betting2_text_br = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>두 조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left_b\"></div>" +
		"<div class=\"adv1_b\">" +
		"<img src=\"../jspsych-5.0.3/balloon_image/LMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>2 구간에서 터집니다. </strong></p>" +
		"</div>" +
		"<div class=\"advgap_center_b\"></div>" +
		"<div class=\"adv2_b\" >" +
		"<img src=\"../jspsych-5.0.3/balloon_image/RMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>2 구간에서 터진다고 합니다. </strong> </p>" +
		"</div>" +
		"<div class=\"clear\"></div>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><br>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
	}

    var Betting1_text_br = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>두 조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left_b\"></div>" +
		"<div class=\"adv1_b\">" +
		"<img src=\"../jspsych-5.0.3/balloon_image/LMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>1 구간에서 터집니다. </strong> </p>" +
		"</div>" +
		"<div class=\"advgap_center_b\"></div>" +
		"<div class=\"adv2_b\" >" +
		"<img src=\"../jspsych-5.0.3/balloon_image/RMan.png\" style=\"width: 100px; height: auto;\"></img>" +
		"<p><strong>1 구간에서 터진다고 합니다. </strong> </p>" +
		"</div>" +
		"<div class=\"clear\"></div>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p>스페이스 바를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>"
		,
		choices: ['F']
    }



	var Bet_advices4_bl = {
	    timeline: [Betting4_text_bl],
		timing_post_trial: 0,
		loop_function: function(data){
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                jsPsych.data.addDataToLastTrial({
                    "advice": "4",
                    "advice_type": "L",
                });
				return false;
			}
			else {
				return true;
			}
		}
	}

    var Bet_advices3_bl = {
	    timeline: [Betting3_text_bl],
		timing_post_trial: 0,
		loop_function: function(data){
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                jsPsych.data.addDataToLastTrial({
                    "advice": "3",
                    "advice_type": "L",
                });
				return false;
			}
			else {
				return true;
			}
		}
	}
	var Bet_advices2_bl = {
	    timeline: [Betting2_text_bl],
		timing_post_trial: 0,
		loop_function: function(data){
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                jsPsych.data.addDataToLastTrial({
                    "advice": "2",
                    "advice_type": "L",
                });
				return false;
			}
			else {
				return true;
			}
		}
	}

    var Bet_advices1_bl = {
	    timeline: [Betting1_text_bl],
		timing_post_trial: 0,
		loop_function: function(data){
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                jsPsych.data.addDataToLastTrial({
                    "advice": "1",
                    "advice_type": "L",
                });
				return false;
			}
			else {
				return true;
			}
		}
	}

	var Bet_advices4_br = {
	    timeline: [Betting4_text_br],
		timing_post_trial: 0,
		loop_function: function(data){
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                jsPsych.data.addDataToLastTrial({
                    "advice": "4",
                    "advice_type": "R",
                });
				return false;
			}
			else {
				return true;
			}
		}
	}

    var Bet_advices3_br = {
	    timeline: [Betting3_text_br],
		timing_post_trial: 0,
		loop_function: function(data){
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                jsPsych.data.addDataToLastTrial({
                    "advice": "3",
                    "advice_type": "R",
                });
				return false;
			}
			else {
				return true;
			}
		}
	}
	var Bet_advices2_br = {
	    timeline: [Betting2_text_br],
		timing_post_trial: 0,
		loop_function: function(data){
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                jsPsych.data.addDataToLastTrial({
                    "advice": "2",
                    "advice_type": "R",
                });
				return false;
			}
			else {
				return true;
			}
		}
	}

    var Bet_advices1_br = {
	    timeline: [Betting1_text_br],
		timing_post_trial: 0,
		loop_function: function(data){
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                jsPsych.data.addDataToLastTrial({
                    "advice": "1",
                    "advice_type": "R",
                });
				return false;
			}
			else {
				return true;
			}
		}
	}


	var ID_Ins_block = {
		type: 'survey-text',
		questions: ['Please enter the identification number which was generated just a second ago. This should be a combination of 10 digits then your favourite film/book/magazine/song and a randomly selected fictional character. You can copy and paste this into the text input section']
	}

	var debrief = {
		type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>풍선 과제</strong></div>" +
		"<div class=\"clickspace\">" +
		"<p>실험이 종료되었습니다.</p>" +
        "<p>스페이스 바를 누르세요.</p>" +
		"</div>" +
		"</div>"
		,
	}

	var tempTickets = 0;
	var ticketsNumb = 0; 
	var lastRound = 0;

	var ticketsTextb = {
		type: "text",
		text: function(){
			text: return "<div class=\"display_stage\">" +
			    "<div class=\"taskname\"><strong>수익금 정보</strong></div>" +
				"<div class=\"inst\">" +
				"<p>지난 라운드에서 얻은 수익금 " + lastRound +"을 계좌에 입금했습니다.</p>" +
				"<p>총 수익금은 " + ticketsNumb +" 입니다.</p>" +
				"</div>" +
				"<div class=\"clickspace\">" +
				"<p><strong>c</strong>를 누르면 이어서 할 수 있습니다.</p>" +
				"</div>" +
				"</div>";
		}
	};

	var ticketsb = {
	timeline: [ticketsTextb],
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
			}
			else {
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

	for (var j = 0; j < lastnum; j ++){
		blue_rand.push(Math.floor((Math.random()*46)+1));
		//console.log(blue_rand);
		orange_rand.push(Math.floor((Math.random()*12)+1));
		//console.log(orange_rand);
		yellow_rand.push(Math.floor((Math.random()*32)+1));
		//console.log(yellow_rand);
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
            if(blue_count>6){
                blue_count=0;
            }
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('b') == data[0].key_press){
				intB=0;
			    blue_count++;
				ticketsNumb+=tempTickets;
				lastRound = tempTickets;
                jsPsych.data.addDataToLastTrial({
                    "stims": "blue",
				    "banked": true,
				    "resp": data[0].key_press,
				    "earning": tempTickets,
				    "total_earning": ticketsNum,
                    "max": intB,
                    "counts": blue_count,
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
				    "total_earning": ticketsNumb,
                    "max": intB,
                    "counts": blue_count,
				    });
				return true;
			}
		},
		on_trial_start: function(){
            if(blue_count>6){
                blue_count=0;
            }
			if(intB==blue_explode_array[blue_count]||intB==blue_explode_array[blue_count]){
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
			if(orange_count > 6) {
			    orange_count =0;
			}
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('b') == data[0].key_press){
				intO=0;
                orange_count++;
 				ticketsNumb+=tempTickets;
				lastRound = tempTickets;
				jsPsych.data.addDataToLastTrial({
				    "stims": "orange",
				    "banked": true,
				    "resp": data[0].key_press,
				    "earning": tempTickets,
				    "total_earning": ticketsNumb,
				    "max": intO,
                    "counts": orange_count,
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
				    "total_earning": ticketsNumb,
                    "max": intO,
                    "counts": orange_count,
				    });
				return true;
			}
		},
		on_trial_start: function(){
            if(orange_count>6){
                orange_count=0;
            }
			if (intO==orange_explode_array[orange_count]|| intO==orange_explode_array[orange_count]){
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
            if(yellow_count>6){
                yellow_count=0;
            }
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('b') == data[0].key_press){
				intY=0;
			    yellow_count++;
				ticketsNumb+=tempTickets;
				lastRound = tempTickets;
                jsPsych.data.addDataToLastTrial({
                    "stims": "yellow",
				    "banked": true,
				    "resp": data[0].key_press,
				    "earning": tempTickets,
				    "total_earning": ticketsNumb,
                    "max": intY,
                    "counts": yellow_count,
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
				    "total_earning": ticketsNumb,
                    "max": intY,
                    "counts": yellow_count,
				    });
				return true;
			}
		},
		on_trial_start: function(){
            if(yellow_count>6){
                yellow_count=0;
            }
			if(intY==yellow_explode_array[yellow_count]|| intY==yellow_explode_array[yellow_count]){
				intY=100;
				ypop=2000;
			    yellow_count++;
				tempTickets = 0;
				jsPsych.endCurrentTimeline();
	        }
        }   
    }


    var test_block1_b = {
		timeline:[],
        function(data){
            jsPsych.data.addDataToLastTrial({
                "phase": "4",
            });
        }
	};
	var test_block2_b = {
		timeline:[],
        function(data){
            jsPsych.data.addDataToLastTrial({
                "phase": "5",
            });
        }
	};
	var test_block3_b = {
		timeline:[],
        function(data){
            jsPsych.data.addDataToLastTrial({
                "phase": "6",
            });
        }
	};

	var blueTrustedArray= new Array(); //100% trusted advice
	var orangeTrustedArray= new Array(); //100% trusted advice
	var yellowTrustedArray= new Array(); //100% trusted advice
	var blue71Array= new Array(); //71% trusted advice
	var orange71Array= new Array(); //71% trusted advice
	var yellow71Array= new Array(); //71% trusted advice
	var blue42Array= new Array(); //42% trusted advice
	var orange42Array= new Array(); //42% trusted advice
	var yellow42Array= new Array(); //42% trusted advice



    for (var k =0; k < lastnum; k++){
        if (blue_explode_array[k]<11) {
            blueTrustedArray[k] = 1;
            blue71Array[k] = 1;
            blue42Array[k] = 1;
        } else if (blue_explode_array[k]<23) {
            blueTrustedArray[k]= 2;
            blue71Array[k] = 2;
            blue42Array[k] = 2;
        } else if (blue_explode_array[k]<35) {
            blueTrustedArray[k] = 3;
            blue71Array[k] = 3;
            blue42Array[k] = 3;
        } else {
            blueTrustedArray[k] = 4;
            blue71Array[k] = 4;
            blue42Array[k] = 4;
        }
    }

    for (var k =0; k < lastnum; k++){
        if (orange_explode_array[k]<3) {
            orangeTrustedArray[k] = 1;
            orange71Array[k] = 1;
            orange42Array[k] = 1;
        } else if (orange_explode_array[k]<6) {
            orangeTrustedArray[k] = 2;
            orange71Array[k] = 2;
            orange42Array[k] = 2;
        } else if (orange_explode_array[k]<9) {
            orangeTrustedArray[k] = 3;
            orange71Array[k] = 3;
            orange42Array[k] = 3;
        } else {
            orangeTrustedArray[k] = 4;
            orange71Array[k] = 4;
            orange42Array[k] = 4;
        }
    }

    for (var k =0; k < lastnum; k++){
        if (yellow_explode_array[k]<8) {
            yellowTrustedArray[k] = 1;
            yellow71Array[k] = 1;
            yellow42Array[k] = 1;
        } else if (yellow_explode_array[k]<16) {
            yellowTrustedArray[k] = 2;
            yellow71Array[k] = 2;
            yellow42Array[k] = 2;
        } else if (yellow_explode_array[k]<24) {
            yellowTrustedArray[k] = 3;
            yellow71Array[k] = 3;
            yellow42Array[k] = 3;
        } else {
            yellowTrustedArray[k] = 4;
            yellow71Array[k] = 4;
            yellow42Array[k] = 4;
        }
    }
    // accuracy control
    // 71%

    blue71Array[2] = 4;
    blue71Array[4] = 4;
    orange71Array[1] = 4;
    orange71Array[5] = 4;
    yellow71Array[4] = 4;
    yellow71Array[6] = 4;
    // 42% each 1, 4, 6 trials
    blue42Array[1] = 4;
    blue42Array[2] = 4;
    blue42Array[4] = 4;
    blue42Array[6] = 4;
    orange42Array[2] = 4;
    orange42Array[3] = 4;
    orange42Array[4] = 4;
    orange42Array[5] = 4;
    yellow42Array[1] = 4;
    yellow42Array[3] = 4;
    yellow42Array[5] = 4;
    yellow42Array[6] = 4;


	//var adviserArray = trustedArray;


    var ttt2 = Math.floor(Math.random()*4+1);
    for (var m = 0; m < niterate; m++){
        //100% trusted phase
        for (var i = 0; i < lastnum; i++){ // total trials
            var res = [1,2,3];

            
            for (var j = 0; j < 3; j++){
                var rand = Math.floor((Math.random()*res.length));
                var val = res[rand];
                res.splice(rand,1);

                if (ttt2 % 2 === 0) {

                    //100% trusted phase
                    if(val == 1){
                        if(orangeTrustedArray[i] == 1) {
                            test_block1_b.timeline.push(Bet_advices1_bl);
                        }
                        else if(orangeTrustedArray[i] == 2) {
                            test_block1_b.timeline.push(Bet_advices2_bl);

                        }
                        else if(orangeTrustedArray[i] == 3) {
                            test_block1_b.timeline.push(Bet_advices3_bl);

                        }
                        else if(orangeTrustedArray[i] == 4) {
                            test_block1_b.timeline.push(Bet_advices4_bl);

                        }
                        test_block1_b.timeline.push(orange_trial);
                    }
                    else if(val == 2){
                        if(blueTrustedArray[i] == 1) {
                            test_block1_b.timeline.push(Bet_advices1_bl);

                        }
                        else if(blueTrustedArray[i] == 2) {
                            test_block1_b.timeline.push(Bet_advices2_bl);

                        }
                        else if(blueTrustedArray[i] == 3) {
                            test_block1_b.timeline.push(Bet_advices3_bl);

                        }
                        else if(blueTrustedArray[i] == 4) {
                            test_block1_b.timeline.push(Bet_advices4_bl);

                        }
                        test_block1_b.timeline.push(blue_trial);
                    }
                    else{
                        if(yellowTrustedArray[i] == 1) {
                            test_block1_b.timeline.push(Bet_advices1_bl);

                        }
                        else if(yellowTrustedArray[i] == 2) {
                            test_block1_b.timeline.push(Bet_advices2_bl);

                        }
                        else if(yellowTrustedArray[i] == 3) {
                            test_block1_b.timeline.push(Bet_advices3_bl);

                        }
                        else if(yellowTrustedArray[i] == 4) {
                            test_block1_b.timeline.push(Bet_advices4_bl);

                        }
                        test_block1_b.timeline.push(yellow_trial);
                    }
                } else {
                    //100% trusted phase
                    if(val == 1){
                        if(orangeTrustedArray[i] == 1) {
                            test_block1_b.timeline.push(Bet_advices1_br);
                        }
                        else if(orangeTrustedArray[i] == 2) {
                            test_block1_b.timeline.push(Bet_advices2_br);

                        }
                        else if(orangeTrustedArray[i] == 3) {
                            test_block1_b.timeline.push(Bet_advices3_br);

                        }
                        else if(orangeTrustedArray[i] == 4) {
                            test_block1_b.timeline.push(Bet_advices4_br);

                        }
                        test_block1_b.timeline.push(orange_trial);
                    }
                    else if(val == 2){
                        if(blueTrustedArray[i] == 1) {
                            test_block1_b.timeline.push(Bet_advices1_br);

                        }
                        else if(blueTrustedArray[i] == 2) {
                            test_block1_b.timeline.push(Bet_advices2_br);

                        }
                        else if(blueTrustedArray[i] == 3) {
                            test_block1_b.timeline.push(Bet_advices3_br);

                        }
                        else if(blueTrustedArray[i] == 4) {
                            test_block1_b.timeline.push(Bet_advices4_br);

                        }
                        test_block1_b.timeline.push(blue_trial);
                    }
                    else{
                        if(yellowTrustedArray[i] == 1) {
                            test_block1_b.timeline.push(Bet_advices1_br);

                        }
                        else if(yellowTrustedArray[i] == 2) {
                            test_block1_b.timeline.push(Bet_advices2_br);

                        }
                        else if(yellowTrustedArray[i] == 3) {
                            test_block1_b.timeline.push(Bet_advices3_br);

                        }
                        else if(yellowTrustedArray[i] == 4) {
                            test_block1_b.timeline.push(Bet_advices4_br);

                        }
                        test_block1_b.timeline.push(yellow_trial);
                    }
                }

                test_block1_b.timeline.push(ticketsb);

            }
        }
        
        var response_block_L = {
            type: 'survey-text',
            questions: [
                ['<p class = center-block-text>예측정보를 제공한 A(왼쪽)조언자의 신뢰도를 입력하세요. <br> 여러분이 느끼는 신뢰도를 0~100사이의 값으로 입력하세요.</p>']
            ],
            data: {
                trial_id: 'response',
                exp_stage: 'test1L'
            }
        }
    
        var response_block_R = {
            type: 'survey-text',
            questions: [
                ['<p class = center-block-text>예측정보를 제공한 B(오른쪽)조언자의 신뢰도를 입력하세요. <br> 여러분이 느끼는 신뢰도를 0~100사이의 값으로 입력하세요.</p>']
            ],
            data: {
                trial_id: 'response',
                exp_stage: 'test1R'
            }
        }
        test_block1_b.timeline.push(response_block_L)
        test_block1_b.timeline.push(response_block_R)

        //71% trusted phase
        for (var i = 0; i < lastnum; i++){ // total trials
            var res = [1,2,3];

            
            for (var j = 0; j < 3; j++){
                var rand = Math.floor((Math.random()*res.length));
                var val = res[rand];
                res.splice(rand,1);

                if (ttt2 % 2 === 0) {
                    //71% trusted phase
                    if(val == 1){
                        if(orange71Array[i] == 1) {
                            test_block2_b.timeline.push(Bet_advices1_bl);
                        }
                        else if(orange71Array[i] == 2) {
                            test_block2_b.timeline.push(Bet_advices2_bl);

                        }
                        else if(orange71Array[i] == 3) {
                            test_block2_b.timeline.push(Bet_advices3_bl);

                        }
                        else if(orange71Array[i] == 4) {
                            test_block2_b.timeline.push(Bet_advices4_bl);

                        }
                        test_block2_b.timeline.push(orange_trial);
                    }
                    else if(val == 2){
                        if(blue71Array[i] == 1) {
                            test_block2_b.timeline.push(Bet_advices1_bl);

                        }
                        else if(blue71Array[i] == 2) {
                            test_block2_b.timeline.push(Bet_advices2_bl);

                        }
                        else if(blue71Array[i] == 3) {
                            test_block2_b.timeline.push(Bet_advices3_bl);

                        }
                        else if(blue71Array[i] == 4) {
                            test_block2_b.timeline.push(Bet_advices4_bl);

                        }
                        test_block2_b.timeline.push(blue_trial);
                    }
                    else{
                        if(yellow71Array[i] == 1) {
                            test_block2_b.timeline.push(Bet_advices1_bl);

                        }
                        else if(blue71Array[i] == 2) {
                            test_block2_b.timeline.push(Bet_advices2_bl);

                        }
                        else if(blue71Array[i] == 3) {
                            test_block2_b.timeline.push(Bet_advices3_bl);

                        }
                        else if(blue71Array[i] == 4) {
                            test_block2_b.timeline.push(Bet_advices4_bl);

                        }
                        test_block2_b.timeline.push(yellow_trial);
                    }                 
                } else {
                    //71% trusted phase
                    if(val == 1){
                        if(orange71Array[i] == 1) {
                            test_block2_b.timeline.push(Bet_advices1_br);
                        }
                        else if(orange71Array[i] == 2) {
                            test_block2_b.timeline.push(Bet_advices2_br);

                        }
                        else if(orange71Array[i] == 3) {
                            test_block2_b.timeline.push(Bet_advices3_br);

                        }
                        else if(orange71Array[i] == 4) {
                            test_block2_b.timeline.push(Bet_advices4_br);

                        }
                        test_block2_b.timeline.push(orange_trial);
                    }
                    else if(val == 2){
                        if(blue71Array[i] == 1) {
                            test_block2_b.timeline.push(Bet_advices1_br);

                        }
                        else if(blue71Array[i] == 2) {
                            test_block2_b.timeline.push(Bet_advices2_br);

                        }
                        else if(blue71Array[i] == 3) {
                            test_block2_b.timeline.push(Bet_advices3_br);

                        }
                        else if(blue71Array[i] == 4) {
                            test_block2_b.timeline.push(Bet_advices4_br);

                        }
                        test_block2_b.timeline.push(blue_trial);
                    }
                    else{
                        if(yellow71Array[i] == 1) {
                            test_block2_b.timeline.push(Bet_advices1_br);

                        }
                        else if(blue71Array[i] == 2) {
                            test_block2_b.timeline.push(Bet_advices2_br);

                        }
                        else if(blue71Array[i] == 3) {
                            test_block2_b.timeline.push(Bet_advices3_br);

                        }
                        else if(blue71Array[i] == 4) {
                            test_block2_b.timeline.push(Bet_advices4_br);

                        }
                        test_block2_b.timeline.push(yellow_trial);
                    }
                }
                   
                test_block2_b.timeline.push(ticketsb);

            }
        }
        
        var response_block_L = {
            type: 'survey-text',
            questions: [
                ['<p class = center-block-text>예측정보를 제공한 A(왼쪽)조언자의 신뢰도를 입력하세요. <br> 여러분이 느끼는 신뢰도를 0~100사이의 값으로 입력하세요.</p>']
            ],
            data: {
                trial_id: 'response',
                exp_stage: 'test2L'
            }
        }
    
        var response_block_R = {
            type: 'survey-text',
            questions: [
                ['<p class = center-block-text>예측정보를 제공한 B(오른쪽)조언자의 신뢰도를 입력하세요. <br> 여러분이 느끼는 신뢰도를 0~100사이의 값으로 입력하세요.</p>']
            ],
            data: {
                trial_id: 'response',
                exp_stage: 'test2R'
            }
        }
        test_block2_b.timeline.push(response_block_L)
        test_block2_b.timeline.push(response_block_R)
        
        //42% trusted phase
        for (var i = 0; i < lastnum; i++){ // total trials
            var res = [1,2,3];

            
            for (var j = 0; j < 3; j++){
                var rand = Math.floor((Math.random()*res.length));
                var val = res[rand];
                res.splice(rand,1);
                
                if (ttt2 % 2 === 0) {
                    //42% trusted phase
                    if(val == 1){
                        if(orange42Array[i] == 1) {
                            test_block3_b.timeline.push(Bet_advices1_bl);
                        }
                        else if(orange42Array[i] == 2) {
                            test_block3_b.timeline.push(Bet_advices2_bl);

                        }
                        else if(orange42Array[i] == 3) {
                            test_block3_b.timeline.push(Bet_advices3_bl);

                        }
                        else if(orange42Array[i] == 4) {
                            test_block3_b.timeline.push(Bet_advices4_bl);

                        }
                        test_block3_b.timeline.push(orange_trial);
                    }
                    else if(val == 2){
                        if(blue42Array[i] == 1) {
                            test_block3_b.timeline.push(Bet_advices1_bl);

                        }
                        else if(blue42Array[i] == 2) {
                            test_block3_b.timeline.push(Bet_advices2_bl);

                        }
                        else if(blue42Array[i] == 3) {
                            test_block3_b.timeline.push(Bet_advices3_bl);

                        }
                        else if(blue42Array[i] == 4) {
                            test_block3_b.timeline.push(Bet_advices4_bl);

                        }
                        test_block3_b.timeline.push(blue_trial);
                    }
                    else{
                        if(yellow42Array[i] == 1) {
                            test_block3_b.timeline.push(Bet_advices1_bl);

                        }
                        else if(yellow42Array[i] == 2) {
                            test_block3_b.timeline.push(Bet_advices2_bl);

                        }
                        else if(yellow42Array[i] == 3) {
                            test_block3_b.timeline.push(Bet_advices3_bl);

                        }
                        else if(yellow42Array[i] == 4) {
                            test_block3_b.timeline.push(Bet_advices4_bl);

                        }
                        test_block3_b.timeline.push(yellow_trial);
                    }
                } else {

                    //42% trusted phase
                    if(val == 1){
                        if(orange42Array[i] == 1) {
                            test_block3_b.timeline.push(Bet_advices1_br);
                        }
                        else if(orange42Array[i] == 2) {
                            test_block3_b.timeline.push(Bet_advices2_br);

                        }
                        else if(orange42Array[i] == 3) {
                            test_block3_b.timeline.push(Bet_advices3_br);

                        }
                        else if(orange42Array[i] == 4) {
                            test_block3_b.timeline.push(Bet_advices4_br);

                        }
                        test_block3_b.timeline.push(orange_trial);
                    }
                    else if(val == 2){
                        if(blue42Array[i] == 1) {
                            test_block3_b.timeline.push(Bet_advices1_br);

                        }
                        else if(blue42Array[i] == 2) {
                            test_block3_b.timeline.push(Bet_advices2_br);

                        }
                        else if(blue42Array[i] == 3) {
                            test_block3_b.timeline.push(Bet_advices3_br);

                        }
                        else if(blue42Array[i] == 4) {
                            test_block3_b.timeline.push(Bet_advices4_br);

                        }
                        test_block3_b.timeline.push(blue_trial);
                    }
                    else{
                        if(yellow42Array[i] == 1) {
                            test_block3_b.timeline.push(Bet_advices1_br);

                        }
                        else if(yellow42Array[i] == 2) {
                            test_block3_b.timeline.push(Bet_advices2_br);

                        }
                        else if(yellow42Array[i] == 3) {
                            test_block3_b.timeline.push(Bet_advices3_br);

                        }
                        else if(yellow42Array[i] == 4) {
                            test_block3_b.timeline.push(Bet_advices4_br);

                        }
                        test_block3_b.timeline.push(yellow_trial);
                    }
                }
                test_block3_b.timeline.push(ticketsb);

            }
        }

        var response_block_L = {
            type: 'survey-text',
            questions: [
                ['<p class = center-block-text>예측정보를 제공한 A(왼쪽)조언자의 신뢰도를 입력하세요. <br> 여러분이 느끼는 신뢰도를 0~100사이의 값으로 입력하세요.</p>']
            ],
            data: {
                trial_id: 'response',
                exp_stage: 'test3L'
            }
        }
    
        var response_block_R = {
            type: 'survey-text',
            questions: [
                ['<p class = center-block-text>예측정보를 제공한 B(오른쪽)조언자의 신뢰도를 입력하세요. <br> 여러분이 느끼는 신뢰도를 0~100사이의 값으로 입력하세요.</p>']
            ],
            data: {
                trial_id: 'response',
                exp_stage: 'test3R'
            }
        }

        test_block3_b.timeline.push(response_block_L)
        test_block3_b.timeline.push(response_block_R)
    }



    var myarray = [1,2,3,4,5,6];
    var rand = Math.floor((Math.random()*myarray.length));
    var sample = myarray[rand];
    //myarray.splice(rand,1);
	var timeline = [];
    if (sample % 2 === 0) {
        timeline.push(Ins_block);
        if(sample==1) {
            timeline.push(Ins_block1);
            timeline.push(test_block1);
            timeline.push(rest_block);
            timeline.push(Ins_block2);
            timeline.push(test_block2);
            timeline.push(rest_block);
            timeline.push(Ins_block3);
            timeline.push(test_block3);
            timeline.push(rest_block);
        } else if (sample==2){
            timeline.push(Ins_block1);
            timeline.push(test_block1);
            timeline.push(rest_block);
            timeline.push(Ins_block2);
            timeline.push(test_block3);
            timeline.push(rest_block);
            timeline.push(Ins_block3);
            timeline.push(test_block2);
            timeline.push(rest_block);
        } else if (sample==3) {
            timeline.push(Ins_block1);
            timeline.push(test_block2);
            timeline.push(rest_block);
            timeline.push(Ins_block2);
            timeline.push(test_block1);
            timeline.push(rest_block);
            timeline.push(Ins_block3);
            timeline.push(test_block3);
            timeline.push(rest_block);
        } else if (sample==4){
            timeline.push(Ins_block1);
            timeline.push(test_block2);
            timeline.push(rest_block);
            timeline.push(Ins_block2);
            timeline.push(test_block3);
            timeline.push(rest_block);
            timeline.push(Ins_block3);
            timeline.push(test_block1);
            timeline.push(rest_block);
        } else if (sample==5){
            timeline.push(Ins_block1);
            timeline.push(test_block3);
            timeline.push(rest_block);
            timeline.push(Ins_block2);
            timeline.push(test_block1);
            timeline.push(rest_block);
            timeline.push(Ins_block3);
            timeline.push(test_block2);
            timeline.push(rest_block);
        } else if (sample==6) {
            timeline.push(Ins_block1);
            timeline.push(test_block3);
            timeline.push(rest_block);
            timeline.push(Ins_block2);
            timeline.push(test_block2);
            timeline.push(rest_block);
            timeline.push(Ins_block3);
            timeline.push(test_block1);
            timeline.push(rest_block);
        }
        timeline.push(cession_block); // 세션 종료설명(정산)

        timeline.push(Ins_block_b);
        if(sample==1) {
            timeline.push(Ins_block1_b);
            timeline.push(test_block1_b);
            timeline.push(rest_block);
            timeline.push(Ins_block2_b);
            timeline.push(test_block2_b);
            timeline.push(rest_block);
            timeline.push(Ins_block3_b);
            timeline.push(test_block3_b);
            timeline.push(rest_block2);
        } else if (sample==2){
            timeline.push(Ins_block1_b);
            timeline.push(test_block1_b);
            timeline.push(rest_block);
            timeline.push(Ins_block2_b);
            timeline.push(test_block3_b);
            timeline.push(rest_block);
            timeline.push(Ins_block3_b);
            timeline.push(test_block2_b);
            timeline.push(rest_block2);
        } else if (sample==3) {
            timeline.push(Ins_block1_b);
            timeline.push(test_block2_b);
            timeline.push(rest_block);
            timeline.push(Ins_block2_b);
            timeline.push(test_block1_b);
            timeline.push(rest_block);
            timeline.push(Ins_block3_b);
            timeline.push(test_block3_b);
            timeline.push(rest_block2);
        } else if (sample==4){
            timeline.push(Ins_block1_b);
            timeline.push(test_block2_b);
            timeline.push(rest_block);
            timeline.push(Ins_block2_b);
            timeline.push(test_block3_b);
            timeline.push(rest_block);
            timeline.push(Ins_block3_b);
            timeline.push(test_block1_b);
            timeline.push(rest_block2);
        } else if (sample==5){
            timeline.push(Ins_block1_b);
            timeline.push(test_block3_b);
            timeline.push(rest_block);
            timeline.push(Ins_block2_b);
            timeline.push(test_block1_b);
            timeline.push(rest_block);
            timeline.push(Ins_block3_b);
            timeline.push(test_block2_b);
            timeline.push(rest_block2);
        } else if (sample==6) {
            timeline.push(Ins_block1_b);
            timeline.push(test_block3_b);
            timeline.push(rest_block);
            timeline.push(Ins_block2_b);
            timeline.push(test_block2_b);
            timeline.push(rest_block);
            timeline.push(Ins_block3_b);
            timeline.push(test_block1_b);
            timeline.push(rest_block2);
        }
    } else {
        timeline.push(Ins_block);
        if(sample==1) {
            timeline.push(Ins_block1_b);
            timeline.push(test_block1_b);
            timeline.push(rest_block);
            timeline.push(Ins_block2_b);
            timeline.push(test_block2_b);
            timeline.push(rest_block);
            timeline.push(Ins_block3_b);
            timeline.push(test_block3_b);
            timeline.push(rest_block);
        } else if (sample==2){
            timeline.push(Ins_block1_b);
            timeline.push(test_block1_b);
            timeline.push(rest_block);
            timeline.push(Ins_block2_b);
            timeline.push(test_block3_b);
            timeline.push(rest_block);
            timeline.push(Ins_block3_b);
            timeline.push(test_block2_b);
            timeline.push(rest_block);
        } else if (sample==3) {
            timeline.push(Ins_block1_b);
            timeline.push(test_block2_b);
            timeline.push(rest_block);
            timeline.push(Ins_block2_b);
            timeline.push(test_block1_b);
            timeline.push(rest_block);
            timeline.push(Ins_block3_b);
            timeline.push(test_block3_b);
            timeline.push(rest_block);
        } else if (sample==4){
            timeline.push(Ins_block1_b);
            timeline.push(test_block2_b);
            timeline.push(rest_block);
            timeline.push(Ins_block2_b);
            timeline.push(test_block3_b);
            timeline.push(rest_block);
            timeline.push(Ins_block3_b);
            timeline.push(test_block1_b);
            timeline.push(rest_block);
        } else if (sample==5){
            timeline.push(Ins_block1_b);
            timeline.push(test_block3_b);
            timeline.push(rest_block);
            timeline.push(Ins_block2_b);
            timeline.push(test_block1_b);
            timeline.push(rest_block);
            timeline.push(Ins_block3_b);
            timeline.push(test_block2_b);
            timeline.push(rest_block);
        } else if (sample==6) {
            timeline.push(Ins_block1_b);
            timeline.push(test_block3_b);
            timeline.push(rest_block);
            timeline.push(Ins_block2_b);
            timeline.push(test_block2_b);
            timeline.push(rest_block);
            timeline.push(Ins_block3_b);
            timeline.push(test_block1_b);
            timeline.push(rest_block);
        }
        timeline.push(cession_block); // 세션 종료설명(정산)

        timeline.push(Ins_block_b);
        if(sample==1) {
            timeline.push(Ins_block1);
            timeline.push(test_block1);
            timeline.push(rest_block);
            timeline.push(Ins_block2);
            timeline.push(test_block2);
            timeline.push(rest_block);
            timeline.push(Ins_block3);
            timeline.push(test_block3);
            timeline.push(rest_block2);
        } else if (sample==2){
            timeline.push(Ins_block1);
            timeline.push(test_block1);
            timeline.push(rest_block);
            timeline.push(Ins_block2);
            timeline.push(test_block3);
            timeline.push(rest_block);
            timeline.push(Ins_block3);
            timeline.push(test_block2);
            timeline.push(rest_block2);
        } else if (sample==3) {
            timeline.push(Ins_block1);
            timeline.push(test_block2);
            timeline.push(rest_block);
            timeline.push(Ins_block2);
            timeline.push(test_block1);
            timeline.push(rest_block);
            timeline.push(Ins_block3);
            timeline.push(test_block3);
            timeline.push(rest_block2);
        } else if (sample==4){
            timeline.push(Ins_block1);
            timeline.push(test_block2);
            timeline.push(rest_block);
            timeline.push(Ins_block2);
            timeline.push(test_block3);
            timeline.push(rest_block);
            timeline.push(Ins_block3);
            timeline.push(test_block1);
            timeline.push(rest_block2);
        } else if (sample==5){
            timeline.push(Ins_block1);
            timeline.push(test_block3);
            timeline.push(rest_block);
            timeline.push(Ins_block2);
            timeline.push(test_block1);
            timeline.push(rest_block);
            timeline.push(Ins_block3);
            timeline.push(test_block2);
            timeline.push(rest_block2);
        } else if (sample==6) {
            timeline.push(Ins_block1);
            timeline.push(test_block3);
            timeline.push(rest_block);
            timeline.push(Ins_block2);
            timeline.push(test_block2);
            timeline.push(rest_block);
            timeline.push(Ins_block3);
            timeline.push(test_block1);
            timeline.push(rest_block2);
        }
    }

    var guess_blue = {
        type: 'survey-text',
        questions: [
            ['<p class = center-block-text>풍선과제가 끝나갑니다. 과제를 진행하는 동안 추측한 <strong>파랑색 풍선의 최대 크기</strong>를 쓰세요. <br> 여러분이 추정한 파랑 풍선의 최대크기를 <strong>숫자</strong>로 입력하세요.</p>']
        ],
        data: {
            trial_id: 'response',
            exp_stage: 'guess_blue'
        }
    }
    var guess_orange = {
        type: 'survey-text',
        questions: [
            ['<p class = center-block-text>과제를 진행하는 동안 추측한 <strong>주황색 풍선의 최대 크기</strong>를 쓰세요. <br> 여러분이 추정한 주황 풍선의 최대크기를 <strong>숫자</strong>로 입력하세요.</p>']
        ],
        data: {
            trial_id: 'response',
            exp_stage: 'guess_orange'
        }
    }
    var guess_yellow = {
        type: 'survey-text',
        questions: [
            ['<p class = center-block-text>과제를 진행하는 동안 추측한 <strong>노랑색 풍선의 최대 크기</strong>를 쓰세요. <br> 여러분이 추정한 노랑 풍선의 최대크기를 <strong>숫자</strong>로 입력하세요.</p>']
        ],
        data: {
            trial_id: 'response',
            exp_stage: 'guess_yellow',
            ttt1: ttt1,
            ttt2: ttt2    
        }
    }

    timeline.push(guess_blue);
    timeline.push(guess_orange);
    timeline.push(guess_yellow);    
	timeline.push(debrief);
