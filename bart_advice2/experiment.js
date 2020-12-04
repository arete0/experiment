
	var rest_block = {
      type: 'poldrack-text',
      data: {
        trial_id: "rest"
      },
      timing_response: 180000,
      text: '<div class = centerbox><p class = center-block-text>휴식시간입니다. </p><p class = center-block-text> 잠시 편하게 쉬세요! 다시 시작할 준비가 되었다면, <strong>enter</strong>를 누르세요.</p></div>',
      cont_key: [13],
      timing_post_trial: 1000
    };
    var rest_block2 = {
      type: 'poldrack-text',
      data: {
        trial_id: "rest"
      },
      timing_response: 180000,
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
		"<p>이 과제에는 21개의 풍선이 나타나는데, 풍선은 파랑색, 주황색, 노랑색으로 구성되어있습니다. </p> <p>풍선은 바로 터질 수도 있고 최대 크기까지 커질 수도 있습니다. </p>" +
		"<p>풍선의 색이 최대 크기에 대한 단서가 됩니다. 각 풍선마다 <strong> I </strong>를 누르면 풍선이 커지고 누른 만큼 수익이 발생합니다. <br><br> 하지만, 풍선이 터지면 얻은 수익금은 사라집니다. 그리고 풍선이 언제 터질지는 알 수 없습니다. </p>" +
		"<p>안전하게 수익금 지키려면 <strong> B </strong>를 눌러 입금할 수 있습니다. 입금된 수익금은 사라지지 않고 계속 누적됩니다.  </p><p> 최대한 많은 수익금을 계좌에 안전하게 보장하는 것이 이 과제의 목표입니다.</p>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><strong>스페이스 바</strong>를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }
    var Ins_block1 = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>1 단계</strong></div>" +
		"<div class=\"inst\">" +
		"<p>첫번째 단계입니다.</p><br><p>이 풍선과제에서는 조언자가 조언을 해줍니다. <br><br> 조언의 방식은 각 풍선마다 최대로 누를 수 있는 수를 <strong>네개의 구간</strong>으로 나누어 <br><br> 어느 구간에서 터질 가능성이 높은지에 대한 예측정보를 알려줍니다. </p> " +
		"예를 들어, 최대 100번까지 가능해서 1~100번사이에 터질 수 있는 어떤 색의 풍선이 있을때, 네개의 구간으로 나누어 조언하게 됩니다. <br><br>1구간은 1~25, 2구간은 26~50 3구간은 51~75, 4구간은 76~100이 됩니다." +
		"<p>단, 예측 정보의 정확성은 단계마다 달라집니다. 모두 정확히 예측할수도 있고, 그렇지 못할 수도 있습니다. </p>" +
		"<p>예측정보는 풍선누르기 전에 나타납니다. 잘 읽고 최대한 많은 수익금을 얻도록 노력하세요!</p>"  +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><strong>스페이스 바</strong>를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Ins_block2 = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>2 단계</strong></div>" +
		"<div class=\"inst\">" +
		"<p> 두번째 단계에서는 첫번째 단계와 정확도가 달라집니다. 조언을 잘보고 결정해야 합니다. <br><br> 이것만 제외하면 첫번째 단계와 동일한 절차로 진행됩니다. </p> " +
		"<p>예측정보는 풍선누르기 전에 나타납니다. 잘 읽고 최대한 많은 수익금을 얻도록 노력하세요!</p>"  +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><strong>스페이스 바</strong>를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Ins_block3 = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>3 단계</strong></div>" +
		"<div class=\"inst\">" +
		"<p> 세번째 단계에서도 정확도가 달라집니다. 조언을 잘보고 결정해야 합니다. <br><br> 이것만 제외하면 첫번째 단계와 동일한 절차로 진행됩니다. </p> " +
		"<p>예측정보는 풍선누르기 전에 나타납니다. 잘 읽고 최대한 많은 수익금을 얻도록 노력하세요!</p>"  +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><strong>스페이스 바</strong>를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Betting4_text = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>두 조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left\"></div>" +
		"<div class=\"adv1\">" +
		"<p>이번엔 <strong>4</strong> 구간에서 터질 것 같습니다. 이번이 기회입니다. 베팅하세요! </p>" +
		"</div>" +
		"<div class=\"advgap_center\"></div>" +
		"<div class=\"adv2\" >" +
		"<p>저의 분석에도 <strong>4</strong> 구간에서 터질 것 같습니다. 이번이 기회입니다. 베팅하세요! </p>" +
		"</div>" +
		"<div class=\"clear\"></div>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><strong>스페이스 바</strong>를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }
    var Betting3_text = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>두 조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left\"></div>" +
		"<div class=\"adv1\">" +
		"<p>이번엔 <strong>3</strong> 구간에서 터질 것 같습니다. 이번이 기회입니다. 베팅하세요! </p>" +
		"</div>" +
		"<div class=\"advgap_center\"></div>" +
		"<div class=\"adv2\" >" +
		"<p>저의 분석에도 <strong>3</strong> 구간에서 터질 것 같습니다. 이번이 기회입니다. 베팅하세요! </p>" +
		"</div>" +
		"<div class=\"clear\"></div>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><strong>스페이스 바</strong>를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
    }

    var Betting2_text = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>두 조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left\"></div>" +
		"<div class=\"adv1\">" +
		"<p>이번엔 <strong>2</strong> 구간에서 터질 것 같습니다. 주의하세요! </p>" +
		"</div>" +
		"<div class=\"advgap_center\"></div>" +
		"<div class=\"adv2\" >" +
		"<p>저의 분석에도 <strong>2</strong> 구간에서 터질 것 같습니다. 주의하세요! </p>" +
		"</div>" +
		"<div class=\"clear\"></div>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><strong>스페이스 바</strong>를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>",
		choices: ['F']
	}

    var Betting1_text = {
        type: 'text',
		text: "<div class=\"display_stage\">" +
		"<div class=\"taskname\"><strong>예측 정보</strong></div>" +
		"<div class=\"inst\">" +
		"<p>두 조언을 잘 보고 결정하세요.</p>" +
		"<div class=\"advgap_left\"></div>" +
		"<div class=\"adv1\">" +
		"<p>이번엔 <strong>1</strong> 구간에서 터질 것 같습니다. 주의하세요! </p>" +
		"</div>" +
		"<div class=\"advgap_center\"></div>" +
		"<div class=\"adv2\" >" +
		"<p>저의 분석에도 <strong>1</strong> 구간에서 터질 것 같습니다. 주의하세요! </p>" +
		"</div>" +
		"<div class=\"clear\"></div>" +
		"</div>" +
		"<div class=\"clickspace\">" +
		"<p><strong>스페이스 바</strong>를 눌러 시작하시오.</p>" +
		"</div>" +
		"</div>"
		,
		choices: ['F']
    }

	var Bet_advices4 = {
	    timeline: [Betting4_text],
		timing_post_trial: 0,
		loop_function: function(data){
			if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode('space') == data[0].key_press){
                jsPsych.data.addDataToLastTrial({
                    "advice": "4",
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
	yellow_count = 0;

	for (var j = 0; j < 7; j ++){
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
	}}}


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



    for (var k =0; k < 7; k++){
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

    for (var k =0; k < 7; k++){
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

    for (var k =0; k < 7; k++){
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

    for (var m = 0; m < 3; m++){

        for (var i = 0; i < 7; i++){ // total trials
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


        for (var i = 0; i < 7; i++){ // total trials
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

        for (var i = 0; i < 7; i++){ // total trials
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

    var myarray = [1,2,3,4,5,6];
    var rand = Math.floor((Math.random()*myarray.length));
    var sample = myarray[rand];
    //myarray.splice(rand,1);
	var timeline = [];
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

	timeline.push(debrief);