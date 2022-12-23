import {routes} from '/javascripts/url.js';

const categoryModal = $('#categoryModal');
const inputName = $('input[name=name]');
const categoryForm = $('#categoryForm');

$(document).ready(function() {
  $('.data-table').DataTable();

  $('.edit-category').click(function() {
    $(this).addClass('edit-item-clicked')
  });

  categoryModal.on('show.bs.modal', function (e) {
    const isEdit = $('.edit-item-clicked');
    if (isEdit.length) {
      const row = isEdit.closest('tr');
      const data = row.data('category');
      const urlUpdate = routes.categories.update;

      categoryModal.find('.modal-title').html('Edit Category');
      categoryForm.attr('action', urlUpdate.replace(':id', data.id));

      inputName.val(data.name);
    } else {
      // reset form
      categoryForm.attr('action', routes.categories.index);
      inputName.val('');
      categoryModal.find('.modal-title').html('Add Category');
    }
  });

  categoryModal.on('hide.bs.modal', function (e) {
    $('.edit-item-clicked').removeClass('edit-item-clicked')
  });
});