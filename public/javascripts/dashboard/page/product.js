const templateInputImage = (counter) => {
  return `<div class="form-group group-input-image" id="formGroupImage${counter}">
    <div class="input-group">
      <div class="custom-file">
        <input name="images[]" type="file" class="custom-file-input" id="customFile">
        <label class="custom-file-label" for="customFile">Choose file</label>
      </div>
      <div class="input-group-append">
        <button class="btn btn-danger delete-input-image" type="button" data-target="#formGroupImage${counter}">Delete</button>
      </div>
    </div>
  </div>`;
}

const getImageCounter = () => {
  let number = 1;
  const total = $('.group-input-image');
  if (total.length) {
    number += total.length;
  }
  return number;
}

$(document).ready(function() {
  $('.data-table').DataTable();

  $('#btnAddMoreImages').click(function() {
    const counter = getImageCounter();
    const template = templateInputImage(counter);
    $('#moreImageContainer').append(template);
  })

  $('body').on('click','.delete-input-image', function(e) {
    const targetForm = $(this).data('target');
    $(targetForm).remove();
  })

  $('input[name=thumbnail]').change(function () {
    $('.selected-thumbnail').text('');
    $('.selected-thumbnail').hide();
    const name = $(this).val().replace(/.*[\/\\]/, '');
    if (name) {
      $('.selected-thumbnail').text(`Selected: ${name}`);
      $('.selected-thumbnail').show();
    }
  });
})