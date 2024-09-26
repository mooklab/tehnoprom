var main_block = $('body')
var modal_blocks = $('[modal]')
var modal_background = jQuery('<div/>', { id: 'modal_background' })
var current_modal

var condition = false


$('.close_menu').on('click', function(){
    closeModal()
})

// Открытие всплывающего блока
$(document).on('click', '[target-modal]', function(){
    if( condition ) { closeModal() }
    createModal( $(this).attr('target-modal') )
})

// Закрытие всплывающего блока
$(document).mouseup( function( element ){
    if( condition && modal_blocks.has(element.target).length === 0 
    || $(element.target).is('.cross, .cross line')) {
        closeModal()
    }
})


// Создание фона и добавление модального окна
function createModal( modal_link ){
    current_modal = $('[modal=' + modal_link + ']')
    main_block.css({ 'overflow': 'hidden'})
    main_block.prepend( modal_background )
    modal_background.prepend( current_modal )
    condition = true

    openActiveMenu()
}

// Закрытие открытых модальных окон
function closeModal(){
    main_block.css({ 'overflow': 'auto'})
    main_block.append( current_modal )
    modal_background.remove()
    condition = false
}