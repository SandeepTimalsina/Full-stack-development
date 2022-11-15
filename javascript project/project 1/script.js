let tagsEL = document.getElementById('tags')
let textarea =document.getElementById('textarea')

textarea.focus()
textarea.addEventListener('keyup',(e) => {
    createTags(e.target.value)
})
function createTags(input) {
    let tags = input.split(',').filter( tag =>tag.trim()!== '').map(tag =>tag.trim)
    console.log(tags)
}