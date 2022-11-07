$(function() {

const MSG_TEXT = '20文字以内で入力して下さい。'
const MSG_EMPTY = '入力必須です。'
const MSG_EMAIL = 'e-mailの形式ではありません。'
const MSG_100MAX = '100文字以内で入力しsてください。'

$('.name').keyup(function() {

let fg = $(this).closest('.form-group');

if($ (this).val().length > 20 ) {
    fg.removeClass('success').addClass('error');
    fg.find('.help-block').text(MSG_TEXT);
}else{
    fg.removeClass('error').addClass('success');
    fg.find('help-block').text('');
}
});

$('.email').keyup(function() {

let fg = $(this).closest('.form-group');

if($ (this).val().length === 0 ) {
    fg.removeClass('success').addClass('error');
    fg.find('.help-block').text(MSG_EMPTY);
}else if($ (this).val().length > 50 || !$ (this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/) ){
    fg.removeClass('success').addClass('error');
    fg.find('.help-block').text(MSG_EMAIL);
}else{
    fg.removeClass('error').addClass('success');
    fg.find('.help-block').text('');
}
});

$('.massage').keyup(function() {

let fg = $(this).closest('.form-group');

if($ (this).val().length === 0 ){
    fg.removeClass('success').addClass('error');
    fg.find('.help-block').text(MSG_EMPTY);
}else if($ (this).val().length > 100 ) {
    fg.removeClass('success').addClass('error');
    fg.find('.help-block').text(MSG_100MAX);
}else{
    fg.removeClass('error').addClass('success');
    fg.find('.help-block').text('');
}
});


$('.phone').change(function() {

let phone_before = $(this).val();

let fg = $(this).closest('.form-group');

phone_before = phone_before.replace('-','');

let phone_after = phone_before.replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){ return String.fromCharCode(s.charCodeAt(0)-0xFEE0) });

if(phone_after.length === 11 ){
    $(this).val(phone_after.substr(0,3)+'-'+phone_after.substr(3,4)+'-'+phone_after.substr(7,4));
    fg.removeClass('error').addClass('success');
    fg.find('.help-block').text('');
}else{
    $(this).val(phone_after);
    fg.removeClass('success').addClass('error');
    fg.find('.help-block').text('');
}
});

});
