

    var output_block = {
      type: 'poldrack-text',
      data: {
        trial_id: "rest"
      },
      timing_response: 180000,
      text: '<div class = centerbox><p class = center-block-text>결과 파일 생성 테스트입니다.</p><p class = center-block-text><strong>enter</strong>를 누르세요.</p></div>',
      cont_key: [13],
      timing_post_trial: 1000
    };

	var debrief = {
		type: 'text',
		text: "<div class=\"display_stage\">" +
		"<p>실험이 종료되었습니다.</p>" +
		"</div>"
		,
	};


	var timeline = [];
	timeline.push(output_block);
	timeline.push(debrief);
