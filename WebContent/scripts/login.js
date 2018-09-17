$(function() {
	$('#form-login').submit(function(e) {
		e.preventDefault();

		$(this).find('.txt-warning').emopty().hide();

		var id = $('#id').val();
		if (!validateId(id)) {
			$('#id').next().html('id는 이메일 형식입니다').show();
			return;
		}
		var password = $('#password').val();
		if (!validateId(password)) {
			$('#password').next().html('패스워드를 입력하세요').show();
			return;
		}
		submit(id, password);
	});
	$('#btn-home').click(function() {
		document.location.href = 'index.html';
	});
});

function validateId(id) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(id);
}

function validatePassword(password) {
	var re = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
	return re.test(password);
}

function submit(id, password) {
	var params = {
		id : id,
		password : password,
	};

	$.post('some-server-url', params, function(r) {
		console.log(r);
	});

}